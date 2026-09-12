> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/numberformatter/attributedstringfornil](https://developer.apple.com/documentation/foundation/numberformatter/attributedstringfornil)

# attributedStringForNil (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** macOS 10.0+

The attributed string the receiver uses to display `nil` values.

## Declaration

```swift
@NSCopying var attributedStringForNil: NSAttributedString { get set }
```

<a id="Discussion"></a>

## Discussion

By default `nil` values are displayed as an empty string.

<a id="Special-Considerations"></a>

### Special Considerations

This method is for use with formatters using `NSNumberFormatterBehavior10_0` behavior.

## See Also

### Configuring the Display of Numeric Values

- [textAttributesForNegativeValues](textattributesfornegativevalues.md): The text attributes to be used in displaying negative values.
- [textAttributesForPositiveValues](textattributesforpositivevalues.md): The text attributes to be used in displaying positive values.
- [attributedStringForZero](attributedstringforzero.md): The attributed string that the receiver uses to display zero values.
- [textAttributesForZero](textattributesforzero.md): The text attributes used to display a zero value.
- [textAttributesForNil](textattributesfornil.md): The text attributes used to display the `nil` symbol.
- [attributedStringForNotANumber](attributedstringfornotanumber.md): The attributed string the receiver uses to display “not a number” values.
- [textAttributesForNotANumber](textattributesfornotanumber.md): The text attributes used to display the NaN (“not a number”) string.
- [textAttributesForPositiveInfinity](textattributesforpositiveinfinity.md): The text attributes used to display the positive infinity symbol.
- [textAttributesForNegativeInfinity](textattributesfornegativeinfinity.md): The text attributes used to display the negative infinity symbol.

# attributedStringForNil (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** macOS 10.0+

The attributed string the receiver uses to display `nil` values.

## Declaration

```objectivec
@property (copy) NSAttributedString * attributedStringForNil;
```

<a id="Discussion"></a>

## Discussion

By default `nil` values are displayed as an empty string.

<a id="Special-Considerations"></a>

### Special Considerations

This method is for use with formatters using `NSNumberFormatterBehavior10_0` behavior.

## See Also

### Configuring the Display of Numeric Values

- [textAttributesForNegativeValues](textattributesfornegativevalues.md): The text attributes to be used in displaying negative values.
- [textAttributesForPositiveValues](textattributesforpositivevalues.md): The text attributes to be used in displaying positive values.
- [attributedStringForZero](attributedstringforzero.md): The attributed string that the receiver uses to display zero values.
- [textAttributesForZero](textattributesforzero.md): The text attributes used to display a zero value.
- [textAttributesForNil](textattributesfornil.md): The text attributes used to display the `nil` symbol.
- [attributedStringForNotANumber](attributedstringfornotanumber.md): The attributed string the receiver uses to display “not a number” values.
- [textAttributesForNotANumber](textattributesfornotanumber.md): The text attributes used to display the NaN (“not a number”) string.
- [textAttributesForPositiveInfinity](textattributesforpositiveinfinity.md): The text attributes used to display the positive infinity symbol.
- [textAttributesForNegativeInfinity](textattributesfornegativeinfinity.md): The text attributes used to display the negative infinity symbol.
