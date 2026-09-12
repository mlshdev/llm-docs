> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsxpcconnection/synchronousremoteobjectproxywitherrorhandler(_:)](https://developer.apple.com/documentation/foundation/nsxpcconnection/synchronousremoteobjectproxywitherrorhandler(_:))

# synchronousRemoteObjectProxyWithErrorHandler(\_:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a proxy that makes a synchronous IPC call instead of the default async behavior.

## Declaration

```swift
func synchronousRemoteObjectProxyWithErrorHandler(_ handler: @escaping (any Error) -> Void) -> Any
```

<a id="discussion"></a>

## Discussion

The error handler block and reply block will be invoked on the calling thread before the message to the proxy returns, instead of on the queue for the connection.

## See Also

### Working with proxy objects

- [remoteObjectProxyWithErrorHandler(\_:)](remoteobjectproxywitherrorhandler%28__%29.md): Returns a proxy for the remote object (that is, the object exported from the other side of this connection) with the specified error handler.

# synchronousRemoteObjectProxyWithErrorHandler: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a proxy that makes a synchronous IPC call instead of the default async behavior.

## Declaration

```objectivec
- (id) synchronousRemoteObjectProxyWithErrorHandler:(void (^)(NSError *error)) handler;
```

<a id="discussion"></a>

## Discussion

The error handler block and reply block will be invoked on the calling thread before the message to the proxy returns, instead of on the queue for the connection.

## See Also

### Working with proxy objects

- [remoteObjectProxyWithErrorHandler:](remoteobjectproxywitherrorhandler%28__%29.md): Returns a proxy for the remote object (that is, the object exported from the other side of this connection) with the specified error handler.
