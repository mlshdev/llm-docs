> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsmorphologycustompronoun/issupportedforlanguage:](https://developer.apple.com/documentation/foundation/nsmorphologycustompronoun/issupportedforlanguage:)

# isSupportedForLanguage:

**Interface language:** Objective-C

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 15.0+ (deprecated in 17.0) · iPadOS 15.0+ (deprecated in 17.0) · Mac Catalyst 15.0+ (deprecated in 17.0) · macOS 12.0+ (deprecated in 14.0) · tvOS 15.0+ (deprecated in 17.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 8.0+ (deprecated in 10.0)

Returns a Boolean value that indicates whether the given language supports setting custom pronouns.

## Declaration

```objectivec
+ (BOOL) isSupportedForLanguage:(NSString *) language;
```

## Parameters

- `language`: The language to query.

<a id="return-value"></a>

## Return Value

`true` if the language supports custom pronouns; otherwise, `false`.

## See Also

### Assessing Custom Pronoun Support

- [requiredKeysForLanguage:](requiredkeysforlanguage_.md): Deprecated. Returns a collection of the custom pronoun keys required by this language.
