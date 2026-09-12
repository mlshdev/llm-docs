> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/neapppushprovider/start(completionhandler:)](https://developer.apple.com/documentation/networkextension/neapppushprovider/start(completionhandler:))

# start(completionHandler:) (Swift)

**Framework:** Network Extension  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ (deprecated in 27.0) · iPadOS 14.0+ (deprecated in 27.0) · Mac Catalyst 14.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

Indicates that the framework has started the provider, and provides a completion handler for subclasses to signal their readiness.

## Declaration

```swift
func start(completionHandler: @escaping ((any Error)?) -> Void)
```

## Parameters

- `completionHandler`: A Swift closure or ObjectiveC block for your provider subclass to call after it begins connecting to the server. If you can’t connect, pass a non-nil `error` that describes the error, otherwise pass `nil`.

## Mentioned In

- [Maintaining a Reliable Network Connection](../maintaining-a-reliable-network-connection.md)

<a id="Discussion"></a>

## Discussion

An [NEAppPushProvider](../neapppushprovider.md) subclass must override this method to create a connection with its server.

## See Also

### Implementing provider life cycle

- [start()](start%28%29.md): Indicates that the framework has started the provider.
- [stop(with:completionHandler:)](stop%28with_completionhandler_%29.md): Indicates that the framework needs to stop the provider.
- [handleTimerEvent()](handletimerevent%28%29.md): Indicates a periodic status check from the framework to the provider.

# startWithCompletionHandler: (Objective-C)

**Framework:** Network Extension  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ (deprecated in 27.0) · iPadOS 14.0+ (deprecated in 27.0) · Mac Catalyst 14.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

Indicates that the framework has started the provider, and provides a completion handler for subclasses to signal their readiness.

## Declaration

```objectivec
- (void) startWithCompletionHandler:(void (^)(NSError *error)) completionHandler;
```

## Parameters

- `completionHandler`: A Swift closure or ObjectiveC block for your provider subclass to call after it begins connecting to the server. If you can’t connect, pass a non-nil `error` that describes the error, otherwise pass `nil`.

## Mentioned In

- [Maintaining a Reliable Network Connection](../maintaining-a-reliable-network-connection.md)

<a id="Discussion"></a>

## Discussion

An [NEAppPushProvider](../neapppushprovider.md) subclass must override this method to create a connection with its server.

## See Also

### Implementing provider life cycle

- [start](start%28%29.md): Indicates that the framework has started the provider.
- [stopWithReason:completionHandler:](stop%28with_completionhandler_%29.md): Indicates that the framework needs to stop the provider.
- [handleTimerEvent](handletimerevent%28%29.md): Indicates a periodic status check from the framework to the provider.
