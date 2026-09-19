> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/metal/mtl4accelerationstructuremotioncurvegeometrydescriptor/segmentcontrolpointcount

# segmentControlPointCount (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Controls the number of control points per curve segment.

## Declaration

```swift
var segmentControlPointCount: Int { get set }
```

<a id="discussion"></a>

## Discussion

Valid values for this property are `2`, `3`, or `4`. All keyframes have the same number of control points per curve segment.

# segmentControlPointCount (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Controls the number of control points per curve segment.

## Declaration

```objectivec
@property (nonatomic) NSUInteger segmentControlPointCount;
```

<a id="discussion"></a>

## Discussion

Valid values for this property are `2`, `3`, or `4`. All keyframes have the same number of control points per curve segment.
