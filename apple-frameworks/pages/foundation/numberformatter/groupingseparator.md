> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/numberformatter/groupingseparator](https://developer.apple.com/documentation/foundation/numberformatter/groupingseparator)

# groupingSeparator (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The string used by the receiver for a grouping separator.

## Declaration

```swift
var groupingSeparator: String! { get set }
```

<a id="Discussion"></a>

## Discussion

For example, the grouping separator used in the United States is the comma (“10,000”) whereas in France it is the space (“10 000”).

## See Also

### Configuring Separators and Grouping Size

- [usesGroupingSeparator](usesgroupingseparator.md): Determines whether the receiver displays the group separator.
- [thousandSeparator](thousandseparator.md): The character the receiver uses as a thousand separator.
- [hasThousandSeparators](hasthousandseparators.md): Determines whether the receiver uses thousand separators.
- [decimalSeparator](decimalseparator.md): The character the receiver uses as a decimal separator.
- [alwaysShowsDecimalSeparator](alwaysshowsdecimalseparator.md): Determines whether the receiver always shows the decimal separator, even for integer numbers.
- [currencyDecimalSeparator](currencydecimalseparator.md): The string used by the receiver as a currency decimal separator.
- [groupingSize](groupingsize.md): The grouping size of the receiver.
- [secondaryGroupingSize](secondarygroupingsize.md): The secondary grouping size of the receiver.

# groupingSeparator (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The string used by the receiver for a grouping separator.

## Declaration

```objectivec
@property (copy, null_resettable) NSString * groupingSeparator;
```

<a id="Discussion"></a>

## Discussion

For example, the grouping separator used in the United States is the comma (“10,000”) whereas in France it is the space (“10 000”).

## See Also

### Configuring Separators and Grouping Size

- [usesGroupingSeparator](usesgroupingseparator.md): Determines whether the receiver displays the group separator.
- [thousandSeparator](thousandseparator.md): The character the receiver uses as a thousand separator.
- [hasThousandSeparators](hasthousandseparators.md): Determines whether the receiver uses thousand separators.
- [decimalSeparator](decimalseparator.md): The character the receiver uses as a decimal separator.
- [alwaysShowsDecimalSeparator](alwaysshowsdecimalseparator.md): Determines whether the receiver always shows the decimal separator, even for integer numbers.
- [currencyDecimalSeparator](currencydecimalseparator.md): The string used by the receiver as a currency decimal separator.
- [groupingSize](groupingsize.md): The grouping size of the receiver.
- [secondaryGroupingSize](secondarygroupingsize.md): The secondary grouping size of the receiver.
