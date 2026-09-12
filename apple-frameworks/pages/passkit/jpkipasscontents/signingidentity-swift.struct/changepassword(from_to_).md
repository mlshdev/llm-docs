> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/jpkipasscontents/signingidentity-swift.struct/changepassword(from:to:)](https://developer.apple.com/documentation/passkit/jpkipasscontents/signingidentity-swift.struct/changepassword(from:to:))

# changePassword(from:to:)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+

A function that allows you to change the password associated with the signing identity.

## Declaration

```swift
func changePassword(from oldValue: String, to newValue: String) async throws
```

## Parameters

- `oldValue`: The user authentication value used to perform the request to change the password.
- `newValue`: The new user authentication value applied to the signing identity.

## See Also

### Signing identity authentication

- [signingIdentity](../signingidentity-swift.property.md): Allows access to the signing identity, if present in the JPKI applet.
- [JPKIPassContents.SigningIdentity.AuthenticationType](authenticationtype.md): Defines the valid user authentication request options for the signing identity.
