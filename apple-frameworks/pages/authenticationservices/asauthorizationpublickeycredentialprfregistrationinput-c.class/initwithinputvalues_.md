> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/authenticationservices/asauthorizationpublickeycredentialprfregistrationinput-c.class/initwithinputvalues:

# initWithInputValues:

**Interface language:** Objective-C

**Framework:** Authentication Services  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · visionOS 2.0+

Initializes a registration input object with inputs for the PRF extension to evaluate if the new passkey supports the extension.

## Declaration

```objectivec
- (instancetype) initWithInputValues:(ASAuthorizationPublicKeyCredentialPRFAssertionInputValues *) inputValues;
```

## Parameters

- `inputValues`: The inputs to use for generating the PRF.
