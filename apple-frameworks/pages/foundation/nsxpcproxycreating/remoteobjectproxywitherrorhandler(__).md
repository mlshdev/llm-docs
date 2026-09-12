> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsxpcproxycreating/remoteobjectproxywitherrorhandler(_:)](https://developer.apple.com/documentation/foundation/nsxpcproxycreating/remoteobjectproxywitherrorhandler(_:))

# remoteObjectProxyWithErrorHandler(\_:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a proxy object that invokes the error handling block if an error occurs on the connection.

## Declaration

```swift
func remoteObjectProxyWithErrorHandler(_ handler: @escaping @Sendable (any Error) -> Void) -> Any
```

## Parameters

- `handler`: The error handling block that the proxy object should call when an error occurs while waiting for a reply.

<a id="Discussion"></a>

## Discussion

If the message sent to the proxy has a reply handler, then either the error handler or the reply handler is called exactly once.

The resulting proxy object conforms to the `NSXPCProxyCreating` protocol.

# remoteObjectProxyWithErrorHandler: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a proxy object that invokes the error handling block if an error occurs on the connection.

## Declaration

```objectivec
- (id) remoteObjectProxyWithErrorHandler:(void (^)(NSError *error)) handler;
```

## Parameters

- `handler`: The error handling block that the proxy object should call when an error occurs while waiting for a reply.

<a id="Discussion"></a>

## Discussion

If the message sent to the proxy has a reply handler, then either the error handler or the reply handler is called exactly once.

The resulting proxy object conforms to the `NSXPCProxyCreating` protocol.
