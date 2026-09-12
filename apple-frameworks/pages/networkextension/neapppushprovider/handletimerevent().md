> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/neapppushprovider/handletimerevent()](https://developer.apple.com/documentation/networkextension/neapppushprovider/handletimerevent())

# handleTimerEvent() (Swift)

**Framework:** Network Extension  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · visionOS 1.0+

Indicates a periodic status check from the framework to the provider.

## Declaration

```swift
func handleTimerEvent()
```

## Mentioned In

- [Maintaining a Reliable Network Connection](../maintaining-a-reliable-network-connection.md)

<a id="Discussion"></a>

## Discussion

Implement this method to have your extension check its connection to the server, and trigger a reconnect if necessary.

## See Also

### Implementing provider life cycle

- [start()](start%28%29.md): Indicates that the framework has started the provider.
- [start(completionHandler:)](start%28completionhandler_%29.md): Deprecated. Indicates that the framework has started the provider, and provides a completion handler for subclasses to signal their readiness.
- [stop(with:completionHandler:)](stop%28with_completionhandler_%29.md): Indicates that the framework needs to stop the provider.

# handleTimerEvent (Objective-C)

**Framework:** Network Extension  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · visionOS 1.0+

Indicates a periodic status check from the framework to the provider.

## Declaration

```objectivec
- (void) handleTimerEvent;
```

## Mentioned In

- [Maintaining a Reliable Network Connection](../maintaining-a-reliable-network-connection.md)

<a id="Discussion"></a>

## Discussion

Implement this method to have your extension check its connection to the server, and trigger a reconnect if necessary.

## See Also

### Implementing provider life cycle

- [start](start%28%29.md): Indicates that the framework has started the provider.
- [startWithCompletionHandler:](start%28completionhandler_%29.md): Deprecated. Indicates that the framework has started the provider, and provides a completion handler for subclasses to signal their readiness.
- [stopWithReason:completionHandler:](stop%28with_completionhandler_%29.md): Indicates that the framework needs to stop the provider.
