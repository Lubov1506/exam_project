const {
  env: 
  JWT_SECRET,
  ACCESS_TOKEN_TIME,

  SQUADHELP_BANK_NUMBER,
  SQUADHELP_BANK_NAME,
  SQUADHELP_BANK_CVC,
  SQUADHELP_BANK_EXPIRY
} = process

module.exports = {
  JWT_SECRET,
  ACCESS_TOKEN_TIME,

  SQUADHELP_BANK_NUMBER,
  SQUADHELP_BANK_NAME,
  SQUADHELP_BANK_CVC,
  SQUADHELP_BANK_EXPIRY,

  SALT_ROUNDS: 5,
  ROLES:{
    CUSTOMER: 'customer',
    CREATOR: 'creator'    
  },

  CREATOR_ENTRIES: 'creator_entries',
  CONTEST_STATUSES:{
    ACTIVE: 'active',
    FINISHED: 'finished',
    PENDING: 'pending'    
  },
  CONTESTS_DEFAULT_DIR: 'public/contestFiles/',
  CONTEST_TYPES:{
    NAME: 'name',
    LOGO: 'logo',
    TAGLINE: 'tagline'    
  },
  OFFER_STATUSES:{
    PENDING: 'pending',
    REJECTED: 'rejected',
    WON: 'won'    
  },
  FILES_PATH: 'public/',
  SOCKET_TYPES:{
    CONNECTION: 'connection',
    SUBSCRIBE: 'subscribe',
    UNSUBSCRIBE: 'unsubscribe'    
  },
  NOTIFICATION_TYPES:{
    ENTRY_CREATED: 'onEntryCreated',
    CHANGE_MARK: 'changeMark',
    CHANGE_OFFER_STATUS: 'changeOfferStatus'    
  }
,
  NEW_MESSAGE: 'newMessage',
  CHANGE_BLOCK_STATUS: 'CHANGE_BLOCK_STATUS',
};
