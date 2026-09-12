> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/homekit/hmnumberrange/init(minvalue:maxvalue:)](https://developer.apple.com/documentation/homekit/hmnumberrange/init(minvalue:maxvalue:))

# init(minValue:maxValue:) (Swift)

**Framework:** HomeKit  
**Kind:** Initializer  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 11.0+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Creates a new number range.

## Declaration

```swift
convenience init(minValue: NSNumber, maxValue: NSNumber)
```

## Parameters

- `minValue`: The minimum value of the range.
- `maxValue`: The maximum value of the range.

<a id="return-value"></a>

## Return Value

An initialized number range.

## See Also

### Creating a number range

- [init(minValue:)](init%28minvalue_%29.md): Creates an one-sided number range with a minimum value.
- [init(maxValue:)](init%28maxvalue_%29.md): Creates a one-sided number range with a maximum value.

# numberRangeWithMinValue:maxValue: (Objective-C)

**Framework:** HomeKit  
**Kind:** Type Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 14.0+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Creates a new number range.

## Declaration

```objectivec
+ (instancetype) numberRangeWithMinValue:(NSNumber *) minValue maxValue:(NSNumber *) maxValue;
```

## Parameters

- `minValue`: The minimum value of the range.
- `maxValue`: The maximum value of the range.

<a id="return-value"></a>

## Return Value

An initialized number range.

## See Also

### Creating a number range

- [numberRangeWithMinValue:](init%28minvalue_%29.md): Creates an one-sided number range with a minimum value.
- [numberRangeWithMaxValue:](init%28maxvalue_%29.md): Creates a one-sided number range with a maximum value.
