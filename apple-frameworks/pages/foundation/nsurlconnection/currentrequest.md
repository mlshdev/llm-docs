> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsurlconnection/currentrequest](https://developer.apple.com/documentation/foundation/nsurlconnection/currentrequest)

# currentRequest (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The current connection request.

## Declaration

```swift
var currentRequest: URLRequest { get }
```

<a id="Discussion"></a>

## Discussion

As the connection performs the load, the request may change as a result of protocol canonicalization or due to following redirects. This property provides the current value of the request.

## See Also

### Connection URL Information

- [originalRequest](originalrequest.md): A deep copy of the original connection request.

# currentRequest (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The current connection request.

## Declaration

```objectivec
@property (copy, readonly) NSURLRequest * currentRequest;
```

<a id="Discussion"></a>

## Discussion

As the connection performs the load, the request may change as a result of protocol canonicalization or due to following redirects. This property provides the current value of the request.

## See Also

### Connection URL Information

- [originalRequest](originalrequest.md): A deep copy of the original connection request.
