> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/authenticationservices/asauthorizationpublickeycredentialprfregistrationinput-c.class/inputvalues

# inputValues

**Interface language:** Objective-C

**Framework:** Authentication Services  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · visionOS 2.0+

The input values to use when generating the PRF extension, if specified.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) ASAuthorizationPublicKeyCredentialPRFAssertionInputValues * inputValues;
```

<a id="discussion"></a>

## Discussion

If this property isn’t specified, the output only indicates whether there’s support for the extension.
