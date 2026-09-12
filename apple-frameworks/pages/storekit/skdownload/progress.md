> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/skdownload/progress](https://developer.apple.com/documentation/storekit/skdownload/progress)

# progress (Swift)

**Framework:** StoreKit  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ (deprecated in 16.0) · iPadOS 6.0+ (deprecated in 16.0) · Mac Catalyst 13.1+ (deprecated in 16.0) · macOS 10.8+ (deprecated in 13.0) · tvOS 9.0+ (deprecated in 16.0) · watchOS 6.2+ (deprecated in 9.0)

A value that indicates how much of the file has been downloaded.

> Hosted content is no longer supported.

## Declaration

```swift
var progress: Float { get }
```

## Mentioned In

- [Unlocking purchased content](../unlocking-purchased-content.md)

<a id="Discussion"></a>

## Discussion

The value of this property is a floating point number between `0.0` and `1.0`, inclusive, where `0.0` means no data has been download and `1.0` means all the data has been downloaded. Typically, your app uses the value of this property to update a user interface element, such as a progress bar, that displays how much of the file has been downloaded.

Do not use the value of this property to determine whether the download has completed. Instead, use the [downloadState](downloadstate.md) property.

## See Also

### Getting State Information

- [state](state.md): Deprecated. The current state of the download object.
- [timeRemaining](timeremaining.md): Deprecated. An estimated time, in seconds, to finish downloading the content.
- [SKDownloadTimeRemainingUnknown](../skdownloadtimeremainingunknown.md): Deprecated. Indicates that the system cannot determine how much time is needed to finish downloading the content.
- [SKDownloadState](../skdownloadstate.md): Deprecated. The states that a download operation can be in.
- [downloadState](downloadstate.md): Deprecated. The current state of the download object.

# progress (Objective-C)

**Framework:** StoreKit  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ (deprecated in 16.0) · iPadOS 6.0+ (deprecated in 16.0) · Mac Catalyst 13.1+ (deprecated in 16.0) · macOS 10.8+ (deprecated in 13.0) · tvOS 9.0+ (deprecated in 16.0) · watchOS 6.2+ (deprecated in 9.0)

A value that indicates how much of the file has been downloaded.

> Hosted content is no longer supported.

## Declaration

```objectivec
@property (nonatomic, readonly) float progress;
```

## Mentioned In

- [Unlocking purchased content](../unlocking-purchased-content.md)

<a id="Discussion"></a>

## Discussion

The value of this property is a floating point number between `0.0` and `1.0`, inclusive, where `0.0` means no data has been download and `1.0` means all the data has been downloaded. Typically, your app uses the value of this property to update a user interface element, such as a progress bar, that displays how much of the file has been downloaded.

Do not use the value of this property to determine whether the download has completed. Instead, use the [downloadState](downloadstate.md) property.

## See Also

### Getting State Information

- [state](state.md): Deprecated. The current state of the download object.
- [timeRemaining](timeremaining.md): Deprecated. An estimated time, in seconds, to finish downloading the content.
- [SKDownloadTimeRemainingUnknown](../skdownloadtimeremainingunknown.md): Deprecated. Indicates that the system cannot determine how much time is needed to finish downloading the content.
- [SKDownloadState](../skdownloadstate.md): Deprecated. The states that a download operation can be in.
- [downloadState](downloadstate.md): Deprecated. The current state of the download object.
