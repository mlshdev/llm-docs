> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/nwendpoint/unix(path:)](https://developer.apple.com/documentation/network/nwendpoint/unix(path:))

# NWEndpoint.unix(path:)

**Framework:** Network  
**Kind:** Case  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 12.0+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

An endpoint represented as a UNIX domain path.

## Declaration

```swift
case unix(path: String)
```

## See Also

### Endpoint Types

- [NWEndpoint.hostPort(host:port:)](hostport%28host_port_%29.md): An endpoint represented as a host and port, with the host including both names and addresses.
- [NWEndpoint.service(name:type:domain:interface:)](service%28name_type_domain_interface_%29.md): An endpoint represented as a Bonjour service.
- [NWEndpoint.url(\_:)](url%28__%29.md): An endpoint represented as a URL, with host and port values inferred from the URL.
