> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/ascredentialidentitystoreerror/code](https://developer.apple.com/documentation/authenticationservices/ascredentialidentitystoreerror/code)

# ASCredentialIdentityStoreError.Code (Swift)

**Framework:** Authentication Services  
**Kind:** Enumeration  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 1.0+

Constants that represent credential identity store error codes.

## Declaration

```swift
enum Code
```

## Topics

### Codes

- [ASCredentialIdentityStoreError.Code.internalError](code/internalerror.md): The operation failed due to an internal error.
- [ASCredentialIdentityStoreError.Code.storeBusy](code/storebusy.md): The operation failed because the credential identity store is busy.
- [ASCredentialIdentityStoreError.Code.storeDisabled](code/storedisabled.md): The operation failed because the credential identity store is disabled.

### Initializers

- [init(rawValue:)](code/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Recognizing errors

- [ASCredentialIdentityStoreError](../ascredentialidentitystoreerror.md): A credential identity store error.
- [ASCredentialIdentityStoreErrorDomain](../ascredentialidentitystoreerrordomain.md): The domain for a credential identity store error.

# ASCredentialIdentityStoreErrorCode (Objective-C)

**Framework:** Authentication Services  
**Kind:** Enumeration  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 1.0+

Constants that represent credential identity store error codes.

## Declaration

```objectivec
enum ASCredentialIdentityStoreErrorCode : NSInteger;
```

## Topics

### Codes

- [ASCredentialIdentityStoreErrorCodeInternalError](code/internalerror.md): The operation failed due to an internal error.
- [ASCredentialIdentityStoreErrorCodeStoreBusy](code/storebusy.md): The operation failed because the credential identity store is busy.
- [ASCredentialIdentityStoreErrorCodeStoreDisabled](code/storedisabled.md): The operation failed because the credential identity store is disabled.

## See Also

### Recognizing errors

- [ASCredentialIdentityStoreErrorDomain](../ascredentialidentitystoreerrordomain.md): The domain for a credential identity store error.
