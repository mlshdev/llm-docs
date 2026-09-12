> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/kciinputcolorspacekey](https://developer.apple.com/documentation/coreimage/kciinputcolorspacekey)

# kCIInputColorSpaceKey (Swift)

**Framework:** Core Image  
**Kind:** Global Variable  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

A key to get or set a color space value of a Core Image filter.

## Declaration

```swift
let kCIInputColorSpaceKey: String
```

<a id="discussion"></a>

## Discussion

The value for this key needs to be a `CGColorSpace` instance.

## See Also

### Constants

- [constrainedHigh](cidynamicrangeoption/constrainedhigh.md): Use extended dynamic range, but brightness is modulated to optimize for co-existence with other composited content.
- [high](cidynamicrangeoption/high.md): Use High dynamic range.
- [standard](cidynamicrangeoption/standard.md): Use Standard dynamic range.
- [kCIInputAmountKey](kciinputamountkey.md)
- [kCIInputAngleKey](kciinputanglekey.md): The angle.
- [kCIInputAspectRatioKey](kciinputaspectratiokey.md): Aspect Ratio.
- [kCIInputBackgroundImageKey](kciinputbackgroundimagekey.md): A key for the [CIImage](ciimage.md) object to use as a background image.
- [kCIInputBacksideImageKey](kciinputbacksideimagekey.md): A key to get or set the backside image for a transition Core Image filter.
- [kCIInputBiasVectorKey](kciinputbiasvectorkey.md): A key to get or set the vector bias value of a Core Image filter.
- [kCIInputBrightnessKey](kciinputbrightnesskey.md): Brightness level.
- [kCIInputCenterKey](kciinputcenterkey.md): A key for a [CIVector](civector.md) object that specifies the center of the area, as *x* and *y*\- coordinates, to be filtered.
- [kCIInputColorKey](kciinputcolorkey.md): A key for a [CIColor](cicolor.md) object that specifies a color value.
- [kCIInputColor0Key](kciinputcolor0key.md): A key to get or set a color value of a Core Image filter.
- [kCIInputColor1Key](kciinputcolor1key.md): A key to get or set a color value of a Core Image filter.
- [kCIInputContrastKey](kciinputcontrastkey.md): A contrast level.

# kCIInputColorSpaceKey (Objective-C)

**Framework:** Core Image  
**Kind:** Global Variable  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

A key to get or set a color space value of a Core Image filter.

## Declaration

```objectivec
extern NSString * const kCIInputColorSpaceKey;
```

<a id="discussion"></a>

## Discussion

The value for this key needs to be a `CGColorSpace` instance.

## See Also

### Constants

- [kCIDynamicRangeConstrainedHigh](cidynamicrangeoption/constrainedhigh.md): Use extended dynamic range, but brightness is modulated to optimize for co-existence with other composited content.
- [kCIDynamicRangeHigh](cidynamicrangeoption/high.md): Use High dynamic range.
- [kCIDynamicRangeStandard](cidynamicrangeoption/standard.md): Use Standard dynamic range.
- [kCIInputAmountKey](kciinputamountkey.md)
- [kCIInputAngleKey](kciinputanglekey.md): The angle.
- [kCIInputAspectRatioKey](kciinputaspectratiokey.md): Aspect Ratio.
- [kCIInputBackgroundImageKey](kciinputbackgroundimagekey.md): A key for the [CIImage](ciimage.md) object to use as a background image.
- [kCIInputBacksideImageKey](kciinputbacksideimagekey.md): A key to get or set the backside image for a transition Core Image filter.
- [kCIInputBiasVectorKey](kciinputbiasvectorkey.md): A key to get or set the vector bias value of a Core Image filter.
- [kCIInputBrightnessKey](kciinputbrightnesskey.md): Brightness level.
- [kCIInputCenterKey](kciinputcenterkey.md): A key for a [CIVector](civector.md) object that specifies the center of the area, as *x* and *y*\- coordinates, to be filtered.
- [kCIInputColorKey](kciinputcolorkey.md): A key for a [CIColor](cicolor.md) object that specifies a color value.
- [kCIInputColor0Key](kciinputcolor0key.md): A key to get or set a color value of a Core Image filter.
- [kCIInputColor1Key](kciinputcolor1key.md): A key to get or set a color value of a Core Image filter.
- [kCIInputContrastKey](kciinputcontrastkey.md): A contrast level.
