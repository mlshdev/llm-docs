> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsattributedstring/key/referentconcept](https://developer.apple.com/documentation/foundation/nsattributedstring/key/referentconcept)

# referentConcept (Swift)

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

An attribute key whose value indicates the referent concept for inflection.

## Declaration

```swift
static let referentConcept: NSAttributedString.Key
```

## See Also

### Getting translation-related attribute keys

- [languageIdentifier](languageidentifier.md): The language identifier associated with the range of text.
- [morphology](morphology.md): An attribute that contains grammatical properties to apply to the text.
- [inflectionRule](inflectionrule.md): An attribute that tells the system how to apply grammar rules and other modifiers to the range of text.
- [inflectionAlternative](inflectionalternative.md): The alternative translation for a string when no suitable inflection exists.
- [agreeWithArgument](agreewithargument.md): An attribute key whose value indicates inflection agreement with a specific argument.
- [agreeWithConcept](agreewithconcept.md): An attribute key whose value indicates inflection agreement with a specific concept.
- [localizedNumberFormat](localizednumberformat.md): An attribute key whose value specifies a localized number format.

# NSInflectionReferentConceptAttributeName (Objective-C)

**Framework:** Foundation  
**Kind:** Global Variable  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

An attribute key whose value indicates the referent concept for inflection.

## Declaration

```objectivec
extern NSAttributedStringKey const NSInflectionReferentConceptAttributeName;
```

## See Also

### Getting translation-related attribute keys

- [NSLanguageIdentifierAttributeName](languageidentifier.md): The language identifier associated with the range of text.
- [NSMorphologyAttributeName](morphology.md): An attribute that contains grammatical properties to apply to the text.
- [NSInflectionRuleAttributeName](inflectionrule.md): An attribute that tells the system how to apply grammar rules and other modifiers to the range of text.
- [NSInflectionAlternativeAttributeName](inflectionalternative.md): The alternative translation for a string when no suitable inflection exists.
- [NSInflectionAgreementArgumentAttributeName](agreewithargument.md): An attribute key whose value indicates inflection agreement with a specific argument.
- [NSInflectionAgreementConceptAttributeName](agreewithconcept.md): An attribute key whose value indicates inflection agreement with a specific concept.
- [NSLocalizedNumberFormatAttributeName](localizednumberformat.md): An attribute key whose value specifies a localized number format.
