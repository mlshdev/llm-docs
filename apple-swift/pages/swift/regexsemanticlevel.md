> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/regexsemanticlevel](https://developer.apple.com/documentation/swift/regexsemanticlevel)

# RegexSemanticLevel

**Framework:** Swift  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

A semantic level to use during regex matching.

## Declaration

```swift
struct RegexSemanticLevel
```

<a id="overview"></a>

## Overview

The semantic level determines whether a regex matches with the same character-based semantics as string comparisons or by matching individual Unicode scalar values. See [matchingSemantics(\_:)](regex/matchingsemantics%28__%29.md) for more about changing the semantic level for all or part of a regex.

## Topics

### Operators

- [==(\_:\_:)](regexsemanticlevel/==%28____%29.md): Returns a Boolean value indicating whether two values are equal.

### Instance Properties

- [hashValue](regexsemanticlevel/hashvalue.md): The hash value.

### Instance Methods

- [hash(into:)](regexsemanticlevel/hash%28into_%29.md): Hashes the essential components of this value by feeding them into the given hasher.

### Type Properties

- [graphemeCluster](regexsemanticlevel/graphemecluster.md): Match at the character level.
- [unicodeScalar](regexsemanticlevel/unicodescalar.md): Match at the Unicode scalar level.

### Default Implementations

- [Equatable Implementations](regexsemanticlevel/equatable-implementations.md)

## Relationships

### Conforms To

- [Equatable](equatable.md)
- [Hashable](hashable.md)

## See Also

### Regular Expressions

- [Regex](regex.md): A regular expression.
- [RegexRepetitionBehavior](regexrepetitionbehavior.md): Specifies how much to attempt to match when using a quantifier.
- [RegexWordBoundaryKind](regexwordboundarykind.md): A word boundary algorithm to use during regex matching.
- [AnyRegexOutput](anyregexoutput.md): The type-erased, dynamic output of a regular expression match.
- [RegexComponent](regexcomponent.md): A type that represents a regular expression.
- [CustomConsumingRegexComponent](customconsumingregexcomponent.md)
