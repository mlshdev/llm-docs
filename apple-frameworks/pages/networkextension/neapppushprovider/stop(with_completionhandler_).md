> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/neapppushprovider/stop(with:completionhandler:)](https://developer.apple.com/documentation/networkextension/neapppushprovider/stop(with:completionhandler:))

# stop(with:completionHandler:) (Swift)

**Framework:** Network Extension  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · visionOS 1.0+

Indicates that the framework needs to stop the provider.

## Declaration

```swift
func stop(with reason: NEProviderStopReason, completionHandler: @escaping @Sendable () -> Void)
```

```swift
func stop(with reason: NEProviderStopReason) async
```

## Parameters

- `reason`: An [NEProviderStopReason](../neproviderstopreason.md) that indicates why the provider needs to stop.
- `completionHandler`: A block that your provider subclass calls after it completely stops.

## Mentioned In

- [Maintaining a Reliable Network Connection](../maintaining-a-reliable-network-connection.md)

<a id="Discussion"></a>

## Discussion

An [NEAppPushProvider](../neapppushprovider.md) subclass must override this method to perform any necessary tasks when stopping communication with the server.

## See Also

### Implementing provider life cycle

- [start()](start%28%29.md): Indicates that the framework has started the provider.
- [start(completionHandler:)](start%28completionhandler_%29.md): Deprecated. Indicates that the framework has started the provider, and provides a completion handler for subclasses to signal their readiness.
- [handleTimerEvent()](handletimerevent%28%29.md): Indicates a periodic status check from the framework to the provider.

# stopWithReason:completionHandler: (Objective-C)

**Framework:** Network Extension  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · visionOS 1.0+

Indicates that the framework needs to stop the provider.

## Declaration

```objectivec
- (void) stopWithReason:(NEProviderStopReason) reason completionHandler:(void (^)()) completionHandler;
```

## Parameters

- `reason`: An [NEProviderStopReason](../neproviderstopreason.md) that indicates why the provider needs to stop.
- `completionHandler`: A block that your provider subclass calls after it completely stops.

## Mentioned In

- [Maintaining a Reliable Network Connection](../maintaining-a-reliable-network-connection.md)

<a id="Discussion"></a>

## Discussion

An [NEAppPushProvider](../neapppushprovider.md) subclass must override this method to perform any necessary tasks when stopping communication with the server.

## See Also

### Implementing provider life cycle

- [start](start%28%29.md): Indicates that the framework has started the provider.
- [startWithCompletionHandler:](start%28completionhandler_%29.md): Deprecated. Indicates that the framework has started the provider, and provides a completion handler for subclasses to signal their readiness.
- [handleTimerEvent](handletimerevent%28%29.md): Indicates a periodic status check from the framework to the provider.
