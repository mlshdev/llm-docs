> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/formatstyle/currency(code:)-1yg68](https://developer.apple.com/documentation/foundation/formatstyle/currency(code:)-1yg68)

# currency(code:)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Returns a format style to use floating-point currency notation.

## Declaration

```swift
static func currency<Value>(code: String) -> Self where Self == FloatingPointFormatStyle<Value>.Currency, Value : BinaryFloatingPoint
```

## Parameters

- `code`: The currency code to use, such as `EUR` or `JPY`. See ISO-4217 for a list of valid codes.

<a id="return-value"></a>

## Return Value

A floating-point format style that uses the specified currency code.

<a id="Discussion"></a>

## Discussion

Use the dot-notation form of this method when the call point allows the use of [FloatingPointFormatStyle](../floatingpointformatstyle.md). You typically do this when calling the `formatted` methods of types that conform to [BinaryFloatingPoint](https://developer.apple.com/documentation/swift/binaryfloatingpoint).

The following example creates an array of doubles, then uses [formatted(\_:)](https://developer.apple.com/documentation/swift/binaryfloatingpoint/formatted%28_:%29-83x4n) and the currency style provided by this method to format the doubles as US dollars:

```swift
let nums: [Double] = [100.01, 1000.02, 10000.03, 100000.04, 1000000.05]
let currencyNums = nums.map { $0.formatted(
    .currency(code:"USD")) } // ["$100.01", "$1,000.02", "$10,000.03", "$100,000.04", "$1,000,000.05"]
```

## See Also

### Applying currency styles

- [currency(code:)](currency%28code_%29-is0v.md): Returns a format style to use integer currency notation.
- [currency(code:)](currency%28code_%29-6fhr2.md): Conforms when `Self` is `Decimal.FormatStyle.Currency`. Returns a format style to use decimal currency notation.
