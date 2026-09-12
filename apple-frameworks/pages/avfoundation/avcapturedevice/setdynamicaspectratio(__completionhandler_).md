> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturedevice/setdynamicaspectratio(_:completionhandler:)](https://developer.apple.com/documentation/avfoundation/avcapturedevice/setdynamicaspectratio(_:completionhandler:))

# setDynamicAspectRatio(\_:completionHandler:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

Updates the dynamic aspect ratio of the device.

## Declaration

```swift
func setDynamicAspectRatio(_ dynamicAspectRatio: AVCaptureDevice.AspectRatio, completionHandler handler: (@Sendable (CMTime, (any Error)?) -> Void)? = nil)
```

```swift
func setDynamicAspectRatio(_ dynamicAspectRatio: AVCaptureDevice.AspectRatio) async throws -> CMTime
```

## Parameters

- `dynamicAspectRatio`: The new [AVCaptureDevice.AspectRatio](aspectratio.md) the device should output.
- `handler`: A block called by the device when `dynamicAspectRatio` is set to the value specified. If you call [setDynamicAspectRatio(\_:completionHandler:)](setdynamicaspectratio%28__completionhandler_%29.md) multiple times, the completion handlers are called in FIFO order. The block receives a timestamp which matches that of the first buffer to which all settings have been applied. Note that the timestamp is synchronized to the device clock, and thus must be converted to the [synchronizationClock](../avcapturesession/synchronizationclock.md) prior to comparison with the timestamps of buffers delivered via an [AVCaptureVideoDataOutput](../avcapturevideodataoutput.md). You may pass `nil` for the `handler` parameter if you do not need to know when the operation completes.

<a id="discussion"></a>

## Discussion

This is the only way of setting [dynamicAspectRatio](dynamicaspectratio.md). This method throws an `NSInvalidArgumentException` if `dynamicAspectRatio` is not a supported aspect ratio found in the device’s activeFormat’s [supportedDynamicAspectRatios](format/supporteddynamicaspectratios.md). This method throws an `NSGenericException` if you call it without first obtaining exclusive access to the device using [lockForConfiguration()](lockforconfiguration%28%29.md).

## See Also

### Configuring dynamic aspect ratio

- [AVCaptureDevice.AspectRatio](aspectratio.md): String constants describing the different video aspect ratios you can configure for a particular device.
- [dynamicAspectRatio](dynamicaspectratio.md): A key-value observable property indicating the current aspect ratio for a device.
- [dynamicDimensions](dynamicdimensions.md): A key-value observable property describing the output dimensions of the video buffer based on the device’s dynamic aspect ratio.

# setDynamicAspectRatio:completionHandler: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+

Updates the dynamic aspect ratio of the device.

## Declaration

```objectivec
- (void) setDynamicAspectRatio:(AVCaptureAspectRatio) dynamicAspectRatio completionHandler:(void (^)(CMTime syncTime, NSError *error)) handler;
```

## Parameters

- `dynamicAspectRatio`: The new [AVCaptureAspectRatio](aspectratio.md) the device should output.
- `handler`: A block called by the device when `dynamicAspectRatio` is set to the value specified. If you call [setDynamicAspectRatio:completionHandler:](setdynamicaspectratio%28__completionhandler_%29.md) multiple times, the completion handlers are called in FIFO order. The block receives a timestamp which matches that of the first buffer to which all settings have been applied. Note that the timestamp is synchronized to the device clock, and thus must be converted to the [synchronizationClock](../avcapturesession/synchronizationclock.md) prior to comparison with the timestamps of buffers delivered via an [AVCaptureVideoDataOutput](../avcapturevideodataoutput.md). You may pass `nil` for the `handler` parameter if you do not need to know when the operation completes.

<a id="discussion"></a>

## Discussion

This is the only way of setting [dynamicAspectRatio](dynamicaspectratio.md). This method throws an `NSInvalidArgumentException` if `dynamicAspectRatio` is not a supported aspect ratio found in the device’s activeFormat’s [supportedDynamicAspectRatios](format/supporteddynamicaspectratios.md). This method throws an `NSGenericException` if you call it without first obtaining exclusive access to the device using [lockForConfiguration:](lockforconfiguration%28%29.md).

## See Also

### Configuring dynamic aspect ratio

- [AVCaptureAspectRatio](aspectratio.md): String constants describing the different video aspect ratios you can configure for a particular device.
- [dynamicAspectRatio](dynamicaspectratio.md): A key-value observable property indicating the current aspect ratio for a device.
- [dynamicDimensions](dynamicdimensions.md): A key-value observable property describing the output dimensions of the video buffer based on the device’s dynamic aspect ratio.
