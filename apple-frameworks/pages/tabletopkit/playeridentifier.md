> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/tabletopkit/playeridentifier

# PlayerIdentifier

**Framework:** TabletopKit  
**Kind:** Structure  
**Availability:** visionOS 2.0+

A unique identifier for players.

## Declaration

```swift
struct PlayerIdentifier
```

<a id="overview"></a>

## Overview

A player identifier is unique across all instances of the same tabletop game.

## Topics

### Creating player identifiers

- [init(uuid:)](playeridentifier/init%28uuid_%29.md): Creates a player identifier.

### Getting identifier values

- [uuid](playeridentifier/uuid.md): A universally unique value to identify a player.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Players

- [Player](player.md): A player in a tabletop game.
