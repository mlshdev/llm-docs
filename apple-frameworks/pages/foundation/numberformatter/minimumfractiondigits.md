> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/numberformatter/minimumfractiondigits](https://developer.apple.com/documentation/foundation/numberformatter/minimumfractiondigits)

# minimumFractionDigits (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The minimum number of digits after the decimal separator.

## Declaration

```swift
var minimumFractionDigits: Int { get set }
```

<a id="Discussion"></a>

## Discussion

By default, this property is set to `0`.

The following code demonstrates the effect of setting [minimumFractionDigits](minimumfractiondigits.md) when formatting a number:

```swift
var numberFormatter = NumberFormatter()
numberFormatter.minimumFractionDigits = 0 // default
numberFormatter.string(from: 123.456) // 123
numberFormatter.minimumFractionDigits = 5
numberFormatter.string(from: 123.456) // 123.45600
```

## See Also

### Configuring Integer and Fraction Digits

- [minimumIntegerDigits](minimumintegerdigits.md): The minimum number of digits before the decimal separator.
- [maximumIntegerDigits](maximumintegerdigits.md): The maximum number of digits before the decimal separator.
- [maximumFractionDigits](maximumfractiondigits.md): The maximum number of digits after the decimal separator.

# minimumFractionDigits (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The minimum number of digits after the decimal separator.

## Declaration

```objectivec
@property NSUInteger minimumFractionDigits;
```

<a id="Discussion"></a>

## Discussion

By default, this property is set to `0`.

The following code demonstrates the effect of setting [minimumFractionDigits](minimumfractiondigits.md) when formatting a number:

```swift
var numberFormatter = NumberFormatter()
numberFormatter.minimumFractionDigits = 0 // default
numberFormatter.string(from: 123.456) // 123
numberFormatter.minimumFractionDigits = 5
numberFormatter.string(from: 123.456) // 123.45600
```

## See Also

### Configuring Integer and Fraction Digits

- [minimumIntegerDigits](minimumintegerdigits.md): The minimum number of digits before the decimal separator.
- [maximumIntegerDigits](maximumintegerdigits.md): The maximum number of digits before the decimal separator.
- [maximumFractionDigits](maximumfractiondigits.md): The maximum number of digits after the decimal separator.
