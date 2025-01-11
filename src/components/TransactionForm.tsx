import React, { useState } from 'react';
import { parseEther } from 'viem';
import { useSendTransaction, useWaitForTransactionReceipt } from 'wagmi';
import { Send } from 'lucide-react';

export function TransactionForm() {
  const [to, setTo] = useState('');
  const [amount, setAmount] = useState('');

  const { data: hash, sendTransaction } = useSendTransaction();
  const { isLoading: isConfirming, isSuccess: isConfirmed } =
    useWaitForTransactionReceipt({
      hash,
    });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!to || !amount) return;

    try {
      sendTransaction({
        to,
        value: parseEther(amount),
      });
    } catch (error) {
      console.error('Transaction failed:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 w-full max-w-md">
      <div>
        <label htmlFor="to" className="block text-sm font-medium text-gray-700">
          Recipient Address
        </label>
        <input
          id="to"
          type="text"
          value={to}
          onChange={(e) => setTo(e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 bg-white p-2"
          placeholder="0x..."
        />
      </div>
      <div>
        <label htmlFor="amount" className="block text-sm font-medium text-gray-700">
          Amount (MATIC)
        </label>
        <input
          id="amount"
          type="number"
          step="0.000000000000000001"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 bg-white p-2"
          placeholder="0.0"
        />
      </div>
      <button
        type="submit"
        disabled={isConfirming}
        className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors disabled:bg-purple-400"
      >
        <Send size={16} />
        {isConfirming ? 'Confirming...' : 'Send Transaction'}
      </button>
      {isConfirmed && (
        <p className="text-green-600 text-sm">Transaction confirmed!</p>
      )}
    </form>
  );
}