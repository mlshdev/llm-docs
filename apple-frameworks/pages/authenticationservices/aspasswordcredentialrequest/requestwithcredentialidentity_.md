> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/authenticationservices/aspasswordcredentialrequest/requestwithcredentialidentity:

# requestWithCredentialIdentity:

**Interface language:** Objective-C

**Framework:** Authentication Services  
**Kind:** Type Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · visionOS 1.0+

Creates and initializes a password credential request object.

## Declaration

```objectivec
+ (instancetype) requestWithCredentialIdentity:(ASPasswordCredentialIdentity *) credentialIdentity;
```

## Parameters

- `credentialIdentity`: The credential identity for the requested password.

<a id="return-value"></a>

## Return Value

The created object.

## See Also

### Creating password credential requests

- [initWithCredentialIdentity:](init%28credentialidentity_%29.md): Initializes a password credential request object.
