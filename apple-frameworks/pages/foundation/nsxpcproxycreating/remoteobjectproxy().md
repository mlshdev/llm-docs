> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsxpcproxycreating/remoteobjectproxy()](https://developer.apple.com/documentation/foundation/nsxpcproxycreating/remoteobjectproxy())

# remoteObjectProxy() (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a proxy object with no error handling block.

## Declaration

```swift
func remoteObjectProxy() -> Any
```

<a id="Discussion"></a>

## Discussion

Messages sent to the proxy object are sent over the wire to the other side of the connection. All messages must be ‘void’ return type. Control may be returned to the caller before the message is sent. The resulting proxy object conforms to the `NSXPCProxyCreating` protocol.

## See Also

### Related Documentation

- [Daemons and Services Programming Guide](https://developer.apple.com/library/archive/documentation/MacOSX/Conceptual/BPSystemStartup/Chapters/Introduction.html#//apple_ref/doc/uid/10000172i)

# remoteObjectProxy (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a proxy object with no error handling block.

## Declaration

```objectivec
- (id) remoteObjectProxy;
```

<a id="Discussion"></a>

## Discussion

Messages sent to the proxy object are sent over the wire to the other side of the connection. All messages must be ‘void’ return type. Control may be returned to the caller before the message is sent. The resulting proxy object conforms to the `NSXPCProxyCreating` protocol.

## See Also

### Related Documentation

- [Daemons and Services Programming Guide](https://developer.apple.com/library/archive/documentation/MacOSX/Conceptual/BPSystemStartup/Chapters/Introduction.html#//apple_ref/doc/uid/10000172i)
