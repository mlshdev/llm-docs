> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/jpkipasscontents/signingidentity-swift.struct/authenticationtype](https://developer.apple.com/documentation/passkit/jpkipasscontents/signingidentity-swift.struct/authenticationtype)

# JPKIPassContents.SigningIdentity.AuthenticationType

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Enumeration  
**Availability:** iOS 18.0+ · iPadOS 18.0+

Defines the valid user authentication request options for the signing identity.

## Declaration

```swift
enum AuthenticationType
```

## Topics

### Case for authentication

- [JPKIPassContents.SigningIdentity.AuthenticationType.password(\_:)](authenticationtype/password%28__%29.md): Reads the signing identity using the password.

## See Also

### Signing identity authentication

- [signingIdentity](../signingidentity-swift.property.md): Allows access to the signing identity, if present in the JPKI applet.
- [changePassword(from:to:)](changepassword%28from_to_%29.md): A function that allows you to change the password associated with the signing identity.
