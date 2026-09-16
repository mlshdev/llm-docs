> Snapshot-pinned source payload for Apple Swift snapshot-5915b24a1311; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swift/enumeratedsequence/index

# EnumeratedSequence.Index

**Framework:** Swift  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

A type that represents a position in the collection.

## Declaration

```swift
@frozen struct Index
```

<a id="overview"></a>

## Overview

Valid indices consist of the position of every element and a “past the end” position that’s not valid for use as a subscript argument.

## Topics

### Instance Properties

- [base](index/base.md): The position in the underlying collection.

### Default Implementations

- [Comparable Implementations](index/comparable-implementations.md)
- [Equatable Implementations](index/equatable-implementations.md)

## Relationships

### Conforms To

- [Comparable](../comparable.md)
- [Equatable](../equatable.md)
