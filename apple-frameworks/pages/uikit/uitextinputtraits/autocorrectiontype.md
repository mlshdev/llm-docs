> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitextinputtraits/autocorrectiontype](https://developer.apple.com/documentation/uikit/uitextinputtraits/autocorrectiontype)

# autocorrectionType (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

The autocorrection style for the text object.

## Declaration

```swift
optional var autocorrectionType: UITextAutocorrectionType { get set }
```

<a id="Discussion"></a>

## Discussion

This property determines whether autocorrection is enabled or disabled during typing. With autocorrection enabled, the text object tracks unknown words and suggests a more suitable replacement candidate to the user, replacing the typed text automatically unless the user explicitly overrides the action.

The default value for this property is [UITextAutocorrectionType.default](../uitextautocorrectiontype/default.md), which for most input methods results in autocorrection being enabled.

## See Also

### Managing spelling and autocorrection

- [autocapitalizationType](autocapitalizationtype.md): The autocapitalization style for the text object.
- [UITextAutocapitalizationType](../uitextautocapitalizationtype.md): The autocapitalization behavior of a text-based view.
- [UITextAutocorrectionType](../uitextautocorrectiontype.md): The autocorrection behavior of a text-based view.
- [spellCheckingType](spellcheckingtype.md): The spell-checking style for the text object.
- [UITextSpellCheckingType](../uitextspellcheckingtype.md): The spell-checking behavior of a text-based view.
- [inlinePredictionType](inlinepredictiontype.md): The behavior of inline text predictions for a text-entry area.
- [UITextInlinePredictionType](../uitextinlinepredictiontype.md): Constants that identify the behavior of inline text predictions for a text-entry area.

# autocorrectionType (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

The autocorrection style for the text object.

## Declaration

```objectivec
@property (nonatomic) UITextAutocorrectionType autocorrectionType;
```

<a id="Discussion"></a>

## Discussion

This property determines whether autocorrection is enabled or disabled during typing. With autocorrection enabled, the text object tracks unknown words and suggests a more suitable replacement candidate to the user, replacing the typed text automatically unless the user explicitly overrides the action.

The default value for this property is [UITextAutocorrectionTypeDefault](../uitextautocorrectiontype/default.md), which for most input methods results in autocorrection being enabled.

## See Also

### Managing spelling and autocorrection

- [autocapitalizationType](autocapitalizationtype.md): The autocapitalization style for the text object.
- [UITextAutocapitalizationType](../uitextautocapitalizationtype.md): The autocapitalization behavior of a text-based view.
- [UITextAutocorrectionType](../uitextautocorrectiontype.md): The autocorrection behavior of a text-based view.
- [spellCheckingType](spellcheckingtype.md): The spell-checking style for the text object.
- [UITextSpellCheckingType](../uitextspellcheckingtype.md): The spell-checking behavior of a text-based view.
- [inlinePredictionType](inlinepredictiontype.md): The behavior of inline text predictions for a text-entry area.
- [UITextInlinePredictionType](../uitextinlinepredictiontype.md): Constants that identify the behavior of inline text predictions for a text-entry area.
