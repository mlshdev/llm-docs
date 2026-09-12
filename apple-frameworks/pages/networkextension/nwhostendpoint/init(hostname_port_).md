> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/nwhostendpoint/init(hostname:port:)](https://developer.apple.com/documentation/networkextension/nwhostendpoint/init(hostname:port:))

# init(hostname:port:) (Swift)

**Framework:** Network Extension  
**Kind:** Initializer  
**Availability:** iOS 9.0+ (deprecated in 18.0) · iPadOS 9.0+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.11+ (deprecated in 15.0) · tvOS 17.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0)

Create a host endpoint with a hostname and port.

> Use the [nw_endpoint_create_host(\_:\_:)](../../network/nw_endpoint_create_host%28____%29.md) function from the [Network](../../network.md) framework instead.

## Declaration

```swift
convenience init(hostname: String, port: String)
```

## Parameters

- `hostname`: A string representation of the hostname or address, such as `www.example.com` or `10.0.0.1`.
- `port`: A string containing the port on the host, such as `80`.

<a id="Discussion"></a>

## Discussion

If the hostname is a domain name, such as `www.example.com`, starting a connection to the host endpoint causes the hostname to be resolved to an address during the connection process. If the hostname is an IPv4 or IPv6 address, such as `10.0.0.1` or `fe80::1`, starting a connection to the host endpoint will cause the address to be used directly.

# endpointWithHostname:port: (Objective-C)

**Framework:** Network Extension  
**Kind:** Type Method  
**Availability:** iOS 9.0+ (deprecated in 18.0) · iPadOS 9.0+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.11+ (deprecated in 15.0) · tvOS 17.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0)

Create a host endpoint with a hostname and port.

> Use the [nw_endpoint_create_host](../../network/nw_endpoint_create_host%28____%29.md) function from the [Network](../../network.md) framework instead.

## Declaration

```objectivec
+ (instancetype) endpointWithHostname:(NSString *) hostname port:(NSString *) port;
```

## Parameters

- `hostname`: A string representation of the hostname or address, such as `www.example.com` or `10.0.0.1`.
- `port`: A string containing the port on the host, such as `80`.

<a id="Discussion"></a>

## Discussion

If the hostname is a domain name, such as `www.example.com`, starting a connection to the host endpoint causes the hostname to be resolved to an address during the connection process. If the hostname is an IPv4 or IPv6 address, such as `10.0.0.1` or `fe80::1`, starting a connection to the host endpoint will cause the address to be used directly.
