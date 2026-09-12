> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitextinputtraits/autocapitalizationtype](https://developer.apple.com/documentation/uikit/uitextinputtraits/autocapitalizationtype)

# autocapitalizationType (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

The autocapitalization style for the text object.

## Declaration

```swift
optional var autocapitalizationType: UITextAutocapitalizationType { get set }
```

<a id="Discussion"></a>

## Discussion

This property determines at what times the Shift key is automatically pressed, thereby making the typed character a capital letter. The default value for this property is [UITextAutocapitalizationType.sentences](../uitextautocapitalizationtype/sentences.md).

Some keyboard types do not support autocapitalization. Specifically, this option is ignored if the value in the [keyboardType](keyboardtype.md) property is set to [UIKeyboardType.numberPad](../uikeyboardtype/numberpad.md), [UIKeyboardType.phonePad](../uikeyboardtype/phonepad.md), or [UIKeyboardType.namePhonePad](../uikeyboardtype/namephonepad.md).

## See Also

### Managing spelling and autocorrection

- [UITextAutocapitalizationType](../uitextautocapitalizationtype.md): The autocapitalization behavior of a text-based view.
- [autocorrectionType](autocorrectiontype.md): The autocorrection style for the text object.
- [UITextAutocorrectionType](../uitextautocorrectiontype.md): The autocorrection behavior of a text-based view.
- [spellCheckingType](spellcheckingtype.md): The spell-checking style for the text object.
- [UITextSpellCheckingType](../uitextspellcheckingtype.md): The spell-checking behavior of a text-based view.
- [inlinePredictionType](inlinepredictiontype.md): The behavior of inline text predictions for a text-entry area.
- [UITextInlinePredictionType](../uitextinlinepredictiontype.md): Constants that identify the behavior of inline text predictions for a text-entry area.

# autocapitalizationType (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

The autocapitalization style for the text object.

## Declaration

```objectivec
@property (nonatomic) UITextAutocapitalizationType autocapitalizationType;
```

<a id="Discussion"></a>

## Discussion

This property determines at what times the Shift key is automatically pressed, thereby making the typed character a capital letter. The default value for this property is [UITextAutocapitalizationTypeSentences](../uitextautocapitalizationtype/sentences.md).

Some keyboard types do not support autocapitalization. Specifically, this option is ignored if the value in the [keyboardType](keyboardtype.md) property is set to [UIKeyboardTypeNumberPad](../uikeyboardtype/numberpad.md), [UIKeyboardTypePhonePad](../uikeyboardtype/phonepad.md), or [UIKeyboardTypeNamePhonePad](../uikeyboardtype/namephonepad.md).

## See Also

### Managing spelling and autocorrection

- [UITextAutocapitalizationType](../uitextautocapitalizationtype.md): The autocapitalization behavior of a text-based view.
- [autocorrectionType](autocorrectiontype.md): The autocorrection style for the text object.
- [UITextAutocorrectionType](../uitextautocorrectiontype.md): The autocorrection behavior of a text-based view.
- [spellCheckingType](spellcheckingtype.md): The spell-checking style for the text object.
- [UITextSpellCheckingType](../uitextspellcheckingtype.md): The spell-checking behavior of a text-based view.
- [inlinePredictionType](inlinepredictiontype.md): The behavior of inline text predictions for a text-entry area.
- [UITextInlinePredictionType](../uitextinlinepredictiontype.md): Constants that identify the behavior of inline text predictions for a text-entry area.
