> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/morphology/custompronoun/requiredkeys(forlanguage:)](https://developer.apple.com/documentation/foundation/morphology/custompronoun/requiredkeys(forlanguage:))

# requiredKeys(forLanguage:)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 15.0+ (deprecated in 17.0) · iPadOS 15.0+ (deprecated in 17.0) · Mac Catalyst 15.0+ (deprecated in 17.0) · macOS 12.0+ (deprecated in 14.0) · tvOS 15.0+ (deprecated in 17.0) · visionOS 1.0+ · watchOS 8.0+ (deprecated in 10.0)

Returns a collection of the custom pronoun keys required by this language.

> Use TermOfAddress instead

## Declaration

```swift
static func requiredKeys(forLanguage language: String) -> [PartialKeyPath<Morphology.CustomPronoun>]
```

## Parameters

- `language`: The language to create a custom pronoun for.

<a id="return-value"></a>

## Return Value

The keys required for the given language.

<a id="Discussion"></a>

## Discussion

If any of the required keys for a given language are unset, calling [setCustomPronoun(\_:forLanguage:)](../setcustompronoun%28__forlanguage_%29.md) for that language with an incomplete [Morphology.CustomPronoun](../custompronoun.md) instance throws an error.

## See Also

### Assessing Custom Pronoun Support

- [isSupported(forLanguage:)](issupported%28forlanguage_%29.md): Deprecated. Returns a Boolean value that indicates whether the given language supports setting custom pronouns.
