> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/sslsetdiffiehellmanparams(_:_:_:)](https://developer.apple.com/documentation/security/sslsetdiffiehellmanparams(_:_:_:))

# SSLSetDiffieHellmanParams(\_:\_:\_:) (Swift)

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.2+ (deprecated in 10.15)

Specifies Diffie-Hellman parameters for a given context.

> No longer supported. Use Network.framework.

## Declaration

```swift
func SSLSetDiffieHellmanParams(_ context: SSLContext, _ dhParams: UnsafeRawPointer?, _ dhParamsLen: Int) -> OSStatus
```

## Parameters

- `context`: An SSL session context reference.
- `dhParams`: A pointer to a buffer containing the Diffie-Hellman parameters in Open SSL DER format.
- `dhParamsLen`: A value representing the size of the buffer pointed to by the `dhParams` parameter.

<a id="return-value"></a>

## Return Value

A result code. See [Secure Transport Result Codes](secure-transport-result-codes.md).

<a id="Discussion"></a>

## Discussion

You can use this function to specify a set of Diffie-Hellman parameters to be used by Secure Transport for a specific session. Use of this function is optional. If Diffie-Hellman ciphers are allowed, the server and client negotiate a Diffie-Hellman cipher, and this function has not been called, then secure transport calculates a set of process wide parameters. However, that process can take as long as 30 seconds. Diffie-Hellman ciphers are enabled by default. See [SSLSetEnabledCiphers(\_:\_:\_:)](sslsetenabledciphers%28______%29.md).

In SSL/TLS, Diffie-Hellman parameters are always specified by the server. Therefore, this function can be called only by the server side of the connection.

You can use the [SSLGetDiffieHellmanParams(\_:\_:\_:)](sslgetdiffiehellmanparams%28______%29.md) function to retrieve Diffie-Hellman parameters specified in an earlier call to [SSLSetDiffieHellmanParams(\_:\_:\_:)](sslsetdiffiehellmanparams%28______%29.md).

# SSLSetDiffieHellmanParams (Objective-C)

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.2+ (deprecated in 10.15)

Specifies Diffie-Hellman parameters for a given context.

> No longer supported. Use Network.framework.

## Declaration

```objectivec
OSStatus SSLSetDiffieHellmanParams(SSLContextRef context, const void *dhParams, size_t dhParamsLen);
```

## Parameters

- `context`: An SSL session context reference.
- `dhParams`: A pointer to a buffer containing the Diffie-Hellman parameters in Open SSL DER format.
- `dhParamsLen`: A value representing the size of the buffer pointed to by the `dhParams` parameter.

<a id="return-value"></a>

## Return Value

A result code. See [Secure Transport Result Codes](secure-transport-result-codes.md).

<a id="Discussion"></a>

## Discussion

You can use this function to specify a set of Diffie-Hellman parameters to be used by Secure Transport for a specific session. Use of this function is optional. If Diffie-Hellman ciphers are allowed, the server and client negotiate a Diffie-Hellman cipher, and this function has not been called, then secure transport calculates a set of process wide parameters. However, that process can take as long as 30 seconds. Diffie-Hellman ciphers are enabled by default. See [SSLSetEnabledCiphers](sslsetenabledciphers%28______%29.md).

In SSL/TLS, Diffie-Hellman parameters are always specified by the server. Therefore, this function can be called only by the server side of the connection.

You can use the [SSLGetDiffieHellmanParams](sslgetdiffiehellmanparams%28______%29.md) function to retrieve Diffie-Hellman parameters specified in an earlier call to [SSLSetDiffieHellmanParams](sslsetdiffiehellmanparams%28______%29.md).
