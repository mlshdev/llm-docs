> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreml/mlfeaturevalue/imageoption](https://developer.apple.com/documentation/coreml/mlfeaturevalue/imageoption)

# MLFeatureValue.ImageOption (Swift)

**Framework:** Core ML  
**Kind:** Structure  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

The initializer options you use to crop and scale an image when creating an image feature value.

## Declaration

```swift
struct ImageOption
```

## Topics

### Image options keys

- [cropRect](imageoption/croprect.md): The option you use to crop an image when creating an image feature value.
- [cropAndScale](imageoption/cropandscale.md): The option you use to crop and scale an image when creating an image feature value.

### Image option key initializers

- [init(\_:)](imageoption/init%28__%29.md): Creates an image feature option key from a string.
- [init(rawValue:)](imageoption/init%28rawvalue_%29.md): Creates an image feature option key from a raw value string.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Creating image feature values

- [init(pixelBuffer:)](init%28pixelbuffer_%29.md): Creates a feature value that contains an image from a pixel buffer.
- [init(CGImage:pixelsWide:pixelsHigh:pixelFormatType:options:)](init%28cgimage_pixelswide_pixelshigh_pixelformattype_options_%29-2zg43.md): Creates a feature value that contains an image defined by a core graphics image and its size and pixel format.
- [init(CGImage:orientation:pixelsWide:pixelsHigh:pixelFormatType:options:)](init%28cgimage_orientation_pixelswide_pixelshigh_pixelformattype_options_%29-4nme0.md): Creates a feature value that contains an image defined by a core graphics image and its orientation, size, and pixel format.
- [init(CGImage:constraint:options:)](init%28cgimage_constraint_options_%29-1j00l.md): Creates a feature value that contains an image defined by a core graphics image and a constraint.
- [init(CGImage:orientation:constraint:options:)](init%28cgimage_orientation_constraint_options_%29-87vk0.md): Creates a feature value that contains an image defined by a core graphics image, an orientation, and a constraint.
- [init(imageAtURL:pixelsWide:pixelsHigh:pixelFormatType:options:)](init%28imageaturl_pixelswide_pixelshigh_pixelformattype_options_%29.md): Creates a feature value that contains an image defined by an image URL and the image’s size and pixel format.
- [init(imageAtURL:orientation:pixelsWide:pixelsHigh:pixelFormatType:options:)](init%28imageaturl_orientation_pixelswide_pixelshigh_pixelformattype_options_%29.md): Creates a feature value that contains an image defined by an image URL and the image’s orientation, size, and pixel format.
- [init(imageAtURL:constraint:options:)](init%28imageaturl_constraint_options_%29.md): Creates a feature value that contains an image defined by an image URL and a constraint.
- [init(imageAtURL:orientation:constraint:options:)](init%28imageaturl_orientation_constraint_options_%29.md): Creates a feature value that contains an image defined by an image URL, an orientation, and a constraint.
- [MLImageConstraint](../mlimageconstraint.md): The width, height, and pixel format constraints of an image feature.

# MLFeatureValueImageOption (Objective-C)

**Framework:** Core ML  
**Kind:** Type Alias  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

The initializer options you use to crop and scale an image when creating an image feature value.

## Declaration

```objectivec
typedef NSString * MLFeatureValueImageOption;
```

## Topics

### Image options keys

- [MLFeatureValueImageOptionCropRect](imageoption/croprect.md): The option you use to crop an image when creating an image feature value.
- [MLFeatureValueImageOptionCropAndScale](imageoption/cropandscale.md): The option you use to crop and scale an image when creating an image feature value.

## See Also

### Creating image feature values

- [featureValueWithPixelBuffer:](init%28pixelbuffer_%29.md): Creates a feature value that contains an image from a pixel buffer.
- [MLImageConstraint](../mlimageconstraint.md): The width, height, and pixel format constraints of an image feature.
