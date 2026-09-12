> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/nednsovertlssettings/servername](https://developer.apple.com/documentation/networkextension/nednsovertlssettings/servername)

# serverName (Swift)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 17.0+ · visionOS 1.0+

The TLS name of a DNS-over-TLS server.

## Declaration

```swift
var serverName: String? { get set }
```

<a id="Discussion"></a>

## Discussion

The server will be accessed over TCP port 853, as defined in [RFC 7858](https://tools.ietf.org/html/rfc7858). The server name is used for TLS validation.

## See Also

### Configuring server properties

- [init(servers:)](../nednssettings/init%28servers_%29.md): Initialize the `NEDNSSetting` object.
- [matchDomains](../nednssettings/matchdomains.md): A list of domain strings used to determine which DNS queries will use the DNS resolver settings contained in this object.

# serverName (Objective-C)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 17.0+ · visionOS 1.0+

The TLS name of a DNS-over-TLS server.

## Declaration

```objectivec
@property (copy, nullable) NSString * serverName;
```

<a id="Discussion"></a>

## Discussion

The server will be accessed over TCP port 853, as defined in [RFC 7858](https://tools.ietf.org/html/rfc7858). The server name is used for TLS validation.

## See Also

### Configuring server properties

- [initWithServers:](../nednssettings/init%28servers_%29.md): Initialize the `NEDNSSetting` object.
- [matchDomains](../nednssettings/matchdomains.md): A list of domain strings used to determine which DNS queries will use the DNS resolver settings contained in this object.
