> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/aspasskeyregistrationcredentialextensionoutput-c.class/initwithlargebloboutput:](https://developer.apple.com/documentation/authenticationservices/aspasskeyregistrationcredentialextensionoutput-c.class/initwithlargebloboutput:)

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
