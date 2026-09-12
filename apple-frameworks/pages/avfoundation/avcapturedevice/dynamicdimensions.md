> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturedevice/dynamicdimensions](https://developer.apple.com/documentation/avfoundation/avcapturedevice/dynamicdimensions)

# dynamicDimensions (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

A key-value observable property describing the output dimensions of the video buffer based on the device’s dynamic aspect ratio.

## Declaration

```swift
var dynamicDimensions: CMVideoDimensions { get }
```

<a id="discussion"></a>

## Discussion

If the device’s activeFormat’s [supportedDynamicAspectRatios](format/supporteddynamicaspectratios.md) is an empty array, this property returns {0,0}.

## See Also

### Configuring dynamic aspect ratio

- [setDynamicAspectRatio(\_:completionHandler:)](setdynamicaspectratio%28__completionhandler_%29.md): Updates the dynamic aspect ratio of the device.
- [AVCaptureDevice.AspectRatio](aspectratio.md): String constants describing the different video aspect ratios you can configure for a particular device.
- [dynamicAspectRatio](dynamicaspectratio.md): A key-value observable property indicating the current aspect ratio for a device.

# dynamicDimensions (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+

A key-value observable property describing the output dimensions of the video buffer based on the device’s dynamic aspect ratio.

## Declaration

```objectivec
@property (readonly) CMVideoDimensions dynamicDimensions;
```

<a id="discussion"></a>

## Discussion

If the device’s activeFormat’s [supportedDynamicAspectRatios](format/supporteddynamicaspectratios.md) is an empty array, this property returns {0,0}.

## See Also

### Configuring dynamic aspect ratio

- [setDynamicAspectRatio:completionHandler:](setdynamicaspectratio%28__completionhandler_%29.md): Updates the dynamic aspect ratio of the device.
- [AVCaptureAspectRatio](aspectratio.md): String constants describing the different video aspect ratios you can configure for a particular device.
- [dynamicAspectRatio](dynamicaspectratio.md): A key-value observable property indicating the current aspect ratio for a device.
