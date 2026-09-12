> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitextautocorrectiontype](https://developer.apple.com/documentation/uikit/uitextautocorrectiontype)

# UITextAutocorrectionType (Swift)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

The autocorrection behavior of a text-based view.

## Declaration

```swift
enum UITextAutocorrectionType
```

<a id="overview"></a>

## Overview

Use these constants with the [autocorrectionType](uitextinputtraits/autocorrectiontype.md) property. If the script system doesn’t support inline autocorrection, the keyboard input method ignores these constants.

## Topics

### Constants

- [UITextAutocorrectionType.default](uitextautocorrectiontype/default.md): Specifies an appropriate autocorrection behavior for the current script system.
- [UITextAutocorrectionType.no](uitextautocorrectiontype/no.md): Disables autocorrection behavior.
- [UITextAutocorrectionType.yes](uitextautocorrectiontype/yes.md): Enables autocorrection behavior.

### Initializers

- [init(rawValue:)](uitextautocorrectiontype/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Managing spelling and autocorrection

- [autocapitalizationType](uitextinputtraits/autocapitalizationtype.md): The autocapitalization style for the text object.
- [UITextAutocapitalizationType](uitextautocapitalizationtype.md): The autocapitalization behavior of a text-based view.
- [autocorrectionType](uitextinputtraits/autocorrectiontype.md): The autocorrection style for the text object.
- [spellCheckingType](uitextinputtraits/spellcheckingtype.md): The spell-checking style for the text object.
- [UITextSpellCheckingType](uitextspellcheckingtype.md): The spell-checking behavior of a text-based view.
- [inlinePredictionType](uitextinputtraits/inlinepredictiontype.md): The behavior of inline text predictions for a text-entry area.
- [UITextInlinePredictionType](uitextinlinepredictiontype.md): Constants that identify the behavior of inline text predictions for a text-entry area.

# UITextAutocorrectionType (Objective-C)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

The autocorrection behavior of a text-based view.

## Declaration

```objectivec
enum UITextAutocorrectionType : NSInteger;
```

<a id="overview"></a>

## Overview

Use these constants with the [autocorrectionType](uitextinputtraits/autocorrectiontype.md) property. If the script system doesn’t support inline autocorrection, the keyboard input method ignores these constants.

## Topics

### Constants

- [UITextAutocorrectionTypeDefault](uitextautocorrectiontype/default.md): Specifies an appropriate autocorrection behavior for the current script system.
- [UITextAutocorrectionTypeNo](uitextautocorrectiontype/no.md): Disables autocorrection behavior.
- [UITextAutocorrectionTypeYes](uitextautocorrectiontype/yes.md): Enables autocorrection behavior.

## See Also

### Managing spelling and autocorrection

- [autocapitalizationType](uitextinputtraits/autocapitalizationtype.md): The autocapitalization style for the text object.
- [UITextAutocapitalizationType](uitextautocapitalizationtype.md): The autocapitalization behavior of a text-based view.
- [autocorrectionType](uitextinputtraits/autocorrectiontype.md): The autocorrection style for the text object.
- [spellCheckingType](uitextinputtraits/spellcheckingtype.md): The spell-checking style for the text object.
- [UITextSpellCheckingType](uitextspellcheckingtype.md): The spell-checking behavior of a text-based view.
- [inlinePredictionType](uitextinputtraits/inlinepredictiontype.md): The behavior of inline text predictions for a text-entry area.
- [UITextInlinePredictionType](uitextinlinepredictiontype.md): Constants that identify the behavior of inline text predictions for a text-entry area.
