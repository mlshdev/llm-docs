> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/notificationcenter/messageidentifier/lowdiskspace](https://developer.apple.com/documentation/foundation/notificationcenter/messageidentifier/lowdiskspace)

# lowDiskSpace

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 26.0+ (deprecated in 27.0) · iPadOS 26.0+ (deprecated in 27.0) · Mac Catalyst 26.0+ (deprecated in 27.0) · tvOS 26.0+ (deprecated in 27.0) · visionOS 26.0+ (deprecated in 27.0) · watchOS 26.0+ (deprecated in 27.0)

An identifier for a message about the available disk space getting low.

> Use Background Assets instead.

## Declaration

```swift
static var lowDiskSpace: NotificationCenter.BaseMessageIdentifier<NSBundleResourceRequest.LowDiskSpaceMessage> { get }
```

<a id="discussion"></a>

## Discussion

Use this identifier with [NotificationCenter](../../notificationcenter.md)’s `addObserver(of:for:using:)` or `messages(of:for:bufferSize:)` methods to observe messages of type [NSBundleResourceRequest.LowDiskSpaceMessage](../../nsbundleresourcerequest/lowdiskspacemessage.md).
