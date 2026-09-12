> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/regexcomponent/any](https://developer.apple.com/documentation/swift/regexcomponent/any)

# any

**Framework:** Swift  
**Kind:** Type Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

A character class that matches any element.

## Declaration

```swift
static var any: CharacterClass { get }
```

<a id="discussion"></a>

## Discussion

This character class is unaffected by the `dotMatchesNewlines()` method. To match any character that isn’t a newline, see [anyNonNewline](anynonnewline.md).

This character class is equivalent to the regex syntax “dot” metacharacter in single-line mode: `(?s:.)`.

## See Also

### Matching substring sequences

- [anyOf(\_:)](anyof%28__%29-3pexl.md): Conforms when `Self` is `CharacterClass`. Returns a character class that matches any Unicode scalar in the given sequence.
- [anyOf(\_:)](anyof%28__%29-4xgea.md): Conforms when `Self` is `CharacterClass`. Returns a character class that matches any character in the given string or sequence.
- [anyGraphemeCluster](anygraphemecluster.md): Conforms when `Self` is `CharacterClass`. A character class that matches any single `Character`, or extended grapheme cluster, regardless of the current semantic level.
- [anyNonNewline](anynonnewline.md): Conforms when `Self` is `CharacterClass`. A character class that matches any element that isn’t a newline.
- [digit](digit.md): Conforms when `Self` is `CharacterClass`. A character class that matches any digit.
- [hexDigit](hexdigit.md): Conforms when `Self` is `CharacterClass`. A character class that matches any hexadecimal digit.
- [word](word.md): Conforms when `Self` is `CharacterClass`. A character class that matches any element that is a “word character”.
