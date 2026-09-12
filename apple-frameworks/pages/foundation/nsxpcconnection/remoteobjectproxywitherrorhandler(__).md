> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsxpcconnection/remoteobjectproxywitherrorhandler(_:)](https://developer.apple.com/documentation/foundation/nsxpcconnection/remoteobjectproxywitherrorhandler(_:))

# remoteObjectProxyWithErrorHandler(\_:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a proxy for the remote object (that is, the object exported from the other side of this connection) with the specified error handler.

## Declaration

```swift
func remoteObjectProxyWithErrorHandler(_ handler: @escaping (any Error) -> Void) -> Any
```

<a id="Discussion"></a>

## Discussion

See descriptions in [NSXPCProxyCreating](../nsxpcproxycreating.md) for more details.

## See Also

### Working with proxy objects

- [synchronousRemoteObjectProxyWithErrorHandler(\_:)](synchronousremoteobjectproxywitherrorhandler%28__%29.md): Returns a proxy that makes a synchronous IPC call instead of the default async behavior.

# remoteObjectProxyWithErrorHandler: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a proxy for the remote object (that is, the object exported from the other side of this connection) with the specified error handler.

## Declaration

```objectivec
- (id) remoteObjectProxyWithErrorHandler:(void (^)(NSError *error)) handler;
```

<a id="Discussion"></a>

## Discussion

See descriptions in [NSXPCProxyCreating](../nsxpcproxycreating.md) for more details.

## See Also

### Working with proxy objects

- [synchronousRemoteObjectProxyWithErrorHandler:](synchronousremoteobjectproxywitherrorhandler%28__%29.md): Returns a proxy that makes a synchronous IPC call instead of the default async behavior.
