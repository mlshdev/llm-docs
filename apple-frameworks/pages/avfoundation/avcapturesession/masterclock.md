> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturesession/masterclock](https://developer.apple.com/documentation/avfoundation/avcapturesession/masterclock)

# masterClock (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ (deprecated in 15.4) · iPadOS 7.0+ (deprecated in 15.4) · Mac Catalyst 14.0+ (deprecated in 15.4) · macOS 10.9+ (deprecated in 12.3)

A clock object used for output synchronization.

> Use [synchronizationClock](synchronizationclock.md) instead.

## Declaration

```swift
var masterClock: CMClock? { get }
```

<a id="Discussion"></a>

## Discussion

The returned [CMClock](../../coremedia/cmclock.md) object is read-only and provides a timebase for all sample buffers in capture output. Use this clock in conjunction with the clock from an [AVCaptureInput.Port](../avcaptureinput/port.md) object to synchronize capture output with external data sources such as motion samples.

For example, to synchronize output timestamps to the original timestamps provided by an input device, you can do the following in your [fileOutput(\_:didOutputSampleBuffer:from:)](../avcapturefileoutputdelegate/fileoutput%28__didoutputsamplebuffer_from_%29.md) method:

```swift
guard let masterClock = captureSession.masterClock,
    let originalClock = connection.inputPorts.first?.clock else { return }

let synchedPTS = sampleBuffer.presentationTimeStamp
let originalPTS = masterClock.convertTime(synchedPTS, to: originalClock)
```

This property is key-value observable.

## See Also

### Synchronizing output

- [synchronizationClock](synchronizationclock.md): A clock to use for output synchronization.

# masterClock (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ (deprecated in 15.4) · iPadOS 7.0+ (deprecated in 15.4) · Mac Catalyst 14.0+ (deprecated in 15.4) · macOS 10.9+ (deprecated in 12.3)

A clock object used for output synchronization.

> Use [synchronizationClock](synchronizationclock.md) instead.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) CMClockRef masterClock;
```

<a id="Discussion"></a>

## Discussion

The returned [CMClockRef](../../coremedia/cmclock.md) object is read-only and provides a timebase for all sample buffers in capture output. Use this clock in conjunction with the clock from an [AVCaptureInputPort](../avcaptureinput/port.md) object to synchronize capture output with external data sources such as motion samples.

For example, to synchronize output timestamps to the original timestamps provided by an input device, you can do the following in your [captureOutput:didOutputSampleBuffer:fromConnection:](../avcapturefileoutputdelegate/fileoutput%28__didoutputsamplebuffer_from_%29.md) method:

```swift
guard let masterClock = captureSession.masterClock,
    let originalClock = connection.inputPorts.first?.clock else { return }

let synchedPTS = sampleBuffer.presentationTimeStamp
let originalPTS = masterClock.convertTime(synchedPTS, to: originalClock)
```

This property is key-value observable.

## See Also

### Synchronizing output

- [synchronizationClock](synchronizationclock.md): A clock to use for output synchronization.
