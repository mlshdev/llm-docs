> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/gamekit/gkbaseplayer/displayname

# displayName (Swift)

**Framework:** GameKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

The Game Center profile name for a player.

## Declaration

```swift
var displayName: String? { get }
```

<a id="Discussion"></a>

## Discussion

Players only see the display name of other players who are in their contacts list.

## See Also

### Identifying a Player

- [playerID](playerid.md): Deprecated. A unique identifier for a player.

# displayName (Objective-C)

**Framework:** GameKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

The Game Center profile name for a player.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) NSString * displayName;
```

```objectivec
@property (atomic, readonly, nullable) NSString * displayName;
```

<a id="Discussion"></a>

## Discussion

Players only see the display name of other players who are in their contacts list.

## See Also

### Identifying a Player

- [playerID](playerid.md): Deprecated. A unique identifier for a player.
