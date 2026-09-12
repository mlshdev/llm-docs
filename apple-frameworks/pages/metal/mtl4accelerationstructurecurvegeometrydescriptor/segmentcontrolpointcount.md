> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtl4accelerationstructurecurvegeometrydescriptor/segmentcontrolpointcount](https://developer.apple.com/documentation/metal/mtl4accelerationstructurecurvegeometrydescriptor/segmentcontrolpointcount)

# segmentControlPointCount (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Declares the number of control points per curve segment.

## Declaration

```swift
var segmentControlPointCount: Int { get set }
```

<a id="discussion"></a>

## Discussion

Valid values for this property are `2`, `3`, or `4`.

# segmentControlPointCount (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Declares the number of control points per curve segment.

## Declaration

```objectivec
@property (nonatomic) NSUInteger segmentControlPointCount;
```

<a id="discussion"></a>

## Discussion

Valid values for this property are `2`, `3`, or `4`.
