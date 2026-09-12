> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/asautofillurlscope](https://developer.apple.com/documentation/authenticationservices/asautofillurlscope)

# ASAutoFillURLScope

**Framework:** Authentication Services  
**Kind:** Structure  
**Availability:** iOS 26.2+ · iPadOS 26.2+ · Mac Catalyst 26.2+ · macOS 26.2+ · visionOS 26.2+

This structure represents the subset of URL components supported for the AutoFill of credentials.

## Declaration

```swift
struct ASAutoFillURLScope
```

## Topics

### Initializers

- [init(scheme:host:port:path:)](asautofillurlscope/init%28scheme_host_port_path_%29.md): Creates a URL components instance
- [init(url:)](asautofillurlscope/init%28url_%29.md): Initialize with the components of a URL.

### Instance Properties

- [host](asautofillurlscope/host.md): The host subcomponent.
- [path](asautofillurlscope/path.md): The path subcomponent.
- [port](asautofillurlscope/port.md): The port subcomponent.
- [scheme](asautofillurlscope/scheme-swift.property.md): The scheme subcomponent of the URL.
- [url](asautofillurlscope/url.md): A URL created from the components.

### Enumerations

- [ASAutoFillURLScope.Scheme](asautofillurlscope/scheme-swift.enum.md)

## Relationships

### Conforms To

- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
