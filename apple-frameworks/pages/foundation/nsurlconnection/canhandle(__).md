> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsurlconnection/canhandle(_:)](https://developer.apple.com/documentation/foundation/nsurlconnection/canhandle(_:))

# canHandle(\_:) (Swift)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns whether a request can be handled based on a preflight evaluation.

## Declaration

```swift
class func canHandle(_ request: URLRequest) -> Bool
```

## Parameters

- `request`: The request to evaluate. The connection deep-copies the request on creation.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if a preflight operation determines that a connection with `request` can be created and the associated I/O can be started, [false](https://developer.apple.com/documentation/swift/false) otherwise.

<a id="Discussion"></a>

## Discussion

The result of this method is valid as long as no [URLProtocol](../urlprotocol.md) classes are registered or unregistered, and `request` remains unchanged. Applications should be prepared to handle failures even if they have performed request preflighting by calling this method.

## See Also

### Related Documentation

- [unregisterClass(\_:)](../urlprotocol/unregisterclass%28__%29.md): Unregisters the specified subclass of [URLProtocol](../urlprotocol.md).
- [registerClass(\_:)](../urlprotocol/registerclass%28__%29.md): Attempts to register a subclass of [URLProtocol](../urlprotocol.md), making it visible to the URL loading system.
- [URL Loading System](../url-loading-system.md): Interact with URLs and communicate with servers using standard Internet protocols.

# canHandleRequest: (Objective-C)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns whether a request can be handled based on a preflight evaluation.

## Declaration

```objectivec
+ (BOOL) canHandleRequest:(NSURLRequest *) request;
```

## Parameters

- `request`: The request to evaluate. The connection deep-copies the request on creation.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if a preflight operation determines that a connection with `request` can be created and the associated I/O can be started, [false](https://developer.apple.com/documentation/swift/false) otherwise.

<a id="Discussion"></a>

## Discussion

The result of this method is valid as long as no [NSURLProtocol](../urlprotocol.md) classes are registered or unregistered, and `request` remains unchanged. Applications should be prepared to handle failures even if they have performed request preflighting by calling this method.

## See Also

### Related Documentation

- [unregisterClass:](../urlprotocol/unregisterclass%28__%29.md): Unregisters the specified subclass of [NSURLProtocol](../urlprotocol.md).
- [registerClass:](../urlprotocol/registerclass%28__%29.md): Attempts to register a subclass of [NSURLProtocol](../urlprotocol.md), making it visible to the URL loading system.
- [URL Loading System](../url-loading-system.md): Interact with URLs and communicate with servers using standard Internet protocols.
