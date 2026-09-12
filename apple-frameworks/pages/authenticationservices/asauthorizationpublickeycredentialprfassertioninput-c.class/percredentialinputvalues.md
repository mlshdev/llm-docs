> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/asauthorizationpublickeycredentialprfassertioninput-c.class/percredentialinputvalues](https://developer.apple.com/documentation/authenticationservices/asauthorizationpublickeycredentialprfassertioninput-c.class/percredentialinputvalues)

# perCredentialInputValues

**Interface language:** Objective-C

**Framework:** Authentication Services  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · visionOS 2.0+

A map of credential identifiers to input values for the PRF extension.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) NSDictionary<NSData *,ASAuthorizationPublicKeyCredentialPRFAssertionInputValues *> * perCredentialInputValues;
```

<a id="discussion"></a>

## Discussion

If the user selects a passkey that matches a `credentialID` key in this dictionary, the extension uses the corresponding input values. If the selected passkey doesn’t match, it uses `inputValues` if it’s non-`nil`. Otherwise, no PRF output returns. When this value is nonempty, the request needs to specify `allowedCredentials`.
