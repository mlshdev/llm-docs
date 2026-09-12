> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkgameactivityplaystyle](https://developer.apple.com/documentation/gamekit/gkgameactivityplaystyle)

# GKGameActivityPlayStyle (Swift)

**Framework:** GameKit  
**Kind:** Enumeration  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Play Style of the game activity. It can be either Asynchronous or Synchronous.

## Declaration

```swift
enum GKGameActivityPlayStyle
```

## Topics

### Enumeration Cases

- [GKGameActivityPlayStyle.asynchronous](gkgameactivityplaystyle/asynchronous.md)
- [GKGameActivityPlayStyle.synchronous](gkgameactivityplaystyle/synchronous.md)
- [GKGameActivityPlayStyle.unspecified](gkgameactivityplaystyle/unspecified.md)

### Initializers

- [init(rawValue:)](gkgameactivityplaystyle/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Getting the activity capabilities

- [supportsPartyCode](gkgameactivitydefinition/supportspartycode.md): Whether the activity can be joined by others via a party code.
- [supportsUnlimitedPlayers](gkgameactivitydefinition/supportsunlimitedplayers.md): True if the activity supports an unlimited number of players. False if maxPlayers is set to a defined limit or if no player range is provided.
- [playerRange](gkgameactivitydefinition/playerrange.md): The range of players supported by this type of game activity.
- [playStyle](gkgameactivitydefinition/playstyle.md): The play style of the game activity.

# GKGameActivityPlayStyle (Objective-C)

**Framework:** GameKit  
**Kind:** Enumeration  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Play Style of the game activity. It can be either Asynchronous or Synchronous.

## Declaration

```objectivec
enum GKGameActivityPlayStyle : NSInteger;
```

## Topics

### Enumeration Cases

- [GKGameActivityPlayStyleAsynchronous](gkgameactivityplaystyle/asynchronous.md)
- [GKGameActivityPlayStyleSynchronous](gkgameactivityplaystyle/synchronous.md)
- [GKGameActivityPlayStyleUnspecified](gkgameactivityplaystyle/unspecified.md)

## See Also

### Getting the activity capabilities

- [supportsPartyCode](gkgameactivitydefinition/supportspartycode.md): Whether the activity can be joined by others via a party code.
- [supportsUnlimitedPlayers](gkgameactivitydefinition/supportsunlimitedplayers.md): True if the activity supports an unlimited number of players. False if maxPlayers is set to a defined limit or if no player range is provided.
- [playStyle](gkgameactivitydefinition/playstyle.md): The play style of the game activity.
