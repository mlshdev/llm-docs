> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/morphology/setcustompronoun(_:forlanguage:)](https://developer.apple.com/documentation/foundation/morphology/setcustompronoun(_:forlanguage:))

# setCustomPronoun(\_:forLanguage:)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ (deprecated in 17.0) · iPadOS 15.0+ (deprecated in 17.0) · Mac Catalyst 15.0+ (deprecated in 17.0) · macOS 12.0+ (deprecated in 14.0) · tvOS 15.0+ (deprecated in 17.0) · visionOS 1.0+ · watchOS 8.0+ (deprecated in 10.0)

Sets a custom pronoun behavior for this morphology to apply to the given language.

> Use TermOfAddress instead

## Declaration

```swift
mutating func setCustomPronoun(_ pronoun: Morphology.CustomPronoun?, forLanguage language: String) throws
```

## Parameters

- `pronoun`: A [Morphology.CustomPronoun](custompronoun.md) instance for the morphology to use.
- `language`: The language the morphology should apply the custom pronoun to.

<a id="Discussion"></a>

## Discussion

This method throws if the system doesn’t support custom pronouns for the given language, or if any of the required pronoun keys aren’t set.

## See Also

### Related Documentation

- [isSupported(forLanguage:)](custompronoun/issupported%28forlanguage_%29.md): Deprecated. Returns a Boolean value that indicates whether the given language supports setting custom pronouns.
- [requiredKeys(forLanguage:)](custompronoun/requiredkeys%28forlanguage_%29.md): Deprecated. Returns a collection of the custom pronoun keys required by this language.

### Accessing Per-Language Features

- [customPronoun(forLanguage:)](custompronoun%28forlanguage_%29.md): Deprecated. Returns any custom pronoun behavior this morphology applies to the given language.
- [Morphology.CustomPronoun](custompronoun.md): Deprecated. A custom pronoun behavior for use in a specific langauge.
