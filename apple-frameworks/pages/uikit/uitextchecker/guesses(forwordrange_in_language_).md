> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitextchecker/guesses(forwordrange:in:language:)](https://developer.apple.com/documentation/uikit/uitextchecker/guesses(forwordrange:in:language:))

# guesses(forWordRange:in:language:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Returns a list of words that are possible valid replacements for a misspelled word.

## Declaration

```swift
func guesses(forWordRange range: NSRange, in string: String, language: String) -> [String]?
```

## Parameters

- `range`: The range of a misspelled word in `string`.
- `string`: A string in which there is a misspelled word, as located by `range`.
- `language`: The language of the of the words that are possible corrections. This string is from the ISO 639-1 standard, for example `es` (Spanish).

<a id="return-value"></a>

## Return Value

An array of strings each of which might be a correct substitute (that is, a guess) for a misspelled word in the given range of the string. If no possible guesses are found,  the method returns an empty array.

<a id="Discussion"></a>

## Discussion

The strings in the array are in the order they should be presented to the user—that is, more probable guesses come first in the array.

## See Also

### Obtaining Word Guesses and Completions

- [completions(forPartialWordRange:in:language:)](completions%28forpartialwordrange_in_language_%29.md): Returns an array of strings that are possible completions for a partially entered word.

# guessesForWordRange:inString:language: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Returns a list of words that are possible valid replacements for a misspelled word.

## Declaration

```objectivec
- (NSArray<NSString *> *) guessesForWordRange:(NSRange) range inString:(NSString *) string language:(NSString *) language;
```

## Parameters

- `range`: The range of a misspelled word in `string`.
- `string`: A string in which there is a misspelled word, as located by `range`.
- `language`: The language of the of the words that are possible corrections. This string is from the ISO 639-1 standard, for example `es` (Spanish).

<a id="return-value"></a>

## Return Value

An array of strings each of which might be a correct substitute (that is, a guess) for a misspelled word in the given range of the string. If no possible guesses are found,  the method returns an empty array.

<a id="Discussion"></a>

## Discussion

The strings in the array are in the order they should be presented to the user—that is, more probable guesses come first in the array.

## See Also

### Obtaining Word Guesses and Completions

- [completionsForPartialWordRange:inString:language:](completions%28forpartialwordrange_in_language_%29.md): Returns an array of strings that are possible completions for a partially entered word.
