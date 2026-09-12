> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/numberformatter/attributedstringforzero](https://developer.apple.com/documentation/foundation/numberformatter/attributedstringforzero)

# attributedStringForZero (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** macOS 10.0+

The attributed string that the receiver uses to display zero values.

## Declaration

```swift
@NSCopying var attributedStringForZero: NSAttributedString { get set }
```

<a id="Discussion"></a>

## Discussion

By default zero values are displayed according to the format specified for positive values; for more discussion of this subject see [Data Formatting Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/DataFormatting/DataFormatting.html#//apple_ref/doc/uid/10000029i).

<a id="Special-Considerations"></a>

### Special Considerations

This method is for use with formatters using `NSNumberFormatterBehavior10_0` behavior.

## See Also

### Configuring the Display of Numeric Values

- [textAttributesForNegativeValues](textattributesfornegativevalues.md): The text attributes to be used in displaying negative values.
- [textAttributesForPositiveValues](textattributesforpositivevalues.md): The text attributes to be used in displaying positive values.
- [textAttributesForZero](textattributesforzero.md): The text attributes used to display a zero value.
- [attributedStringForNil](attributedstringfornil.md): The attributed string the receiver uses to display `nil` values.
- [textAttributesForNil](textattributesfornil.md): The text attributes used to display the `nil` symbol.
- [attributedStringForNotANumber](attributedstringfornotanumber.md): The attributed string the receiver uses to display “not a number” values.
- [textAttributesForNotANumber](textattributesfornotanumber.md): The text attributes used to display the NaN (“not a number”) string.
- [textAttributesForPositiveInfinity](textattributesforpositiveinfinity.md): The text attributes used to display the positive infinity symbol.
- [textAttributesForNegativeInfinity](textattributesfornegativeinfinity.md): The text attributes used to display the negative infinity symbol.

# attributedStringForZero (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** macOS 10.0+

The attributed string that the receiver uses to display zero values.

## Declaration

```objectivec
@property (copy) NSAttributedString * attributedStringForZero;
```

<a id="Discussion"></a>

## Discussion

By default zero values are displayed according to the format specified for positive values; for more discussion of this subject see [Data Formatting Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/DataFormatting/DataFormatting.html#//apple_ref/doc/uid/10000029i).

<a id="Special-Considerations"></a>

### Special Considerations

This method is for use with formatters using `NSNumberFormatterBehavior10_0` behavior.

## See Also

### Configuring the Display of Numeric Values

- [textAttributesForNegativeValues](textattributesfornegativevalues.md): The text attributes to be used in displaying negative values.
- [textAttributesForPositiveValues](textattributesforpositivevalues.md): The text attributes to be used in displaying positive values.
- [textAttributesForZero](textattributesforzero.md): The text attributes used to display a zero value.
- [attributedStringForNil](attributedstringfornil.md): The attributed string the receiver uses to display `nil` values.
- [textAttributesForNil](textattributesfornil.md): The text attributes used to display the `nil` symbol.
- [attributedStringForNotANumber](attributedstringfornotanumber.md): The attributed string the receiver uses to display “not a number” values.
- [textAttributesForNotANumber](textattributesfornotanumber.md): The text attributes used to display the NaN (“not a number”) string.
- [textAttributesForPositiveInfinity](textattributesforpositiveinfinity.md): The text attributes used to display the positive infinity symbol.
- [textAttributesForNegativeInfinity](textattributesfornegativeinfinity.md): The text attributes used to display the negative infinity symbol.
