> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/asauthorizationsecuritykeypublickeycredentialregistrationrequest/credentialparameters](https://developer.apple.com/documentation/authenticationservices/asauthorizationsecuritykeypublickeycredentialregistrationrequest/credentialparameters)

# credentialParameters (Swift)

**Framework:** Authentication Services  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+

An array of parameters for the credential.

## Declaration

```swift
var credentialParameters: [ASAuthorizationPublicKeyCredentialParameters] { get set }
```

## See Also

### Getting the properties

- [excludedCredentials](excludedcredentials.md): An array of excluded parameters for the credential.
- [residentKeyPreference](residentkeypreference.md): The preference that indicates where the resident key resides.

# credentialParameters (Objective-C)

**Framework:** Authentication Services  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+

An array of parameters for the credential.

## Declaration

```objectivec
@property (nonatomic, copy) NSArray<ASAuthorizationPublicKeyCredentialParameters *> * credentialParameters;
```

## See Also

### Getting the properties

- [excludedCredentials](excludedcredentials.md): An array of excluded parameters for the credential.
- [residentKeyPreference](residentkeypreference.md): The preference that indicates where the resident key resides.
