> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/sec_certificate_create(_:)](https://developer.apple.com/documentation/security/sec_certificate_create(_:))

# sec_certificate_create(\_:) (Swift)

**Framework:** Security  
**Kind:** Function  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

## Declaration

```swift
func sec_certificate_create(_ certificate: SecCertificate) -> sec_certificate_t?
```

## Parameters

- `certificate`: A `SecCertificateRef` instance.

<a id="return-value"></a>

## Return Value

A `sec_certificate_t` instance.

<a id="discussion"></a>

## Discussion

Create an ARC-able `sec_certificate_t` instance from a `SecCertificateRef`.

# sec_certificate_create (Objective-C)

**Framework:** Security  
**Kind:** Function  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

## Declaration

```objectivec
sec_certificate_tsec_certificate_create(SecCertificateRef certificate);
```

## Parameters

- `certificate`: A `SecCertificateRef` instance.

<a id="return-value"></a>

## Return Value

A `sec_certificate_t` instance.

<a id="discussion"></a>

## Discussion

Create an ARC-able `sec_certificate_t` instance from a `SecCertificateRef`.
