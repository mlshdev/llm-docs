> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/numberformatter/thousandseparator](https://developer.apple.com/documentation/foundation/numberformatter/thousandseparator)

# thousandSeparator (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** macOS 10.0+

The character the receiver uses as a thousand separator.

## Declaration

```swift
var thousandSeparator: String! { get set }
```

<a id="Discussion"></a>

## Discussion

If you don’t have thousand separators enabled through any other means (such as [format](format.md)), using this method enables them.

<a id="Special-Considerations"></a>

### Special Considerations

This method is for use with formatters using `NSNumberFormatterBehavior10_0` behavior.

## See Also

### Configuring Separators and Grouping Size

- [groupingSeparator](groupingseparator.md): The string used by the receiver for a grouping separator.
- [usesGroupingSeparator](usesgroupingseparator.md): Determines whether the receiver displays the group separator.
- [hasThousandSeparators](hasthousandseparators.md): Determines whether the receiver uses thousand separators.
- [decimalSeparator](decimalseparator.md): The character the receiver uses as a decimal separator.
- [alwaysShowsDecimalSeparator](alwaysshowsdecimalseparator.md): Determines whether the receiver always shows the decimal separator, even for integer numbers.
- [currencyDecimalSeparator](currencydecimalseparator.md): The string used by the receiver as a currency decimal separator.
- [groupingSize](groupingsize.md): The grouping size of the receiver.
- [secondaryGroupingSize](secondarygroupingsize.md): The secondary grouping size of the receiver.

# thousandSeparator (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** macOS 10.0+

The character the receiver uses as a thousand separator.

## Declaration

```objectivec
@property (copy, null_resettable) NSString * thousandSeparator;
```

<a id="Discussion"></a>

## Discussion

If you don’t have thousand separators enabled through any other means (such as [format](format.md)), using this method enables them.

<a id="Special-Considerations"></a>

### Special Considerations

This method is for use with formatters using `NSNumberFormatterBehavior10_0` behavior.

## See Also

### Configuring Separators and Grouping Size

- [groupingSeparator](groupingseparator.md): The string used by the receiver for a grouping separator.
- [usesGroupingSeparator](usesgroupingseparator.md): Determines whether the receiver displays the group separator.
- [hasThousandSeparators](hasthousandseparators.md): Determines whether the receiver uses thousand separators.
- [decimalSeparator](decimalseparator.md): The character the receiver uses as a decimal separator.
- [alwaysShowsDecimalSeparator](alwaysshowsdecimalseparator.md): Determines whether the receiver always shows the decimal separator, even for integer numbers.
- [currencyDecimalSeparator](currencydecimalseparator.md): The string used by the receiver as a currency decimal separator.
- [groupingSize](groupingsize.md): The grouping size of the receiver.
- [secondaryGroupingSize](secondarygroupingsize.md): The secondary grouping size of the receiver.
