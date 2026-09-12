> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/asauthorizationpublickeycredentialprfregistrationinput-swift.struct/inputvalues(_:)](https://developer.apple.com/documentation/authenticationservices/asauthorizationpublickeycredentialprfregistrationinput-swift.struct/inputvalues(_:))

# inputValues(\_:)

**Framework:** Authentication Services  
**Kind:** Type Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · visionOS 2.0+

The inputs for the PRF extension to evaluate if the new passkey supports the extension.

## Declaration

```swift
static func inputValues(_ inputValues: ASAuthorizationPublicKeyCredentialPRFRegistrationInput.InputValues) -> ASAuthorizationPublicKeyCredentialPRFRegistrationInput
```

## Parameters

- `inputValues`: The inputs to use for generating the PRF.

<a id="return-value"></a>

## Return Value

A configured instance of `ASAuthorizationPublicKeyCredentialPRFRegistrationInput`.

## See Also

### Working with PRF inputs

- [inputValues](inputvalues-swift.property.md): The input values to use when generating the PRF extension, if specified.
- [ASAuthorizationPublicKeyCredentialPRFRegistrationInput.InputValues](inputvalues-swift.typealias.md): The type of the registration input values property.
