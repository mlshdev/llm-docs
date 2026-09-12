> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/naturallanguage/nltagger/setlanguage:range:](https://developer.apple.com/documentation/naturallanguage/nltagger/setlanguage:range:)

# setLanguage:range:

**Interface language:** Objective-C

**Framework:** Natural Language  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

Sets the language for a range of text within the tagger’s string.

## Declaration

```objectivec
- (void) setLanguage:(NLLanguage) language range:(NSRange) range;
```

## Parameters

- `language`: The language of the text range.
- `range`: The range of the string that is being assigned a language.

## See Also

### Determining the dominant language and orthography

- [dominantLanguage](dominantlanguage.md): The dominant language of the string set for the linguistic tagger.
- [setOrthography:range:](setorthography_range_.md): Sets the orthography for the specified range.
