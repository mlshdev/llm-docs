> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gklocalplayer/local-oaa8](https://developer.apple.com/documentation/gamekit/gklocalplayer/local-oaa8)

# local (Swift)

**Framework:** GameKit  
**Kind:** Type Property  
**Availability:** iOS 4.1+ · iPadOS 4.1+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 3.0+

The shared instance of the local player.

## Declaration

```swift
class var local: GKLocalPlayer { get }
```

<a id="return-value"></a>

## Return Value

The local player object.

<a id="Discussion"></a>

## Discussion

You never directly create a local player object. Instead, use this method to get the shared instance.

# localPlayer (Objective-C)

**Framework:** GameKit  
**Kind:** Type Property  
**Availability:** iOS 4.1+ · iPadOS 4.1+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 3.0+

The shared instance of the local player.

## Declaration

```objectivec
@property (class, readonly, nonnull) GKLocalPlayer * localPlayer;
```

<a id="return-value"></a>

## Return Value

The local player object.

<a id="Discussion"></a>

## Discussion

You never directly create a local player object. Instead, use this method to get the shared instance.

## See Also

### Accessing the Local Player

- [local](local-1mzi0.md): The shared instance of the local player.
