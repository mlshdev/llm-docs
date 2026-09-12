> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/skdownload/timeremaining](https://developer.apple.com/documentation/storekit/skdownload/timeremaining)

# timeRemaining (Swift)

**Framework:** StoreKit  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ (deprecated in 16.0) · iPadOS 6.0+ (deprecated in 16.0) · Mac Catalyst 13.1+ (deprecated in 16.0) · macOS 10.8+ (deprecated in 13.0) · tvOS 9.0+ (deprecated in 16.0) · watchOS 6.2+ (deprecated in 9.0)

An estimated time, in seconds, to finish downloading the content.

> Hosted content is no longer supported.

## Declaration

```swift
var timeRemaining: TimeInterval { get }
```

## Mentioned In

- [Unlocking purchased content](../unlocking-purchased-content.md)

<a id="Discussion"></a>

## Discussion

The system attempts to estimate how long it will take to finish downloading the file. If it cannot create a good estimate, the value of this property is set to [SKDownloadTimeRemainingUnknown](../skdownloadtimeremainingunknown.md).

## See Also

### Getting State Information

- [state](state.md): Deprecated. The current state of the download object.
- [progress](progress.md): Deprecated. A value that indicates how much of the file has been downloaded.
- [SKDownloadTimeRemainingUnknown](../skdownloadtimeremainingunknown.md): Deprecated. Indicates that the system cannot determine how much time is needed to finish downloading the content.
- [SKDownloadState](../skdownloadstate.md): Deprecated. The states that a download operation can be in.
- [downloadState](downloadstate.md): Deprecated. The current state of the download object.

# timeRemaining (Objective-C)

**Framework:** StoreKit  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ (deprecated in 16.0) · iPadOS 6.0+ (deprecated in 16.0) · Mac Catalyst 13.1+ (deprecated in 16.0) · macOS 10.8+ (deprecated in 13.0) · tvOS 9.0+ (deprecated in 16.0) · watchOS 6.2+ (deprecated in 9.0)

An estimated time, in seconds, to finish downloading the content.

> Hosted content is no longer supported.

## Declaration

```objectivec
@property (nonatomic, readonly) NSTimeInterval timeRemaining;
```

## Mentioned In

- [Unlocking purchased content](../unlocking-purchased-content.md)

<a id="Discussion"></a>

## Discussion

The system attempts to estimate how long it will take to finish downloading the file. If it cannot create a good estimate, the value of this property is set to [SKDownloadTimeRemainingUnknown](../skdownloadtimeremainingunknown.md).

## See Also

### Getting State Information

- [state](state.md): Deprecated. The current state of the download object.
- [progress](progress.md): Deprecated. A value that indicates how much of the file has been downloaded.
- [SKDownloadTimeRemainingUnknown](../skdownloadtimeremainingunknown.md): Deprecated. Indicates that the system cannot determine how much time is needed to finish downloading the content.
- [SKDownloadState](../skdownloadstate.md): Deprecated. The states that a download operation can be in.
- [downloadState](downloadstate.md): Deprecated. The current state of the download object.
