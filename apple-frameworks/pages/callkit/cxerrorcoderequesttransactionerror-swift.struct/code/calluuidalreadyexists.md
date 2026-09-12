> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/callkit/cxerrorcoderequesttransactionerror-swift.struct/code/calluuidalreadyexists](https://developer.apple.com/documentation/callkit/cxerrorcoderequesttransactionerror-swift.struct/code/calluuidalreadyexists)

# CXErrorCodeRequestTransactionError.Code.callUUIDAlreadyExists (Swift)

**Framework:** CallKit  
**Kind:** Case  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 10.0+ · visionOS 1.0+ · watchOS 9.0+

The requested transaction contains call actions that reference a UUID that already exists.

## Declaration

```swift
case callUUIDAlreadyExists
```

## See Also

### Constants

- [CXErrorCodeRequestTransactionError.Code.unknown](unknown.md): An unknown error occurred.
- [CXErrorCodeRequestTransactionError.Code.unentitled](unentitled.md): The app isn’t entitled to perform the actions in the requested transaction.
- [CXErrorCodeRequestTransactionError.Code.unknownCallProvider](unknowncallprovider.md): The controller couldn’t find a call provider to perform the actions in the requested transaction.
- [CXErrorCodeRequestTransactionError.Code.emptyTransaction](emptytransaction.md): The requested transaction contains no actions.
- [CXErrorCodeRequestTransactionError.Code.unknownCallUUID](unknowncalluuid.md): The requested transaction contains call actions that reference an unknown UUID.
- [CXErrorCodeRequestTransactionError.Code.invalidAction](invalidaction.md): The requested transaction contains an invalid action.
- [CXErrorCodeRequestTransactionError.Code.maximumCallGroupsReached](maximumcallgroupsreached.md): The requested transaction contains actions that, if performed, would exceed the maximum number of call groups for the provider.

# CXErrorCodeRequestTransactionErrorCallUUIDAlreadyExists (Objective-C)

**Framework:** CallKit  
**Kind:** Enumeration Case  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.0+ · visionOS 1.0+ · watchOS 9.0+

The requested transaction contains call actions that reference a UUID that already exists.

## Declaration

```objectivec
CXErrorCodeRequestTransactionErrorCallUUIDAlreadyExists
```

## See Also

### Constants

- [CXErrorCodeRequestTransactionErrorUnknown](unknown.md): An unknown error occurred.
- [CXErrorCodeRequestTransactionErrorUnentitled](unentitled.md): The app isn’t entitled to perform the actions in the requested transaction.
- [CXErrorCodeRequestTransactionErrorUnknownCallProvider](unknowncallprovider.md): The controller couldn’t find a call provider to perform the actions in the requested transaction.
- [CXErrorCodeRequestTransactionErrorEmptyTransaction](emptytransaction.md): The requested transaction contains no actions.
- [CXErrorCodeRequestTransactionErrorUnknownCallUUID](unknowncalluuid.md): The requested transaction contains call actions that reference an unknown UUID.
- [CXErrorCodeRequestTransactionErrorInvalidAction](invalidaction.md): The requested transaction contains an invalid action.
- [CXErrorCodeRequestTransactionErrorMaximumCallGroupsReached](maximumcallgroupsreached.md): The requested transaction contains actions that, if performed, would exceed the maximum number of call groups for the provider.
