> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gklocalplayer/unregisterlistener(_:)](https://developer.apple.com/documentation/gamekit/gklocalplayer/unregisterlistener(_:))

# unregisterListener(\_:) (Swift)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 3.0+

Unregisters a listener object.

## Declaration

```swift
func unregisterListener(_ listener: any GKLocalPlayerListener)
```

## Parameters

- `listener`: The object that GameKit stops sending messages to when events occur.

## See Also

### Registering Listeners

- [register(\_:)](register%28__%29.md): Registers a listener for a particular event.
- [unregisterAllListeners()](unregisteralllisteners%28%29.md): Unregisters all listeners in your game.

# unregisterListener: (Objective-C)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 3.0+

Unregisters a listener object.

## Declaration

```objectivec
- (void) unregisterListener:(id<GKLocalPlayerListener>) listener;
```

## Parameters

- `listener`: The object that GameKit stops sending messages to when events occur.

## See Also

### Registering Listeners

- [registerListener:](register%28__%29.md): Registers a listener for a particular event.
- [unregisterAllListeners](unregisteralllisteners%28%29.md): Unregisters all listeners in your game.
