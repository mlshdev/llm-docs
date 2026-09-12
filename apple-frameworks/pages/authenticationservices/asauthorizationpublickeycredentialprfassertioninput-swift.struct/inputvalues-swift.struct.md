> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/asauthorizationpublickeycredentialprfassertioninput-swift.struct/inputvalues-swift.struct](https://developer.apple.com/documentation/authenticationservices/asauthorizationpublickeycredentialprfassertioninput-swift.struct/inputvalues-swift.struct)

# ASAuthorizationPublicKeyCredentialPRFAssertionInput.InputValues

**Framework:** Authentication Services  
**Kind:** Structure  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · visionOS 2.0+

The values to use as inputs to the salts for deriving the symmetric key.

## Declaration

```swift
struct InputValues
```

<a id="overview"></a>

## Overview

This type is analogous to `AuthenticationExtensionsPRFValues` in the WebAuthn specification.

## Topics

### Initializers

- [init(saltInput1:saltInput2:)](inputvalues-swift.struct/init%28saltinput1_saltinput2_%29.md): Initializes an input values structure with the given salts.

### Instance Properties

- [saltInput1](inputvalues-swift.struct/saltinput1.md): A salt for the hashing function.
- [saltInput2](inputvalues-swift.struct/saltinput2.md): An optional second salt for the hashing function.

### Type Methods

- [saltInput1(\_:saltInput2:)](inputvalues-swift.struct/saltinput1%28__saltinput2_%29.md): The inputs for generating the PRF output secrets.
