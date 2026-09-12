> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/termofaddress/localized(language:pronouns:)](https://developer.apple.com/documentation/foundation/termofaddress/localized(language:pronouns:))

# localized(language:pronouns:)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Returns a term of address restricted to a specific language for a group of pronouns.

## Declaration

```swift
static func localized(language: Locale.Language, pronouns: [Morphology.Pronoun]) -> TermOfAddress
```

## Parameters

- `language`: The language locale to use for the term of address.
- `pronouns`: The pronouns for representing the terms of address.

<a id="return-value"></a>

## Return Value

A term of address associating a group of pronouns  to a specific language.

## See Also

### Defining your own terms of address

- [language](language.md): The specific language associated with a term of address.
- [pronouns](pronouns.md): The pronouns associated with a term of address.
