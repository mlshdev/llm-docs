> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/sec_identity_create_with_certificates(_:_:)](https://developer.apple.com/documentation/security/sec_identity_create_with_certificates(_:_:))

# sec_identity_create_with_certificates(\_:\_:) (Swift)

**Framework:** Security  
**Kind:** Function  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

## Declaration

```swift
func sec_identity_create_with_certificates(_ identity: SecIdentity, _ certificates: CFArray) -> sec_identity_t?
```

## Parameters

- `identity`: A `SecIdentityRef` instance.
- `certificates`: An array of `SecCertificateRef` instances.

<a id="return-value"></a>

## Return Value

A `sec_identity_t` instance.

<a id="discussion"></a>

## Discussion

Create an ARC-able `sec_identity_t` instance from a `SecIdentityRef` and array of SecCertificateRef instances.

# sec_identity_create_with_certificates (Objective-C)

**Framework:** Security  
**Kind:** Function  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

## Declaration

```objectivec
sec_identity_tsec_identity_create_with_certificates(SecIdentityRef identity, CFArrayRef certificates);
```

## Parameters

- `identity`: A `SecIdentityRef` instance.
- `certificates`: An array of `SecCertificateRef` instances.

<a id="return-value"></a>

## Return Value

A `sec_identity_t` instance.

<a id="discussion"></a>

## Discussion

Create an ARC-able `sec_identity_t` instance from a `SecIdentityRef` and array of SecCertificateRef instances.
