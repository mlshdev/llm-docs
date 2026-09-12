> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/callkit/cxerrorcoderequesttransactionerror-swift.struct](https://developer.apple.com/documentation/callkit/cxerrorcoderequesttransactionerror-swift.struct)

# CXErrorCodeRequestTransactionError

**Framework:** CallKit  
**Kind:** Structure  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 10.0+ · visionOS 1.0+ · watchOS 9.0+

## Declaration

```swift
struct CXErrorCodeRequestTransactionError
```

## Topics

### Constants

- [unknown](cxerrorcoderequesttransactionerror-swift.struct/unknown.md): An unknown error occurred.
- [unentitled](cxerrorcoderequesttransactionerror-swift.struct/unentitled.md): The app doesn’t have the entitlement to perform the actions in the requested transaction.
- [unknownCallProvider](cxerrorcoderequesttransactionerror-swift.struct/unknowncallprovider.md): The controller can’t find a call provider to perform the actions in the requested transaction.
- [emptyTransaction](cxerrorcoderequesttransactionerror-swift.struct/emptytransaction.md): The requested transaction doesn’t contain any actions.
- [unknownCallUUID](cxerrorcoderequesttransactionerror-swift.struct/unknowncalluuid.md): The requested transaction contains call actions that reference an unknown UUID.
- [callUUIDAlreadyExists](cxerrorcoderequesttransactionerror-swift.struct/calluuidalreadyexists.md): The requested transaction contains call actions that reference a UUID that already exists.
- [invalidAction](cxerrorcoderequesttransactionerror-swift.struct/invalidaction.md): The requested transaction contains an invalid action.
- [maximumCallGroupsReached](cxerrorcoderequesttransactionerror-swift.struct/maximumcallgroupsreached.md): Performing the requested transaction exceeds the maximum number of call groups for the provider.

### Enumerations

- [CXErrorCodeRequestTransactionError.Code](cxerrorcoderequesttransactionerror-swift.struct/code.md): Error codes for the CallKit error domain.

### Type Properties

- [callIsProtected](cxerrorcoderequesttransactionerror-swift.struct/callisprotected.md)
- [errorDomain](cxerrorcoderequesttransactionerror-swift.struct/errordomain.md)

## Relationships

### Conforms To

- [CustomNSError](../foundation/customnserror.md)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Error](https://developer.apple.com/documentation/swift/error)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Errors

- [CXErrorCodeRequestTransactionError.Code](cxerrorcoderequesttransactionerror-swift.struct/code.md): Error codes for the CallKit error domain.
- [CXErrorDomainRequestTransaction](cxerrordomainrequesttransaction.md): Domain for errors when requesting a transaction from a call controller.
