> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundation/urlprotocol/cachedresponse

# cachedResponse (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The protocol’s cached response.

## Declaration

```swift
@NSCopying var cachedResponse: CachedURLResponse? { get }
```

<a id="Discussion"></a>

## Discussion

If not overridden in a subclass, this method returns the cached response stored at initialization time.

## See Also

### Getting protocol attributes

- [client](client.md): The object the protocol uses to communicate with the URL loading system.
- [URLProtocolClient](../urlprotocolclient.md): The interface used by [URLProtocol](../urlprotocol.md) subclasses to communicate with the URL Loading System.
- [request](request.md): The protocol’s request.
- [task](task.md): The protocol’s task.

# cachedResponse (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The protocol’s cached response.

## Declaration

```objectivec
@property (copy, readonly, nullable) NSCachedURLResponse * cachedResponse;
```

<a id="Discussion"></a>

## Discussion

If not overridden in a subclass, this method returns the cached response stored at initialization time.

## See Also

### Getting protocol attributes

- [client](client.md): The object the protocol uses to communicate with the URL loading system.
- [NSURLProtocolClient](../urlprotocolclient.md): The interface used by [NSURLProtocol](../urlprotocol.md) subclasses to communicate with the URL Loading System.
- [request](request.md): The protocol’s request.
- [task](task.md): The protocol’s task.
