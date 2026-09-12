> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/urlprotocolclient/urlprotocol(_:cachedresponseisvalid:)](https://developer.apple.com/documentation/foundation/urlprotocolclient/urlprotocol(_:cachedresponseisvalid:))

# urlProtocol(\_:cachedResponseIsValid:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Tells the client that a cached response is valid.

## Declaration

```swift
func urlProtocol(_ protocol: URLProtocol, cachedResponseIsValid cachedResponse: CachedURLResponse)
```

## Parameters

- `protocol`: The URL protocol object sending the message.
- `cachedResponse`: The cached response whose validity is being communicated.

# URLProtocol:cachedResponseIsValid: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Tells the client that a cached response is valid.

## Declaration

```objectivec
- (void) URLProtocol:(NSURLProtocol *) protocol cachedResponseIsValid:(NSCachedURLResponse *) cachedResponse;
```

## Parameters

- `protocol`: The URL protocol object sending the message.
- `cachedResponse`: The cached response whose validity is being communicated.
