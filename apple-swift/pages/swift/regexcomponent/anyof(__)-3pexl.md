> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/regexcomponent/anyof(_:)-3pexl](https://developer.apple.com/documentation/swift/regexcomponent/anyof(_:)-3pexl)

# anyOf(\_:)

**Framework:** Swift  
**Kind:** Type Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Returns a character class that matches any Unicode scalar in the given sequence.

## Declaration

```swift
static func anyOf<S>(_ s: S) -> CharacterClass where S : Sequence, S.Element == Unicode.Scalar
```

<a id="discussion"></a>

## Discussion

Calling this method with a group of Unicode scalars is equivalent to listing them in a custom character class in regex syntax.

## See Also

### Matching substring sequences

- [anyOf(\_:)](anyof%28__%29-4xgea.md): Conforms when `Self` is `CharacterClass`. Returns a character class that matches any character in the given string or sequence.
- [any](any.md): Conforms when `Self` is `CharacterClass`. A character class that matches any element.
- [anyGraphemeCluster](anygraphemecluster.md): Conforms when `Self` is `CharacterClass`. A character class that matches any single `Character`, or extended grapheme cluster, regardless of the current semantic level.
- [anyNonNewline](anynonnewline.md): Conforms when `Self` is `CharacterClass`. A character class that matches any element that isn’t a newline.
- [digit](digit.md): Conforms when `Self` is `CharacterClass`. A character class that matches any digit.
- [hexDigit](hexdigit.md): Conforms when `Self` is `CharacterClass`. A character class that matches any hexadecimal digit.
- [word](word.md): Conforms when `Self` is `CharacterClass`. A character class that matches any element that is a “word character”.
