> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/skdownload/state](https://developer.apple.com/documentation/storekit/skdownload/state)

# state (Swift)

**Framework:** StoreKit  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ (deprecated in 16.0) · iPadOS 12.0+ (deprecated in 16.0) · Mac Catalyst 13.1+ (deprecated in 16.0) · macOS 10.8+ (deprecated in 13.0) · tvOS 12.0+ (deprecated in 16.0) · watchOS 6.2+ (deprecated in 9.0)

The current state of the download object.

> Hosted content is no longer supported.

## Declaration

```swift
var state: SKDownloadState { get }
```

<a id="Discussion"></a>

## Discussion

After you queue a download object, the payment queue object calls your transaction observer when the state of the download object changes. Your transaction observer should read the [state](state.md) property and use it to determine how to proceed. For more information on the different states, see [SKDownloadState](../skdownloadstate.md).

## See Also

### Getting State Information

- [progress](progress.md): Deprecated. A value that indicates how much of the file has been downloaded.
- [timeRemaining](timeremaining.md): Deprecated. An estimated time, in seconds, to finish downloading the content.
- [SKDownloadTimeRemainingUnknown](../skdownloadtimeremainingunknown.md): Deprecated. Indicates that the system cannot determine how much time is needed to finish downloading the content.
- [SKDownloadState](../skdownloadstate.md): Deprecated. The states that a download operation can be in.
- [downloadState](downloadstate.md): Deprecated. The current state of the download object.

# state (Objective-C)

**Framework:** StoreKit  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ (deprecated in 16.0) · iPadOS 12.0+ (deprecated in 16.0) · Mac Catalyst 13.1+ (deprecated in 16.0) · macOS 10.8+ (deprecated in 13.0) · tvOS 12.0+ (deprecated in 16.0) · watchOS 6.2+ (deprecated in 9.0)

The current state of the download object.

> Hosted content is no longer supported.

## Declaration

```objectivec
@property (nonatomic, readonly) SKDownloadState state;
```

<a id="Discussion"></a>

## Discussion

After you queue a download object, the payment queue object calls your transaction observer when the state of the download object changes. Your transaction observer should read the [state](state.md) property and use it to determine how to proceed. For more information on the different states, see [SKDownloadState](../skdownloadstate.md).

## See Also

### Getting State Information

- [progress](progress.md): Deprecated. A value that indicates how much of the file has been downloaded.
- [timeRemaining](timeremaining.md): Deprecated. An estimated time, in seconds, to finish downloading the content.
- [SKDownloadTimeRemainingUnknown](../skdownloadtimeremainingunknown.md): Deprecated. Indicates that the system cannot determine how much time is needed to finish downloading the content.
- [SKDownloadState](../skdownloadstate.md): Deprecated. The states that a download operation can be in.
- [downloadState](downloadstate.md): Deprecated. The current state of the download object.
