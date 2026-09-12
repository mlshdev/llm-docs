> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photos/phimagerequestoptionsresizemode](https://developer.apple.com/documentation/photos/phimagerequestoptionsresizemode)

# PHImageRequestOptionsResizeMode (Swift)

**Framework:** Photos  
**Kind:** Enumeration  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 10.0+ · visionOS 1.0+

Options for how to resize the requested image to fit a target size, used by the [resizeMode](phimagerequestoptions/resizemode.md) property.

## Declaration

```swift
enum PHImageRequestOptionsResizeMode
```

<a id="overview"></a>

## Overview

Specify a `targetSize` parameter when you request an image with the [requestImage(for:targetSize:contentMode:options:resultHandler:)](phimagemanager/requestimage%28for_targetsize_contentmode_options_resulthandler_%29.md) method.

## Topics

### Constants

- [PHImageRequestOptionsResizeMode.none](phimagerequestoptionsresizemode/none.md): Photos does not resize the image asset.
- [PHImageRequestOptionsResizeMode.fast](phimagerequestoptionsresizemode/fast.md): Photos efficiently resizes the image to a size similar to, or slightly larger than, the target size.
- [PHImageRequestOptionsResizeMode.exact](phimagerequestoptionsresizemode/exact.md): Photos resizes the image to match the target size exactly.

### Initializers

- [init(rawValue:)](phimagerequestoptionsresizemode/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Specifying Image Request Options

- [version](phimagerequestoptions/version.md): The version of the image to be requested.
- [PHImageRequestOptionsVersion](phimagerequestoptionsversion.md): Options for requesting an image asset with or without adjustments, used by the [version](phimagerequestoptions/version.md) property.
- [deliveryMode](phimagerequestoptions/deliverymode.md): The requested image quality and delivery priority.
- [PHImageRequestOptionsDeliveryMode](phimagerequestoptionsdeliverymode.md): Options for delivering requested image data, used by the [deliveryMode](phimagerequestoptions/deliverymode.md) property.
- [resizeMode](phimagerequestoptions/resizemode.md): A mode that specifies how to resize the requested image.
- [normalizedCropRect](phimagerequestoptions/normalizedcroprect.md): A rectangle for requesting a cropped version of the original image.

# PHImageRequestOptionsResizeMode (Objective-C)

**Framework:** Photos  
**Kind:** Enumeration  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 10.0+ · visionOS 1.0+

Options for how to resize the requested image to fit a target size, used by the [resizeMode](phimagerequestoptions/resizemode.md) property.

## Declaration

```objectivec
enum PHImageRequestOptionsResizeMode : NSInteger;
```

<a id="overview"></a>

## Overview

Specify a `targetSize` parameter when you request an image with the [requestImageForAsset:targetSize:contentMode:options:resultHandler:](phimagemanager/requestimage%28for_targetsize_contentmode_options_resulthandler_%29.md) method.

## Topics

### Constants

- [PHImageRequestOptionsResizeModeNone](phimagerequestoptionsresizemode/none.md): Photos does not resize the image asset.
- [PHImageRequestOptionsResizeModeFast](phimagerequestoptionsresizemode/fast.md): Photos efficiently resizes the image to a size similar to, or slightly larger than, the target size.
- [PHImageRequestOptionsResizeModeExact](phimagerequestoptionsresizemode/exact.md): Photos resizes the image to match the target size exactly.

## See Also

### Specifying Image Request Options

- [version](phimagerequestoptions/version.md): The version of the image to be requested.
- [PHImageRequestOptionsVersion](phimagerequestoptionsversion.md): Options for requesting an image asset with or without adjustments, used by the [version](phimagerequestoptions/version.md) property.
- [deliveryMode](phimagerequestoptions/deliverymode.md): The requested image quality and delivery priority.
- [PHImageRequestOptionsDeliveryMode](phimagerequestoptionsdeliverymode.md): Options for delivering requested image data, used by the [deliveryMode](phimagerequestoptions/deliverymode.md) property.
- [resizeMode](phimagerequestoptions/resizemode.md): A mode that specifies how to resize the requested image.
- [normalizedCropRect](phimagerequestoptions/normalizedcroprect.md): A rectangle for requesting a cropped version of the original image.
