> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/ascredentialidentitystoreerror/storebusy](https://developer.apple.com/documentation/authenticationservices/ascredentialidentitystoreerror/storebusy)

# storeBusy

**Framework:** Authentication Services  
**Kind:** Type Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 1.0+

The operation failed because the credential identity store is busy.

## Declaration

```swift
static var storeBusy: ASCredentialIdentityStoreError.Code { get }
```

<a id="Discussion"></a>

## Discussion

Attempt the operation again at a later time.

## See Also

### Error domain

- [ASCredentialIdentityStoreErrorDomain](../ascredentialidentitystoreerrordomain.md): The domain for a credential identity store error.
- [internalError](internalerror.md): The operation failed due to an internal error.
- [storeDisabled](storedisabled.md): The operation failed because the credential identity store is disabled.
- [ASCredentialIdentityStoreError.Code](code.md): Constants that represent credential identity store error codes.
