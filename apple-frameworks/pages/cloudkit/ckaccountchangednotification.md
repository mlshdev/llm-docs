> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/ckaccountchangednotification](https://developer.apple.com/documentation/cloudkit/ckaccountchangednotification)

# CKAccountChangedNotification

**Interface language:** Objective-C

**Framework:** CloudKit  
**Kind:** Global Variable  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 3.0+

A notification that a container posts when the status of an iCloud account changes.

## Declaration

```objectivec
extern NSString * const CKAccountChangedNotification;
```

<a id="discussion"></a>

## Discussion

Create an instance of [CKContainer](ckcontainer.md) to receive this notification. The container posts the notification using an arbitrary queue. Use the [accountStatusWithCompletionHandler:](ckcontainer/accountstatus%28completionhandler_%29.md) method to obtain the account’s status.

## See Also

### Accessing Container Metadata

- [fetchShareMetadataWithURL:completionHandler:](ckcontainer/fetchsharemetadata%28with_completionhandler_%29.md): Fetches the share metadata for the specified share URL.
- [acceptShareMetadata:completionHandler:](ckcontainer/accept%28__completionhandler_%29-949ea.md): Accepts the specified share metadata.
