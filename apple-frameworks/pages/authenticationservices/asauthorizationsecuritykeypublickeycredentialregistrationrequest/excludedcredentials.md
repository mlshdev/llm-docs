> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/asauthorizationsecuritykeypublickeycredentialregistrationrequest/excludedcredentials](https://developer.apple.com/documentation/authenticationservices/asauthorizationsecuritykeypublickeycredentialregistrationrequest/excludedcredentials)

# excludedCredentials (Swift)

**Framework:** Authentication Services  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+

An array of excluded parameters for the credential.

## Declaration

```swift
var excludedCredentials: [ASAuthorizationSecurityKeyPublicKeyCredentialDescriptor] { get set }
```

## See Also

### Getting the properties

- [credentialParameters](credentialparameters.md): An array of parameters for the credential.
- [residentKeyPreference](residentkeypreference.md): The preference that indicates where the resident key resides.

# excludedCredentials (Objective-C)

**Framework:** Authentication Services  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+

An array of excluded parameters for the credential.

## Declaration

```objectivec
@property (nonatomic, copy) NSArray<ASAuthorizationSecurityKeyPublicKeyCredentialDescriptor *> * excludedCredentials;
```

## See Also

### Getting the properties

- [credentialParameters](credentialparameters.md): An array of parameters for the credential.
- [residentKeyPreference](residentkeypreference.md): The preference that indicates where the resident key resides.
