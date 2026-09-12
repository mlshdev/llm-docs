> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtl4accelerationstructuremotionboundingboxgeometrydescriptor/boundingboxcount](https://developer.apple.com/documentation/metal/mtl4accelerationstructuremotionboundingboxgeometrydescriptor/boundingboxcount)

# boundingBoxCount (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Declares the number of bounding boxes in each buffer that `boundingBoxBuffer` references.

## Declaration

```swift
var boundingBoxCount: Int { get set }
```

<a id="discussion"></a>

## Discussion

All keyframes share the same bounding box count.

# boundingBoxCount (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Declares the number of bounding boxes in each buffer that `boundingBoxBuffer` references.

## Declaration

```objectivec
@property (nonatomic) NSUInteger boundingBoxCount;
```

<a id="discussion"></a>

## Discussion

All keyframes share the same bounding box count.
