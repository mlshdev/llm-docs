> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlaccelerationstructurecurvegeometrydescriptor/controlpointbuffer](https://developer.apple.com/documentation/metal/mtlaccelerationstructurecurvegeometrydescriptor/controlpointbuffer)

# controlPointBuffer (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

A buffer that contains curve control points.

## Declaration

```swift
var controlPointBuffer: (any MTLBuffer)? { get set }
```

<a id="discussion"></a>

## Discussion

You provide control points in the format that matches the [controlPointFormat](controlpointformat.md) property. This property needs to have a non-nil value when you build an acceleration structure.

# controlPointBuffer (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

A buffer that contains curve control points.

## Declaration

```objectivec
@property (nonatomic, retain, nullable) id<MTLBuffer> controlPointBuffer;
```

<a id="discussion"></a>

## Discussion

You provide control points in the format that matches the [controlPointFormat](controlpointformat.md) property. This property needs to have a non-nil value when you build an acceleration structure.
