> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/morphology/custompronoun/issupported(forlanguage:)](https://developer.apple.com/documentation/foundation/morphology/custompronoun/issupported(forlanguage:))

# isSupported(forLanguage:)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 15.0+ (deprecated in 17.0) · iPadOS 15.0+ (deprecated in 17.0) · Mac Catalyst 15.0+ (deprecated in 17.0) · macOS 12.0+ (deprecated in 14.0) · tvOS 15.0+ (deprecated in 17.0) · visionOS 1.0+ · watchOS 8.0+ (deprecated in 10.0)

Returns a Boolean value that indicates whether the given language supports setting custom pronouns.

> Use TermOfAddress instead

## Declaration

```swift
static func isSupported(forLanguage language: String) -> Bool
```

## Parameters

- `language`: The language to query.

<a id="return-value"></a>

## Return Value

`true` if the language supports custom pronouns; otherwise, `false`.

<a id="Discussion"></a>

## Discussion

If this value is `false` for a given language, calling [setCustomPronoun(\_:forLanguage:)](../setcustompronoun%28__forlanguage_%29.md) for that language throws an error.

## See Also

### Assessing Custom Pronoun Support

- [requiredKeys(forLanguage:)](requiredkeys%28forlanguage_%29.md): Deprecated. Returns a collection of the custom pronoun keys required by this language.
