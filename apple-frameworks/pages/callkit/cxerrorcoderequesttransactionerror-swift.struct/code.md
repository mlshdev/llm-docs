> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/callkit/cxerrorcoderequesttransactionerror-swift.struct/code](https://developer.apple.com/documentation/callkit/cxerrorcoderequesttransactionerror-swift.struct/code)

# CXErrorCodeRequestTransactionError.Code (Swift)

**Framework:** CallKit  
**Kind:** Enumeration  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 10.0+ · visionOS 1.0+ · watchOS 9.0+

Error codes for the CallKit error domain.

## Declaration

```swift
enum Code
```

## Topics

### Constants

- [CXErrorCodeRequestTransactionError.Code.unknown](code/unknown.md): An unknown error occurred.
- [CXErrorCodeRequestTransactionError.Code.unentitled](code/unentitled.md): The app isn’t entitled to perform the actions in the requested transaction.
- [CXErrorCodeRequestTransactionError.Code.unknownCallProvider](code/unknowncallprovider.md): The controller couldn’t find a call provider to perform the actions in the requested transaction.
- [CXErrorCodeRequestTransactionError.Code.emptyTransaction](code/emptytransaction.md): The requested transaction contains no actions.
- [CXErrorCodeRequestTransactionError.Code.unknownCallUUID](code/unknowncalluuid.md): The requested transaction contains call actions that reference an unknown UUID.
- [CXErrorCodeRequestTransactionError.Code.callUUIDAlreadyExists](code/calluuidalreadyexists.md): The requested transaction contains call actions that reference a UUID that already exists.
- [CXErrorCodeRequestTransactionError.Code.invalidAction](code/invalidaction.md): The requested transaction contains an invalid action.
- [CXErrorCodeRequestTransactionError.Code.maximumCallGroupsReached](code/maximumcallgroupsreached.md): The requested transaction contains actions that, if performed, would exceed the maximum number of call groups for the provider.

### Enumeration Cases

- [CXErrorCodeRequestTransactionError.Code.callIsProtected](code/callisprotected.md)

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

### Errors

- [CXErrorCodeRequestTransactionError](../cxerrorcoderequesttransactionerror-swift.struct.md)
- [CXErrorDomainRequestTransaction](../cxerrordomainrequesttransaction.md): Domain for errors when requesting a transaction from a call controller.

# CXErrorCodeRequestTransactionError (Objective-C)

**Framework:** CallKit  
**Kind:** Enumeration  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.0+ · visionOS 1.0+ · watchOS 9.0+

Error codes for the CallKit error domain.

## Declaration

```objectivec
enum CXErrorCodeRequestTransactionError : NSInteger;
```

## Topics

### Constants

- [CXErrorCodeRequestTransactionErrorUnknown](code/unknown.md): An unknown error occurred.
- [CXErrorCodeRequestTransactionErrorUnentitled](code/unentitled.md): The app isn’t entitled to perform the actions in the requested transaction.
- [CXErrorCodeRequestTransactionErrorUnknownCallProvider](code/unknowncallprovider.md): The controller couldn’t find a call provider to perform the actions in the requested transaction.
- [CXErrorCodeRequestTransactionErrorEmptyTransaction](code/emptytransaction.md): The requested transaction contains no actions.
- [CXErrorCodeRequestTransactionErrorUnknownCallUUID](code/unknowncalluuid.md): The requested transaction contains call actions that reference an unknown UUID.
- [CXErrorCodeRequestTransactionErrorCallUUIDAlreadyExists](code/calluuidalreadyexists.md): The requested transaction contains call actions that reference a UUID that already exists.
- [CXErrorCodeRequestTransactionErrorInvalidAction](code/invalidaction.md): The requested transaction contains an invalid action.
- [CXErrorCodeRequestTransactionErrorMaximumCallGroupsReached](code/maximumcallgroupsreached.md): The requested transaction contains actions that, if performed, would exceed the maximum number of call groups for the provider.

### Enumeration Cases

- [CXErrorCodeRequestTransactionErrorCallIsProtected](code/callisprotected.md)

## See Also

### Errors

- [CXErrorDomainRequestTransaction](../cxerrordomainrequesttransaction.md): Domain for errors when requesting a transaction from a call controller.
