> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/file_metadata/mdquery/kmdquerydidfinishnotification](https://developer.apple.com/documentation/coreservices/file_metadata/mdquery/kmdquerydidfinishnotification)

# kMDQueryDidFinishNotification

**Interface languages:** Swift, Objective-C

**Framework:** Core Services  
**Kind:** API Collection

Indicates that a query has finished with the initial result-gathering phase.

<a id="overview"></a>

## Overview

The query results list is not updated as a result of this notification.

This notification is only sent to the application’s notification center.

## Topics

### Constants

- [kMDQueryDidFinishNotification](../../kmdquerydidfinishnotification.md): Posted to indicate that the query has finished the initial result-gathering phase.

## See Also

### Notifications

- [kMDQueryDidUpdateNotification](kmdquerydidupdatenotification.md): Indicates that a query’s results list has change during the live-update phase of a query.
- [kMDQueryProgressNotification](kmdqueryprogressnotification.md): Indicates that a query’s results list has change during the initial result-gathering phase of a query.
