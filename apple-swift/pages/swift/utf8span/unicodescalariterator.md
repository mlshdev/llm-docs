> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/utf8span/unicodescalariterator](https://developer.apple.com/documentation/swift/utf8span/unicodescalariterator)

# UTF8Span.UnicodeScalarIterator

**Framework:** Swift  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Iterate the `Unicode.Scalar`s contents of a `UTF8Span`.

## Declaration

```swift
@frozen struct UnicodeScalarIterator
```

<a id="overview"></a>

## Overview

```swift
func printScalarValues(_ string: borrowing String) {
    var iterator = string.utf8Span.makeUnicodeScalarIterator()
    while let scalar = iterator.next() {
        print(scalar.escaped(asASCII: true))
    }
}

let string = "A🎉"
printScalarValues(string)
// Prints "A"
// Prints "\u{0001F389}"
```

## Topics

### Initializers

- [init(\_:)](unicodescalariterator/init%28__%29.md)

### Instance Properties

- [codeUnits](unicodescalariterator/codeunits.md)
- [currentCodeUnitOffset](unicodescalariterator/currentcodeunitoffset.md): The byte offset of the start of the next scalar. This is always scalar-aligned.

### Instance Methods

- [next()](unicodescalariterator/next%28%29.md): Decode and return the scalar starting at `currentCodeUnitOffset`. After the function returns, `currentCodeUnitOffset` holds the position at the end of the returned scalar, which is also the start of the next scalar.
- [prefix()](unicodescalariterator/prefix%28%29.md): Returns the UTF8Span containing all the content up to the iterator’s current position.
- [previous()](unicodescalariterator/previous%28%29.md): Decode and return the scalar ending at `currentCodeUnitOffset`. After the function returns, `currentCodeUnitOffset` holds the position at the start of the returned scalar, which is also the end of the previous scalar.
- [reset(roundingBackwardsFrom:)](unicodescalariterator/reset%28roundingbackwardsfrom_%29.md): Reset to the nearest scalar-aligned code unit offset `<= i`.
- [reset(roundingForwardsFrom:)](unicodescalariterator/reset%28roundingforwardsfrom_%29.md): Reset to the nearest scalar-aligned code unit offset `>= i`.
- [reset(toUnchecked:)](unicodescalariterator/reset%28tounchecked_%29.md): Reset this iterator to `codeUnitOffset`, skipping *all* safety checks (including bounds checks).
- [skipBack()](unicodescalariterator/skipback%28%29.md): Move `currentCodeUnitOffset` to the start of the previous scalar, without decoding it.
- [skipBack(by:)](unicodescalariterator/skipback%28by_%29.md): Move `currentCodeUnitOffset` to the start of the previous `n` scalars, without decoding them.
- [skipForward()](unicodescalariterator/skipforward%28%29.md): Advance `currentCodeUnitOffset` to the end of the current scalar, without decoding it.
- [skipForward(by:)](unicodescalariterator/skipforward%28by_%29.md): Advance `currentCodeUnitOffset` to the end of `n` scalars, without decoding them.
- [suffix()](unicodescalariterator/suffix%28%29.md): Returns the UTF8Span containing all the content after the iterator’s current position.

## Relationships

### Conforms To

- [BitwiseCopyable](../bitwisecopyable.md)
- [Copyable](../copyable.md)
