> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsnotification/name-swift.struct/ckaccountchanged](https://developer.apple.com/documentation/foundation/nsnotification/name-swift.struct/ckaccountchanged)

# CKAccountChanged

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 3.0+

A notification that a container posts when the status of an iCloud account changes.

## Declaration

```swift
static let CKAccountChanged: NSNotification.Name
```

<a id="Discussion"></a>

## Discussion

Create an instance of [CKContainer](../../../cloudkit/ckcontainer.md) to receive this notification. The container posts the notification using an arbitrary queue. Use the [accountStatus(completionHandler:)](../../../cloudkit/ckcontainer/accountstatus%28completionhandler_%29.md) method to obtain the account’s status.
