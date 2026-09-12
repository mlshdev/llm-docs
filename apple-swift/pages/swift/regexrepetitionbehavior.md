> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/regexrepetitionbehavior](https://developer.apple.com/documentation/swift/regexrepetitionbehavior)

# RegexRepetitionBehavior

**Framework:** Swift  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Specifies how much to attempt to match when using a quantifier.

## Declaration

```swift
struct RegexRepetitionBehavior
```

<a id="overview"></a>

## Overview

See [repetitionBehavior(\_:)](regex/repetitionbehavior%28__%29.md) for more about specifying the default matching behavior for all or part of a regex.

## Topics

### Operators

- [==(\_:\_:)](regexrepetitionbehavior/==%28____%29.md): Returns a Boolean value indicating whether two values are equal.

### Instance Properties

- [hashValue](regexrepetitionbehavior/hashvalue.md): The hash value.

### Instance Methods

- [hash(into:)](regexrepetitionbehavior/hash%28into_%29.md): Hashes the essential components of this value by feeding them into the given hasher.

### Type Properties

- [eager](regexrepetitionbehavior/eager.md): Match as much of the input string as possible, backtracking when necessary.
- [possessive](regexrepetitionbehavior/possessive.md): Match as much of the input string as possible, performing no backtracking.
- [reluctant](regexrepetitionbehavior/reluctant.md): Match as little of the input string as possible, expanding the matched region as necessary to complete a match.

### Default Implementations

- [Equatable Implementations](regexrepetitionbehavior/equatable-implementations.md)

## Relationships

### Conforms To

- [Equatable](equatable.md)
- [Hashable](hashable.md)

## See Also

### Regular Expressions

- [Regex](regex.md): A regular expression.
- [RegexSemanticLevel](regexsemanticlevel.md): A semantic level to use during regex matching.
- [RegexWordBoundaryKind](regexwordboundarykind.md): A word boundary algorithm to use during regex matching.
- [AnyRegexOutput](anyregexoutput.md): The type-erased, dynamic output of a regular expression match.
- [RegexComponent](regexcomponent.md): A type that represents a regular expression.
- [CustomConsumingRegexComponent](customconsumingregexcomponent.md)
