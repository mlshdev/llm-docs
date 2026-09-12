> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/numberformatter/zerosymbol](https://developer.apple.com/documentation/foundation/numberformatter/zerosymbol)

# zeroSymbol (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The string used to represent a zero value.

## Declaration

```swift
var zeroSymbol: String? { get set }
```

<a id="Discussion"></a>

## Discussion

If not specified, zero values are formatted normally.

You might, for example, set this property to “``` ``-`` ```” in a spreadsheet used for accounting.

## See Also

### Configuring Numeric Symbols

- [percentSymbol](percentsymbol.md): The string used to represent a percent symbol.
- [perMillSymbol](permillsymbol.md): The string used to represent a per-mill (per-thousand) symbol.
- [minusSign](minussign.md): The string used to represent a minus sign.
- [plusSign](plussign.md): The string used to represent a plus sign.
- [exponentSymbol](exponentsymbol.md): The string used to represent an exponent symbol.
- [nilSymbol](nilsymbol.md): The string used to represent a `nil` value.
- [notANumberSymbol](notanumbersymbol.md): The string used to represent a NaN (“not a number”) value.
- [negativeInfinitySymbol](negativeinfinitysymbol.md): The string used to represent a negative infinity symbol.
- [positiveInfinitySymbol](positiveinfinitysymbol.md): The string used to represent a positive infinity symbol.

# zeroSymbol (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The string used to represent a zero value.

## Declaration

```objectivec
@property (copy, nullable) NSString * zeroSymbol;
```

<a id="Discussion"></a>

## Discussion

If not specified, zero values are formatted normally.

You might, for example, set this property to “``` ``-`` ```” in a spreadsheet used for accounting.

## See Also

### Configuring Numeric Symbols

- [percentSymbol](percentsymbol.md): The string used to represent a percent symbol.
- [perMillSymbol](permillsymbol.md): The string used to represent a per-mill (per-thousand) symbol.
- [minusSign](minussign.md): The string used to represent a minus sign.
- [plusSign](plussign.md): The string used to represent a plus sign.
- [exponentSymbol](exponentsymbol.md): The string used to represent an exponent symbol.
- [nilSymbol](nilsymbol.md): The string used to represent a `nil` value.
- [notANumberSymbol](notanumbersymbol.md): The string used to represent a NaN (“not a number”) value.
- [negativeInfinitySymbol](negativeinfinitysymbol.md): The string used to represent a negative infinity symbol.
- [positiveInfinitySymbol](positiveinfinitysymbol.md): The string used to represent a positive infinity symbol.
