> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gklocalplayer/isunderage](https://developer.apple.com/documentation/gamekit/gklocalplayer/isunderage)

# isUnderage (Swift)

**Framework:** GameKit  
**Kind:** Instance Property  
**Availability:** iOS 4.1+ · iPadOS 4.1+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 3.0+

A Boolean value that indicates whether the local player is underage.

## Declaration

```swift
var isUnderage: Bool { get }
```

## Mentioned In

- [Authenticating a player](../authenticating-a-player.md)

<a id="Discussion"></a>

## Discussion

If this property is [true](https://developer.apple.com/documentation/swift/true), Game Center disables some features for the local player. On all platforms, Game Center provides the value for the underage property for the Game Center account that the player signs into on the device. Note that the Game Center account defaults to the iCloud account that the player signs into on the device, but the player can sign into a different Game Center account.

## See Also

### Determining Whether the Player Is Underage or Restricted

- [isMultiplayerGamingRestricted](ismultiplayergamingrestricted.md): A Boolean value that indicates whether the player can join multiplayer games.
- [isPersonalizedCommunicationRestricted](ispersonalizedcommunicationrestricted.md): A Boolean value that indicates whether the player can use personalized communication on the device.

# underage (Objective-C)

**Framework:** GameKit  
**Kind:** Instance Property  
**Availability:** iOS 4.1+ · iPadOS 4.1+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 3.0+

A Boolean value that indicates whether the local player is underage.

## Declaration

```objectivec
@property (nonatomic, readonly, getter=isUnderage) BOOL underage;
```

```objectivec
@property (atomic, readonly, getter=isUnderage) BOOL underage;
```

## Mentioned In

- [Authenticating a player](../authenticating-a-player.md)

<a id="Discussion"></a>

## Discussion

If this property is [true](https://developer.apple.com/documentation/swift/true), Game Center disables some features for the local player. On all platforms, Game Center provides the value for the underage property for the Game Center account that the player signs into on the device. Note that the Game Center account defaults to the iCloud account that the player signs into on the device, but the player can sign into a different Game Center account.

## See Also

### Determining Whether the Player Is Underage or Restricted

- [multiplayerGamingRestricted](ismultiplayergamingrestricted.md): A Boolean value that indicates whether the player can join multiplayer games.
- [personalizedCommunicationRestricted](ispersonalizedcommunicationrestricted.md): A Boolean value that indicates whether the player can use personalized communication on the device.
