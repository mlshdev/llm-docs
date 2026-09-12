> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gklocalplayer/local-1mzi0](https://developer.apple.com/documentation/gamekit/gklocalplayer/local-1mzi0)

# local

**Interface language:** Objective-C

**Framework:** GameKit  
**Kind:** Type Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

The shared instance of the local player.

## Declaration

```objectivec
@property (class, readonly, nonnull) GKLocalPlayer * local;
```

<a id="Discussion"></a>

## Discussion

You never directly create a local player object. Instead, use this property to get the shared instance.

## See Also

### Accessing the Local Player

- [localPlayer](local-oaa8.md): The shared instance of the local player.
