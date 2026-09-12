> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/seccertificatecopyvalues(_:_:_:)](https://developer.apple.com/documentation/security/seccertificatecopyvalues(_:_:_:))

# SecCertificateCopyValues(\_:\_:\_:) (Swift)

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.7+

Creates a dictionary that represents a certificate’s contents.

## Declaration

```swift
func SecCertificateCopyValues(_ certificate: SecCertificate, _ keys: CFArray?, _ error: UnsafeMutablePointer<Unmanaged<CFError>?>?) -> CFDictionary?
```

## Parameters

- `certificate`: The certificate from which values should be copied.
- `keys`: An array of string OID values, or `NULL`. If non-`NULL`, these OID values determine which values from the certificate to return. If `NULL`, all values are returned.

  Only OIDs that represent top-level keys in the returned dictionary can be specified. Unknown OIDs are ignored. See [Certificate OIDs](certificate-oids.md) for the list of known OIDs.
- `error`: A pointer to a [CFError](../corefoundation/cferror.md) variable where an error object is stored upon failure. If not `NULL`, the caller is responsible for checking this variable and releasing the resulting object if it exists.

<a id="return-value"></a>

## Return Value

A dictionary containing the specified values from the certificate or `NULL` if an error occurs. In Objective-C, free this dictionary with a call to the [CFRelease](../corefoundation/cfrelease.md) function when you are done with it.

## Mentioned In

- [Getting Certificate Values](getting-certificate-values.md)

<a id="Discussion"></a>

## Discussion

Each entry in this dictionary is itself a dictionary with the keys described in [Certificate Property Keys](certificate-property-keys.md).

# SecCertificateCopyValues (Objective-C)

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.7+

Creates a dictionary that represents a certificate’s contents.

## Declaration

```objectivec
CFDictionaryRefSecCertificateCopyValues(SecCertificateRef certificate, CFArrayRef keys, CFErrorRef*error);
```

## Parameters

- `certificate`: The certificate from which values should be copied.
- `keys`: An array of string OID values, or `NULL`. If non-`NULL`, these OID values determine which values from the certificate to return. If `NULL`, all values are returned.

  Only OIDs that represent top-level keys in the returned dictionary can be specified. Unknown OIDs are ignored. See [Certificate OIDs](certificate-oids.md) for the list of known OIDs.
- `error`: A pointer to a [CFErrorRef](../corefoundation/cferror.md) variable where an error object is stored upon failure. If not `NULL`, the caller is responsible for checking this variable and releasing the resulting object if it exists.

<a id="return-value"></a>

## Return Value

A dictionary containing the specified values from the certificate or `NULL` if an error occurs. In Objective-C, free this dictionary with a call to the [CFRelease](../corefoundation/cfrelease.md) function when you are done with it.

## Mentioned In

- [Getting Certificate Values](getting-certificate-values.md)

<a id="Discussion"></a>

## Discussion

Each entry in this dictionary is itself a dictionary with the keys described in [Certificate Property Keys](certificate-property-keys.md).
