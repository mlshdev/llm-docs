> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkunit/unitraised(topower:)](https://developer.apple.com/documentation/healthkit/hkunit/unitraised(topower:))

# unitRaised(toPower:) (Swift)

**Framework:** HealthKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS · watchOS

Creates a complex unit by raising the unit to the given power.

## Declaration

```swift
func unitRaised(toPower power: Int) -> HKUnit
```

## Parameters

- `power`: The power by which to raise the unit.

<a id="return-value"></a>

## Return Value

A new, complex unit.

<a id="Discussion"></a>

## Discussion

This method creates a new, complex unit by raising the unit this method is called on by the given power. This task is often only one step in a series of operations. For example, you can use this method to create a meters-per-second-squared unit as shown below.

**Swift**

```swift
let meters = HKUnit.meterUnit()
let seconds = HKUnit.secondUnit()
let squaredSeconds = seconds.unitRaisedToPower(2)
let metersPerSecondSquared = meters.unitDividedByUnit(squaredSeconds)
```

**Objective-C**

```objc
HKUnit *meters = [HKUnit meterUnit];
HKUnit *seconds = [HKUnit secondUnit];
HKUnit *squaredSeconds = [seconds unitRaisedToPower:2];
HKUnit *metersPerSecondSquared = [meters unitDividedByUnit:squaredSeconds];
```

## See Also

### Related Documentation

- [init(from:)](init%28from_%29-9qont.md): Returns the unit instance described by the provided string.

### Performing unit math

- [unitMultiplied(by:)](unitmultiplied%28by_%29.md): Creates a complex unit by multiplying the receiving unit with another unit.
- [unitDivided(by:)](unitdivided%28by_%29.md): Creates a complex unit by dividing the receiving unit by another unit.
- [reciprocal()](reciprocal%28%29.md): Returns a complex unit representing the unit’s reciprocal.

# unitRaisedToPower: (Objective-C)

**Framework:** HealthKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS · watchOS

Creates a complex unit by raising the unit to the given power.

## Declaration

```objectivec
- (HKUnit *) unitRaisedToPower:(NSInteger) power;
```

## Parameters

- `power`: The power by which to raise the unit.

<a id="return-value"></a>

## Return Value

A new, complex unit.

<a id="Discussion"></a>

## Discussion

This method creates a new, complex unit by raising the unit this method is called on by the given power. This task is often only one step in a series of operations. For example, you can use this method to create a meters-per-second-squared unit as shown below.

**Swift**

```swift
let meters = HKUnit.meterUnit()
let seconds = HKUnit.secondUnit()
let squaredSeconds = seconds.unitRaisedToPower(2)
let metersPerSecondSquared = meters.unitDividedByUnit(squaredSeconds)
```

**Objective-C**

```objc
HKUnit *meters = [HKUnit meterUnit];
HKUnit *seconds = [HKUnit secondUnit];
HKUnit *squaredSeconds = [seconds unitRaisedToPower:2];
HKUnit *metersPerSecondSquared = [meters unitDividedByUnit:squaredSeconds];
```

## See Also

### Related Documentation

- [unitFromString:](init%28from_%29-9qont.md): Returns the unit instance described by the provided string.

### Performing unit math

- [unitMultipliedByUnit:](unitmultiplied%28by_%29.md): Creates a complex unit by multiplying the receiving unit with another unit.
- [unitDividedByUnit:](unitdivided%28by_%29.md): Creates a complex unit by dividing the receiving unit by another unit.
- [reciprocalUnit](reciprocal%28%29.md): Returns a complex unit representing the unit’s reciprocal.
