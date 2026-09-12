> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/jpkipasscontents/useridentity-swift.struct/authenticationtype](https://developer.apple.com/documentation/passkit/jpkipasscontents/useridentity-swift.struct/authenticationtype)

# JPKIPassContents.UserIdentity.AuthenticationType

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Enumeration  
**Availability:** iOS 18.0+ · iPadOS 18.0+

Defines valid authentication types associated with the user identity.

## Declaration

```swift
enum AuthenticationType
```

<a id="overview"></a>

## Overview

Use of the systemBiometric authentication requires you to set the [NSFaceIDUsageDescription](../../../bundleresources/information-property-list/nsfaceidusagedescription.md) usage description.

## Topics

### Types of authentication

- [JPKIPassContents.UserIdentity.AuthenticationType.pin(\_:)](authenticationtype/pin%28__%29.md): The PIN associated with the user identity.
- [JPKIPassContents.UserIdentity.AuthenticationType.systemBiometric](authenticationtype/systembiometric.md): Authentication using biometric information.

## See Also

### Identifying the pass user

- [userIdentity](../useridentity-swift.property.md): Allows for access to the user identity, if present in the JPKI applet.
- [changePIN(from:to:)](changepin%28from_to_%29.md): A function that allows for the change of the PIN associated with the user identity.
