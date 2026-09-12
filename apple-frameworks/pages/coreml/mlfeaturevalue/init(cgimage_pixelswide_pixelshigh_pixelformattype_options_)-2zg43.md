> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreml/mlfeaturevalue/init(cgimage:pixelswide:pixelshigh:pixelformattype:options:)-2zg43](https://developer.apple.com/documentation/coreml/mlfeaturevalue/init(cgimage:pixelswide:pixelshigh:pixelformattype:options:)-2zg43)

# init(CGImage:pixelsWide:pixelsHigh:pixelFormatType:options:)

**Framework:** Core ML  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Creates a feature value that contains an image defined by a core graphics image and its size and pixel format.

## Declaration

```swift
convenience init(CGImage cgImage: CGImage, pixelsWide: Int, pixelsHigh: Int, pixelFormatType: OSType, options: [MLFeatureValue.ImageOption : Any]? = nil) throws
```

## Parameters

- `cgImage`: A [CGImage](../../coregraphics/cgimage.md) instance.
- `pixelsWide`: The image’s width in pixels.
- `pixelsHigh`: The image’s height in pixels.
- `pixelFormatType`: The image’s pixel format (see [Pixel Format Identifiers](../../corevideo/pixel-format-identifiers.md)).
- `options`: A dictionary of [VNImageCropAndScaleOption](../../vision/vnimagecropandscaleoption.md) values, each keyed by [MLFeatureValue.ImageOption](imageoption.md).

## See Also

### Creating image feature values

- [init(pixelBuffer:)](init%28pixelbuffer_%29.md): Creates a feature value that contains an image from a pixel buffer.
- [init(CGImage:orientation:pixelsWide:pixelsHigh:pixelFormatType:options:)](init%28cgimage_orientation_pixelswide_pixelshigh_pixelformattype_options_%29-4nme0.md): Creates a feature value that contains an image defined by a core graphics image and its orientation, size, and pixel format.
- [init(CGImage:constraint:options:)](init%28cgimage_constraint_options_%29-1j00l.md): Creates a feature value that contains an image defined by a core graphics image and a constraint.
- [init(CGImage:orientation:constraint:options:)](init%28cgimage_orientation_constraint_options_%29-87vk0.md): Creates a feature value that contains an image defined by a core graphics image, an orientation, and a constraint.
- [init(imageAtURL:pixelsWide:pixelsHigh:pixelFormatType:options:)](init%28imageaturl_pixelswide_pixelshigh_pixelformattype_options_%29.md): Creates a feature value that contains an image defined by an image URL and the image’s size and pixel format.
- [init(imageAtURL:orientation:pixelsWide:pixelsHigh:pixelFormatType:options:)](init%28imageaturl_orientation_pixelswide_pixelshigh_pixelformattype_options_%29.md): Creates a feature value that contains an image defined by an image URL and the image’s orientation, size, and pixel format.
- [init(imageAtURL:constraint:options:)](init%28imageaturl_constraint_options_%29.md): Creates a feature value that contains an image defined by an image URL and a constraint.
- [init(imageAtURL:orientation:constraint:options:)](init%28imageaturl_orientation_constraint_options_%29.md): Creates a feature value that contains an image defined by an image URL, an orientation, and a constraint.
- [MLImageConstraint](../mlimageconstraint.md): The width, height, and pixel format constraints of an image feature.
- [MLFeatureValue.ImageOption](imageoption.md): The initializer options you use to crop and scale an image when creating an image feature value.
