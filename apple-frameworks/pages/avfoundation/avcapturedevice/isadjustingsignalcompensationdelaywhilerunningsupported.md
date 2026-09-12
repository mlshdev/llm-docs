> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturedevice/isadjustingsignalcompensationdelaywhilerunningsupported](https://developer.apple.com/documentation/avfoundation/avcapturedevice/isadjustingsignalcompensationdelaywhilerunningsupported)

# isAdjustingSignalCompensationDelayWhileRunningSupported (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+

Whether adjusting the signal compensation delay property of an external sync device is supported while the session is running.

## Declaration

```swift
var isAdjustingSignalCompensationDelayWhileRunningSupported: Bool { get }
```

<a id="discussion"></a>

## Discussion

This property returns `true` if the `signalCompensationDelay` of an [AVExternalSyncDevice](../avexternalsyncdevice.md) being followed by this device’s [AVCaptureDeviceInput](../avcapturedeviceinput.md) can be adjusted while the [AVCaptureSession](../avcapturesession.md) is running.

# adjustingSignalCompensationDelayWhileRunningSupported (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+

Whether adjusting the signal compensation delay property of an external sync device is supported while the session is running.

## Declaration

```objectivec
@property (nonatomic, readonly, getter=isAdjustingSignalCompensationDelayWhileRunningSupported) BOOL adjustingSignalCompensationDelayWhileRunningSupported;
```

<a id="discussion"></a>

## Discussion

This property returns `true` if the `signalCompensationDelay` of an [AVExternalSyncDevice](../avexternalsyncdevice.md) being followed by this device’s [AVCaptureDeviceInput](../avcapturedeviceinput.md) can be adjusted while the [AVCaptureSession](../avcapturesession.md) is running.
