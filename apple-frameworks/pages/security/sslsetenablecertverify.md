> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/sslsetenablecertverify](https://developer.apple.com/documentation/security/sslsetenablecertverify)

# SSLSetEnableCertVerify

**Interface language:** Objective-C

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.2+ (deprecated in 10.9)

Enables or disables peer certificate chain validation.

> To disable peer certificate chain validation, you can instead use [SSLSetSessionOption](sslsetsessionoption%28______%29.md) to set [kSSLSessionOptionBreakOnServerAuth](sslsessionoption/breakonserverauth.md) to true. This will disable verification and cause [SSLHandshake](sslhandshake%28__%29.md) to return with an `errSSLServerAuthCompleted` result when the peer certificates have been received. Then you can choose to evaluate peer trust yourself or simply call [SSLHandshake](sslhandshake%28__%29.md) again to proceed with the handshake.

## Declaration

```objectivec
OSStatus SSLSetEnableCertVerify(SSLContextRef context, Boolean enableVerify);
```

## Parameters

- `context`: An SSL session context reference.
- `enableVerify`: A Boolean value specifying whether peer certificate chain validation is enabled. Certificate chain validation is enabled by default. Specify `false` to disable validation.

<a id="return-value"></a>

## Return Value

A result code. See [Secure Transport Result Codes](secure-transport-result-codes.md).

<a id="Discussion"></a>

## Discussion

By default, Secure Transport attempts to verify the certificate chain during an exchange of peer certificates. If you disable peer certificate chain validation, it is your responsibility to call [SSLCopyPeerCertificates](sslcopypeercertificates.md) upon successful completion of the handshake and then to validate the peer certificate chain before transferring the data.

You can use the [SSLGetEnableCertVerify](sslgetenablecertverify.md) function to determine the current setting of the `enableVerify` flag.
