> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/asauthorizationpublickeycredentialresidentkeypreference/preferred](https://developer.apple.com/documentation/authenticationservices/asauthorizationpublickeycredentialresidentkeypreference/preferred)

# preferred (Swift)

**Framework:** Authentication Services  
**Kind:** Type Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · visionOS 1.0+

The preference for the device to store the resident key.

## Declaration

```swift
static let preferred: ASAuthorizationPublicKeyCredentialResidentKeyPreference
```

## See Also

### Getting preferences

- [discouraged](discouraged.md): The preference for the device not to store the resident key.
- [required](required.md): The device must store the resident key.

# ASAuthorizationPublicKeyCredentialResidentKeyPreferencePreferred (Objective-C)

**Framework:** Authentication Services  
**Kind:** Global Variable  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · visionOS 1.0+

The preference for the device to store the resident key.

## Declaration

```objectivec
extern ASAuthorizationPublicKeyCredentialResidentKeyPreference const ASAuthorizationPublicKeyCredentialResidentKeyPreferencePreferred;
```

## See Also

### Getting preferences

- [ASAuthorizationPublicKeyCredentialResidentKeyPreferenceDiscouraged](discouraged.md): The preference for the device not to store the resident key.
- [ASAuthorizationPublicKeyCredentialResidentKeyPreferenceRequired](required.md): The device must store the resident key.
