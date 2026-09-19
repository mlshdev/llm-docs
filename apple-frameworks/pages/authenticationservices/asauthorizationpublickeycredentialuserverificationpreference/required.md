> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/authenticationservices/asauthorizationpublickeycredentialuserverificationpreference/required

# required (Swift)

**Framework:** Authentication Services  
**Kind:** Type Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 16.0+ · visionOS 1.0+

The relying party requires user verification.

## Declaration

```swift
static let required: ASAuthorizationPublicKeyCredentialUserVerificationPreference
```

## See Also

### Getting preferences

- [discouraged](discouraged.md): The relying party discourages user verification.
- [preferred](preferred.md): The relying party prefers user verification.

# ASAuthorizationPublicKeyCredentialUserVerificationPreferenceRequired (Objective-C)

**Framework:** Authentication Services  
**Kind:** Global Variable  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 16.0+ · visionOS 1.0+

The relying party requires user verification.

## Declaration

```objectivec
extern ASAuthorizationPublicKeyCredentialUserVerificationPreference const ASAuthorizationPublicKeyCredentialUserVerificationPreferenceRequired;
```

## See Also

### Getting preferences

- [ASAuthorizationPublicKeyCredentialUserVerificationPreferenceDiscouraged](discouraged.md): The relying party discourages user verification.
- [ASAuthorizationPublicKeyCredentialUserVerificationPreferencePreferred](preferred.md): The relying party prefers user verification.
