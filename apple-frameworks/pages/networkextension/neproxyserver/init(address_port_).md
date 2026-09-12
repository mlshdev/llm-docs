> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/neproxyserver/init(address:port:)](https://developer.apple.com/documentation/networkextension/neproxyserver/init(address:port:))

# init(address:port:) (Swift)

**Framework:** Network Extension  
**Kind:** Initializer  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 17.0+ · visionOS 1.0+

Initialize a newly-allocated `NEProxyServer` object

## Declaration

```swift
init(address: String, port: Int)
```

## Parameters

- `address`: The address of the proxy server.
- `port`: The TCP port on which the proxy server is listening for connections.

# initWithAddress:port: (Objective-C)

**Framework:** Network Extension  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 17.0+ · visionOS 1.0+

Initialize a newly-allocated `NEProxyServer` object

## Declaration

```objectivec
- (instancetype) initWithAddress:(NSString *) address port:(NSInteger) port;
```

## Parameters

- `address`: The address of the proxy server.
- `port`: The TCP port on which the proxy server is listening for connections.
