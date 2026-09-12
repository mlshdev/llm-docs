> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/numberformatter/maximumfractiondigits](https://developer.apple.com/documentation/foundation/numberformatter/maximumfractiondigits)

# maximumFractionDigits (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The maximum number of digits after the decimal separator.

## Declaration

```swift
var maximumFractionDigits: Int { get set }
```

<a id="Discussion"></a>

## Discussion

By default, this property is set to `0`.

The following code demonstrates the effect of setting [maximumFractionDigits](maximumfractiondigits.md) when formatting a number:

```swift
var numberFormatter = NumberFormatter()

numberFormatter.maximumFractionDigits = 0 // default
numberFormatter.string(from: 123.456) // 123

numberFormatter.maximumFractionDigits = 3
numberFormatter.string(from: 123.456789) // 123.457
```

## See Also

### Configuring Integer and Fraction Digits

- [minimumIntegerDigits](minimumintegerdigits.md): The minimum number of digits before the decimal separator.
- [maximumIntegerDigits](maximumintegerdigits.md): The maximum number of digits before the decimal separator.
- [minimumFractionDigits](minimumfractiondigits.md): The minimum number of digits after the decimal separator.

# maximumFractionDigits (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The maximum number of digits after the decimal separator.

## Declaration

```objectivec
@property NSUInteger maximumFractionDigits;
```

<a id="Discussion"></a>

## Discussion

By default, this property is set to `0`.

The following code demonstrates the effect of setting [maximumFractionDigits](maximumfractiondigits.md) when formatting a number:

```swift
var numberFormatter = NumberFormatter()

numberFormatter.maximumFractionDigits = 0 // default
numberFormatter.string(from: 123.456) // 123

numberFormatter.maximumFractionDigits = 3
numberFormatter.string(from: 123.456789) // 123.457
```

## See Also

### Configuring Integer and Fraction Digits

- [minimumIntegerDigits](minimumintegerdigits.md): The minimum number of digits before the decimal separator.
- [maximumIntegerDigits](maximumintegerdigits.md): The maximum number of digits before the decimal separator.
- [minimumFractionDigits](minimumfractiondigits.md): The minimum number of digits after the decimal separator.
