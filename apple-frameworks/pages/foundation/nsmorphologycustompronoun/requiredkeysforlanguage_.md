> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsmorphologycustompronoun/requiredkeysforlanguage:](https://developer.apple.com/documentation/foundation/nsmorphologycustompronoun/requiredkeysforlanguage:)

# requiredKeysForLanguage:

**Interface language:** Objective-C

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 15.0+ (deprecated in 17.0) · iPadOS 15.0+ (deprecated in 17.0) · Mac Catalyst 15.0+ (deprecated in 17.0) · macOS 12.0+ (deprecated in 14.0) · tvOS 15.0+ (deprecated in 17.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 8.0+ (deprecated in 10.0)

Returns a collection of the custom pronoun keys required by this language.

## Declaration

```objectivec
+ (NSArray<NSString *> *) requiredKeysForLanguage:(NSString *) language;
```

## Parameters

- `language`: The language to create a custom pronoun for.

<a id="return-value"></a>

## Return Value

The keys required for the given language.

<a id="Discussion"></a>

## Discussion

If any of the required keys for a given language are unset, calling [setCustomPronoun:forLanguage:error:](../nsmorphology/setcustompronoun_forlanguage_error_.md) for that language with an incomplete [NSMorphologyCustomPronoun](../nsmorphologycustompronoun.md) results in an error.

## See Also

### Assessing Custom Pronoun Support

- [isSupportedForLanguage:](issupportedforlanguage_.md): Deprecated. Returns a Boolean value that indicates whether the given language supports setting custom pronouns.
