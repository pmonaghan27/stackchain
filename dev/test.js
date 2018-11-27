const Blockchain = require('./blockchain');

const bitcoin = new Blockchain();

const bc1 = {
  chain: [
    {
      index: 1,
      timestamp: 1541993499469,
      transactions: [],
      nonce: 100,
      hash: '0',
      previousBlockHash: '0',
    },
    {
      index: 2,
      timestamp: 1541993582204,
      transactions: [],
      nonce: 18140,
      hash: '0000b9135b054d1131392c9eb9d03b0111d4b516824a03c35639e12858912100',
      previousBlockHash: '0',
    },
    {
      index: 3,
      timestamp: 1541993611960,
      transactions: [
        {
          amount: 12.5,
          sender: '00',
          recipient: '775288c0e62b11e89300453c705ffeaf',
          transactionId: 'a8a7c6b0e62b11e89300453c705ffeaf',
        },
        {
          amount: 500,
          sender: 'Patrick',
          recipient: 'Quentin',
          transactionId: 'b0e833f0e62b11e89300453c705ffeaf',
        },
        {
          amount: 100,
          sender: 'Patrick',
          recipient: 'Quentin',
          transactionId: 'b35aba90e62b11e89300453c705ffeaf',
        },
        {
          amount: 50,
          sender: 'Patrick',
          recipient: 'Quentin',
          transactionId: 'b544fe60e62b11e89300453c705ffeaf',
        },
      ],
      nonce: 39880,
      hash: '0000c708f410f39598149289258e70f2132291b60b1a7725f63d7f542a78eb22',
      previousBlockHash:
        '0000b9135b054d1131392c9eb9d03b0111d4b516824a03c35639e12858912100',
    },
    {
      index: 4,
      timestamp: 1541993680578,
      transactions: [
        {
          amount: 12.5,
          sender: '00',
          recipient: '775288c0e62b11e89300453c705ffeaf',
          transactionId: 'ba5fe8b0e62b11e89300453c705ffeaf',
        },
      ],
      nonce: 11037,
      hash: '000068ad49847821687385295026378b64973aad30ac3817daf19e709b891b67',
      previousBlockHash:
        '0000c708f410f39598149289258e70f2132291b60b1a7725f63d7f542a78eb22',
    },
  ],
  pendingTransactions: [
    {
      amount: 12.5,
      sender: '00',
      recipient: '775288c0e62b11e89300453c705ffeaf',
      transactionId: 'e3460840e62b11e89300453c705ffeaf',
    },
  ],
  currentNodeUrl: 'http://localhost:3001',
  networkNodes: [],
};

console.log(bitcoin.chainIsValid(bc1.chain));
