> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreml/mlfeaturevalue/imageoption/croprect](https://developer.apple.com/documentation/coreml/mlfeaturevalue/imageoption/croprect)

# cropRect (Swift)

**Framework:** Core ML  
**Kind:** Type Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

The option you use to crop an image when creating an image feature value.

## Declaration

```swift
static let cropRect: MLFeatureValue.ImageOption
```

<a id="Discussion"></a>

## Discussion

Use this value as a dictionary key for the `options` argument of an image-based `MLFeatureValue` initializer. Pair this key with a [VNImageCropAndScaleOption](../../../vision/vnimagecropandscaleoption.md) value in the initializer’s `options` dictionary. For example, see [init(CGImage:pixelsWide:pixelsHigh:pixelFormatType:options:)](../init%28cgimage_pixelswide_pixelshigh_pixelformattype_options_%29-2zg43.md).

## See Also

### Image options keys

- [cropAndScale](cropandscale.md): The option you use to crop and scale an image when creating an image feature value.

# MLFeatureValueImageOptionCropRect (Objective-C)

**Framework:** Core ML  
**Kind:** Global Variable  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

The option you use to crop an image when creating an image feature value.

## Declaration

```objectivec
extern MLFeatureValueImageOption const MLFeatureValueImageOptionCropRect;
```

<a id="Discussion"></a>

## Discussion

Use this value as a dictionary key for the `options` argument of an image-based `MLFeatureValue` initializer. Pair this key with a [VNImageCropAndScaleOption](../../../vision/vnimagecropandscaleoption.md) value in the initializer’s `options` dictionary. For example, see [init(CGImage:pixelsWide:pixelsHigh:pixelFormatType:options:)](../init%28cgimage_pixelswide_pixelshigh_pixelformattype_options_%29-2zg43.md).

## See Also

### Image options keys

- [MLFeatureValueImageOptionCropAndScale](cropandscale.md): The option you use to crop and scale an image when creating an image feature value.
