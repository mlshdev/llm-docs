> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsxpclistenerdelegate/listener(_:shouldacceptnewconnection:)](https://developer.apple.com/documentation/foundation/nsxpclistenerdelegate/listener(_:shouldacceptnewconnection:))

# listener(\_:shouldAcceptNewConnection:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Accepts or rejects a new connection to the listener.

## Declaration

```swift
optional func listener(_ listener: NSXPCListener, shouldAcceptNewConnection newConnection: NSXPCConnection) -> Bool
```

<a id="Discussion"></a>

## Discussion

To accept the connection, first configure the connection if desired, then call [resume()](../nsxpcconnection/resume%28%29.md) on the new connection, then return [true](https://developer.apple.com/documentation/swift/true).

To reject the connect, return a value of [false](https://developer.apple.com/documentation/swift/false). This causes the connection object to be invalidated.

In this method, you can also set up properties on the connection object, such as its exported object and interfaces. Be sure to call [resume()](../nsxpcconnection/resume%28%29.md) when you are finished configuring the connection object and are ready for it to receive messages.

## See Also

### Related Documentation

- [Daemons and Services Programming Guide](https://developer.apple.com/library/archive/documentation/MacOSX/Conceptual/BPSystemStartup/Chapters/Introduction.html#//apple_ref/doc/uid/10000172i)

# listener:shouldAcceptNewConnection: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Accepts or rejects a new connection to the listener.

## Declaration

```objectivec
- (BOOL) listener:(NSXPCListener *) listener shouldAcceptNewConnection:(NSXPCConnection *) newConnection;
```

<a id="Discussion"></a>

## Discussion

To accept the connection, first configure the connection if desired, then call [resume](../nsxpcconnection/resume%28%29.md) on the new connection, then return [true](https://developer.apple.com/documentation/swift/true).

To reject the connect, return a value of [false](https://developer.apple.com/documentation/swift/false). This causes the connection object to be invalidated.

In this method, you can also set up properties on the connection object, such as its exported object and interfaces. Be sure to call [resume](../nsxpcconnection/resume%28%29.md) when you are finished configuring the connection object and are ready for it to receive messages.

## See Also

### Related Documentation

- [Daemons and Services Programming Guide](https://developer.apple.com/library/archive/documentation/MacOSX/Conceptual/BPSystemStartup/Chapters/Introduction.html#//apple_ref/doc/uid/10000172i)
