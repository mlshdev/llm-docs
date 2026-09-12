> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkvisionprism/init(verticalamount:verticalbase:horizontalamount:horizontalbase:eye:)](https://developer.apple.com/documentation/healthkit/hkvisionprism/init(verticalamount:verticalbase:horizontalamount:horizontalbase:eye:))

# init(verticalAmount:verticalBase:horizontalAmount:horizontalBase:eye:) (Swift)

**Framework:** HealthKit  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 9.0+

Creates a new vision prism object that separates the correction strength into horizontal and vertical components.

## Declaration

```swift
init(verticalAmount: HKQuantity, verticalBase: HKPrismBase, horizontalAmount: HKQuantity, horizontalBase: HKPrismBase, eye: HKVisionEye)
```

## Parameters

- `verticalAmount`: The vertical strength of the correction, measured in [prismDiopter()](../hkunit/prismdiopter%28%29.md) units.
- `verticalBase`: The orientation of the vertical correction. This value can be either [HKPrismBase.up](../hkprismbase/up.md) or [HKPrismBase.down](../hkprismbase/down.md).
- `horizontalAmount`: The horizontal strength of the correction, measured in [prismDiopter()](../hkunit/prismdiopter%28%29.md) units.
- `horizontalBase`: The orientation of the horizontal correction. This value can be either [HKPrismBase.in](../hkprismbase/in.md) or [HKPrismBase.out](../hkprismbase/out.md).
- `eye`: A value indicating which eye the correction applies to: [HKVisionEye.left](../hkvisioneye/left.md) or [HKVisionEye.right](../hkvisioneye/right.md).

## See Also

### Creating vision prism objects

- [init(amount:angle:eye:)](init%28amount_angle_eye_%29.md): Creates a new vision prism object, using a single quantity and an alignment angle.

# initWithVerticalAmount:verticalBase:horizontalAmount:horizontalBase:eye: (Objective-C)

**Framework:** HealthKit  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 9.0+

Creates a new vision prism object that separates the correction strength into horizontal and vertical components.

## Declaration

```objectivec
- (instancetype) initWithVerticalAmount:(HKQuantity *) verticalAmount verticalBase:(HKPrismBase) verticalBase horizontalAmount:(HKQuantity *) horizontalAmount horizontalBase:(HKPrismBase) horizontalBase eye:(HKVisionEye) eye;
```

## Parameters

- `verticalAmount`: The vertical strength of the correction, measured in [prismDiopterUnit](../hkunit/prismdiopter%28%29.md) units.
- `verticalBase`: The orientation of the vertical correction. This value can be either [HKPrismBaseUp](../hkprismbase/up.md) or [HKPrismBaseDown](../hkprismbase/down.md).
- `horizontalAmount`: The horizontal strength of the correction, measured in [prismDiopterUnit](../hkunit/prismdiopter%28%29.md) units.
- `horizontalBase`: The orientation of the horizontal correction. This value can be either [HKPrismBaseIn](../hkprismbase/in.md) or [HKPrismBaseOut](../hkprismbase/out.md).
- `eye`: A value indicating which eye the correction applies to: [HKVisionEyeLeft](../hkvisioneye/left.md) or [HKVisionEyeRight](../hkvisioneye/right.md).

## See Also

### Creating vision prism objects

- [initWithAmount:angle:eye:](init%28amount_angle_eye_%29.md): Creates a new vision prism object, using a single quantity and an alignment angle.
