> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkunit/unitmultiplied(by:)](https://developer.apple.com/documentation/healthkit/hkunit/unitmultiplied(by:))

# unitMultiplied(by:) (Swift)

**Framework:** HealthKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS · watchOS

Creates a complex unit by multiplying the receiving unit with another unit.

## Declaration

```swift
func unitMultiplied(by unit: HKUnit) -> HKUnit
```

## Parameters

- `unit`: The unit to be multiplied.

<a id="return-value"></a>

## Return Value

A new, complex unit.

<a id="Discussion"></a>

## Discussion

You can create a complex unit by multiplying two units together. For example, you could create a foot-pound unit by multiplying a foot unit by a pound unit as shown below.

**Swift**

```swift
let foot = HKUnit.footUnit()
let pound = HKUnit.poundUnit()
let footPound = foot.unitMultipliedByUnit(pound)
```

**Objective-C**

```objc
HKUnit *foot = [HKUnit footUnit];
HKUnit *pound = [HKUnit poundUnit];
HKUnit *footPound = [foot unitMultipliedByUnit:pound];
```

## See Also

### Related Documentation

- [init(from:)](init%28from_%29-9qont.md): Returns the unit instance described by the provided string.

### Performing unit math

- [unitDivided(by:)](unitdivided%28by_%29.md): Creates a complex unit by dividing the receiving unit by another unit.
- [unitRaised(toPower:)](unitraised%28topower_%29.md): Creates a complex unit by raising the unit to the given power.
- [reciprocal()](reciprocal%28%29.md): Returns a complex unit representing the unit’s reciprocal.

# unitMultipliedByUnit: (Objective-C)

**Framework:** HealthKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS · watchOS

Creates a complex unit by multiplying the receiving unit with another unit.

## Declaration

```objectivec
- (HKUnit *) unitMultipliedByUnit:(HKUnit *) unit;
```

## Parameters

- `unit`: The unit to be multiplied.

<a id="return-value"></a>

## Return Value

A new, complex unit.

<a id="Discussion"></a>

## Discussion

You can create a complex unit by multiplying two units together. For example, you could create a foot-pound unit by multiplying a foot unit by a pound unit as shown below.

**Swift**

```swift
let foot = HKUnit.footUnit()
let pound = HKUnit.poundUnit()
let footPound = foot.unitMultipliedByUnit(pound)
```

**Objective-C**

```objc
HKUnit *foot = [HKUnit footUnit];
HKUnit *pound = [HKUnit poundUnit];
HKUnit *footPound = [foot unitMultipliedByUnit:pound];
```

## See Also

### Related Documentation

- [unitFromString:](init%28from_%29-9qont.md): Returns the unit instance described by the provided string.

### Performing unit math

- [unitDividedByUnit:](unitdivided%28by_%29.md): Creates a complex unit by dividing the receiving unit by another unit.
- [unitRaisedToPower:](unitraised%28topower_%29.md): Creates a complex unit by raising the unit to the given power.
- [reciprocalUnit](reciprocal%28%29.md): Returns a complex unit representing the unit’s reciprocal.
