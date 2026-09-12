> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/homekit/hmnumberrange/init(minvalue:)](https://developer.apple.com/documentation/homekit/hmnumberrange/init(minvalue:))

# init(minValue:) (Swift)

**Framework:** HomeKit  
**Kind:** Initializer  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 11.0+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Creates an one-sided number range with a minimum value.

## Declaration

```swift
convenience init(minValue: NSNumber)
```

## Parameters

- `minValue`: The minimum value of the range.

<a id="return-value"></a>

## Return Value

An initialized number range, with the maximum value set to an arbitrarily large value.

## See Also

### Creating a number range

- [init(minValue:maxValue:)](init%28minvalue_maxvalue_%29.md): Creates a new number range.
- [init(maxValue:)](init%28maxvalue_%29.md): Creates a one-sided number range with a maximum value.

# numberRangeWithMinValue: (Objective-C)

**Framework:** HomeKit  
**Kind:** Type Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 14.0+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Creates an one-sided number range with a minimum value.

## Declaration

```objectivec
+ (instancetype) numberRangeWithMinValue:(NSNumber *) minValue;
```

## Parameters

- `minValue`: The minimum value of the range.

<a id="return-value"></a>

## Return Value

An initialized number range, with the maximum value set to an arbitrarily large value.

## See Also

### Creating a number range

- [numberRangeWithMinValue:maxValue:](init%28minvalue_maxvalue_%29.md): Creates a new number range.
- [numberRangeWithMaxValue:](init%28maxvalue_%29.md): Creates a one-sided number range with a maximum value.
