> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundation/nsurlrequest/networkservicetype-swift.property

# networkServiceType (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The network service type of the request.

## Declaration

```swift
var networkServiceType: NSURLRequest.NetworkServiceType { get }
```

<a id="Discussion"></a>

## Discussion

The network service type provides a hint to the operating system about what the underlying traffic is used for. This hint enhances the system’s ability to prioritize traffic, determine how quickly it needs to wake up the cellular or Wi-Fi radio, and so on. By providing accurate information, you improve the ability of the system to optimally balance battery life, performance, and other considerations.

## See Also

### Related Documentation

- [networkServiceType](../nsmutableurlrequest/networkservicetype.md): The network service type of the connection.

### Accessing the service type

- [NSURLRequest.NetworkServiceType](networkservicetype-swift.enum.md): Constants that specify how a request uses network resources.

# networkServiceType (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The network service type of the request.

## Declaration

```objectivec
@property (readonly) NSURLRequestNetworkServiceType networkServiceType;
```

<a id="Discussion"></a>

## Discussion

The network service type provides a hint to the operating system about what the underlying traffic is used for. This hint enhances the system’s ability to prioritize traffic, determine how quickly it needs to wake up the cellular or Wi-Fi radio, and so on. By providing accurate information, you improve the ability of the system to optimally balance battery life, performance, and other considerations.

## See Also

### Related Documentation

- [networkServiceType](../nsmutableurlrequest/networkservicetype.md): The network service type of the connection.

### Accessing the service type

- [NSURLRequestNetworkServiceType](networkservicetype-swift.enum.md): Constants that specify how a request uses network resources.
