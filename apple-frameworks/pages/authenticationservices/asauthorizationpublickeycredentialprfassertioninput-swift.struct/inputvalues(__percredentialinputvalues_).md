> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/asauthorizationpublickeycredentialprfassertioninput-swift.struct/inputvalues(_:percredentialinputvalues:)](https://developer.apple.com/documentation/authenticationservices/asauthorizationpublickeycredentialprfassertioninput-swift.struct/inputvalues(_:percredentialinputvalues:))

# inputValues(\_:perCredentialInputValues:)

**Framework:** Authentication Services  
**Kind:** Type Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · visionOS 2.0+

The inputs for the PRF extension.

## Declaration

```swift
static func inputValues(_ inputValues: ASAuthorizationPublicKeyCredentialPRFAssertionInput.InputValues, perCredentialInputValues: [Data : ASAuthorizationPublicKeyCredentialPRFAssertionInput.InputValues]? = nil) -> ASAuthorizationPublicKeyCredentialPRFAssertionInput
```

## Parameters

- `inputValues`: The default inputs to use for generating the PRF.
- `perCredentialInputValues`: This optional dictionary maps `credentialID` values to alternate input values. If the user selects a passkey with a `credentialID` that matches one of these keys, the extension uses the corresponding input values instead of those from the first argument. When specifying a nonempty value here, the request uses `allowedCredentials`.

<a id="return-value"></a>

## Return Value

A configured instance of [ASAuthorizationPublicKeyCredentialPRFAssertionInput](../asauthorizationpublickeycredentialprfassertioninput-swift.struct.md).

## See Also

### Accessing input values

- [inputValues](inputvalues-swift.property.md): The input values to use when generating the PRF extension output, if specified.
