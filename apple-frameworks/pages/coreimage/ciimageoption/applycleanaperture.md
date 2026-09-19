> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coreimage/ciimageoption/applycleanaperture

# applyCleanAperture (Swift)

**Framework:** Core Image  
**Kind:** Type Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

A Boolean value to control whether an image created with a CVPixelBuffer or an IOSurface should be cropped and offset according clean aperture attachments.

## Declaration

```swift
static let applyCleanAperture: CIImageOption
```

<a id="discussion"></a>

## Discussion

For a `CVPixelBuffer` this will use `kCVImageBufferPreferredCleanApertureKey` or `kCVImageBufferCleanApertureKey`.

If the value for this option is:

- True: then image will be cropped and offset to the clean aperture.
- False: then the full image is returned.
- [CIVector](../civector.md) : then use it as a `CGRect` to crop and offset.
- Not specified : then it will behave as if False was specified.

# kCIImageApplyCleanAperture (Objective-C)

**Framework:** Core Image  
**Kind:** Global Variable  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

A Boolean value to control whether an image created with a CVPixelBuffer or an IOSurface should be cropped and offset according clean aperture attachments.

## Declaration

```objectivec
extern CIImageOption const kCIImageApplyCleanAperture;
```

<a id="discussion"></a>

## Discussion

For a `CVPixelBuffer` this will use `kCVImageBufferPreferredCleanApertureKey` or `kCVImageBufferCleanApertureKey`.

If the value for this option is:

- True: then image will be cropped and offset to the clean aperture.
- False: then the full image is returned.
- [CIVector](../civector.md) : then use it as a `CGRect` to crop and offset.
- Not specified : then it will behave as if False was specified.
