> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsxpclistener/endpoint](https://developer.apple.com/documentation/foundation/nsxpclistener/endpoint)

# endpoint (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns an endpoint object that may be sent over an existing connection.

## Declaration

```swift
var endpoint: NSXPCListenerEndpoint { get }
```

<a id="Discussion"></a>

## Discussion

The receiver of the endpoint can use this object to create a new connection to this [NSXPCListener](../nsxpclistener.md) object. The resulting `NSXPCListenerEndpoint` object uniquely names this listener object across connections.

## See Also

### Related Documentation

- [Daemons and Services Programming Guide](https://developer.apple.com/library/archive/documentation/MacOSX/Conceptual/BPSystemStartup/Chapters/Introduction.html#//apple_ref/doc/uid/10000172i)

# endpoint (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns an endpoint object that may be sent over an existing connection.

## Declaration

```objectivec
@property (retain, readonly) NSXPCListenerEndpoint * endpoint;
```

<a id="Discussion"></a>

## Discussion

The receiver of the endpoint can use this object to create a new connection to this [NSXPCListener](../nsxpclistener.md) object. The resulting `NSXPCListenerEndpoint` object uniquely names this listener object across connections.

## See Also

### Related Documentation

- [Daemons and Services Programming Guide](https://developer.apple.com/library/archive/documentation/MacOSX/Conceptual/BPSystemStartup/Chapters/Introduction.html#//apple_ref/doc/uid/10000172i)
