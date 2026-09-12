> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/errsslhostnamemismatch](https://developer.apple.com/documentation/security/errsslhostnamemismatch)

# errSSLHostNameMismatch (Swift)

**Framework:** Security  
**Kind:** Global Variable  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.0+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The host name you connected with does not match any of the host names allowed by the certificate.

## Declaration

```swift
var errSSLHostNameMismatch: OSStatus { get }
```

<a id="Discussion"></a>

## Discussion

This is commonly caused by an incorrect value for the [kCFStreamSSLPeerName](../cfnetwork/kcfstreamsslpeername.md) property within the dictionary associated with the stream’s [kCFStreamPropertySSLSettings](../cfnetwork/kcfstreampropertysslsettings.md) key.

# errSSLHostNameMismatch (Objective-C)

**Framework:** Security  
**Kind:** Enumeration Case  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The host name you connected with does not match any of the host names allowed by the certificate.

## Declaration

```objectivec
errSSLHostNameMismatch
```

<a id="Discussion"></a>

## Discussion

This is commonly caused by an incorrect value for the [kCFStreamSSLPeerName](../cfnetwork/kcfstreamsslpeername.md) property within the dictionary associated with the stream’s [kCFStreamPropertySSLSettings](../cfnetwork/kcfstreampropertysslsettings.md) key.
