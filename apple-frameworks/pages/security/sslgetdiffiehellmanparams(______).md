> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/sslgetdiffiehellmanparams(_:_:_:)](https://developer.apple.com/documentation/security/sslgetdiffiehellmanparams(_:_:_:))

# SSLGetDiffieHellmanParams(\_:\_:\_:) (Swift)

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.2+ (deprecated in 10.15)

Retrieves the Diffie-Hellman parameters for a given context.

> No longer supported. Use Network.framework.

## Declaration

```swift
func SSLGetDiffieHellmanParams(_ context: SSLContext, _ dhParams: UnsafeMutablePointer<UnsafeRawPointer?>, _ dhParamsLen: UnsafeMutablePointer<Int>) -> OSStatus
```

## Parameters

- `context`: An SSL session context reference.
- `dhParams`: On return, points to a buffer containing the Diffie-Hellman parameter block in Open SSL DER format.The returned data is not copied and belongs to the SSL session context reference; therefore, you cannot modify the data and it is released automatically when you dispose of the context.
- `dhParamsLen`: On return, points to the length of the buffer pointed to by the `dhParams` parameter.

<a id="return-value"></a>

## Return Value

A result code. See [Secure Transport Result Codes](secure-transport-result-codes.md).

<a id="Discussion"></a>

## Discussion

This function returns the parameter block specified in an earlier call to the [SSLSetDiffieHellmanParams(\_:\_:\_:)](sslsetdiffiehellmanparams%28______%29.md) function. If that function was never called, the `dhParams` parameter returns `NULL` and the `dhParamsLen` parameter returns `0`.

# SSLGetDiffieHellmanParams (Objective-C)

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.2+ (deprecated in 10.15)

Retrieves the Diffie-Hellman parameters for a given context.

> No longer supported. Use Network.framework.

## Declaration

```objectivec
OSStatus SSLGetDiffieHellmanParams(SSLContextRef context, const void **dhParams, size_t *dhParamsLen);
```

## Parameters

- `context`: An SSL session context reference.
- `dhParams`: On return, points to a buffer containing the Diffie-Hellman parameter block in Open SSL DER format.The returned data is not copied and belongs to the SSL session context reference; therefore, you cannot modify the data and it is released automatically when you dispose of the context.
- `dhParamsLen`: On return, points to the length of the buffer pointed to by the `dhParams` parameter.

<a id="return-value"></a>

## Return Value

A result code. See [Secure Transport Result Codes](secure-transport-result-codes.md).

<a id="Discussion"></a>

## Discussion

This function returns the parameter block specified in an earlier call to the [SSLSetDiffieHellmanParams](sslsetdiffiehellmanparams%28______%29.md) function. If that function was never called, the `dhParams` parameter returns `NULL` and the `dhParamsLen` parameter returns `0`.
