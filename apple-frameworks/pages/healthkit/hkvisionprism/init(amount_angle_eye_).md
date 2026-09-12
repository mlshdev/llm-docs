> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkvisionprism/init(amount:angle:eye:)](https://developer.apple.com/documentation/healthkit/hkvisionprism/init(amount:angle:eye:))

# init(amount:angle:eye:) (Swift)

**Framework:** HealthKit  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 9.0+

Creates a new vision prism object, using a single quantity and an alignment angle.

## Declaration

```swift
init(amount: HKQuantity, angle: HKQuantity, eye: HKVisionEye)
```

## Parameters

- `amount`: The strength of the correction, measured in [prismDiopter()](../hkunit/prismdiopter%28%29.md) units.
- `angle`: The orientation of the adjustment, measured in [degreeAngle()](../hkunit/degreeangle%28%29.md) units.
- `eye`: A value indicating which eye the correction applies to: [HKVisionEye.left](../hkvisioneye/left.md) or [HKVisionEye.right](../hkvisioneye/right.md).

## See Also

### Creating vision prism objects

- [init(verticalAmount:verticalBase:horizontalAmount:horizontalBase:eye:)](init%28verticalamount_verticalbase_horizontalamount_horizontalbase_eye_%29.md): Creates a new vision prism object that separates the correction strength into horizontal and vertical components.

# initWithAmount:angle:eye: (Objective-C)

**Framework:** HealthKit  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 9.0+

Creates a new vision prism object, using a single quantity and an alignment angle.

## Declaration

```objectivec
- (instancetype) initWithAmount:(HKQuantity *) amount angle:(HKQuantity *) angle eye:(HKVisionEye) eye;
```

## Parameters

- `amount`: The strength of the correction, measured in [prismDiopterUnit](../hkunit/prismdiopter%28%29.md) units.
- `angle`: The orientation of the adjustment, measured in [degreeAngleUnit](../hkunit/degreeangle%28%29.md) units.
- `eye`: A value indicating which eye the correction applies to: [HKVisionEyeLeft](../hkvisioneye/left.md) or [HKVisionEyeRight](../hkvisioneye/right.md).

## See Also

### Creating vision prism objects

- [initWithVerticalAmount:verticalBase:horizontalAmount:horizontalBase:eye:](init%28verticalamount_verticalbase_horizontalamount_horizontalbase_eye_%29.md): Creates a new vision prism object that separates the correction strength into horizontal and vertical components.
