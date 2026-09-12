> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/sslsetocspresponse(_:_:)](https://developer.apple.com/documentation/security/sslsetocspresponse(_:_:))

# SSLSetOCSPResponse(\_:\_:) (Swift)

**Framework:** Security  
**Kind:** Function  
**Availability:** iOS 11.0+ (deprecated in 13.0) · iPadOS 11.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.13+ (deprecated in 10.15)

Sets the OCSP response for the given SSL session.

> No longer supported. Use Network.framework.

## Declaration

```swift
func SSLSetOCSPResponse(_ context: SSLContext, _ response: CFData) -> OSStatus
```

## Parameters

- `context`: A session context.
- `response`: A non-`NULL` [CFData](../corefoundation/cfdata.md) instance containing the bytes of the OCSP response.

<a id="return-value"></a>

## Return Value

A result code. See [Secure Transport Result Codes](secure-transport-result-codes.md).

# SSLSetOCSPResponse (Objective-C)

**Framework:** Security  
**Kind:** Function  
**Availability:** iOS 11.0+ (deprecated in 13.0) · iPadOS 11.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.13+ (deprecated in 10.15) · tvOS 11.0+ (deprecated in 13.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 4.0+ (deprecated in 6.0)

Sets the OCSP response for the given SSL session.

> No longer supported. Use Network.framework.

## Declaration

```objectivec
OSStatus SSLSetOCSPResponse(SSLContextRef context, CFDataRef response);
```

## Parameters

- `context`: A session context.
- `response`: A non-`NULL` [CFDataRef](../corefoundation/cfdata.md) instance containing the bytes of the OCSP response.

<a id="return-value"></a>

## Return Value

A result code. See [Secure Transport Result Codes](secure-transport-result-codes.md).
