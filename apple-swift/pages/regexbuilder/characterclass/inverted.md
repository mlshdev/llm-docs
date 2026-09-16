> Snapshot-pinned source payload for Apple Swift snapshot-5915b24a1311; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/regexbuilder/characterclass/inverted

# inverted

**Framework:** RegexBuilder  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

A character class that matches any character that does not match this character class.

## Declaration

```swift
var inverted: CharacterClass { get }
```

<a id="discussion"></a>

## Discussion

For example, you can use the `inverted` property to create a character class that excludes a specific group of characters:

```swift
let validCharacters = CharacterClass("a"..."z", .anyOf("-_"))
let invalidCharacters = validCharacters.inverted

let username = "user123"
if username.contains(invalidCharacters) {
    print("Invalid username: '\(username)'")
}
// Prints "Invalid username: 'user123'"
```
