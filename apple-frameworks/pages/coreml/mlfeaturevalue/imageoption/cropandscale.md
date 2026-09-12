> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreml/mlfeaturevalue/imageoption/cropandscale](https://developer.apple.com/documentation/coreml/mlfeaturevalue/imageoption/cropandscale)

# cropAndScale (Swift)

**Framework:** Core ML  
**Kind:** Type Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

The option you use to crop and scale an image when creating an image feature value.

## Declaration

```swift
static let cropAndScale: MLFeatureValue.ImageOption
```

<a id="Discussion"></a>

## Discussion

Use this value as a dictionary key for the `options` argument of an image-based `MLFeatureValue` initializer. Pair this key with a [VNImageCropAndScaleOption](../../../vision/vnimagecropandscaleoption.md) value in the initializer’s `options` dictionary. For example, see [init(cgImage:pixelsWide:pixelsHigh:pixelFormatType:options:)](../init%28cgimage_pixelswide_pixelshigh_pixelformattype_options_%29-1pdp4.md).

## See Also

### Image options keys

- [cropRect](croprect.md): The option you use to crop an image when creating an image feature value.

# MLFeatureValueImageOptionCropAndScale (Objective-C)

**Framework:** Core ML  
**Kind:** Global Variable  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

The option you use to crop and scale an image when creating an image feature value.

## Declaration

```objectivec
extern MLFeatureValueImageOption const MLFeatureValueImageOptionCropAndScale;
```

<a id="Discussion"></a>

## Discussion

Use this value as a dictionary key for the `options` argument of an image-based `MLFeatureValue` initializer. Pair this key with a [VNImageCropAndScaleOption](../../../vision/vnimagecropandscaleoption.md) value in the initializer’s `options` dictionary. For example, see [featureValueWithCGImage:pixelsWide:pixelsHigh:pixelFormatType:options:error:](../init%28cgimage_pixelswide_pixelshigh_pixelformattype_options_%29-1pdp4.md).

## See Also

### Image options keys

- [MLFeatureValueImageOptionCropRect](croprect.md): The option you use to crop an image when creating an image feature value.
