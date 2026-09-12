> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkunit/unitdivided(by:)](https://developer.apple.com/documentation/healthkit/hkunit/unitdivided(by:))

# unitDivided(by:) (Swift)

**Framework:** HealthKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS · watchOS

Creates a complex unit by dividing the receiving unit by another unit.

## Declaration

```swift
func unitDivided(by unit: HKUnit) -> HKUnit
```

## Parameters

- `unit`: The unit to be divided.

<a id="return-value"></a>

## Return Value

A new, complex unit.

<a id="Discussion"></a>

## Discussion

This method creates a new, complex unit by dividing one unit by another. For example, you can create a meters-per-second unit by dividing a meters unit by a seconds unit, as shown below.

**Swift**

```swift
let meters = HKUnit.meterUnit()
let seconds = HKUnit.secondUnit()
let metersPerSecond = meters.unitDividedByUnit(seconds)
```

**Objective-C**

```objc
HKUnit *meters = [HKUnit meterUnit];
HKUnit *seconds = [HKUnit secondUnit];
HKUnit *metersPerSecond = [meters unitDividedByUnit:seconds];
```

## See Also

### Related Documentation

- [init(from:)](init%28from_%29-9qont.md): Returns the unit instance described by the provided string.

### Performing unit math

- [unitMultiplied(by:)](unitmultiplied%28by_%29.md): Creates a complex unit by multiplying the receiving unit with another unit.
- [unitRaised(toPower:)](unitraised%28topower_%29.md): Creates a complex unit by raising the unit to the given power.
- [reciprocal()](reciprocal%28%29.md): Returns a complex unit representing the unit’s reciprocal.

# unitDividedByUnit: (Objective-C)

**Framework:** HealthKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS · watchOS

Creates a complex unit by dividing the receiving unit by another unit.

## Declaration

```objectivec
- (HKUnit *) unitDividedByUnit:(HKUnit *) unit;
```

## Parameters

- `unit`: The unit to be divided.

<a id="return-value"></a>

## Return Value

A new, complex unit.

<a id="Discussion"></a>

## Discussion

This method creates a new, complex unit by dividing one unit by another. For example, you can create a meters-per-second unit by dividing a meters unit by a seconds unit, as shown below.

**Swift**

```swift
let meters = HKUnit.meterUnit()
let seconds = HKUnit.secondUnit()
let metersPerSecond = meters.unitDividedByUnit(seconds)
```

**Objective-C**

```objc
HKUnit *meters = [HKUnit meterUnit];
HKUnit *seconds = [HKUnit secondUnit];
HKUnit *metersPerSecond = [meters unitDividedByUnit:seconds];
```

## See Also

### Related Documentation

- [unitFromString:](init%28from_%29-9qont.md): Returns the unit instance described by the provided string.

### Performing unit math

- [unitMultipliedByUnit:](unitmultiplied%28by_%29.md): Creates a complex unit by multiplying the receiving unit with another unit.
- [unitRaisedToPower:](unitraised%28topower_%29.md): Creates a complex unit by raising the unit to the given power.
- [reciprocalUnit](reciprocal%28%29.md): Returns a complex unit representing the unit’s reciprocal.
