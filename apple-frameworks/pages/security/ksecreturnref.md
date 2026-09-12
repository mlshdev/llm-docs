> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/ksecreturnref](https://developer.apple.com/documentation/security/ksecreturnref)

# kSecReturnRef (Swift)

**Framework:** Security  
**Kind:** Global Variable  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A key whose value is a Boolean indicating whether or not to return a reference to an item.

## Declaration

```swift
let kSecReturnRef: CFString
```

## Mentioned In

- [Storing a Certificate in the Keychain](storing-a-certificate-in-the-keychain.md)

<a id="Discussion"></a>

## Discussion

The corresponding value is of type [CFBoolean](../corefoundation/cfboolean.md). A value of [kCFBooleanTrue](../corefoundation/kcfbooleantrue.md) indicates that a reference should be returned. Depending on the item class requested, the returned references may be of type [SecKeychainItem](seckeychainitem.md), [SecKey](seckey.md), [SecCertificate](seccertificate.md), [SecIdentity](secidentity.md), or [CFData](../corefoundation/cfdata.md).

# kSecReturnRef (Objective-C)

**Framework:** Security  
**Kind:** Global Variable  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A key whose value is a Boolean indicating whether or not to return a reference to an item.

## Declaration

```objectivec
extern CFStringRef const kSecReturnRef;
```

## Mentioned In

- [Storing a Certificate in the Keychain](storing-a-certificate-in-the-keychain.md)

<a id="Discussion"></a>

## Discussion

The corresponding value is of type [CFBooleanRef](../corefoundation/cfboolean.md). A value of [kCFBooleanTrue](../corefoundation/kcfbooleantrue.md) indicates that a reference should be returned. Depending on the item class requested, the returned references may be of type [SecKeychainItemRef](seckeychainitem.md), [SecKeyRef](seckey.md), [SecCertificateRef](seccertificate.md), [SecIdentityRef](secidentity.md), or [CFDataRef](../corefoundation/cfdata.md).
