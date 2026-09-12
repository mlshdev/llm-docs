> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/numberformatter/maximumsignificantdigits](https://developer.apple.com/documentation/foundation/numberformatter/maximumsignificantdigits)

# maximumSignificantDigits (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The maximum number of significant digits for the number formatter.

## Declaration

```swift
var maximumSignificantDigits: Int { get set }
```

<a id="Discussion"></a>

## Discussion

You must set the [usesSignificantDigits](usessignificantdigits.md) property to [true](https://developer.apple.com/documentation/swift/true) in order for this property to affect formatting behavior.  By default, the maximum number of significant digits is 6. Values less than 1 are ignored.

The following code demonstrates the effect of setting [maximumSignificantDigits](maximumsignificantdigits.md) when formatting various numbers:

```swift
var numberFormatter = NumberFormatter()
numberFormatter.usesSignificantDigits = true
numberFormatter.maximumSignificantDigits = 4

numberFormatter.string(from: 12345) // 12340
numberFormatter.string(from: 123.456) // 123.5
numberFormatter.string(from: 100.234) // 100.2
numberFormatter.string(from: 1.230) // 1.23
numberFormatter.string(from: 0.00012345) // 0.0001234
```

## See Also

### Configuring Significant Digits

- [usesSignificantDigits](usessignificantdigits.md): A Boolean value indicating whether the formatter uses minimum and maximum significant digits when formatting numbers.
- [minimumSignificantDigits](minimumsignificantdigits.md): The minimum number of significant digits for the number formatter.

# maximumSignificantDigits (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The maximum number of significant digits for the number formatter.

## Declaration

```objectivec
@property NSUInteger maximumSignificantDigits;
```

<a id="Discussion"></a>

## Discussion

You must set the [usesSignificantDigits](usessignificantdigits.md) property to [true](https://developer.apple.com/documentation/swift/true) in order for this property to affect formatting behavior.  By default, the maximum number of significant digits is 6. Values less than 1 are ignored.

The following code demonstrates the effect of setting [maximumSignificantDigits](maximumsignificantdigits.md) when formatting various numbers:

```swift
var numberFormatter = NumberFormatter()
numberFormatter.usesSignificantDigits = true
numberFormatter.maximumSignificantDigits = 4

numberFormatter.string(from: 12345) // 12340
numberFormatter.string(from: 123.456) // 123.5
numberFormatter.string(from: 100.234) // 100.2
numberFormatter.string(from: 1.230) // 1.23
numberFormatter.string(from: 0.00012345) // 0.0001234
```

## See Also

### Configuring Significant Digits

- [usesSignificantDigits](usessignificantdigits.md): A Boolean value indicating whether the formatter uses minimum and maximum significant digits when formatting numbers.
- [minimumSignificantDigits](minimumsignificantdigits.md): The minimum number of significant digits for the number formatter.
