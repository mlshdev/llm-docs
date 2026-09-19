> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/authenticationservices/aspasskeyregistrationcredentialextensionoutput-c.class/initwithlargebloboutput:

# initWithLargeBlobOutput:

**Interface language:** Objective-C

**Framework:** Authentication Services  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · visionOS 2.0+

Creates an extension output instance with the given large binary object output.

## Declaration

```objectivec
- (instancetype) initWithLargeBlobOutput:(ASAuthorizationPublicKeyCredentialLargeBlobRegistrationOutput *) largeBlob;
```

## Parameters

- `largeBlob`: The output for a `largeBlob` operation.
