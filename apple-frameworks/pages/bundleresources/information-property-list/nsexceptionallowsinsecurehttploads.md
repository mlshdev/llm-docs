> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/bundleresources/information-property-list/nsexceptionallowsinsecurehttploads](https://developer.apple.com/documentation/bundleresources/information-property-list/nsexceptionallowsinsecurehttploads)

# NSExceptionAllowsInsecureHTTPLoads

**Interface languages:** Swift, Objective-C

**Framework:** Bundle Resources  
**Kind:** Property List Key  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · macOS 10.11+ · visionOS 1.0+

A Boolean value indicating whether to allow insecure HTTP loads.

## Details

`NSExceptionAllowsInsecureHTTPLoads`

<a id="Discussion"></a>

## Discussion

Set the value for this key to `YES` to allow insecure HTTP loads for the given domain, or to be able to loosen the server trust evaluation requirements for HTTPS connections to the domain, as described in [Performing manual server trust authentication](../../foundation/performing-manual-server-trust-authentication.md).

Using this key doesn’t by itself change default server trust evaluation requirements for HTTPS connections, described in `Ensure the Network Server Meets Minimum Requirements`. Using only this key also doesn’t change the TLS or forward secrecy requirements imposed by ATS. As a result, you might need to combine this key with the [NSExceptionMinimumTLSVersion](nsexceptionminimumtlsversion.md) or [NSExceptionRequiresForwardSecrecy](nsexceptionrequiresforwardsecrecy.md) key in certain cases.

This key is optional. The default value is `NO`.

> **Important**

>  You must supply a justification during App Store review if you set the key’s value to YES, as described in `Provide Justification for Exceptions`.

## See Also

### Exceptions

- [NSExceptionMinimumTLSVersion](nsexceptionminimumtlsversion.md): The minimum Transport Layer Security (TLS) version for network connections.
- [NSExceptionRequiresForwardSecrecy](nsexceptionrequiresforwardsecrecy.md): A Boolean value indicating whether to override the perfect forward secrecy requirement.
- [NSRequiresCertificateTransparency](nsrequirescertificatetransparency.md): An obsolete Boolean value indicating whether to require Certificate Transparency.
- [NSExceptionRequiresNIAPTLSPackageVersion](nsexceptionrequiresniaptlspackageversion.md): A string that indicates the version to use for the NIAP Functional Package for TLS, applied to an exception domain.
