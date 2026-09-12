> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/file_metadata/mdquery/kmdquerydidupdatenotification](https://developer.apple.com/documentation/coreservices/file_metadata/mdquery/kmdquerydidupdatenotification)

# kMDQueryDidUpdateNotification

**Interface languages:** Swift, Objective-C

**Framework:** Core Services  
**Kind:** API Collection

Indicates that a query’s results list has change during the live-update phase of a query.

<a id="overview"></a>

## Overview

The info dictionary of the notification can contain `kMDQueryUpdateAddedItems`, `kMDQueryUpdateChangedItems`, and `kMDQueryUpdateRemovedItems` keys. 

This notification is only sent to the application’s notification center.

## Topics

### Constants

- [kMDQueryDidUpdateNotification](../../kmdquerydidupdatenotification.md): Notification posted to indicate that a change has occurred to the query’s results list during the live-update phase of a query’s execution.

## See Also

### Notifications

- [kMDQueryDidFinishNotification](kmdquerydidfinishnotification.md): Indicates that a query has finished with the initial result-gathering phase.
- [kMDQueryProgressNotification](kmdqueryprogressnotification.md): Indicates that a query’s results list has change during the initial result-gathering phase of a query.
