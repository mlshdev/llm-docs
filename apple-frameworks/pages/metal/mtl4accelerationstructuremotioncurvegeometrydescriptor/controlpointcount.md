> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/metal/mtl4accelerationstructuremotioncurvegeometrydescriptor/controlpointcount

# controlPointCount (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Specifies the number of control points in the buffers the control point buffers reference.

## Declaration

```swift
var controlPointCount: Int { get set }
```

<a id="discussion"></a>

## Discussion

All keyframes have the same number of control points.

# controlPointCount (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Specifies the number of control points in the buffers the control point buffers reference.

## Declaration

```objectivec
@property (nonatomic) NSUInteger controlPointCount;
```

<a id="discussion"></a>

## Discussion

All keyframes have the same number of control points.
