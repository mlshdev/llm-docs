> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/utf8span](https://developer.apple.com/documentation/swift/utf8span)

# UTF8Span

**Framework:** Swift  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

A borrowed view into contiguous memory that contains validly-encoded UTF-8 code units.

## Declaration

```swift
@frozen struct UTF8Span
```

## Topics

### Structures

- [UTF8Span.CharacterIterator](utf8span/characteriterator.md): Iterate the `Character` contents of a `UTF8Span`.
- [UTF8Span.UnicodeScalarIterator](utf8span/unicodescalariterator.md): Iterate the `Unicode.Scalar`s contents of a `UTF8Span`.

### Initializers

- [init(unchecked:isKnownASCII:)](utf8span/init%28unchecked_isknownascii_%29.md): Creates a UTF8Span, bypassing safety and security checks. The caller must guarantee that `codeUnits` contains validly-encoded UTF-8, or else undefined behavior may result upon use. If `isKnownASCII: true is passed`, the contents must be ASCII, or else undefined behavior may result upon use.
- [init(validating:)](utf8span/init%28validating_%29.md): Creates a UTF8Span containing `codeUnits`. Validates that the input is valid UTF-8, otherwise throws an error.

### Instance Properties

- [count](utf8span/count.md): The number of UTF-8 code units in the span.
- [isEmpty](utf8span/isempty.md): A Boolean value that indicates whether the UTF-8 span is empty.
- [isKnownASCII](utf8span/isknownascii.md): Returns whether contents are known to be all-ASCII. A return value of `true` means that all code units are ASCII. A return value of `false` means there *may* be non-ASCII content.
- [isKnownNFC](utf8span/isknownnfc.md): Returns whether the contents are known to be NFC. This is not always checked at initialization time and is set by `checkForNFC`.
- [span](utf8span/span.md): A span used to access the code units.

### Instance Methods

- [bytesEqual(to:)](utf8span/bytesequal%28to_%29.md): Whether this span has the same bytes as `other`.
- [charactersEqual(to:)](utf8span/charactersequal%28to_%29.md): Whether this span has the same `Character`s as `other`.
- [checkForASCII()](utf8span/checkforascii%28%29.md): Do a scan checking for whether the contents are all-ASCII.
- [checkForNFC(quickCheck:)](utf8span/checkfornfc%28quickcheck_%29.md): Do a scan checking for whether the contents are in Normal Form C. When the contents are in NFC, canonical equivalence checks are much faster.
- [isCanonicallyEquivalent(to:)](utf8span/iscanonicallyequivalent%28to_%29.md): Whether `self` is equivalent to `other` under Unicode Canonical Equivalence.
- [isCanonicallyLessThan(\_:)](utf8span/iscanonicallylessthan%28__%29.md): Whether `self` orders less than `other` under Unicode Canonical Equivalence using normalized code-unit order (in NFC).
- [isTriviallyIdentical(to:)](utf8span/istriviallyidentical%28to_%29.md): Returns a Boolean value indicating whether two instances refer to the same memory region, and have the same flags (such as [isKnownASCII](utf8span/isknownascii.md)).
- [makeCharacterIterator()](utf8span/makecharacteriterator%28%29.md): Returns an iterator that will construct `Character`s from the underlying UTF-8 content.
- [makeUnicodeScalarIterator()](utf8span/makeunicodescalariterator%28%29.md): Returns an iterator that will decode the code units into `Unicode.Scalar`s.
- [unicodeScalarsEqual(to:)](utf8span/unicodescalarsequal%28to_%29.md): Whether this span has the same `Unicode.Scalar`s as `other`.

## Relationships

### Conforms To

- [BitwiseCopyable](bitwisecopyable.md)
- [ContiguousBytes](https://developer.apple.com/documentation/foundation/contiguousbytes)

## See Also

### Safe Memory Access

- [Span](span.md): `Span<Element>` represents a contiguous region of memory which contains initialized instances of `Element`.
- [RawSpan](rawspan.md): `RawSpan` represents a contiguous region of memory which contains initialized bytes.
- [OutputSpan](outputspan.md): `OutputSpan` is a reference to a contiguous region of memory that starts with some number of initialized `Element` instances followed by uninitialized memory. It provides operations to access the items it stores, as well as to add new elements and to remove existing ones.
- [OutputRawSpan](outputrawspan.md): `OutputRawSpan` is a reference to a contiguous region of memory which starts with some number of initialized bytes, followed by uninitialized memory. It provides operations to access the bytes it stores, as well as to append and to remove bytes.
- [MutableSpan](mutablespan.md): `MutableSpan<Element>` represents a contiguous region of memory which contains initialized instances of `Element`.
- [MutableRawSpan](mutablerawspan.md): `MutableRawSpan` represents a contiguous region of memory which contains initialized bytes.
