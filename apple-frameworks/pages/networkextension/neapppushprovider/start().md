> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/neapppushprovider/start()](https://developer.apple.com/documentation/networkextension/neapppushprovider/start())

# start() (Swift)

**Framework:** Network Extension  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · visionOS 1.0+

Indicates that the framework has started the provider.

## Declaration

```swift
func start()
```

<a id="Discussion"></a>

## Discussion

An [NEAppPushProvider](../neapppushprovider.md) subclass must override this method to create a connection with its server.

## See Also

### Implementing provider life cycle

- [start(completionHandler:)](start%28completionhandler_%29.md): Deprecated. Indicates that the framework has started the provider, and provides a completion handler for subclasses to signal their readiness.
- [stop(with:completionHandler:)](stop%28with_completionhandler_%29.md): Indicates that the framework needs to stop the provider.
- [handleTimerEvent()](handletimerevent%28%29.md): Indicates a periodic status check from the framework to the provider.

# start (Objective-C)

**Framework:** Network Extension  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · visionOS 1.0+

Indicates that the framework has started the provider.

## Declaration

```objectivec
- (void) start;
```

<a id="Discussion"></a>

## Discussion

An [NEAppPushProvider](../neapppushprovider.md) subclass must override this method to create a connection with its server.

## See Also

### Implementing provider life cycle

- [startWithCompletionHandler:](start%28completionhandler_%29.md): Deprecated. Indicates that the framework has started the provider, and provides a completion handler for subclasses to signal their readiness.
- [stopWithReason:completionHandler:](stop%28with_completionhandler_%29.md): Indicates that the framework needs to stop the provider.
- [handleTimerEvent](handletimerevent%28%29.md): Indicates a periodic status check from the framework to the provider.
