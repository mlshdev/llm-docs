> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturephotosettings/isportraiteffectsmattedeliveryenabled](https://developer.apple.com/documentation/avfoundation/avcapturephotosettings/isportraiteffectsmattedeliveryenabled)

# isPortraitEffectsMatteDeliveryEnabled (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 14.0+ · tvOS 17.0+

Specifies whether a portrait effects matte should be captured along with the photo.

## Declaration

```swift
var isPortraitEffectsMatteDeliveryEnabled: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

The default is `NO`.  Set to `YES` if you wish to receive a portrait effects matte with your photo. AVFoundation throws an exception if [isPortraitEffectsMatteDeliveryEnabled](../avcapturephotooutput/isportraiteffectsmattedeliveryenabled.md) is not set to `YES`, or if your delegate doesn’t respond to the [photoOutput(\_:didFinishProcessingPhoto:error:)](../avcapturephotocapturedelegate/photooutput%28__didfinishprocessingphoto_error_%29.md) selector.

> **Important**

>  Portrait effects matte generation requires depth data to be present, so you must also set [isDepthDataDeliveryEnabled](../avcapturephotooutput/isdepthdatadeliveryenabled.md) to `YES`.

Setting this property to `YES` doen’t guarantee that a portrait effects matte will be present in the resulting [AVCapturePhoto](../avcapturephoto.md). The matte is primarily used to improve the rendering quality of portrait effects on the image. If the photo’s content lacks a clear foreground subject, no portrait effects matte is generated, and the property returns `nil`. Setting this property to `YES` may add significant processing time to the delivery of your [photoOutput(\_:didFinishProcessingPhoto:error:)](../avcapturephotocapturedelegate/photooutput%28__didfinishprocessingphoto_error_%29.md) callback.

## See Also

### Capturing Portrait Effects matte

- [embedsPortraitEffectsMatteInPhoto](embedsportraiteffectsmatteinphoto.md): Specifies whether the portrait effects matte captured with ths photo should be written to the photo’s file structure.

# portraitEffectsMatteDeliveryEnabled (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 14.0+ · tvOS 17.0+

Specifies whether a portrait effects matte should be captured along with the photo.

## Declaration

```objectivec
@property (nonatomic, getter=isPortraitEffectsMatteDeliveryEnabled) BOOL portraitEffectsMatteDeliveryEnabled;
```

<a id="Discussion"></a>

## Discussion

The default is `NO`.  Set to `YES` if you wish to receive a portrait effects matte with your photo. AVFoundation throws an exception if [portraitEffectsMatteDeliveryEnabled](../avcapturephotooutput/isportraiteffectsmattedeliveryenabled.md) is not set to `YES`, or if your delegate doesn’t respond to the [captureOutput:didFinishProcessingPhoto:error:](../avcapturephotocapturedelegate/photooutput%28__didfinishprocessingphoto_error_%29.md) selector.

> **Important**

>  Portrait effects matte generation requires depth data to be present, so you must also set [depthDataDeliveryEnabled](../avcapturephotooutput/isdepthdatadeliveryenabled.md) to `YES`.

Setting this property to `YES` doen’t guarantee that a portrait effects matte will be present in the resulting [AVCapturePhoto](../avcapturephoto.md). The matte is primarily used to improve the rendering quality of portrait effects on the image. If the photo’s content lacks a clear foreground subject, no portrait effects matte is generated, and the property returns `nil`. Setting this property to `YES` may add significant processing time to the delivery of your [captureOutput:didFinishProcessingPhoto:error:](../avcapturephotocapturedelegate/photooutput%28__didfinishprocessingphoto_error_%29.md) callback.

## See Also

### Capturing Portrait Effects matte

- [embedsPortraitEffectsMatteInPhoto](embedsportraiteffectsmatteinphoto.md): Specifies whether the portrait effects matte captured with ths photo should be written to the photo’s file structure.
