> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkplayer/guestidentifier](https://developer.apple.com/documentation/gamekit/gkplayer/guestidentifier)

# guestIdentifier (Swift)

**Framework:** GameKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

A developer-created string that identifies a guest player.

## Declaration

```swift
var guestIdentifier: String? { get }
```

## See Also

### Creating a guest player

- [anonymousGuestPlayer(withIdentifier:)](anonymousguestplayer%28withidentifier_%29.md): Creates a guest player with the specified identifier.

# guestIdentifier (Objective-C)

**Framework:** GameKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

A developer-created string that identifies a guest player.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) NSString * guestIdentifier;
```

```objectivec
@property (atomic, readonly, nullable) NSString * guestIdentifier;
```

## See Also

### Creating a guest player

- [anonymousGuestPlayerWithIdentifier:](anonymousguestplayer%28withidentifier_%29.md): Creates a guest player with the specified identifier.
