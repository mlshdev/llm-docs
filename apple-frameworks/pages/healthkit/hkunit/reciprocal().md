> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkunit/reciprocal()](https://developer.apple.com/documentation/healthkit/hkunit/reciprocal())

# reciprocal() (Swift)

**Framework:** HealthKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS · watchOS

Returns a complex unit representing the unit’s reciprocal.

## Declaration

```swift
func reciprocal() -> HKUnit
```

<a id="return-value"></a>

## Return Value

A complex unit that is the reciprocal of the unit the method was called on.

<a id="Discussion"></a>

## Discussion

This method creates a new, complex unit by dividing 1 by the unit the method was called on. This is often only one step in a series of operations. For example, you can use this method to create a meters-per-second unit, as shown below.

**Swift**

```swift
let meters = HKUnit.meterUnit()
let seconds = HKUnit.secondUnit()
let secondsInverse = seconds.reciprocalUnit()
let metersPerSecond = meters.unitMultipliedByUnit(secondsInverse)
```

**Objective-C**

```objc
HKUnit *meters = [HKUnit meterUnit];
HKUnit *seconds = [HKUnit secondUnit];
HKUnit *secondsInverse = [seconds reciprocalUnit];
HKUnit *metersPerSecond = [meters unitMultipliedByUnit:secondsInverse];
```

## See Also

### Related Documentation

- [init(from:)](init%28from_%29-9qont.md): Returns the unit instance described by the provided string.

### Performing unit math

- [unitMultiplied(by:)](unitmultiplied%28by_%29.md): Creates a complex unit by multiplying the receiving unit with another unit.
- [unitDivided(by:)](unitdivided%28by_%29.md): Creates a complex unit by dividing the receiving unit by another unit.
- [unitRaised(toPower:)](unitraised%28topower_%29.md): Creates a complex unit by raising the unit to the given power.

# reciprocalUnit (Objective-C)

**Framework:** HealthKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS · watchOS

Returns a complex unit representing the unit’s reciprocal.

## Declaration

```objectivec
- (HKUnit *) reciprocalUnit;
```

<a id="return-value"></a>

## Return Value

A complex unit that is the reciprocal of the unit the method was called on.

<a id="Discussion"></a>

## Discussion

This method creates a new, complex unit by dividing 1 by the unit the method was called on. This is often only one step in a series of operations. For example, you can use this method to create a meters-per-second unit, as shown below.

**Swift**

```swift
let meters = HKUnit.meterUnit()
let seconds = HKUnit.secondUnit()
let secondsInverse = seconds.reciprocalUnit()
let metersPerSecond = meters.unitMultipliedByUnit(secondsInverse)
```

**Objective-C**

```objc
HKUnit *meters = [HKUnit meterUnit];
HKUnit *seconds = [HKUnit secondUnit];
HKUnit *secondsInverse = [seconds reciprocalUnit];
HKUnit *metersPerSecond = [meters unitMultipliedByUnit:secondsInverse];
```

## See Also

### Related Documentation

- [unitFromString:](init%28from_%29-9qont.md): Returns the unit instance described by the provided string.

### Performing unit math

- [unitMultipliedByUnit:](unitmultiplied%28by_%29.md): Creates a complex unit by multiplying the receiving unit with another unit.
- [unitDividedByUnit:](unitdivided%28by_%29.md): Creates a complex unit by dividing the receiving unit by another unit.
- [unitRaisedToPower:](unitraised%28topower_%29.md): Creates a complex unit by raising the unit to the given power.
