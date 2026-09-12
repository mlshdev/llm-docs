> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/sslgetallowsexpiredroots](https://developer.apple.com/documentation/security/sslgetallowsexpiredroots)

# SSLGetAllowsExpiredRoots

**Interface language:** Objective-C

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.2+ (deprecated in 10.9)

Retrieves the value indicating whether expired roots are allowed.

> See the replacement procedure for allowing expired root certificates in the deprecation summary of [SSLSetAllowsExpiredRoots](sslsetallowsexpiredroots.md).

## Declaration

```objectivec
OSStatus SSLGetAllowsExpiredRoots(SSLContextRef context, Boolean *allowsExpired);
```

## Parameters

- `context`: An SSL session context reference.
- `allowsExpired`: On return, points to a Boolean value indicating whether expired roots are allowed. If this value is `true`, no errors are returned if the certificate chain ends in an expired root.

<a id="return-value"></a>

## Return Value

A result code. See [Secure Transport Result Codes](secure-transport-result-codes.md).

<a id="Discussion"></a>

## Discussion

Use the [SSLSetAllowsExpiredRoots](sslsetallowsexpiredroots.md) function to change the setting of the `allowsExpired` flag.
