> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/network/nwendpoint/hostport(host:port:)

# NWEndpoint.hostPort(host:port:)

**Framework:** Network  
**Kind:** Case  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 12.0+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

An endpoint represented as a host and port, with the host including both names and addresses.

## Declaration

```swift
case hostPort(host: NWEndpoint.Host, port: NWEndpoint.Port)
```

## See Also

### Endpoint Types

- [NWEndpoint.service(name:type:domain:interface:)](service%28name_type_domain_interface_%29.md): An endpoint represented as a Bonjour service.
- [NWEndpoint.url(\_:)](url%28__%29.md): An endpoint represented as a URL, with host and port values inferred from the URL.
- [NWEndpoint.unix(path:)](unix%28path_%29.md): An endpoint represented as a UNIX domain path.
