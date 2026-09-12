> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/urlprotocol/client](https://developer.apple.com/documentation/foundation/urlprotocol/client)

# client (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The object the protocol uses to communicate with the URL loading system.

## Declaration

```swift
var client: (any URLProtocolClient)? { get }
```

## See Also

### Getting protocol attributes

- [cachedResponse](cachedresponse.md): The protocol’s cached response.
- [URLProtocolClient](../urlprotocolclient.md): The interface used by [URLProtocol](../urlprotocol.md) subclasses to communicate with the URL Loading System.
- [request](request.md): The protocol’s request.
- [task](task.md): The protocol’s task.

# client (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The object the protocol uses to communicate with the URL loading system.

## Declaration

```objectivec
@property (retain, readonly, nullable) id<NSURLProtocolClient> client;
```

## See Also

### Getting protocol attributes

- [cachedResponse](cachedresponse.md): The protocol’s cached response.
- [NSURLProtocolClient](../urlprotocolclient.md): The interface used by [NSURLProtocol](../urlprotocol.md) subclasses to communicate with the URL Loading System.
- [request](request.md): The protocol’s request.
- [task](task.md): The protocol’s task.
