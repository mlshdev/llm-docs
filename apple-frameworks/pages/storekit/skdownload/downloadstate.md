> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/skdownload/downloadstate](https://developer.apple.com/documentation/storekit/skdownload/downloadstate)

# downloadState (Swift)

**Framework:** StoreKit  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ (deprecated in 12.0) · iPadOS 6.0+ (deprecated in 12.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · tvOS 9.0+ (deprecated in 12.0)

The current state of the download object.

## Declaration

```swift
var downloadState: SKDownloadState { get }
```

## Mentioned In

- [Unlocking purchased content](../unlocking-purchased-content.md)

<a id="Discussion"></a>

## Discussion

After you queue a download object, the payment queue object calls your transaction observer when the state of the download object changes. Your transaction observer should read the [downloadState](downloadstate.md) property and use it to determine how to proceed. For more information on the different states, see [SKDownloadState](../skdownloadstate.md).

## See Also

### Getting State Information

- [state](state.md): Deprecated. The current state of the download object.
- [progress](progress.md): Deprecated. A value that indicates how much of the file has been downloaded.
- [timeRemaining](timeremaining.md): Deprecated. An estimated time, in seconds, to finish downloading the content.
- [SKDownloadTimeRemainingUnknown](../skdownloadtimeremainingunknown.md): Deprecated. Indicates that the system cannot determine how much time is needed to finish downloading the content.
- [SKDownloadState](../skdownloadstate.md): Deprecated. The states that a download operation can be in.

# downloadState (Objective-C)

**Framework:** StoreKit  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ (deprecated in 12.0) · iPadOS 6.0+ (deprecated in 12.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · tvOS 9.0+ (deprecated in 12.0)

The current state of the download object.

## Declaration

```objectivec
@property (nonatomic, readonly) SKDownloadState downloadState;
```

## Mentioned In

- [Unlocking purchased content](../unlocking-purchased-content.md)

<a id="Discussion"></a>

## Discussion

After you queue a download object, the payment queue object calls your transaction observer when the state of the download object changes. Your transaction observer should read the [downloadState](downloadstate.md) property and use it to determine how to proceed. For more information on the different states, see [SKDownloadState](../skdownloadstate.md).

## See Also

### Getting State Information

- [state](state.md): Deprecated. The current state of the download object.
- [progress](progress.md): Deprecated. A value that indicates how much of the file has been downloaded.
- [timeRemaining](timeremaining.md): Deprecated. An estimated time, in seconds, to finish downloading the content.
- [SKDownloadTimeRemainingUnknown](../skdownloadtimeremainingunknown.md): Deprecated. Indicates that the system cannot determine how much time is needed to finish downloading the content.
- [SKDownloadState](../skdownloadstate.md): Deprecated. The states that a download operation can be in.
