> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundation/inflectionconcept/termsofaddress(_:)

# InflectionConcept.termsOfAddress(\_:)

**Framework:** Foundation  
**Kind:** Case  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Indicates that the system uses the associated terms of address for grammatical agreement when localizing text.

## Declaration

```swift
case termsOfAddress([TermOfAddress])
```

## Parameters

- `[TermOfAddress]`: A list of preferred terms of address for localizing text.

<a id="Discussion"></a>

## Discussion

When inflecting text the first term of address which can be used in the target language is the one used for pronoun substitution and grammar agreement.

## See Also

### Using inflection concepts

- [InflectionConcept.localizedPhrase(\_:)](localizedphrase%28__%29.md): Indicates that the system uses the associated string for grammatical agreement when localizing text.
