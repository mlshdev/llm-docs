> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/cicontext/calculatehdrstats(for:)-l1rj](https://developer.apple.com/documentation/coreimage/cicontext/calculatehdrstats(for:)-l1rj)

# calculateHDRStats(for:) (Swift)

**Framework:** Core Image  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Given a Core Image image, use the receiving Core Image context to calculate its HDR statistics (content headroom and content average light level) and then return a new Core Image image that has the calculated values.

## Declaration

```swift
func calculateHDRStats(for image: CIImage) -> CIImage?
```

## Parameters

- `image`: An immutable [CIImage](../ciimage.md) for which to calculate statistics.

<a id="return-value"></a>

## Return Value

 Returns a new [CIImage](../ciimage.md) instance that has the calculated statistics attached.

<a id="discussion"></a>

## Discussion

If the image extent is not finite, then nil will be returned.

# calculateHDRStatsForImage: (Objective-C)

**Framework:** Core Image  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Given a Core Image image, use the receiving Core Image context to calculate its HDR statistics (content headroom and content average light level) and then return a new Core Image image that has the calculated values.

## Declaration

```objectivec
- (CIImage *) calculateHDRStatsForImage:(CIImage *) image;
```

## Parameters

- `image`: An immutable [CIImage](../ciimage.md) for which to calculate statistics.

<a id="return-value"></a>

## Return Value

 Returns a new [CIImage](../ciimage.md) instance that has the calculated statistics attached.

<a id="discussion"></a>

## Discussion

If the image extent is not finite, then nil will be returned.
