> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avexternalsyncdevice/issignalcompensationdelaysupported](https://developer.apple.com/documentation/avfoundation/avexternalsyncdevice/issignalcompensationdelaysupported)

# isSignalCompensationDelaySupported (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+

Whether adjusting the signal compensation delay property is currently supported.

## Declaration

```swift
var isSignalCompensationDelaySupported: Bool { get }
```

<a id="discussion"></a>

## Discussion

This property returns `true` if the [signalCompensationDelay](signalcompensationdelay.md) can be adjusted.

[signalCompensationDelay](signalcompensationdelay.md) can be adjusted while the [AVCaptureSession](../avcapturesession.md) is not running.

Once the session is running, this property’s value depends on [isAdjustingSignalCompensationDelayWhileRunningSupported](../avcapturedevice/isadjustingsignalcompensationdelaywhilerunningsupported.md) of the [AVCaptureDevice](../avcapturedevice.md) backing the [AVCaptureDeviceInput](../avcapturedeviceinput.md) that is following this external sync device. Inspect that property in advance to determine whether [signalCompensationDelay](signalcompensationdelay.md) will remain adjustable while running on a given device.

# signalCompensationDelaySupported (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+

Whether adjusting the signal compensation delay property is currently supported.

## Declaration

```objectivec
@property (nonatomic, readonly, getter=isSignalCompensationDelaySupported) BOOL signalCompensationDelaySupported;
```

<a id="discussion"></a>

## Discussion

This property returns `true` if the [signalCompensationDelay](signalcompensationdelay.md) can be adjusted.

[signalCompensationDelay](signalcompensationdelay.md) can be adjusted while the [AVCaptureSession](../avcapturesession.md) is not running.

Once the session is running, this property’s value depends on [adjustingSignalCompensationDelayWhileRunningSupported](../avcapturedevice/isadjustingsignalcompensationdelaywhilerunningsupported.md) of the [AVCaptureDevice](../avcapturedevice.md) backing the [AVCaptureDeviceInput](../avcapturedeviceinput.md) that is following this external sync device. Inspect that property in advance to determine whether [signalCompensationDelay](signalcompensationdelay.md) will remain adjustable while running on a given device.
