> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/homekit/hmnumberrange/init(maxvalue:)](https://developer.apple.com/documentation/homekit/hmnumberrange/init(maxvalue:))

# init(maxValue:) (Swift)

**Framework:** HomeKit  
**Kind:** Initializer  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 11.0+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Creates a one-sided number range with a maximum value.

## Declaration

```swift
convenience init(maxValue: NSNumber)
```

## Parameters

- `maxValue`: The maximum value of the range.

<a id="return-value"></a>

## Return Value

An initialized number range, with the minimum value set to an arbitrarily large negative value.

## See Also

### Creating a number range

- [init(minValue:maxValue:)](init%28minvalue_maxvalue_%29.md): Creates a new number range.
- [init(minValue:)](init%28minvalue_%29.md): Creates an one-sided number range with a minimum value.

# numberRangeWithMaxValue: (Objective-C)

**Framework:** HomeKit  
**Kind:** Type Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 14.0+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Creates a one-sided number range with a maximum value.

## Declaration

```objectivec
+ (instancetype) numberRangeWithMaxValue:(NSNumber *) maxValue;
```

## Parameters

- `maxValue`: The maximum value of the range.

<a id="return-value"></a>

## Return Value

An initialized number range, with the minimum value set to an arbitrarily large negative value.

## See Also

### Creating a number range

- [numberRangeWithMinValue:maxValue:](init%28minvalue_maxvalue_%29.md): Creates a new number range.
- [numberRangeWithMinValue:](init%28minvalue_%29.md): Creates an one-sided number range with a minimum value.
