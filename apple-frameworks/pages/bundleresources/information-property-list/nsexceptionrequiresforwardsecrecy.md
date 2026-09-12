> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/bundleresources/information-property-list/nsexceptionrequiresforwardsecrecy](https://developer.apple.com/documentation/bundleresources/information-property-list/nsexceptionrequiresforwardsecrecy)

# NSExceptionRequiresForwardSecrecy

**Interface languages:** Swift, Objective-C

**Framework:** Bundle Resources  
**Kind:** Property List Key  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · macOS 10.11+ · visionOS 1.0+

A Boolean value indicating whether to override the perfect forward secrecy requirement.

## Details

`NSExceptionRequiresForwardSecrecy`

<a id="Discussion"></a>

## Discussion

Set the value for this key to `NO` to override the requirement that a server support perfect forward secrecy (PFS) for the given domain. Disabling this requirement also removes the key length check described in `Ensure the Network Server Meets Minimum Requirements`. However, it doesn’t impact the TLS version requirement. To control that, use [NSExceptionMinimumTLSVersion](nsexceptionminimumtlsversion.md).

This key is optional. The default value is YES, which limits the accepted ciphers to those that support PFS through Elliptic Curve Diffie-Hellman Ephemeral (ECDHE) key exchange.

## See Also

### Exceptions

- [NSExceptionAllowsInsecureHTTPLoads](nsexceptionallowsinsecurehttploads.md): A Boolean value indicating whether to allow insecure HTTP loads.
- [NSExceptionMinimumTLSVersion](nsexceptionminimumtlsversion.md): The minimum Transport Layer Security (TLS) version for network connections.
- [NSRequiresCertificateTransparency](nsrequirescertificatetransparency.md): An obsolete Boolean value indicating whether to require Certificate Transparency.
- [NSExceptionRequiresNIAPTLSPackageVersion](nsexceptionrequiresniaptlspackageversion.md): A string that indicates the version to use for the NIAP Functional Package for TLS, applied to an exception domain.
