> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/ssladddistinguishedname(_:_:_:)](https://developer.apple.com/documentation/security/ssladddistinguishedname(_:_:_:))

# SSLAddDistinguishedName(\_:\_:\_:) (Swift)

**Framework:** Security  
**Kind:** Function  
**Availability:** iOS 5.0+ (deprecated in 13.0) · iPadOS 5.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.4+ (deprecated in 10.15)

Adds a DER-encoded distinguished name to a list of acceptable names to be specified in requests for client certificates.

> No longer supported. Use Network.framework.

## Declaration

```swift
func SSLAddDistinguishedName(_ context: SSLContext, _ derDN: UnsafeRawPointer?, _ derDNLen: Int) -> OSStatus
```

## Parameters

- `context`: An SSL session context reference.
- `derDN`: A pointer to a buffer containing a DER-encoded distinguished name.
- `derDNLen`: A value of type `size_t` representing the size of the buffer pointed to by the parameter `derDN`.

<a id="return-value"></a>

## Return Value

A result code. See [Secure Transport Result Codes](secure-transport-result-codes.md).

# SSLAddDistinguishedName (Objective-C)

**Framework:** Security  
**Kind:** Function  
**Availability:** iOS 5.0+ (deprecated in 13.0) · iPadOS 5.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.4+ (deprecated in 10.15) · tvOS 9.0+ (deprecated in 13.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 6.0)

Adds a DER-encoded distinguished name to a list of acceptable names to be specified in requests for client certificates.

> No longer supported. Use Network.framework.

## Declaration

```objectivec
OSStatus SSLAddDistinguishedName(SSLContextRef context, const void *derDN, size_t derDNLen);
```

## Parameters

- `context`: An SSL session context reference.
- `derDN`: A pointer to a buffer containing a DER-encoded distinguished name.
- `derDNLen`: A value of type `size_t` representing the size of the buffer pointed to by the parameter `derDN`.

<a id="return-value"></a>

## Return Value

A result code. See [Secure Transport Result Codes](secure-transport-result-codes.md).
