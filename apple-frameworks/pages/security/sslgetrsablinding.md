> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/sslgetrsablinding](https://developer.apple.com/documentation/security/sslgetrsablinding)

# SSLGetRsaBlinding

**Interface language:** Objective-C

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.2+ (deprecated in 10.9)

Obtains a value indicating whether RSA blinding is enabled.

> RSA blinding is now enabled unconditionally as it prevents a known way for an attacker to recover the private key and the performance gain of disabling it is negligible.

## Declaration

```objectivec
OSStatus SSLGetRsaBlinding(SSLContextRef context, Boolean *blinding);
```

## Parameters

- `context`: An SSL session context reference.
- `blinding`: On return, a pointer to a Boolean value indicating whether RSA blinding is enabled.

<a id="return-value"></a>

## Return Value

A result code. See [Secure Transport Result Codes](secure-transport-result-codes.md).

<a id="Discussion"></a>

## Discussion

This function is used only on the server side of a connection.

Call the [SSLSetRsaBlinding](sslsetrsablinding.md) function to enable or disable RSA blinding.
