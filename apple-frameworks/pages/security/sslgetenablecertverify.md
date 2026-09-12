> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/sslgetenablecertverify](https://developer.apple.com/documentation/security/sslgetenablecertverify)

# SSLGetEnableCertVerify

**Interface language:** Objective-C

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.2+ (deprecated in 10.9)

Determines whether peer certificate chain validation is currently enabled.

> To check whether peer certificate chain validation is enabled in a context, call [SSLGetSessionOption](sslgetsessionoption%28______%29.md) to obtain the value of the [kSSLSessionOptionBreakOnServerAuth](sslsessionoption/breakonserverauth.md) session option flag. If the value of this option flag is [true](https://developer.apple.com/documentation/swift/true), then verification is disabled.

## Declaration

```objectivec
OSStatus SSLGetEnableCertVerify(SSLContextRef context, Boolean *enableVerify);
```

## Parameters

- `context`: An SSL session context reference.
- `enableVerify`: On return, a pointer to a Boolean value specifying whether peer certificate chain validation is enabled. If this value is `true`, then Secure Transport automatically attempts to verify the certificate chain during exchange of peer certificates.

<a id="return-value"></a>

## Return Value

A result code. See [Secure Transport Result Codes](secure-transport-result-codes.md).

<a id="Discussion"></a>

## Discussion

Use the [SSLSetEnableCertVerify](sslsetenablecertverify.md) function to set the value of the `enableVerify` flag.
