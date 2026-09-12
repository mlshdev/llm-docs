> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsxpclistener/activate()](https://developer.apple.com/documentation/foundation/nsxpclistener/activate())

# activate() (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

Activates the listener.

## Declaration

```swift
func activate()
```

<a id="Discussion"></a>

## Discussion

Connections start in an inactive state. You must call [activate()](activate%28%29.md) on a connection before it can send or receive any messages.

Calling [activate()](activate%28%29.md) on an active connection has no effect.

For backward compatibility reasons, calling [resume()](resume%28%29.md) on an inactive and otherwise not suspended [NSXPCListener](../nsxpclistener.md) has the same effect as calling [activate()](activate%28%29.md). For new code, prefer [activate()](activate%28%29.md).

## See Also

### Managing connection state

- [resume()](resume%28%29.md): Starts processing of incoming requests.
- [invalidate()](invalidate%28%29.md): Invalidates the listener.
- [suspend()](suspend%28%29.md): Suspends the listener.

# activate (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

Activates the listener.

## Declaration

```objectivec
- (void) activate;
```

<a id="Discussion"></a>

## Discussion

Connections start in an inactive state. You must call [activate](activate%28%29.md) on a connection before it can send or receive any messages.

Calling [activate](activate%28%29.md) on an active connection has no effect.

For backward compatibility reasons, calling [resume](resume%28%29.md) on an inactive and otherwise not suspended [NSXPCListener](../nsxpclistener.md) has the same effect as calling [activate](activate%28%29.md). For new code, prefer [activate](activate%28%29.md).

## See Also

### Managing connection state

- [resume](resume%28%29.md): Starts processing of incoming requests.
- [invalidate](invalidate%28%29.md): Invalidates the listener.
- [suspend](suspend%28%29.md): Suspends the listener.
