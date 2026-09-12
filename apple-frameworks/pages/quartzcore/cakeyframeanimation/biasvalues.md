> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quartzcore/cakeyframeanimation/biasvalues](https://developer.apple.com/documentation/quartzcore/cakeyframeanimation/biasvalues)

# biasValues (Swift)

**Framework:** Core Animation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

An array of numbers that define the position of the curve relative to a control point.

## Declaration

```swift
var biasValues: [NSNumber]? { get set }
```

<a id="Discussion"></a>

## Discussion

This property is an array of [NSNumber](../../foundation/nsnumber.md) objects, used only for the cubic calculation modes. Positive values move the curve before the control point while negative values move it after the control point. The first value defines the behavior of the tangent to the first control point, the second value controls the second point’s tangents, and so on. If you do not specify a value for a given control point, the value `0` is used.

## See Also

### Cubic Mode Attributes

- [tensionValues](tensionvalues.md): An array of numbers that define the tightness of the curve.
- [continuityValues](continuityvalues.md): An array of numbers that define the sharpness of the timing curve’s corners.

# biasValues (Objective-C)

**Framework:** Core Animation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

An array of numbers that define the position of the curve relative to a control point.

## Declaration

```objectivec
@property (copy, nullable) NSArray<NSNumber *> * biasValues;
```

<a id="Discussion"></a>

## Discussion

This property is an array of [NSNumber](../../foundation/nsnumber.md) objects, used only for the cubic calculation modes. Positive values move the curve before the control point while negative values move it after the control point. The first value defines the behavior of the tangent to the first control point, the second value controls the second point’s tangents, and so on. If you do not specify a value for a given control point, the value `0` is used.

## See Also

### Cubic Mode Attributes

- [tensionValues](tensionvalues.md): An array of numbers that define the tightness of the curve.
- [continuityValues](continuityvalues.md): An array of numbers that define the sharpness of the timing curve’s corners.
