> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/regexbuilder/characterclass](https://developer.apple.com/documentation/regexbuilder/characterclass)

# CharacterClass

**Framework:** RegexBuilder  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

A class of characters that match in a regex.

## Declaration

```swift
struct CharacterClass
```

<a id="overview"></a>

## Overview

A character class can represent individual characters, a group of characters, the set of character that match some set of criteria, or a set algebraic combination of all of the above.

## Topics

### Instance Properties

- [inverted](characterclass/inverted.md): A character class that matches any character that does not match this character class.

### Instance Methods

- [intersection(\_:)](characterclass/intersection%28__%29.md): Returns a character class from the intersection of this class and the given class.
- [subtracting(\_:)](characterclass/subtracting%28__%29.md): Returns a character class by subtracting the given class from this class.
- [symmetricDifference(\_:)](characterclass/symmetricdifference%28__%29.md): Returns a character class matching elements in one or the other, but not both, of this class and the given class.
- [union(\_:)](characterclass/union%28__%29.md): Returns a character class from the union of this class and the given class.

### Type Methods

- [generalCategory(\_:)](characterclass/generalcategory%28__%29.md): Returns a character class that matches any element with the given Unicode general category.

## Relationships

### Conforms To

- [Copyable](../swift/copyable.md)
- [Escapable](../swift/escapable.md)
- [RegexComponent](../swift/regexcomponent.md)

## See Also

### Components

- [Anchor](anchor.md): A regex component that matches a specific condition at a particular position in an input string.
- [Lookahead](lookahead.md): A regex component that allows a match to continue only if its contents match at the given location.
- [NegativeLookahead](negativelookahead.md): A regex component that allows a match to continue only if its contents do not match at the given location.
- [ChoiceOf](choiceof.md): A regex component that chooses exactly one of its constituent regex components when matching.
