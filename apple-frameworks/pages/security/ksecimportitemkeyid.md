> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/ksecimportitemkeyid](https://developer.apple.com/documentation/security/ksecimportitemkeyid)

# kSecImportItemKeyID (Swift)

**Framework:** Security  
**Kind:** Global Variable  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Key ID.

## Declaration

```swift
let kSecImportItemKeyID: CFString
```

## Mentioned In

- [Importing an Identity](importing-an-identity.md)

<a id="Discussion"></a>

## Discussion

The corresponding value is of type `CFDataRef`. This unique ID is often the SHA-1 digest of the public encryption key.

# kSecImportItemKeyID (Objective-C)

**Framework:** Security  
**Kind:** Global Variable  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Key ID.

## Declaration

```objectivec
extern CFStringRef const kSecImportItemKeyID;
```

## Mentioned In

- [Importing an Identity](importing-an-identity.md)

<a id="Discussion"></a>

## Discussion

The corresponding value is of type `CFDataRef`. This unique ID is often the SHA-1 digest of the public encryption key.
