> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/asauthorizationpublickeycredentialprfassertioninput-swift.struct/percredentialinputvalues(_:)](https://developer.apple.com/documentation/authenticationservices/asauthorizationpublickeycredentialprfassertioninput-swift.struct/percredentialinputvalues(_:))

# perCredentialInputValues(\_:)

**Framework:** Authentication Services  
**Kind:** Type Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · visionOS 2.0+

The inputs for the PRF extension, when not specifying general input values.

## Declaration

```swift
static func perCredentialInputValues(_ perCredentialInputValues: [Data : ASAuthorizationPublicKeyCredentialPRFAssertionInput.InputValues]) -> ASAuthorizationPublicKeyCredentialPRFAssertionInput
```

## Parameters

- `perCredentialInputValues`: This dictionary maps `credentialID` values to input values. If the user selects a passkey with a `credentialID` that matches one of these keys, the extension uses the corresponding input values. If the selected passkey doesn’t match, it doesn’t return a PRF result. When using this option, the dictionary needs to be nonempty and the request needs to use `allowedCredentials`.

<a id="return-value"></a>

## Return Value

A configured instance of `ASAuthorizationPublicKeyCredentialPRFAssertionInput`.

## See Also

### Accessing per-credential input values

- [perCredentialInputValues](percredentialinputvalues.md): A map of credential identifiers to input values for the PRF extension.
