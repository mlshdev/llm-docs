> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlaccelerationstructurecurvegeometrydescriptor/indexbuffer](https://developer.apple.com/documentation/metal/mtlaccelerationstructurecurvegeometrydescriptor/indexbuffer)

# indexBuffer (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

A buffer that contains references to control points in the control point buffer.

## Declaration

```swift
var indexBuffer: (any MTLBuffer)? { get set }
```

<a id="discussion"></a>

## Discussion

This property needs to have a non-nil value when you build an acceleration structure.

# indexBuffer (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

A buffer that contains references to control points in the control point buffer.

## Declaration

```objectivec
@property (nonatomic, retain, nullable) id<MTLBuffer> indexBuffer;
```

<a id="discussion"></a>

## Discussion

This property needs to have a non-nil value when you build an acceleration structure.
