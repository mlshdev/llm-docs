> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/authenticationservices/ascredentialidentitystoreerror/storedisabled

# storeDisabled

**Framework:** Authentication Services  
**Kind:** Type Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 1.0+

The operation failed because the credential identity store is disabled.

## Declaration

```swift
static var storeDisabled: ASCredentialIdentityStoreError.Code { get }
```

## See Also

### Error domain

- [ASCredentialIdentityStoreErrorDomain](../ascredentialidentitystoreerrordomain.md): The domain for a credential identity store error.
- [internalError](internalerror.md): The operation failed due to an internal error.
- [storeBusy](storebusy.md): The operation failed because the credential identity store is busy.
- [ASCredentialIdentityStoreError.Code](code.md): Constants that represent credential identity store error codes.
