module.exports = {
  JWT_SECRET: 'asdasdasd4as5d4as8d7a8sd4as65d4a8sd7asd4as56d4',
  ACCESS_TOKEN_TIME: 60 * 60,
  SALT_ROUNDS: 5,
  
  SQUADHELP_BANK_NUMBER: '4564654564564564',
  SQUADHELP_BANK_NAME: 'SquadHelp',
  SQUADHELP_BANK_CVC: '453',

  SQUADHELP_BANK_EXPIRY: '11/22',
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
  OFFER_STASUSES:{
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
  },
  NEW_MESSAGE: 'newMessage',
  CHANGE_BLOCK_STATUS: 'CHANGE_BLOCK_STATUS',
};
