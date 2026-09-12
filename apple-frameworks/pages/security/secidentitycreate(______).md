> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/secidentitycreate(_:_:_:)](https://developer.apple.com/documentation/security/secidentitycreate(_:_:_:))

# SecIdentityCreate(\_:\_:\_:) (Swift)

**Framework:** Security  
**Kind:** Function  
**Availability:** iOS 11.2+ · iPadOS 11.2+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 11.2+ · visionOS 1.0+ · watchOS 4.2+

## Declaration

```swift
func SecIdentityCreate(_ allocator: CFAllocator?, _ certificate: SecCertificate, _ privateKey: SecKey) -> SecIdentity?
```

## Parameters

- `allocator`: CFAllocator to allocate the identity object. Pass NULL to use the default allocator.
- `certificate`: A certificate reference.
- `privateKey`: A private key reference.

<a id="return-value"></a>

## Return Value

An identity reference.

<a id="discussion"></a>

## Discussion

Create a new identity object from the provided certificate and its associated private key.

This interface returns null if the private does not key correspond to the public key in the certifcate.

# SecIdentityCreate (Objective-C)

**Framework:** Security  
**Kind:** Function  
**Availability:** iOS 11.2+ · iPadOS 11.2+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 11.2+ · visionOS 1.0+ · watchOS 4.2+

## Declaration

```objectivec
SecIdentityRefSecIdentityCreate(CFAllocatorRef allocator, SecCertificateRef certificate, SecKeyRef privateKey);
```

## Parameters

- `allocator`: CFAllocator to allocate the identity object. Pass NULL to use the default allocator.
- `certificate`: A certificate reference.
- `privateKey`: A private key reference.

<a id="return-value"></a>

## Return Value

An identity reference.

<a id="discussion"></a>

## Discussion

Create a new identity object from the provided certificate and its associated private key.

This interface returns null if the private does not key correspond to the public key in the certifcate.
