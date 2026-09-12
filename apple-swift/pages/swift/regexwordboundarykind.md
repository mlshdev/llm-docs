> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/regexwordboundarykind](https://developer.apple.com/documentation/swift/regexwordboundarykind)

# RegexWordBoundaryKind

**Framework:** Swift  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

A word boundary algorithm to use during regex matching.

## Declaration

```swift
struct RegexWordBoundaryKind
```

<a id="overview"></a>

## Overview

See [wordBoundaryKind(\_:)](regex/wordboundarykind%28__%29.md) for information about specifying the word boundary kind for all or part of a regex.

## Topics

### Operators

- [==(\_:\_:)](regexwordboundarykind/==%28____%29.md): Returns a Boolean value indicating whether two values are equal.

### Instance Properties

- [hashValue](regexwordboundarykind/hashvalue.md): The hash value.

### Instance Methods

- [hash(into:)](regexwordboundarykind/hash%28into_%29.md): Hashes the essential components of this value by feeding them into the given hasher.

### Type Properties

- [default](regexwordboundarykind/default.md): A word boundary algorithm that implements the “default word boundary” Unicode recommendation.
- [simple](regexwordboundarykind/simple.md): A word boundary algorithm that implements the “simple word boundary” Unicode recommendation.

### Default Implementations

- [Equatable Implementations](regexwordboundarykind/equatable-implementations.md)

## Relationships

### Conforms To

- [Equatable](equatable.md)
- [Hashable](hashable.md)

## See Also

### Regular Expressions

- [Regex](regex.md): A regular expression.
- [RegexRepetitionBehavior](regexrepetitionbehavior.md): Specifies how much to attempt to match when using a quantifier.
- [RegexSemanticLevel](regexsemanticlevel.md): A semantic level to use during regex matching.
- [AnyRegexOutput](anyregexoutput.md): The type-erased, dynamic output of a regular expression match.
- [RegexComponent](regexcomponent.md): A type that represents a regular expression.
- [CustomConsumingRegexComponent](customconsumingregexcomponent.md)
