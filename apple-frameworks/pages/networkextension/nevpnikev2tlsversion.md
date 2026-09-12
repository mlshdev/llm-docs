> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/nevpnikev2tlsversion](https://developer.apple.com/documentation/networkextension/nevpnikev2tlsversion)

# NEVPNIKEv2TLSVersion (Swift)

**Framework:** Network Extension  
**Kind:** Enumeration  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 17.0+ · visionOS 1.0+

An enumeration of TLS Versions for use in EAP-TLS.

## Declaration

```swift
enum NEVPNIKEv2TLSVersion
```

## Topics

### TLS versions

- [NEVPNIKEv2TLSVersion.versionDefault](nevpnikev2tlsversion/versiondefault.md): A value to use the default TLS configuration.
- [NEVPNIKEv2TLSVersion.version1_0](nevpnikev2tlsversion/version1_0.md): A value to use TLS version 1.0.
- [NEVPNIKEv2TLSVersion.version1_1](nevpnikev2tlsversion/version1_1.md): A value to use TLS version 1.1.
- [NEVPNIKEv2TLSVersion.version1_2](nevpnikev2tlsversion/version1_2.md): A value to use TLS version 1.2.

### Enumeration Cases

- [NEVPNIKEv2TLSVersion.version1_3](nevpnikev2tlsversion/version1_3.md)

### Initializers

- [init(rawValue:)](nevpnikev2tlsversion/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Accessing TLS version properties

- [minimumTLSVersion](nevpnprotocolikev2/minimumtlsversion.md): The minimum TLS version to allow for EAP-TLS authentication.
- [maximumTLSVersion](nevpnprotocolikev2/maximumtlsversion.md): The minimum TLS version to allow for EAP-TLS authentication.

# NEVPNIKEv2TLSVersion (Objective-C)

**Framework:** Network Extension  
**Kind:** Enumeration  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 17.0+ · visionOS 1.0+

An enumeration of TLS Versions for use in EAP-TLS.

## Declaration

```objectivec
enum NEVPNIKEv2TLSVersion : NSInteger;
```

## Topics

### TLS versions

- [NEVPNIKEv2TLSVersionDefault](nevpnikev2tlsversion/versiondefault.md): A value to use the default TLS configuration.
- [NEVPNIKEv2TLSVersion1_0](nevpnikev2tlsversion/version1_0.md): A value to use TLS version 1.0.
- [NEVPNIKEv2TLSVersion1_1](nevpnikev2tlsversion/version1_1.md): A value to use TLS version 1.1.
- [NEVPNIKEv2TLSVersion1_2](nevpnikev2tlsversion/version1_2.md): A value to use TLS version 1.2.

### Enumeration Cases

- [NEVPNIKEv2TLSVersion1_3](nevpnikev2tlsversion/version1_3.md)

## See Also

### Accessing TLS version properties

- [minimumTLSVersion](nevpnprotocolikev2/minimumtlsversion.md): The minimum TLS version to allow for EAP-TLS authentication.
- [maximumTLSVersion](nevpnprotocolikev2/maximumtlsversion.md): The minimum TLS version to allow for EAP-TLS authentication.
