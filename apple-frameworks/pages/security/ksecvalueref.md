> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/ksecvalueref](https://developer.apple.com/documentation/security/ksecvalueref)

# kSecValueRef (Swift)

**Framework:** Security  
**Kind:** Global Variable  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A key whose value is a reference to the item.

## Declaration

```swift
let kSecValueRef: CFString
```

<a id="Discussion"></a>

## Discussion

The corresponding value, depending on the item class requested, is of type [SecKeychainItem](seckeychainitem.md), [SecKey](seckey.md), [SecCertificate](seccertificate.md), or [SecIdentity](secidentity.md).

# kSecValueRef (Objective-C)

**Framework:** Security  
**Kind:** Global Variable  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A key whose value is a reference to the item.

## Declaration

```objectivec
extern CFStringRef const kSecValueRef;
```

<a id="Discussion"></a>

## Discussion

The corresponding value, depending on the item class requested, is of type [SecKeychainItemRef](seckeychainitem.md), [SecKeyRef](seckey.md), [SecCertificateRef](seccertificate.md), or [SecIdentityRef](secidentity.md).
