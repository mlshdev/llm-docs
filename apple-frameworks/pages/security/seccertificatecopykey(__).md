> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/security/seccertificatecopykey(_:)

# SecCertificateCopyKey(\_:) (Swift)

**Framework:** Security  
**Kind:** Function  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

Retrieves the public key for a given certificate.

## Declaration

```swift
func SecCertificateCopyKey(_ certificate: SecCertificate) -> SecKey?
```

## Parameters

- `certificate`: The certificate from which to copy the key.

<a id="return-value"></a>

## Return Value

The public key. In Objective-C, free this key with a call to the [CFRelease](../corefoundation/cfrelease.md) function when you are done with it.

<a id="Discussion"></a>

## Discussion

The return reference is `NULL` if the public key has an encoding issue or uses an unsupported algorithm.

# SecCertificateCopyKey (Objective-C)

**Framework:** Security  
**Kind:** Function  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

Retrieves the public key for a given certificate.

## Declaration

```objectivec
SecKeyRefSecCertificateCopyKey(SecCertificateRef certificate);
```

## Parameters

- `certificate`: The certificate from which to copy the key.

<a id="return-value"></a>

## Return Value

The public key. In Objective-C, free this key with a call to the [CFRelease](../corefoundation/cfrelease.md) function when you are done with it.

<a id="Discussion"></a>

## Discussion

The return reference is `NULL` if the public key has an encoding issue or uses an unsupported algorithm.
