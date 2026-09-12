> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/numberformatter/minimumsignificantdigits](https://developer.apple.com/documentation/foundation/numberformatter/minimumsignificantdigits)

# minimumSignificantDigits (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The minimum number of significant digits for the number formatter.

## Declaration

```swift
var minimumSignificantDigits: Int { get set }
```

<a id="Discussion"></a>

## Discussion

You must set the [usesSignificantDigits](usessignificantdigits.md) property to [true](https://developer.apple.com/documentation/swift/true) in order for this property to affect formatting behavior. By default, the minimum number of significant digits is 1.

The following code demonstrates the effect of setting [minimumSignificantDigits](minimumsignificantdigits.md) when formatting various numbers:

```swift
var numberFormatter = NumberFormatter()
numberFormatter.usesSignificantDigits = true
numberFormatter.minimumSignificantDigits = 4

numberFormatter.string(from: 123) // 123.0
numberFormatter.string(from: 123.45) // 123.45
numberFormatter.string(from: 100.23) // 100.23
numberFormatter.string(from: 1.2300) // 1.230
numberFormatter.string(from: 0.000123) // 0.0001230
```

## See Also

### Configuring Significant Digits

- [usesSignificantDigits](usessignificantdigits.md): A Boolean value indicating whether the formatter uses minimum and maximum significant digits when formatting numbers.
- [maximumSignificantDigits](maximumsignificantdigits.md): The maximum number of significant digits for the number formatter.

# minimumSignificantDigits (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The minimum number of significant digits for the number formatter.

## Declaration

```objectivec
@property NSUInteger minimumSignificantDigits;
```

<a id="Discussion"></a>

## Discussion

You must set the [usesSignificantDigits](usessignificantdigits.md) property to [true](https://developer.apple.com/documentation/swift/true) in order for this property to affect formatting behavior. By default, the minimum number of significant digits is 1.

The following code demonstrates the effect of setting [minimumSignificantDigits](minimumsignificantdigits.md) when formatting various numbers:

```swift
var numberFormatter = NumberFormatter()
numberFormatter.usesSignificantDigits = true
numberFormatter.minimumSignificantDigits = 4

numberFormatter.string(from: 123) // 123.0
numberFormatter.string(from: 123.45) // 123.45
numberFormatter.string(from: 100.23) // 100.23
numberFormatter.string(from: 1.2300) // 1.230
numberFormatter.string(from: 0.000123) // 0.0001230
```

## See Also

### Configuring Significant Digits

- [usesSignificantDigits](usessignificantdigits.md): A Boolean value indicating whether the formatter uses minimum and maximum significant digits when formatting numbers.
- [maximumSignificantDigits](maximumsignificantdigits.md): The maximum number of significant digits for the number formatter.
