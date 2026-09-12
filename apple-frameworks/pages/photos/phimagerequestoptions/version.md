> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photos/phimagerequestoptions/version](https://developer.apple.com/documentation/photos/phimagerequestoptions/version)

# version (Swift)

**Framework:** Photos  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 10.0+ · visionOS 1.0+

The version of the image to be requested.

## Declaration

```swift
var version: PHImageRequestOptionsVersion { get set }
```

<a id="Discussion"></a>

## Discussion

Use this property to request a version of the image with or without adjustments, or to request high-quality original data (for example, a RAW file) if such is available. See [PHImageRequestOptionsVersion](../phimagerequestoptionsversion.md).

## See Also

### Specifying Image Request Options

- [PHImageRequestOptionsVersion](../phimagerequestoptionsversion.md): Options for requesting an image asset with or without adjustments, used by the [version](version.md) property.
- [deliveryMode](deliverymode.md): The requested image quality and delivery priority.
- [PHImageRequestOptionsDeliveryMode](../phimagerequestoptionsdeliverymode.md): Options for delivering requested image data, used by the [deliveryMode](deliverymode.md) property.
- [resizeMode](resizemode.md): A mode that specifies how to resize the requested image.
- [PHImageRequestOptionsResizeMode](../phimagerequestoptionsresizemode.md): Options for how to resize the requested image to fit a target size, used by the [resizeMode](resizemode.md) property.
- [normalizedCropRect](normalizedcroprect.md): A rectangle for requesting a cropped version of the original image.

# version (Objective-C)

**Framework:** Photos  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 10.0+ · visionOS 1.0+

The version of the image to be requested.

## Declaration

```objectivec
@property (nonatomic, assign) PHImageRequestOptionsVersion version;
```

<a id="Discussion"></a>

## Discussion

Use this property to request a version of the image with or without adjustments, or to request high-quality original data (for example, a RAW file) if such is available. See [PHImageRequestOptionsVersion](../phimagerequestoptionsversion.md).

## See Also

### Specifying Image Request Options

- [PHImageRequestOptionsVersion](../phimagerequestoptionsversion.md): Options for requesting an image asset with or without adjustments, used by the [version](version.md) property.
- [deliveryMode](deliverymode.md): The requested image quality and delivery priority.
- [PHImageRequestOptionsDeliveryMode](../phimagerequestoptionsdeliverymode.md): Options for delivering requested image data, used by the [deliveryMode](deliverymode.md) property.
- [resizeMode](resizemode.md): A mode that specifies how to resize the requested image.
- [PHImageRequestOptionsResizeMode](../phimagerequestoptionsresizemode.md): Options for how to resize the requested image to fit a target size, used by the [resizeMode](resizemode.md) property.
- [normalizedCropRect](normalizedcroprect.md): A rectangle for requesting a cropped version of the original image.
