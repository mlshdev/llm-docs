> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/asauthorizationpublickeycredentialprfassertioninput-swift.struct/inputvalues-swift.struct/saltinput1(_:saltinput2:)](https://developer.apple.com/documentation/authenticationservices/asauthorizationpublickeycredentialprfassertioninput-swift.struct/inputvalues-swift.struct/saltinput1(_:saltinput2:))

# saltInput1(\_:saltInput2:)

**Framework:** Authentication Services  
**Kind:** Type Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · visionOS 2.0+

The inputs for generating the PRF output secrets.

## Declaration

```swift
static func saltInput1(_ saltInput1: Data, saltInput2: Data? = nil) -> ASAuthorizationPublicKeyCredentialPRFAssertionInput.InputValues
```

## Parameters

- `saltInput1`: The input the system uses when generating `first`.
- `saltInput2`: If specified, the input when generating `second`. If not specified, `second` is `nil`.

<a id="return-value"></a>

## Return Value

A configured instance of `InputValues`.
