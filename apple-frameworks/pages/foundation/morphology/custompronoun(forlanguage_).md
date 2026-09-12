> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/morphology/custompronoun(forlanguage:)](https://developer.apple.com/documentation/foundation/morphology/custompronoun(forlanguage:))

# customPronoun(forLanguage:)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ (deprecated in 17.0) · iPadOS 15.0+ (deprecated in 17.0) · Mac Catalyst 15.0+ (deprecated in 17.0) · macOS 12.0+ (deprecated in 14.0) · tvOS 15.0+ (deprecated in 17.0) · visionOS 1.0+ · watchOS 8.0+ (deprecated in 10.0)

Returns any custom pronoun behavior this morphology applies to the given language.

> Use TermOfAddress instead

## Declaration

```swift
func customPronoun(forLanguage language: String) -> Morphology.CustomPronoun?
```

## Parameters

- `language`: The language to query for any custom pronoun behavior.

<a id="return-value"></a>

## Return Value

A [Morphology.CustomPronoun](custompronoun.md) behavior this morphology uses for the given language, or `nil` if the morphology doesn’t have a custom pronoun behavior set.

## See Also

### Accessing Per-Language Features

- [setCustomPronoun(\_:forLanguage:)](setcustompronoun%28__forlanguage_%29.md): Deprecated. Sets a custom pronoun behavior for this morphology to apply to the given language.
- [Morphology.CustomPronoun](custompronoun.md): Deprecated. A custom pronoun behavior for use in a specific langauge.
