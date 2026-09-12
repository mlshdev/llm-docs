> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photos/phimagerequestoptions/resizemode](https://developer.apple.com/documentation/photos/phimagerequestoptions/resizemode)

# resizeMode (Swift)

**Framework:** Photos  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 10.0+ · visionOS 1.0+

A mode that specifies how to resize the requested image.

## Declaration

```swift
var resizeMode: PHImageRequestOptionsResizeMode { get set }
```

<a id="Discussion"></a>

## Discussion

Use this property to choose how to fit the image to the target size you specified when requesting image data. The default value for this property is [PHImageRequestOptionsResizeMode.fast](../phimagerequestoptionsresizemode/fast.md).

## See Also

### Specifying Image Request Options

- [version](version.md): The version of the image to be requested.
- [PHImageRequestOptionsVersion](../phimagerequestoptionsversion.md): Options for requesting an image asset with or without adjustments, used by the [version](version.md) property.
- [deliveryMode](deliverymode.md): The requested image quality and delivery priority.
- [PHImageRequestOptionsDeliveryMode](../phimagerequestoptionsdeliverymode.md): Options for delivering requested image data, used by the [deliveryMode](deliverymode.md) property.
- [PHImageRequestOptionsResizeMode](../phimagerequestoptionsresizemode.md): Options for how to resize the requested image to fit a target size, used by the [resizeMode](resizemode.md) property.
- [normalizedCropRect](normalizedcroprect.md): A rectangle for requesting a cropped version of the original image.

# resizeMode (Objective-C)

**Framework:** Photos  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 10.0+ · visionOS 1.0+

A mode that specifies how to resize the requested image.

## Declaration

```objectivec
@property (nonatomic, assign) PHImageRequestOptionsResizeMode resizeMode;
```

<a id="Discussion"></a>

## Discussion

Use this property to choose how to fit the image to the target size you specified when requesting image data. The default value for this property is [PHImageRequestOptionsResizeModeFast](../phimagerequestoptionsresizemode/fast.md).

## See Also

### Specifying Image Request Options

- [version](version.md): The version of the image to be requested.
- [PHImageRequestOptionsVersion](../phimagerequestoptionsversion.md): Options for requesting an image asset with or without adjustments, used by the [version](version.md) property.
- [deliveryMode](deliverymode.md): The requested image quality and delivery priority.
- [PHImageRequestOptionsDeliveryMode](../phimagerequestoptionsdeliverymode.md): Options for delivering requested image data, used by the [deliveryMode](deliverymode.md) property.
- [PHImageRequestOptionsResizeMode](../phimagerequestoptionsresizemode.md): Options for how to resize the requested image to fit a target size, used by the [resizeMode](resizemode.md) property.
- [normalizedCropRect](normalizedcroprect.md): A rectangle for requesting a cropped version of the original image.
