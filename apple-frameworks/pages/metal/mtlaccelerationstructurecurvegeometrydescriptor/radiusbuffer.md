> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlaccelerationstructurecurvegeometrydescriptor/radiusbuffer](https://developer.apple.com/documentation/metal/mtlaccelerationstructurecurvegeometrydescriptor/radiusbuffer)

# radiusBuffer (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

A buffer that contains the curve radius for each control point.

## Declaration

```swift
var radiusBuffer: (any MTLBuffer)? { get set }
```

<a id="discussion"></a>

## Discussion

The buffer contains values that are greater than or equal to `0.0` in the format you configure with the [radiusFormat](radiusformat.md) property. This property needs to have a non-nil value when you build an acceleration structure.

# radiusBuffer (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

A buffer that contains the curve radius for each control point.

## Declaration

```objectivec
@property (nonatomic, retain, nullable) id<MTLBuffer> radiusBuffer;
```

<a id="discussion"></a>

## Discussion

The buffer contains values that are greater than or equal to `0.0` in the format you configure with the [radiusFormat](radiusformat.md) property. This property needs to have a non-nil value when you build an acceleration structure.
