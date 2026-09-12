> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photos/phimagerequestoptions/deliverymode](https://developer.apple.com/documentation/photos/phimagerequestoptions/deliverymode)

# deliveryMode (Swift)

**Framework:** Photos  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 10.0+ · visionOS 1.0+

The requested image quality and delivery priority.

## Declaration

```swift
var deliveryMode: PHImageRequestOptionsDeliveryMode { get set }
```

<a id="Discussion"></a>

## Discussion

Use this property to tell Photos to provide an image quickly (possibly sacrificing image quality), to provide a high-quality image (possibly sacrificing speed), or to provide both automatically if needed. See [PHImageRequestOptionsDeliveryMode](../phimagerequestoptionsdeliverymode.md).

## See Also

### Specifying Image Request Options

- [version](version.md): The version of the image to be requested.
- [PHImageRequestOptionsVersion](../phimagerequestoptionsversion.md): Options for requesting an image asset with or without adjustments, used by the [version](version.md) property.
- [PHImageRequestOptionsDeliveryMode](../phimagerequestoptionsdeliverymode.md): Options for delivering requested image data, used by the [deliveryMode](deliverymode.md) property.
- [resizeMode](resizemode.md): A mode that specifies how to resize the requested image.
- [PHImageRequestOptionsResizeMode](../phimagerequestoptionsresizemode.md): Options for how to resize the requested image to fit a target size, used by the [resizeMode](resizemode.md) property.
- [normalizedCropRect](normalizedcroprect.md): A rectangle for requesting a cropped version of the original image.

# deliveryMode (Objective-C)

**Framework:** Photos  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 10.0+ · visionOS 1.0+

The requested image quality and delivery priority.

## Declaration

```objectivec
@property (nonatomic, assign) PHImageRequestOptionsDeliveryMode deliveryMode;
```

<a id="Discussion"></a>

## Discussion

Use this property to tell Photos to provide an image quickly (possibly sacrificing image quality), to provide a high-quality image (possibly sacrificing speed), or to provide both automatically if needed. See [PHImageRequestOptionsDeliveryMode](../phimagerequestoptionsdeliverymode.md).

## See Also

### Specifying Image Request Options

- [version](version.md): The version of the image to be requested.
- [PHImageRequestOptionsVersion](../phimagerequestoptionsversion.md): Options for requesting an image asset with or without adjustments, used by the [version](version.md) property.
- [PHImageRequestOptionsDeliveryMode](../phimagerequestoptionsdeliverymode.md): Options for delivering requested image data, used by the [deliveryMode](deliverymode.md) property.
- [resizeMode](resizemode.md): A mode that specifies how to resize the requested image.
- [PHImageRequestOptionsResizeMode](../phimagerequestoptionsresizemode.md): Options for how to resize the requested image to fit a target size, used by the [resizeMode](resizemode.md) property.
- [normalizedCropRect](normalizedcroprect.md): A rectangle for requesting a cropped version of the original image.
