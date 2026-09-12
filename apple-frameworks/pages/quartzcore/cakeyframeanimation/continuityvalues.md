> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quartzcore/cakeyframeanimation/continuityvalues](https://developer.apple.com/documentation/quartzcore/cakeyframeanimation/continuityvalues)

# continuityValues (Swift)

**Framework:** Core Animation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

An array of numbers that define the sharpness of the timing curve’s corners.

## Declaration

```swift
var continuityValues: [NSNumber]? { get set }
```

<a id="Discussion"></a>

## Discussion

This property is an array of [NSNumber](../../foundation/nsnumber.md) objects, used only for the cubic calculation modes. Positive values result in sharper corners while negative values create inverted corners. The first value defines the behavior of the tangent to the first control point, the second value controls the second point’s tangents, and so on. If you do not specify a value for a given control point, the value `0` is used.

## See Also

### Cubic Mode Attributes

- [tensionValues](tensionvalues.md): An array of numbers that define the tightness of the curve.
- [biasValues](biasvalues.md): An array of numbers that define the position of the curve relative to a control point.

# continuityValues (Objective-C)

**Framework:** Core Animation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

An array of numbers that define the sharpness of the timing curve’s corners.

## Declaration

```objectivec
@property (copy, nullable) NSArray<NSNumber *> * continuityValues;
```

<a id="Discussion"></a>

## Discussion

This property is an array of [NSNumber](../../foundation/nsnumber.md) objects, used only for the cubic calculation modes. Positive values result in sharper corners while negative values create inverted corners. The first value defines the behavior of the tangent to the first control point, the second value controls the second point’s tangents, and so on. If you do not specify a value for a given control point, the value `0` is used.

## See Also

### Cubic Mode Attributes

- [tensionValues](tensionvalues.md): An array of numbers that define the tightness of the curve.
- [biasValues](biasvalues.md): An array of numbers that define the position of the curve relative to a control point.
