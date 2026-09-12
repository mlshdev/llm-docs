> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photos/phimagerequestoptionsversion](https://developer.apple.com/documentation/photos/phimagerequestoptionsversion)

# PHImageRequestOptionsVersion (Swift)

**Framework:** Photos  
**Kind:** Enumeration  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 10.0+ · visionOS 1.0+

Options for requesting an image asset with or without adjustments, used by the [version](phimagerequestoptions/version.md) property.

## Declaration

```swift
enum PHImageRequestOptionsVersion
```

## Topics

### Constants

- [PHImageRequestOptionsVersion.current](phimagerequestoptionsversion/current.md): Request the most recent version of the image asset (the one that reflects all edits).
- [PHImageRequestOptionsVersion.unadjusted](phimagerequestoptionsversion/unadjusted.md): Request a version of the image asset without adjustments.
- [PHImageRequestOptionsVersion.original](phimagerequestoptionsversion/original.md): Request the original, highest-fidelity version of the image asset.

### Initializers

- [init(rawValue:)](phimagerequestoptionsversion/init%28rawvalue_%29.md)

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
- [deliveryMode](phimagerequestoptions/deliverymode.md): The requested image quality and delivery priority.
- [PHImageRequestOptionsDeliveryMode](phimagerequestoptionsdeliverymode.md): Options for delivering requested image data, used by the [deliveryMode](phimagerequestoptions/deliverymode.md) property.
- [resizeMode](phimagerequestoptions/resizemode.md): A mode that specifies how to resize the requested image.
- [PHImageRequestOptionsResizeMode](phimagerequestoptionsresizemode.md): Options for how to resize the requested image to fit a target size, used by the [resizeMode](phimagerequestoptions/resizemode.md) property.
- [normalizedCropRect](phimagerequestoptions/normalizedcroprect.md): A rectangle for requesting a cropped version of the original image.

# PHImageRequestOptionsVersion (Objective-C)

**Framework:** Photos  
**Kind:** Enumeration  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 10.0+ · visionOS 1.0+

Options for requesting an image asset with or without adjustments, used by the [version](phimagerequestoptions/version.md) property.

## Declaration

```objectivec
enum PHImageRequestOptionsVersion : NSInteger;
```

## Topics

### Constants

- [PHImageRequestOptionsVersionCurrent](phimagerequestoptionsversion/current.md): Request the most recent version of the image asset (the one that reflects all edits).
- [PHImageRequestOptionsVersionUnadjusted](phimagerequestoptionsversion/unadjusted.md): Request a version of the image asset without adjustments.
- [PHImageRequestOptionsVersionOriginal](phimagerequestoptionsversion/original.md): Request the original, highest-fidelity version of the image asset.

## See Also

### Specifying Image Request Options

- [version](phimagerequestoptions/version.md): The version of the image to be requested.
- [deliveryMode](phimagerequestoptions/deliverymode.md): The requested image quality and delivery priority.
- [PHImageRequestOptionsDeliveryMode](phimagerequestoptionsdeliverymode.md): Options for delivering requested image data, used by the [deliveryMode](phimagerequestoptions/deliverymode.md) property.
- [resizeMode](phimagerequestoptions/resizemode.md): A mode that specifies how to resize the requested image.
- [PHImageRequestOptionsResizeMode](phimagerequestoptionsresizemode.md): Options for how to resize the requested image to fit a target size, used by the [resizeMode](phimagerequestoptions/resizemode.md) property.
- [normalizedCropRect](phimagerequestoptions/normalizedcroprect.md): A rectangle for requesting a cropped version of the original image.
