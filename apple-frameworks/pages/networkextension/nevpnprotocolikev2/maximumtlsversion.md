> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/nevpnprotocolikev2/maximumtlsversion](https://developer.apple.com/documentation/networkextension/nevpnprotocolikev2/maximumtlsversion)

# maximumTLSVersion (Swift)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 17.0+ · visionOS 1.0+

The minimum TLS version to allow for EAP-TLS authentication.

## Declaration

```swift
var maximumTLSVersion: NEVPNIKEv2TLSVersion { get set }
```

<a id="Discussion"></a>

## Discussion

The default value of this property is [NEVPNIKEv2TLSVersion.versionDefault](../nevpnikev2tlsversion/versiondefault.md).

## See Also

### Accessing TLS version properties

- [minimumTLSVersion](minimumtlsversion.md): The minimum TLS version to allow for EAP-TLS authentication.
- [NEVPNIKEv2TLSVersion](../nevpnikev2tlsversion.md): An enumeration of TLS Versions for use in EAP-TLS.

# maximumTLSVersion (Objective-C)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 17.0+ · visionOS 1.0+

The minimum TLS version to allow for EAP-TLS authentication.

## Declaration

```objectivec
@property NEVPNIKEv2TLSVersion maximumTLSVersion;
```

<a id="Discussion"></a>

## Discussion

The default value of this property is [NEVPNIKEv2TLSVersionDefault](../nevpnikev2tlsversion/versiondefault.md).

## See Also

### Accessing TLS version properties

- [minimumTLSVersion](minimumtlsversion.md): The minimum TLS version to allow for EAP-TLS authentication.
- [NEVPNIKEv2TLSVersion](../nevpnikev2tlsversion.md): An enumeration of TLS Versions for use in EAP-TLS.
