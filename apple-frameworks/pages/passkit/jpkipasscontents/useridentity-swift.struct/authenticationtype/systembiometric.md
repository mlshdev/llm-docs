> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/passkit/jpkipasscontents/useridentity-swift.struct/authenticationtype/systembiometric

# JPKIPassContents.UserIdentity.AuthenticationType.systemBiometric

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Case  
**Availability:** iOS 18.0+ · iPadOS 18.0+

Authentication using biometric information.

## Declaration

```swift
case systemBiometric
```

<a id="Discussion"></a>

## Discussion

Use of the systemBiometric authentication requires you to set the [NSFaceIDUsageDescription](../../../../bundleresources/information-property-list/nsfaceidusagedescription.md) usage description.

## See Also

### Types of authentication

- [JPKIPassContents.UserIdentity.AuthenticationType.pin(\_:)](pin%28__%29.md): The PIN associated with the user identity.
