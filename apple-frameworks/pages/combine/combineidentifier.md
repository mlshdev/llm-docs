> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/combine/combineidentifier](https://developer.apple.com/documentation/combine/combineidentifier)

# CombineIdentifier

**Framework:** Combine  
**Kind:** Structure  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A unique identifier for identifying publisher streams.

## Declaration

```swift
struct CombineIdentifier
```

<a id="overview"></a>

## Overview

To conform to [CustomCombineIdentifierConvertible](customcombineidentifierconvertible.md) in a [Subscription](subscription.md) or [Subject](subject.md) that you implement as a structure, create an instance of [CombineIdentifier](combineidentifier.md) as follows:

```swift
let combineIdentifier = CombineIdentifier()
```

## Topics

### Creating a Combine identifier

- [init()](combineidentifier/init%28%29.md): Creates a unique Combine identifier.
- [init(\_:)](combineidentifier/init%28__%29.md): Creates a Combine identifier, using the bit pattern of the provided object.

### Providing a description

- [description](combineidentifier/description.md): A textual representation of this instance.

## Relationships

### Conforms To

- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)

## See Also

### Debugging Identifiers

- [CustomCombineIdentifierConvertible](customcombineidentifierconvertible.md): A protocol for uniquely identifying publisher streams.
