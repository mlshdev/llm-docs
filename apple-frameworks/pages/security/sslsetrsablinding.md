> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/sslsetrsablinding](https://developer.apple.com/documentation/security/sslsetrsablinding)

# SSLSetRsaBlinding

**Interface language:** Objective-C

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.2+ (deprecated in 10.9)

Enables or disables RSA blinding.

> RSA blinding is now enabled unconditionally as it prevents a known way for an attacker to recover the private key and the performance gain of disabling it is negligible.

## Declaration

```objectivec
OSStatus SSLSetRsaBlinding(SSLContextRef context, Boolean blinding);
```

## Parameters

- `context`: An SSL session context reference.
- `blinding`: A Boolean value indicating whether to enable RSA blinding. Pass `true` to enable RSA blinding.

<a id="return-value"></a>

## Return Value

A result code. See [Secure Transport Result Codes](secure-transport-result-codes.md).

<a id="Discussion"></a>

## Discussion

This function is used only on the server side of a connection.

This feature thwarts a known attack to which RSA keys are vulnerable: It is possible to guess the RSA key by timing how long it takes the server to calculate the response to certain queries. RSA blinding adds a random calculation to each query response, thus making the attack impossible. Enabling RSA blinding is a trade-off between performance and security.

RSA blinding is enabled by default. Use the [SSLGetRsaBlinding](sslgetrsablinding.md) function to determine the current setting.
