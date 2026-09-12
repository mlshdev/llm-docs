> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/sslgetallowsexpiredcerts](https://developer.apple.com/documentation/security/sslgetallowsexpiredcerts)

# SSLGetAllowsExpiredCerts

**Interface language:** Objective-C

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.2+ (deprecated in 10.9)

Retrieves the value specifying whether expired certificates are allowed.

> See the replacement procedure for allowing expired certificates in the deprecation summary of [SSLSetAllowsExpiredCerts](sslsetallowsexpiredcerts.md).

## Declaration

```objectivec
OSStatus SSLGetAllowsExpiredCerts(SSLContextRef context, Boolean *allowsExpired);
```

## Parameters

- `context`: An SSL session context reference.
- `allowsExpired`: On return, this flag is set to the value of the Boolean flag that specifies whether expired certificates are ignored. If this value is `true`, then Secure Transport does not return an error if any certificates in the certificate chain are expired.

<a id="return-value"></a>

## Return Value

A result code. See [Secure Transport Result Codes](secure-transport-result-codes.md).

<a id="Discussion"></a>

## Discussion

You can set the `allowsExpired` flag to allow the handshake to succeed even if one or more certificates in the certificate chain have expired. This function returns the current setting of this flag. Use the [SSLSetAllowsExpiredCerts](sslsetallowsexpiredcerts.md) function to set the value of the `allowsExpired` flag.
