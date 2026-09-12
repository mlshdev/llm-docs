> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/asauthorizationpublickeycredentialprfassertioninput-swift.struct/inputvalues-swift.property](https://developer.apple.com/documentation/authenticationservices/asauthorizationpublickeycredentialprfassertioninput-swift.struct/inputvalues-swift.property)

# inputValues

**Framework:** Authentication Services  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · visionOS 2.0+

The input values to use when generating the PRF extension output, if specified.

## Declaration

```swift
let inputValues: ASAuthorizationPublicKeyCredentialPRFAssertionInput.InputValues?
```

<a id="discussion"></a>

## Discussion

When also using [perCredentialInputValues](percredentialinputvalues.md), you may use the corresponding value from that dictionary instead.

## See Also

### Accessing input values

- [inputValues(\_:perCredentialInputValues:)](inputvalues%28__percredentialinputvalues_%29.md): The inputs for the PRF extension.
