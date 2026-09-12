> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsurlconnection/originalrequest](https://developer.apple.com/documentation/foundation/nsurlconnection/originalrequest)

# originalRequest (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A deep copy of the original connection request.

## Declaration

```swift
var originalRequest: URLRequest { get }
```

<a id="Discussion"></a>

## Discussion

As the connection performs the load, the request may change as a result of protocol canonicalization or due to following redirects. [currentRequest](currentrequest.md) can be used to retrieve this value.

## See Also

### Connection URL Information

- [currentRequest](currentrequest.md): The current connection request.

# originalRequest (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A deep copy of the original connection request.

## Declaration

```objectivec
@property (copy, readonly) NSURLRequest * originalRequest;
```

<a id="Discussion"></a>

## Discussion

As the connection performs the load, the request may change as a result of protocol canonicalization or due to following redirects. [currentRequest](currentrequest.md) can be used to retrieve this value.

## See Also

### Connection URL Information

- [currentRequest](currentrequest.md): The current connection request.
