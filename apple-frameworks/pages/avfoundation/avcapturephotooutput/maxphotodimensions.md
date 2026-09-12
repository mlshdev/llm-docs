> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturephotooutput/maxphotodimensions](https://developer.apple.com/documentation/avfoundation/avcapturephotooutput/maxphotodimensions)

# maxPhotoDimensions (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 17.0+

The maximum resolution of the requested photo.

## Declaration

```swift
var maxPhotoDimensions: CMVideoDimensions { get set }
```

<a id="Discussion"></a>

## Discussion

Set a value for this property to request images up to the specified dimensions. Images that a photo output returns may be smaller than the dimensions, but are never be larger. Once set, you can request images with any valid maximum photo dimensions by setting [maxPhotoDimensions](../avcapturephotosettings/maxphotodimensions.md) on [AVCapturePhotoSettings](../avcapturephotosettings.md) on a per photo basis.

The dimensions you set must match one returned by [supportedMaxPhotoDimensions](../avcapturedevice/format/supportedmaxphotodimensions.md) for the current active format.

> **Tip**

>  Changing this property may trigger a lengthy reconfiguration of the capture pipeline, so set this value before calling [startRunning()](../avcapturesession/startrunning%28%29.md) on the capture session.

# maxPhotoDimensions (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 17.0+

The maximum resolution of the requested photo.

## Declaration

```objectivec
@property (nonatomic) CMVideoDimensions maxPhotoDimensions;
```

<a id="Discussion"></a>

## Discussion

Set a value for this property to request images up to the specified dimensions. Images that a photo output returns may be smaller than the dimensions, but are never be larger. Once set, you can request images with any valid maximum photo dimensions by setting [maxPhotoDimensions](../avcapturephotosettings/maxphotodimensions.md) on [AVCapturePhotoSettings](../avcapturephotosettings.md) on a per photo basis.

The dimensions you set must match one returned by [supportedMaxPhotoDimensions](../avcapturedevice/format/supportedmaxphotodimensions.md) for the current active format.

> **Tip**

>  Changing this property may trigger a lengthy reconfiguration of the capture pipeline, so set this value before calling [startRunning](../avcapturesession/startrunning%28%29.md) on the capture session.
