> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/authenticationservices/asauthorizationpublickeycredentialresidentkeypreference/discouraged

# discouraged (Swift)

**Framework:** Authentication Services  
**Kind:** Type Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · visionOS 1.0+

The preference for the device not to store the resident key.

## Declaration

```swift
static let discouraged: ASAuthorizationPublicKeyCredentialResidentKeyPreference
```

## See Also

### Getting preferences

- [preferred](preferred.md): The preference for the device to store the resident key.
- [required](required.md): The device must store the resident key.

# ASAuthorizationPublicKeyCredentialResidentKeyPreferenceDiscouraged (Objective-C)

**Framework:** Authentication Services  
**Kind:** Global Variable  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · visionOS 1.0+

The preference for the device not to store the resident key.

## Declaration

```objectivec
extern ASAuthorizationPublicKeyCredentialResidentKeyPreference const ASAuthorizationPublicKeyCredentialResidentKeyPreferenceDiscouraged;
```

## See Also

### Getting preferences

- [ASAuthorizationPublicKeyCredentialResidentKeyPreferencePreferred](preferred.md): The preference for the device to store the resident key.
- [ASAuthorizationPublicKeyCredentialResidentKeyPreferenceRequired](required.md): The device must store the resident key.
