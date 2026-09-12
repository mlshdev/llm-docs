> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/ciimageoption/subsamplefactor](https://developer.apple.com/documentation/coreimage/ciimageoption/subsamplefactor)

# subsampleFactor (Swift)

**Framework:** Core Image  
**Kind:** Type Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

The factor by which to scale down a returned images.

## Declaration

```swift
static let subsampleFactor: CIImageOption
```

<a id="discussion"></a>

## Discussion

The value of this key should be an `NSNumber` containing the integer value 2, 4, or 8. It can be used to improve performance and reduce memory usage when working with large images.

When you specify this key, the retured image will be scaled down the image data by the specified numerical factor. If the image format doesn’t support the specified scale factor, a larger or full-size normal image is returned.

This option is only supported by JPEG, HEIF, TIFF, PNG and RAW images formats.

This option is only supported by these APIs:

- `/CIImage/imageWithContentsOfURL:options:`
- `/CIImage/initWithContentsOfURL:options:`
- `/CIImage/imageWithData:options:`
- `/CIImage/initWithData:options:`
- `/CIImage/imageWithCGImageSource:index:options:`
- `/CIImage/initWithCGImageSource:index:options:`

> **Note**

> The `kCGImageSourceSubsampleFactor` key can also be used for this purpose.

# kCIImageSubsampleFactor (Objective-C)

**Framework:** Core Image  
**Kind:** Global Variable  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

The factor by which to scale down a returned images.

## Declaration

```objectivec
extern CIImageOption const kCIImageSubsampleFactor;
```

<a id="discussion"></a>

## Discussion

The value of this key should be an `NSNumber` containing the integer value 2, 4, or 8. It can be used to improve performance and reduce memory usage when working with large images.

When you specify this key, the retured image will be scaled down the image data by the specified numerical factor. If the image format doesn’t support the specified scale factor, a larger or full-size normal image is returned.

This option is only supported by JPEG, HEIF, TIFF, PNG and RAW images formats.

This option is only supported by these APIs:

- `/CIImage/imageWithContentsOfURL:options:`
- `/CIImage/initWithContentsOfURL:options:`
- `/CIImage/imageWithData:options:`
- `/CIImage/initWithData:options:`
- `/CIImage/imageWithCGImageSource:index:options:`
- `/CIImage/initWithCGImageSource:index:options:`

> **Note**

> The `kCGImageSourceSubsampleFactor` key can also be used for this purpose.
