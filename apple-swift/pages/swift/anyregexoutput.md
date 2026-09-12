> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/anyregexoutput](https://developer.apple.com/documentation/swift/anyregexoutput)

# AnyRegexOutput

**Framework:** Swift  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

The type-erased, dynamic output of a regular expression match.

## Declaration

```swift
struct AnyRegexOutput
```

<a id="overview"></a>

## Overview

When you find a match using regular expression that has `AnyRegexOutput` as its output type, you can find information about matches by iterating

## Topics

### Initializers

- [init(\_:)](anyregexoutput/init%28__%29.md): Creates a dynamic regular expression match output from an existing match.

### Instance Methods

- [extractValues(as:)](anyregexoutput/extractvalues%28as_%29.md): Returns strongly-typed match output by converting this type-erased output to the specified type, if possible.

### Subscripts

- [subscript(\_:)](anyregexoutput/subscript%28__%29-6qdcr.md): Accesses the capture with the specified name, if a capture with that name exists.

### Default Implementations

- [BidirectionalCollection Implementations](anyregexoutput/bidirectionalcollection-implementations.md)
- [Collection Implementations](anyregexoutput/collection-implementations.md)
- [RandomAccessCollection Implementations](anyregexoutput/randomaccesscollection-implementations.md)
- [Sequence Implementations](anyregexoutput/sequence-implementations.md)

## Relationships

### Conforms To

- [BidirectionalCollection](bidirectionalcollection.md)
- [Collection](collection.md)
- [Copyable](copyable.md)
- [Escapable](escapable.md)
- [RandomAccessCollection](randomaccesscollection.md)
- [Sequence](sequence.md)

## See Also

### Regular Expressions

- [Regex](regex.md): A regular expression.
- [RegexRepetitionBehavior](regexrepetitionbehavior.md): Specifies how much to attempt to match when using a quantifier.
- [RegexSemanticLevel](regexsemanticlevel.md): A semantic level to use during regex matching.
- [RegexWordBoundaryKind](regexwordboundarykind.md): A word boundary algorithm to use during regex matching.
- [RegexComponent](regexcomponent.md): A type that represents a regular expression.
- [CustomConsumingRegexComponent](customconsumingregexcomponent.md)
