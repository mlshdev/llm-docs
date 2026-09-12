> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/ksecimportitemidentity](https://developer.apple.com/documentation/security/ksecimportitemidentity)

# kSecImportItemIdentity (Swift)

**Framework:** Security  
**Kind:** Global Variable  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Identity object.

## Declaration

```swift
let kSecImportItemIdentity: CFString
```

## Mentioned In

- [Importing an Identity](importing-an-identity.md)

<a id="Discussion"></a>

## Discussion

The corresponding value is of type `SecIdentityRef` and represents one identity contained in the PKCS #12 blob.

# kSecImportItemIdentity (Objective-C)

**Framework:** Security  
**Kind:** Global Variable  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Identity object.

## Declaration

```objectivec
extern CFStringRef const kSecImportItemIdentity;
```

## Mentioned In

- [Importing an Identity](importing-an-identity.md)

<a id="Discussion"></a>

## Discussion

The corresponding value is of type `SecIdentityRef` and represents one identity contained in the PKCS #12 blob.
