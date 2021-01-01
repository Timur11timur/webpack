import notifyDefault from './NotificationDefault';
var notifyModule = require('./NotificationModule');
import {notify, log} from './NotificationFunction';

notifyDefault('Here is my message!');
notifyModule('Here is my message from NotifyModule!');
notify('Here is my message from NotifyFunction!');
log('Here is my message from NotifyFunction!');