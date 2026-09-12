> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/numberformatter/minimumintegerdigits](https://developer.apple.com/documentation/foundation/numberformatter/minimumintegerdigits)

# minimumIntegerDigits (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The minimum number of digits before the decimal separator.

## Declaration

```swift
var minimumIntegerDigits: Int { get set }
```

<a id="Discussion"></a>

## Discussion

By default, this property is set to `0`.

The following code demonstrates the effect of setting [minimumIntegerDigits](minimumintegerdigits.md) when formatting a number:

```swift
var numberFormatter = NumberFormatter()

numberFormatter.minimumIntegerDigits = 0 // default
numberFormatter.string(from: 123) // 123

numberFormatter.minimumIntegerDigits = 5
numberFormatter.string(from: 123) // 00123
```

## See Also

### Configuring Integer and Fraction Digits

- [maximumIntegerDigits](maximumintegerdigits.md): The maximum number of digits before the decimal separator.
- [minimumFractionDigits](minimumfractiondigits.md): The minimum number of digits after the decimal separator.
- [maximumFractionDigits](maximumfractiondigits.md): The maximum number of digits after the decimal separator.

# minimumIntegerDigits (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The minimum number of digits before the decimal separator.

## Declaration

```objectivec
@property NSUInteger minimumIntegerDigits;
```

<a id="Discussion"></a>

## Discussion

By default, this property is set to `0`.

The following code demonstrates the effect of setting [minimumIntegerDigits](minimumintegerdigits.md) when formatting a number:

```swift
var numberFormatter = NumberFormatter()

numberFormatter.minimumIntegerDigits = 0 // default
numberFormatter.string(from: 123) // 123

numberFormatter.minimumIntegerDigits = 5
numberFormatter.string(from: 123) // 00123
```

## See Also

### Configuring Integer and Fraction Digits

- [maximumIntegerDigits](maximumintegerdigits.md): The maximum number of digits before the decimal separator.
- [minimumFractionDigits](minimumfractiondigits.md): The minimum number of digits after the decimal separator.
- [maximumFractionDigits](maximumfractiondigits.md): The maximum number of digits after the decimal separator.
