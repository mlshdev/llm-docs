> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/ciimage/applyinggainmap(_:)](https://developer.apple.com/documentation/coreimage/ciimage/applyinggainmap(_:))

# applyingGainMap(\_:) (Swift)

**Framework:** Core Image  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+

Create an image that applies a gain map Core Image image to the received Core Image image.

## Declaration

```swift
func applyingGainMap(_ gainmap: CIImage) -> CIImage
```

<a id="return-value"></a>

## Return Value

 An autoreleased [CIImage](../ciimage.md) instance or the received image.

<a id="discussion"></a>

## Discussion

The gain map image can be obtained by creating a [CIImage](../ciimage.md) instance from `NSURL`/`NSData` and setting the [auxiliaryHDRGainMap](../ciimageoption/auxiliaryhdrgainmap.md) option set to `@YES`.

If the gain map [CIImage](../ciimage.md) instance doesn’t have the needed [properties](properties.md) metadata, the received image will be returned as-is.

## See Also

### Instance Methods

- [applyingGainMap(\_:headroom:)](applyinggainmap%28__headroom_%29.md): Create an image that applies a gain map Core Image image with a specified headroom to the received Core Image image.

# imageByApplyingGainMap: (Objective-C)

**Framework:** Core Image  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+

Create an image that applies a gain map Core Image image to the received Core Image image.

## Declaration

```objectivec
- (CIImage *) imageByApplyingGainMap:(CIImage *) gainmap;
```

<a id="return-value"></a>

## Return Value

 An autoreleased [CIImage](../ciimage.md) instance or the received image.

<a id="discussion"></a>

## Discussion

The gain map image can be obtained by creating a [CIImage](../ciimage.md) instance from `NSURL`/`NSData` and setting the [kCIImageAuxiliaryHDRGainMap](../ciimageoption/auxiliaryhdrgainmap.md) option set to `@YES`.

If the gain map [CIImage](../ciimage.md) instance doesn’t have the needed [properties](properties.md) metadata, the received image will be returned as-is.

## See Also

### Instance Methods

- [imageByApplyingGainMap:headroom:](applyinggainmap%28__headroom_%29.md): Create an image that applies a gain map Core Image image with a specified headroom to the received Core Image image.
