> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/screencapturekit/scstream/synchronizationclock

# synchronizationClock (Swift)

**Framework:** ScreenCaptureKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 18.2+ · macOS 13.0+ · tvOS 27.0+ · visionOS 27.0+

A clock to use for output synchronization.

## Declaration

```swift
var synchronizationClock: CMClock? { get }
```

<a id="discussion"></a>

## Discussion

The synchronization clock provides the timebase for sample buffers that the stream outputs. Use it to synchronize with the clocks of other media sources, such as the [synchronizationClock](../../avfoundation/avcapturesession/synchronizationclock.md) of [AVCaptureSession](../../avfoundation/avcapturesession.md).

# synchronizationClock (Objective-C)

**Framework:** ScreenCaptureKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 18.2+ · macOS 13.0+ · tvOS 27.0+ · visionOS 27.0+

A clock to use for output synchronization.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) CMClockRef synchronizationClock;
```

<a id="discussion"></a>

## Discussion

The synchronization clock provides the timebase for sample buffers that the stream outputs. Use it to synchronize with the clocks of other media sources, such as the [synchronizationClock](../../avfoundation/avcapturesession/synchronizationclock.md) of [AVCaptureSession](../../avfoundation/avcapturesession.md).
