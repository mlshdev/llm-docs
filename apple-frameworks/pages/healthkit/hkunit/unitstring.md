> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkunit/unitstring](https://developer.apple.com/documentation/healthkit/hkunit/unitstring)

# unitString (Swift)

**Framework:** HealthKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 2.0+

A string representation of the unit object.

## Declaration

```swift
var unitString: String { get }
```

<a id="Discussion"></a>

## Discussion

This property contains a string using the format required by [init(from:)](init%28from_%29-9qont.md).

## See Also

### Related Documentation

- [reciprocal()](reciprocal%28%29.md): Returns a complex unit representing the unit’s reciprocal.
- [unitMultiplied(by:)](unitmultiplied%28by_%29.md): Creates a complex unit by multiplying the receiving unit with another unit.
- [unitRaised(toPower:)](unitraised%28topower_%29.md): Creates a complex unit by raising the unit to the given power.
- [unitDivided(by:)](unitdivided%28by_%29.md): Creates a complex unit by dividing the receiving unit by another unit.

### Working with units

- [init(from:)](init%28from_%29-9qont.md): Returns the unit instance described by the provided string.
- [isNull()](isnull%28%29.md): Returns a Boolean value indicating whether the unit is null.

# unitString (Objective-C)

**Framework:** HealthKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 2.0+

A string representation of the unit object.

## Declaration

```objectivec
@property (strong, readonly) NSString * unitString;
```

<a id="Discussion"></a>

## Discussion

This property contains a string using the format required by [unitFromString:](init%28from_%29-9qont.md).

## See Also

### Related Documentation

- [reciprocalUnit](reciprocal%28%29.md): Returns a complex unit representing the unit’s reciprocal.
- [unitMultipliedByUnit:](unitmultiplied%28by_%29.md): Creates a complex unit by multiplying the receiving unit with another unit.
- [unitRaisedToPower:](unitraised%28topower_%29.md): Creates a complex unit by raising the unit to the given power.
- [unitDividedByUnit:](unitdivided%28by_%29.md): Creates a complex unit by dividing the receiving unit by another unit.

### Working with units

- [unitFromString:](init%28from_%29-9qont.md): Returns the unit instance described by the provided string.
- [isNull](isnull%28%29.md): Returns a Boolean value indicating whether the unit is null.
