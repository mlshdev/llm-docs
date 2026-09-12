> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitextinputtraits/spellcheckingtype](https://developer.apple.com/documentation/uikit/uitextinputtraits/spellcheckingtype)

# spellCheckingType (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The spell-checking style for the text object.

## Declaration

```swift
optional var spellCheckingType: UITextSpellCheckingType { get set }
```

<a id="Discussion"></a>

## Discussion

This property determines whether spell-checking is enabled or disabled during typing. With spell-checking enabled, the text object generates red underlines for all misspelled words. If the user taps on a misspelled word, the text object presents the user with a list of possible corrections.

The default value for this property is [UITextSpellCheckingType.default](../uitextspellcheckingtype/default.md), which enables spell-checking when autocorrection is also enabled. The value in this property overrides the spell-checking setting set by the user in Settings \> General \> Keyboard.

## See Also

### Managing spelling and autocorrection

- [autocapitalizationType](autocapitalizationtype.md): The autocapitalization style for the text object.
- [UITextAutocapitalizationType](../uitextautocapitalizationtype.md): The autocapitalization behavior of a text-based view.
- [autocorrectionType](autocorrectiontype.md): The autocorrection style for the text object.
- [UITextAutocorrectionType](../uitextautocorrectiontype.md): The autocorrection behavior of a text-based view.
- [UITextSpellCheckingType](../uitextspellcheckingtype.md): The spell-checking behavior of a text-based view.
- [inlinePredictionType](inlinepredictiontype.md): The behavior of inline text predictions for a text-entry area.
- [UITextInlinePredictionType](../uitextinlinepredictiontype.md): Constants that identify the behavior of inline text predictions for a text-entry area.

# spellCheckingType (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The spell-checking style for the text object.

## Declaration

```objectivec
@property (nonatomic) UITextSpellCheckingType spellCheckingType;
```

<a id="Discussion"></a>

## Discussion

This property determines whether spell-checking is enabled or disabled during typing. With spell-checking enabled, the text object generates red underlines for all misspelled words. If the user taps on a misspelled word, the text object presents the user with a list of possible corrections.

The default value for this property is [UITextSpellCheckingTypeDefault](../uitextspellcheckingtype/default.md), which enables spell-checking when autocorrection is also enabled. The value in this property overrides the spell-checking setting set by the user in Settings \> General \> Keyboard.

## See Also

### Managing spelling and autocorrection

- [autocapitalizationType](autocapitalizationtype.md): The autocapitalization style for the text object.
- [UITextAutocapitalizationType](../uitextautocapitalizationtype.md): The autocapitalization behavior of a text-based view.
- [autocorrectionType](autocorrectiontype.md): The autocorrection style for the text object.
- [UITextAutocorrectionType](../uitextautocorrectiontype.md): The autocorrection behavior of a text-based view.
- [UITextSpellCheckingType](../uitextspellcheckingtype.md): The spell-checking behavior of a text-based view.
- [inlinePredictionType](inlinepredictiontype.md): The behavior of inline text predictions for a text-entry area.
- [UITextInlinePredictionType](../uitextinlinepredictiontype.md): Constants that identify the behavior of inline text predictions for a text-entry area.
