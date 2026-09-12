> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsinflectionruleexplicit](https://developer.apple.com/documentation/foundation/nsinflectionruleexplicit)

# NSInflectionRuleExplicit

**Interface language:** Objective-C

**Framework:** Foundation  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

An inflection rule that uses a morphology instance to determine how to inflect attribued strings.

## Declaration

```objectivec
@interface NSInflectionRuleExplicit : NSInflectionRule
```

## Topics

### Creating an Explicit Inflection Rule

- [initWithMorphology:](nsinflectionruleexplicit/initwithmorphology_.md): Creates an inflection rule with the given morphology.
- [NSMorphology](nsmorphology.md): A description of the grammatical properties of a string.

### Accessing Rule Properties

- [morphology](nsinflectionruleexplicit/morphology.md): The morphology used by this inflection rule.

## Relationships

### Inherits From

- [NSInflectionRule](nsinflectionrule.md)

## See Also

### Automatic grammar agreement

- [NSInflectionRule](nsinflectionrule.md): A rule that affects how an attributed string performs automatic grammatical agreement.
- [NSMorphology](nsmorphology.md): A description of the grammatical properties of a string.
- [NSTermOfAddress](nstermofaddress.md): The type for representing grammatical gender in localized text.
- [NSMorphologyPronoun](nsmorphologypronoun.md): A custom pronoun for referring to a third person.
