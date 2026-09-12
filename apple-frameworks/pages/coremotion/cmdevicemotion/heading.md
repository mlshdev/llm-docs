> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremotion/cmdevicemotion/heading](https://developer.apple.com/documentation/coremotion/cmdevicemotion/heading)

# heading (Swift)

**Framework:** Core Motion  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · watchOS 4.0+

The heading angle (measured in degrees) relative to the current reference frame.

## Declaration

```swift
var heading: Double { get }
```

<a id="Discussion"></a>

## Discussion

This property contains a value in the range of `0.0` to `360.0` degrees. This value is available only when the frame of reference is [xMagneticNorthZVertical](../cmattitudereferenceframe/xmagneticnorthzvertical.md) or [xTrueNorthZVertical](../cmattitudereferenceframe/xtruenorthzvertical.md). If the reference frame is [xArbitraryZVertical](../cmattitudereferenceframe/xarbitraryzvertical.md) or [xArbitraryCorrectedZVertical](../cmattitudereferenceframe/xarbitrarycorrectedzvertical.md), this property contains a negative number to indicate the heading is invalid.

# heading (Objective-C)

**Framework:** Core Motion  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · watchOS 4.0+

The heading angle (measured in degrees) relative to the current reference frame.

## Declaration

```objectivec
@property (nonatomic, readonly) double heading;
```

<a id="Discussion"></a>

## Discussion

This property contains a value in the range of `0.0` to `360.0` degrees. This value is available only when the frame of reference is [CMAttitudeReferenceFrameXMagneticNorthZVertical](../cmattitudereferenceframe/xmagneticnorthzvertical.md) or [CMAttitudeReferenceFrameXTrueNorthZVertical](../cmattitudereferenceframe/xtruenorthzvertical.md). If the reference frame is [CMAttitudeReferenceFrameXArbitraryZVertical](../cmattitudereferenceframe/xarbitraryzvertical.md) or [CMAttitudeReferenceFrameXArbitraryCorrectedZVertical](../cmattitudereferenceframe/xarbitrarycorrectedzvertical.md), this property contains a negative number to indicate the heading is invalid.
