> Snapshot-pinned source payload for Apple Swift snapshot-5915b24a1311; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swift/regexcomponent/whitespace

# whitespace

**Framework:** Swift  
**Kind:** Type Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

A character class that matches any element that is classified as whitespace.

## Declaration

```swift
static var whitespace: CharacterClass { get }
```

<a id="discussion"></a>

## Discussion

This character class is equivalent to `\s` in regex syntax.

## See Also

### Matching whitespace and line endings

- [horizontalWhitespace](horizontalwhitespace.md): Conforms when `Self` is `CharacterClass`. A character class that matches any element that is classified as horizontal whitespace.
- [newlineSequence](newlinesequence.md): Conforms when `Self` is `CharacterClass`. A character class that matches any newline sequence.
- [verticalWhitespace](verticalwhitespace.md): Conforms when `Self` is `CharacterClass`. A character class that matches any element that is classified as vertical whitespace.
