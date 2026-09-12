> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsxpclistener/anonymous()](https://developer.apple.com/documentation/foundation/nsxpclistener/anonymous())

# anonymous() (Swift)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a new anonymous listener connection.

## Declaration

```swift
class func anonymous() -> NSXPCListener
```

<a id="Discussion"></a>

## Discussion

Other processes can connect to this listener by passing this listener object’s `NSXPCListenerEndpoint` to the [init(listenerEndpoint:)](../nsxpcconnection/init%28listenerendpoint_%29.md) method of an [NSXPCConnection](../nsxpcconnection.md) object.

## See Also

### Using standard listeners

- [service()](service%28%29.md): Returns the singleton listener used to listen for incoming connections in an XPC service.

# anonymousListener (Objective-C)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a new anonymous listener connection.

## Declaration

```objectivec
+ (NSXPCListener *) anonymousListener;
```

<a id="Discussion"></a>

## Discussion

Other processes can connect to this listener by passing this listener object’s `NSXPCListenerEndpoint` to the [initWithListenerEndpoint:](../nsxpcconnection/init%28listenerendpoint_%29.md) method of an [NSXPCConnection](../nsxpcconnection.md) object.

## See Also

### Using standard listeners

- [serviceListener](service%28%29.md): Returns the singleton listener used to listen for incoming connections in an XPC service.
