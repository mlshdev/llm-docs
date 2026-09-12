> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/asauthorizationpublickeycredentialprfassertioninput-c.class/initwithinputvalues:percredentialinputvalues:](https://developer.apple.com/documentation/authenticationservices/asauthorizationpublickeycredentialprfassertioninput-c.class/initwithinputvalues:percredentialinputvalues:)

# initWithInputValues:perCredentialInputValues:

**Interface language:** Objective-C

**Framework:** Authentication Services  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · visionOS 2.0+

Initializes the inputs for the PRF extension.

## Declaration

```objectivec
- (instancetype) initWithInputValues:(ASAuthorizationPublicKeyCredentialPRFAssertionInputValues *) inputValues perCredentialInputValues:(NSDictionary<NSData *,ASAuthorizationPublicKeyCredentialPRFAssertionInputValues *> *) perCredentialInputValues;
```

## Parameters

- `inputValues`: The default inputs to use for generating the PRF.
- `perCredentialInputValues`: This optional dictionary maps `credentialID` values to alternate input values. If the user selects a passkey with a `credentialID` that matches one of these keys, the extension uses the corresponding input values instead of those from the first argument. When specifying a nonempty value here, the request uses `allowedCredentials`.
