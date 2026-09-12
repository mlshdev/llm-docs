> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/cicontext/depthblureffectfilter(forimagedata:options:)](https://developer.apple.com/documentation/coreimage/cicontext/depthblureffectfilter(forimagedata:options:))

# depthBlurEffectFilter(forImageData:options:) (Swift)

**Framework:** Core Image  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+

Create a [CIFilter](../cifilter-swift.class.md) instance for the supplied image data that can be used to apply a depth blur effect.

## Declaration

```swift
func depthBlurEffectFilter(forImageData data: Data, options: [AnyHashable : Any]? = nil) -> CIFilter?
```

## Parameters

- `data`: The image file data to apply the depth blur effect to.
- `options`: Reserved for future use.

<a id="Discussion"></a>

## Discussion

The receiver context is used to render the image in order to get the facial landmarks used to create the effect.

## See Also

### Creating Depth Blur Filters

- [depthBlurEffectFilter(for:disparityImage:portraitEffectsMatte:hairSemanticSegmentation:glassesMatte:gainMap:orientation:options:)](depthblureffectfilter%28for_disparityimage_portraiteffectsmatte_hairsemanticsegmentation_glassesmatte_gainmap_orientation_options_%29.md): Create a [CIFilter](../cifilter-swift.class.md) instance for the supplied image data that can be used to apply a depth blur effect created with the supplied auxiliary images.
- [depthBlurEffectFilter(for:disparityImage:portraitEffectsMatte:hairSemanticSegmentation:orientation:options:)](depthblureffectfilter%28for_disparityimage_portraiteffectsmatte_hairsemanticsegmentation_orientation_options_%29.md): Create a [CIFilter](../cifilter-swift.class.md) instance for the supplied image data that can be used to apply a depth blur effect created with the supplied auxiliary images.
- [depthBlurEffectFilter(for:disparityImage:portraitEffectsMatte:orientation:options:)](depthblureffectfilter%28for_disparityimage_portraiteffectsmatte_orientation_options_%29.md): Create a [CIFilter](../cifilter-swift.class.md) instance for the supplied image data that can be used to apply a depth blur effect created with the supplied auxiliary images.
- [depthBlurEffectFilter(forImageURL:options:)](depthblureffectfilter%28forimageurl_options_%29.md): Create a [CIFilter](../cifilter-swift.class.md) instance for the supplied image URL that can be used to apply a depth blur effect.

# depthBlurEffectFilterForImageData:options: (Objective-C)

**Framework:** Core Image  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+

Create a [CIFilter](../cifilter-swift.class.md) instance for the supplied image data that can be used to apply a depth blur effect.

## Declaration

```objectivec
- (CIFilter *) depthBlurEffectFilterForImageData:(NSData *) data options:(NSDictionary *) options;
```

## Parameters

- `data`: The image file data to apply the depth blur effect to.
- `options`: Reserved for future use.

<a id="Discussion"></a>

## Discussion

The receiver context is used to render the image in order to get the facial landmarks used to create the effect.

## See Also

### Creating Depth Blur Filters

- [depthBlurEffectFilterForImage:disparityImage:portraitEffectsMatte:hairSemanticSegmentation:glassesMatte:gainMap:orientation:options:](depthblureffectfilter%28for_disparityimage_portraiteffectsmatte_hairsemanticsegmentation_glassesmatte_gainmap_orientation_options_%29.md): Create a [CIFilter](../cifilter-swift.class.md) instance for the supplied image data that can be used to apply a depth blur effect created with the supplied auxiliary images.
- [depthBlurEffectFilterForImage:disparityImage:portraitEffectsMatte:hairSemanticSegmentation:orientation:options:](depthblureffectfilter%28for_disparityimage_portraiteffectsmatte_hairsemanticsegmentation_orientation_options_%29.md): Create a [CIFilter](../cifilter-swift.class.md) instance for the supplied image data that can be used to apply a depth blur effect created with the supplied auxiliary images.
- [depthBlurEffectFilterForImage:disparityImage:portraitEffectsMatte:orientation:options:](depthblureffectfilter%28for_disparityimage_portraiteffectsmatte_orientation_options_%29.md): Create a [CIFilter](../cifilter-swift.class.md) instance for the supplied image data that can be used to apply a depth blur effect created with the supplied auxiliary images.
- [depthBlurEffectFilterForImageURL:options:](depthblureffectfilter%28forimageurl_options_%29.md): Create a [CIFilter](../cifilter-swift.class.md) instance for the supplied image URL that can be used to apply a depth blur effect.
