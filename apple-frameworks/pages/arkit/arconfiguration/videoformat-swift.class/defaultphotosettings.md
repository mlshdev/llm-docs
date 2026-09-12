> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/arconfiguration/videoformat-swift.class/defaultphotosettings](https://developer.apple.com/documentation/arkit/arconfiguration/videoformat-swift.class/defaultphotosettings)

# defaultPhotoSettings (Swift)

**Framework:** ARKit  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+

The default AVCapturePhotoSettings object that ARKit uses when capturing a high resolution frame using this video format.

## Declaration

```swift
var defaultPhotoSettings: AVCapturePhotoSettings { get }
```

<a id="return-value"></a>

## Return Value

An `AVCapturePhotoSettings` object.

<a id="discussion"></a>

## Discussion

Calling this getter will return a new instance that may be mutated to customize settings. Pass that instance to `captureHighResolutionFrameUsingPhotoSettings:completion:` to capture a high resolution frame with custom settings.

> **See Also**

> [captureHighResolutionFrame(using:completion:)](../../arsession/capturehighresolutionframe%28using_completion_%29.md)

# defaultPhotoSettings (Objective-C)

**Framework:** ARKit  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+

The default AVCapturePhotoSettings object that ARKit uses when capturing a high resolution frame using this video format.

## Declaration

```objectivec
@property (nonatomic, readonly) AVCapturePhotoSettings * defaultPhotoSettings;
```

<a id="return-value"></a>

## Return Value

An `AVCapturePhotoSettings` object.

<a id="discussion"></a>

## Discussion

Calling this getter will return a new instance that may be mutated to customize settings. Pass that instance to `captureHighResolutionFrameUsingPhotoSettings:completion:` to capture a high resolution frame with custom settings.

> **See Also**

> [captureHighResolutionFrameUsingPhotoSettings:completion:](../../arsession/capturehighresolutionframe%28using_completion_%29.md)
