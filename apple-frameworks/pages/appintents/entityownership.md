> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/entityownership](https://developer.apple.com/documentation/appintents/entityownership)

# EntityOwnership

**Framework:** App Intents  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

A type that represents the ownership and sharing characteristics of an app entity.

## Declaration

```swift
struct EntityOwnership
```

<a id="overview"></a>

## Overview

The [EntityOwnership](entityownership.md) structure provides flag-based ownership information. Specify a single state, or combine multiple states using an [OptionSet](https://developer.apple.com/documentation/swift/optionset), as shown in the following example:

```swift
// Single ownership and sharing state:
var ownership: EntityOwnership { .shared }

// or

// Combined ownership and sharing states:
var ownership: EntityOwnership { [.shared, .public] }
```

## Topics

### Scoping entity ownership and sharing

- [public](entityownership/public.md): A state that indicates the entity represents data a person shares publicly.
- [shared](entityownership/shared.md): A state that indicates a person shares the entity with specific collaborators.
- [unknown](entityownership/unknown.md): A state that indicates that entity ownership or sharing status is unknown or unspecified.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)
