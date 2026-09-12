> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsattributedstring/key/morphology](https://developer.apple.com/documentation/foundation/nsattributedstring/key/morphology)

# morphology (Swift)

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

An attribute that contains grammatical properties to apply to the text.

## Declaration

```swift
static let morphology: NSAttributedString.Key
```

<a id="Discussion"></a>

## Discussion

The value of this property is an [NSMorphology](../../nsmorphology.md) object. Use the value to determine the appropriate gender and other grammatical rules to apply to the text.

## See Also

### Getting translation-related attribute keys

- [languageIdentifier](languageidentifier.md): The language identifier associated with the range of text.
- [inflectionRule](inflectionrule.md): An attribute that tells the system how to apply grammar rules and other modifiers to the range of text.
- [inflectionAlternative](inflectionalternative.md): The alternative translation for a string when no suitable inflection exists.
- [agreeWithArgument](agreewithargument.md): An attribute key whose value indicates inflection agreement with a specific argument.
- [agreeWithConcept](agreewithconcept.md): An attribute key whose value indicates inflection agreement with a specific concept.
- [referentConcept](referentconcept.md): An attribute key whose value indicates the referent concept for inflection.
- [localizedNumberFormat](localizednumberformat.md): An attribute key whose value specifies a localized number format.

# NSMorphologyAttributeName (Objective-C)

**Framework:** Foundation  
**Kind:** Global Variable  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

An attribute that contains grammatical properties to apply to the text.

## Declaration

```objectivec
extern NSAttributedStringKey const NSMorphologyAttributeName;
```

<a id="Discussion"></a>

## Discussion

The value of this property is an [NSMorphology](../../nsmorphology.md) object. Use the value to determine the appropriate gender and other grammatical rules to apply to the text.

## See Also

### Getting translation-related attribute keys

- [NSLanguageIdentifierAttributeName](languageidentifier.md): The language identifier associated with the range of text.
- [NSInflectionRuleAttributeName](inflectionrule.md): An attribute that tells the system how to apply grammar rules and other modifiers to the range of text.
- [NSInflectionAlternativeAttributeName](inflectionalternative.md): The alternative translation for a string when no suitable inflection exists.
- [NSInflectionAgreementArgumentAttributeName](agreewithargument.md): An attribute key whose value indicates inflection agreement with a specific argument.
- [NSInflectionAgreementConceptAttributeName](agreewithconcept.md): An attribute key whose value indicates inflection agreement with a specific concept.
- [NSInflectionReferentConceptAttributeName](referentconcept.md): An attribute key whose value indicates the referent concept for inflection.
- [NSLocalizedNumberFormatAttributeName](localizednumberformat.md): An attribute key whose value specifies a localized number format.
