> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/ciimage/applyinggainmap(_:headroom:)](https://developer.apple.com/documentation/coreimage/ciimage/applyinggainmap(_:headroom:))

# applyingGainMap(\_:headroom:) (Swift)

**Framework:** Core Image  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+

Create an image that applies a gain map Core Image image with a specified headroom to the received Core Image image.

## Declaration

```swift
func applyingGainMap(_ gainmap: CIImage, headroom: Float) -> CIImage
```

## Parameters

- `gainmap`: The gain map [CIImage](../ciimage.md) instance to apply to the receiver.
- `headroom`: A float value that specify how much headroom the resulting image should have. The headroom value will be limited to between 1.0 (i.e. SDR) and the full headroom allowed by the gain map.

<a id="return-value"></a>

## Return Value

 An autoreleased [CIImage](../ciimage.md) instance or the received image.

## See Also

### Instance Methods

- [applyingGainMap(\_:)](applyinggainmap%28__%29.md): Create an image that applies a gain map Core Image image to the received Core Image image.

# imageByApplyingGainMap:headroom: (Objective-C)

**Framework:** Core Image  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+

Create an image that applies a gain map Core Image image with a specified headroom to the received Core Image image.

## Declaration

```objectivec
- (CIImage *) imageByApplyingGainMap:(CIImage *) gainmap headroom:(float) headroom;
```

## Parameters

- `gainmap`: The gain map [CIImage](../ciimage.md) instance to apply to the receiver.
- `headroom`: A float value that specify how much headroom the resulting image should have. The headroom value will be limited to between 1.0 (i.e. SDR) and the full headroom allowed by the gain map.

<a id="return-value"></a>

## Return Value

 An autoreleased [CIImage](../ciimage.md) instance or the received image.

## See Also

### Instance Methods

- [imageByApplyingGainMap:](applyinggainmap%28__%29.md): Create an image that applies a gain map Core Image image to the received Core Image image.
