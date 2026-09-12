> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gklocalplayer/register(_:)](https://developer.apple.com/documentation/gamekit/gklocalplayer/register(_:))

# register(\_:) (Swift)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 3.0+

Registers a listener for a particular event.

## Declaration

```swift
func register(_ listener: any GKLocalPlayerListener)
```

## Parameters

- `listener`: The object that GameKit sends messages to when events occur.

<a id="Discussion"></a>

## Discussion

Only register a listener a single time. Registering a listener multiple times results in undefined behavior.

## See Also

### Registering Listeners

- [unregisterAllListeners()](unregisteralllisteners%28%29.md): Unregisters all listeners in your game.
- [unregisterListener(\_:)](unregisterlistener%28__%29.md): Unregisters a listener object.

# registerListener: (Objective-C)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 3.0+

Registers a listener for a particular event.

## Declaration

```objectivec
- (void) registerListener:(id<GKLocalPlayerListener>) listener;
```

## Parameters

- `listener`: The object that GameKit sends messages to when events occur.

<a id="Discussion"></a>

## Discussion

Only register a listener a single time. Registering a listener multiple times results in undefined behavior.

## See Also

### Registering Listeners

- [unregisterAllListeners](unregisteralllisteners%28%29.md): Unregisters all listeners in your game.
- [unregisterListener:](unregisterlistener%28__%29.md): Unregisters a listener object.
