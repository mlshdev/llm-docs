> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturedevice/dynamicaspectratio](https://developer.apple.com/documentation/avfoundation/avcapturedevice/dynamicaspectratio)

# dynamicAspectRatio (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

A key-value observable property indicating the current aspect ratio for a device.

## Declaration

```swift
var dynamicAspectRatio: AVCaptureDevice.AspectRatio? { get }
```

<a id="discussion"></a>

## Discussion

This property is initialized to the first [AVCaptureDevice.AspectRatio](aspectratio.md) listed in the device’s activeFormat’s [supportedDynamicAspectRatios](format/supporteddynamicaspectratios.md) property. If the activeFormat’s [supportedDynamicAspectRatios](format/supporteddynamicaspectratios.md) is an empty array, this property returns nil.

## See Also

### Configuring dynamic aspect ratio

- [setDynamicAspectRatio(\_:completionHandler:)](setdynamicaspectratio%28__completionhandler_%29.md): Updates the dynamic aspect ratio of the device.
- [AVCaptureDevice.AspectRatio](aspectratio.md): String constants describing the different video aspect ratios you can configure for a particular device.
- [dynamicDimensions](dynamicdimensions.md): A key-value observable property describing the output dimensions of the video buffer based on the device’s dynamic aspect ratio.

# dynamicAspectRatio (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+

A key-value observable property indicating the current aspect ratio for a device.

## Declaration

```objectivec
@property (readonly, nullable) AVCaptureAspectRatio dynamicAspectRatio;
```

<a id="discussion"></a>

## Discussion

This property is initialized to the first [AVCaptureAspectRatio](aspectratio.md) listed in the device’s activeFormat’s [supportedDynamicAspectRatios](format/supporteddynamicaspectratios.md) property. If the activeFormat’s [supportedDynamicAspectRatios](format/supporteddynamicaspectratios.md) is an empty array, this property returns nil.

## See Also

### Configuring dynamic aspect ratio

- [setDynamicAspectRatio:completionHandler:](setdynamicaspectratio%28__completionhandler_%29.md): Updates the dynamic aspect ratio of the device.
- [AVCaptureAspectRatio](aspectratio.md): String constants describing the different video aspect ratios you can configure for a particular device.
- [dynamicDimensions](dynamicdimensions.md): A key-value observable property describing the output dimensions of the video buffer based on the device’s dynamic aspect ratio.
