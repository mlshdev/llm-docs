> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundation/numberformatter/maximumintegerdigits

# maximumIntegerDigits (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The maximum number of digits before the decimal separator.

## Declaration

```swift
var maximumIntegerDigits: Int { get set }
```

<a id="Discussion"></a>

## Discussion

By default, this property is set to `42`.

The following code demonstrates the effect of setting [maximumIntegerDigits](maximumintegerdigits.md) when formatting a number:

```swift
var numberFormatter = NumberFormatter()

numberFormatter.maximumIntegerDigits = 42 // default
numberFormatter.string(from: 12345) // 12345

numberFormatter.maximumIntegerDigits = 3
numberFormatter.string(from: 12345) // 345
```

## See Also

### Configuring Integer and Fraction Digits

- [minimumIntegerDigits](minimumintegerdigits.md): The minimum number of digits before the decimal separator.
- [minimumFractionDigits](minimumfractiondigits.md): The minimum number of digits after the decimal separator.
- [maximumFractionDigits](maximumfractiondigits.md): The maximum number of digits after the decimal separator.

# maximumIntegerDigits (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The maximum number of digits before the decimal separator.

## Declaration

```objectivec
@property NSUInteger maximumIntegerDigits;
```

<a id="Discussion"></a>

## Discussion

By default, this property is set to `42`.

The following code demonstrates the effect of setting [maximumIntegerDigits](maximumintegerdigits.md) when formatting a number:

```swift
var numberFormatter = NumberFormatter()

numberFormatter.maximumIntegerDigits = 42 // default
numberFormatter.string(from: 12345) // 12345

numberFormatter.maximumIntegerDigits = 3
numberFormatter.string(from: 12345) // 345
```

## See Also

### Configuring Integer and Fraction Digits

- [minimumIntegerDigits](minimumintegerdigits.md): The minimum number of digits before the decimal separator.
- [minimumFractionDigits](minimumfractiondigits.md): The minimum number of digits after the decimal separator.
- [maximumFractionDigits](maximumfractiondigits.md): The maximum number of digits after the decimal separator.
