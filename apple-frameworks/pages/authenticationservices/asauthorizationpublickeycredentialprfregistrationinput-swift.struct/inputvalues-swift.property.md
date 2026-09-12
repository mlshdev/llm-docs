> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/asauthorizationpublickeycredentialprfregistrationinput-swift.struct/inputvalues-swift.property](https://developer.apple.com/documentation/authenticationservices/asauthorizationpublickeycredentialprfregistrationinput-swift.struct/inputvalues-swift.property)

# inputValues

**Framework:** Authentication Services  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · visionOS 2.0+

The input values to use when generating the PRF extension, if specified.

## Declaration

```swift
let inputValues: ASAuthorizationPublicKeyCredentialPRFRegistrationInput.InputValues?
```

<a id="discussion"></a>

## Discussion

If this property isn’t specified, the output only indicates whether there’s support for the extension.

## See Also

### Working with PRF inputs

- [ASAuthorizationPublicKeyCredentialPRFRegistrationInput.InputValues](inputvalues-swift.typealias.md): The type of the registration input values property.
- [inputValues(\_:)](inputvalues%28__%29.md): The inputs for the PRF extension to evaluate if the new passkey supports the extension.
