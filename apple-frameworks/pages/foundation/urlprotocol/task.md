> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/urlprotocol/task](https://developer.apple.com/documentation/foundation/urlprotocol/task)

# task (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The protocol’s task.

## Declaration

```swift
@NSCopying var task: URLSessionTask? { get }
```

## See Also

### Getting protocol attributes

- [cachedResponse](cachedresponse.md): The protocol’s cached response.
- [client](client.md): The object the protocol uses to communicate with the URL loading system.
- [URLProtocolClient](../urlprotocolclient.md): The interface used by [URLProtocol](../urlprotocol.md) subclasses to communicate with the URL Loading System.
- [request](request.md): The protocol’s request.

# task (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The protocol’s task.

## Declaration

```objectivec
@property (copy, readonly, nullable) NSURLSessionTask * task;
```

## See Also

### Getting protocol attributes

- [cachedResponse](cachedresponse.md): The protocol’s cached response.
- [client](client.md): The object the protocol uses to communicate with the URL loading system.
- [NSURLProtocolClient](../urlprotocolclient.md): The interface used by [NSURLProtocol](../urlprotocol.md) subclasses to communicate with the URL Loading System.
- [request](request.md): The protocol’s request.
