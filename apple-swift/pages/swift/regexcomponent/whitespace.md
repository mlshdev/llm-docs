> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/regexcomponent/whitespace](https://developer.apple.com/documentation/swift/regexcomponent/whitespace)

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
