> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/ckquerysubscription/init(recordtype:predicate:options:)](https://developer.apple.com/documentation/cloudkit/ckquerysubscription/init(recordtype:predicate:options:))

# init(recordType:predicate:options:)

**Framework:** CloudKit  
**Kind:** Initializer  
**Availability:** iOS 10.0+ (deprecated in 10.0) · iPadOS 10.0+ (deprecated in 10.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.12+ (deprecated in 10.12) · tvOS 10.0+ (deprecated in 10.0) · visionOS · watchOS 6.0+ (deprecated in 6.0) · Swift 4.2+

## Declaration

```swift
convenience init(recordType: CKRecord.RecordType, predicate: NSPredicate, options querySubscriptionOptions: CKQuerySubscription.Options = [.firesOnRecordCreation, .firesOnRecordUpdate, .firesOnRecordDeletion])
```
