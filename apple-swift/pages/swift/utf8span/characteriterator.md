> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/utf8span/characteriterator](https://developer.apple.com/documentation/swift/utf8span/characteriterator)

# UTF8Span.CharacterIterator

**Framework:** Swift  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Iterate the `Character` contents of a `UTF8Span`.

## Declaration

```swift
struct CharacterIterator
```

<a id="overview"></a>

## Overview

```swift
func countCharacters(_ string: borrowing String) {
    var iterator = string.utf8Span.makeCharacterIterator()
    var count = 0
    while let character = iterator.next() {
        count += 1
        print("Character \(count): \(character)")
    }
    print("Total: \(count) characters")
}

let string = "لاهور"
countCharacters(string)
// Prints "Character 1: ل"
// Prints "Character 2: ا"
// Prints "Character 3: ه"
// Prints "Character 4: و"
// Prints "Character 5: ر"
// Prints "Total: 5 characters"
```

## Topics

### Initializers

- [init(\_:)](characteriterator/init%28__%29.md)

### Instance Properties

- [codeUnits](characteriterator/codeunits.md)
- [currentCodeUnitOffset](characteriterator/currentcodeunitoffset.md): The byte offset of the start of the next `Character`. This is always scalar-aligned. It is always `Character`-aligned relative to the last call to `reset` (or the start of the span if not called).

### Instance Methods

- [next()](characteriterator/next%28%29.md): Return the `Character` starting at `currentCodeUnitOffset`. After the function returns, `currentCodeUnitOffset` holds the position at the end of the `Character`, which is also the start of the next `Character`.
- [prefix()](characteriterator/prefix%28%29.md): Returns the UTF8Span containing all the content up to the iterator’s current position.
- [previous()](characteriterator/previous%28%29.md): Return the `Character` ending at `currentCodeUnitOffset`. After the function returns, `currentCodeUnitOffset` holds the position at the start of the returned `Character`, which is also the end of the previous `Character`.
- [reset(roundingBackwardsFrom:)](characteriterator/reset%28roundingbackwardsfrom_%29.md): Reset to the nearest character-aligned position `<= i`.
- [reset(roundingForwardsFrom:)](characteriterator/reset%28roundingforwardsfrom_%29.md): Reset to the nearest character-aligned position `>= i`.
- [reset(toUnchecked:)](characteriterator/reset%28tounchecked_%29.md): Reset this iterator to `codeUnitOffset`, skipping *all* safety checks.
- [skipBack()](characteriterator/skipback%28%29.md): Move `currentCodeUnitOffset` to the start of the previous `Character`, without constructing it.
- [skipBack(by:)](characteriterator/skipback%28by_%29.md): Move `currentCodeUnitOffset` to the start of the previous `n` `Character`s, without constructing them.
- [skipForward()](characteriterator/skipforward%28%29.md): Advance `currentCodeUnitOffset` to the end of the current `Character`, without constructing it.
- [skipForward(by:)](characteriterator/skipforward%28by_%29.md): Advance `currentCodeUnitOffset` to the end of `n` `Characters`, without constructing them.
- [suffix()](characteriterator/suffix%28%29.md): Returns the UTF8Span containing all the content after the iterator’s current position.
