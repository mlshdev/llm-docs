> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/asauthorizationpublickeycredentialresidentkeypreference/required](https://developer.apple.com/documentation/authenticationservices/asauthorizationpublickeycredentialresidentkeypreference/required)

# required (Swift)

**Framework:** Authentication Services  
**Kind:** Type Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · visionOS 1.0+

The device must store the resident key.

## Declaration

```swift
static let required: ASAuthorizationPublicKeyCredentialResidentKeyPreference
```

## See Also

### Getting preferences

- [discouraged](discouraged.md): The preference for the device not to store the resident key.
- [preferred](preferred.md): The preference for the device to store the resident key.

# ASAuthorizationPublicKeyCredentialResidentKeyPreferenceRequired (Objective-C)

**Framework:** Authentication Services  
**Kind:** Global Variable  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · visionOS 1.0+

The device must store the resident key.

## Declaration

```objectivec
extern ASAuthorizationPublicKeyCredentialResidentKeyPreference const ASAuthorizationPublicKeyCredentialResidentKeyPreferenceRequired;
```

## See Also

### Getting preferences

- [ASAuthorizationPublicKeyCredentialResidentKeyPreferenceDiscouraged](discouraged.md): The preference for the device not to store the resident key.
- [ASAuthorizationPublicKeyCredentialResidentKeyPreferencePreferred](preferred.md): The preference for the device to store the resident key.
