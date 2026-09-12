> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitextchecker/completions(forpartialwordrange:in:language:)](https://developer.apple.com/documentation/uikit/uitextchecker/completions(forpartialwordrange:in:language:))

# completions(forPartialWordRange:in:language:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Returns an array of strings that are possible completions for a partially entered word.

## Declaration

```swift
func completions(forPartialWordRange range: NSRange, in string: String, language: String) -> [String]?
```

## Parameters

- `range`: The range of a partially entered word in `string`.
- `string`: A string in which there is a partially entered word, as located by `range`.
- `language`: The language of the of the words that are possible corrections. This string is a ISO 639-1 language code or a combined ISO 639-1 language code and ISO 3166-1 regional code (for example, `fr_CA`).

<a id="return-value"></a>

## Return Value

An array of strings, each of which is a completion of a partially entered word represented by `range` in `string`. If no possible completions are found,  the method returns an empty array.

<a id="Discussion"></a>

## Discussion

The strings in the array are in the order they should be presented to the user—that is, more probable completions come first in the array.

## See Also

### Obtaining Word Guesses and Completions

- [guesses(forWordRange:in:language:)](guesses%28forwordrange_in_language_%29.md): Returns a list of words that are possible valid replacements for a misspelled word.

# completionsForPartialWordRange:inString:language: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Returns an array of strings that are possible completions for a partially entered word.

## Declaration

```objectivec
- (NSArray<NSString *> *) completionsForPartialWordRange:(NSRange) range inString:(NSString *) string language:(NSString *) language;
```

## Parameters

- `range`: The range of a partially entered word in `string`.
- `string`: A string in which there is a partially entered word, as located by `range`.
- `language`: The language of the of the words that are possible corrections. This string is a ISO 639-1 language code or a combined ISO 639-1 language code and ISO 3166-1 regional code (for example, `fr_CA`).

<a id="return-value"></a>

## Return Value

An array of strings, each of which is a completion of a partially entered word represented by `range` in `string`. If no possible completions are found,  the method returns an empty array.

<a id="Discussion"></a>

## Discussion

The strings in the array are in the order they should be presented to the user—that is, more probable completions come first in the array.

## See Also

### Obtaining Word Guesses and Completions

- [guessesForWordRange:inString:language:](guesses%28forwordrange_in_language_%29.md): Returns a list of words that are possible valid replacements for a misspelled word.
