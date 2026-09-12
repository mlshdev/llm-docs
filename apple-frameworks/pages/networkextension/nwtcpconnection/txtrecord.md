> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/nwtcpconnection/txtrecord](https://developer.apple.com/documentation/networkextension/nwtcpconnection/txtrecord)

# txtRecord (Swift)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ (deprecated in 18.0) · iPadOS 9.0+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.11+ (deprecated in 15.0) · tvOS 17.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0)

The TXT record associated with a connected Bonjour service endpoint.

> Use the [nw_endpoint_copy_txt_record(\_:)](../../network/nw_endpoint_copy_txt_record%28__%29.md) function from the [Network](../../network.md) framework instead.

## Declaration

```swift
var txtRecord: Data? { get }
```

<a id="Discussion"></a>

## Discussion

When the connection is connected to a Bonjour service endpoint, the TXT record associated with the Bonjour service is available via this property.

> **Important**

>  Note that the value comes from an untrusted network source. Care must be taken when parsing this potentially malicious value.

## See Also

### Getting connection properties

- [endpoint](endpoint.md): Deprecated. The destination endpoint with which this connection was created.
- [localAddress](localaddress.md): Deprecated. The IP address endpoint from which the connection was established.
- [remoteAddress](remoteaddress.md): Deprecated. The IP address endpoint to which the connection was established.
- [connectedPath](connectedpath.md): Deprecated. The network path over which the connection was established.

# txtRecord (Objective-C)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ (deprecated in 18.0) · iPadOS 9.0+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.11+ (deprecated in 15.0) · tvOS 17.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0)

The TXT record associated with a connected Bonjour service endpoint.

> Use the [nw_endpoint_copy_txt_record](../../network/nw_endpoint_copy_txt_record%28__%29.md) function from the [Network](../../network.md) framework instead.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) NSData * txtRecord;
```

<a id="Discussion"></a>

## Discussion

When the connection is connected to a Bonjour service endpoint, the TXT record associated with the Bonjour service is available via this property.

> **Important**

>  Note that the value comes from an untrusted network source. Care must be taken when parsing this potentially malicious value.

## See Also

### Getting connection properties

- [endpoint](endpoint.md): Deprecated. The destination endpoint with which this connection was created.
- [localAddress](localaddress.md): Deprecated. The IP address endpoint from which the connection was established.
- [remoteAddress](remoteaddress.md): Deprecated. The IP address endpoint to which the connection was established.
- [connectedPath](connectedpath.md): Deprecated. The network path over which the connection was established.
