> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsmorphology/unspecified](https://developer.apple.com/documentation/foundation/nsmorphology/unspecified)

# unspecified

**Interface language:** Objective-C

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

A Boolean value that indicates whether this instance specifies no particular grammar.

## Declaration

```objectivec
@property (readonly, getter=isUnspecified) BOOL unspecified;
```

<a id="Discussion"></a>

## Discussion

This value is equivalent to having set none of the properties in this [NSMorphology](../nsmorphology.md). This occurs when the user hasn’t specified preferences, or chose not to share them with this app. When the morphology is unspecified, inflecting a string with this morphology does nothing.

## See Also

### Accessing Grammatical Properties

- [grammaticalGender](grammaticalgender.md): The grammatical gender used for inflecting strings with this morphology.
- [NSGrammaticalGender](../nsgrammaticalgender.md): A representation of grammatical gender, used for inflecting strings.
- [number](number.md): The grammatical number used for inflecting strings with this morphology.
- [NSGrammaticalNumber](../nsgrammaticalnumber.md): A representation of grammatical number, used for inflecting strings.
- [partOfSpeech](partofspeech.md): The grammatical part of speech used for inflecting strings with this morphology.
- [NSGrammaticalPartOfSpeech](../nsgrammaticalpartofspeech.md): A representation of grammatical parts of speech, used for inflecting strings.
