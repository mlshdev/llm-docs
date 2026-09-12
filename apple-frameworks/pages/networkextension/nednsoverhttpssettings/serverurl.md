> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/nednsoverhttpssettings/serverurl](https://developer.apple.com/documentation/networkextension/nednsoverhttpssettings/serverurl)

# serverURL (Swift)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 17.0+ · visionOS 1.0+

The URL of a DNS-over-HTTPS server.

## Declaration

```swift
var serverURL: URL? { get set }
```

<a id="Discussion"></a>

## Discussion

The URL should use the URI template format defined by [RFC 8484](https://tools.ietf.org/html/rfc8484), for example `https://dnsserver.example.net/dns-query`.

## See Also

### Configuring server properties

- [init(servers:)](../nednssettings/init%28servers_%29.md): Initialize the `NEDNSSetting` object.
- [matchDomains](../nednssettings/matchdomains.md): A list of domain strings used to determine which DNS queries will use the DNS resolver settings contained in this object.

# serverURL (Objective-C)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 17.0+ · visionOS 1.0+

The URL of a DNS-over-HTTPS server.

## Declaration

```objectivec
@property (copy, nullable) NSURL * serverURL;
```

<a id="Discussion"></a>

## Discussion

The URL should use the URI template format defined by [RFC 8484](https://tools.ietf.org/html/rfc8484), for example `https://dnsserver.example.net/dns-query`.

## See Also

### Configuring server properties

- [initWithServers:](../nednssettings/init%28servers_%29.md): Initialize the `NEDNSSetting` object.
- [matchDomains](../nednssettings/matchdomains.md): A list of domain strings used to determine which DNS queries will use the DNS resolver settings contained in this object.
