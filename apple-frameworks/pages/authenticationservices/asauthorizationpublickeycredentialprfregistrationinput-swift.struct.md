> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/asauthorizationpublickeycredentialprfregistrationinput-swift.struct](https://developer.apple.com/documentation/authenticationservices/asauthorizationpublickeycredentialprfregistrationinput-swift.struct)

# ASAuthorizationPublicKeyCredentialPRFRegistrationInput

**Framework:** Authentication Services  
**Kind:** Structure  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · visionOS 2.0+

A type that encapsulates input for PRF extensions during registration.

## Declaration

```swift
struct ASAuthorizationPublicKeyCredentialPRFRegistrationInput
```

## Topics

### Working with PRF inputs

- [inputValues](asauthorizationpublickeycredentialprfregistrationinput-swift.struct/inputvalues-swift.property.md): The input values to use when generating the PRF extension, if specified.
- [ASAuthorizationPublicKeyCredentialPRFRegistrationInput.InputValues](asauthorizationpublickeycredentialprfregistrationinput-swift.struct/inputvalues-swift.typealias.md): The type of the registration input values property.
- [inputValues(\_:)](asauthorizationpublickeycredentialprfregistrationinput-swift.struct/inputvalues%28__%29.md): The inputs for the PRF extension to evaluate if the new passkey supports the extension.

### Checking for support

- [shouldCheckForSupport](asauthorizationpublickeycredentialprfregistrationinput-swift.struct/shouldcheckforsupport.md): A Boolean value that indicates whether to check for PRF support.
- [checkForSupport](asauthorizationpublickeycredentialprfregistrationinput-swift.struct/checkforsupport.md): A check to determine extension support for the newly created passkey.

## See Also

### Inputs

- [largeBlob](aspasskeyregistrationcredentialextensioninput-swift.struct/largeblob.md): Input for the WebAuthn large binary object extension in passkey registration requests.
- [ASAuthorizationPublicKeyCredentialLargeBlobRegistrationInput](asauthorizationpublickeycredentiallargeblobregistrationinput-swift.struct.md): A type that encapsulates input for large binary object extensions during registration.
- [prf](aspasskeyregistrationcredentialextensioninput-swift.struct/prf.md): Input for the WebAuthn PRF extension in passkey registration requests.
