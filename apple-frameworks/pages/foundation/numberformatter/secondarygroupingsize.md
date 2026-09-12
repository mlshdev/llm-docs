> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/numberformatter/secondarygroupingsize](https://developer.apple.com/documentation/foundation/numberformatter/secondarygroupingsize)

# secondaryGroupingSize (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The secondary grouping size of the receiver.

## Declaration

```swift
var secondaryGroupingSize: Int { get set }
```

<a id="Discussion"></a>

## Discussion

Some locales allow the specification of another grouping size for larger numbers. For example, some locales may represent a number such as 61, 242, 378.46 (as in the United States) as 6,12,42,378.46. In this case, the secondary grouping size (covering the groups of digits furthest from the decimal point) is 2.

## See Also

### Configuring Separators and Grouping Size

- [groupingSeparator](groupingseparator.md): The string used by the receiver for a grouping separator.
- [usesGroupingSeparator](usesgroupingseparator.md): Determines whether the receiver displays the group separator.
- [thousandSeparator](thousandseparator.md): The character the receiver uses as a thousand separator.
- [hasThousandSeparators](hasthousandseparators.md): Determines whether the receiver uses thousand separators.
- [decimalSeparator](decimalseparator.md): The character the receiver uses as a decimal separator.
- [alwaysShowsDecimalSeparator](alwaysshowsdecimalseparator.md): Determines whether the receiver always shows the decimal separator, even for integer numbers.
- [currencyDecimalSeparator](currencydecimalseparator.md): The string used by the receiver as a currency decimal separator.
- [groupingSize](groupingsize.md): The grouping size of the receiver.

# secondaryGroupingSize (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The secondary grouping size of the receiver.

## Declaration

```objectivec
@property NSUInteger secondaryGroupingSize;
```

<a id="Discussion"></a>

## Discussion

Some locales allow the specification of another grouping size for larger numbers. For example, some locales may represent a number such as 61, 242, 378.46 (as in the United States) as 6,12,42,378.46. In this case, the secondary grouping size (covering the groups of digits furthest from the decimal point) is 2.

## See Also

### Configuring Separators and Grouping Size

- [groupingSeparator](groupingseparator.md): The string used by the receiver for a grouping separator.
- [usesGroupingSeparator](usesgroupingseparator.md): Determines whether the receiver displays the group separator.
- [thousandSeparator](thousandseparator.md): The character the receiver uses as a thousand separator.
- [hasThousandSeparators](hasthousandseparators.md): Determines whether the receiver uses thousand separators.
- [decimalSeparator](decimalseparator.md): The character the receiver uses as a decimal separator.
- [alwaysShowsDecimalSeparator](alwaysshowsdecimalseparator.md): Determines whether the receiver always shows the decimal separator, even for integer numbers.
- [currencyDecimalSeparator](currencydecimalseparator.md): The string used by the receiver as a currency decimal separator.
- [groupingSize](groupingsize.md): The grouping size of the receiver.
