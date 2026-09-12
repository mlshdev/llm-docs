> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/callkit/cxerrorcoderequesttransactionerror-swift.struct/emptytransaction](https://developer.apple.com/documentation/callkit/cxerrorcoderequesttransactionerror-swift.struct/emptytransaction)

# emptyTransaction

**Framework:** CallKit  
**Kind:** Type Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 10.0+ · visionOS 1.0+ · watchOS 9.0+

The requested transaction doesn’t contain any actions.

## Declaration

```swift
static var emptyTransaction: CXErrorCodeRequestTransactionError.Code { get }
```

## See Also

### Constants

- [unknown](unknown.md): An unknown error occurred.
- [unentitled](unentitled.md): The app doesn’t have the entitlement to perform the actions in the requested transaction.
- [unknownCallProvider](unknowncallprovider.md): The controller can’t find a call provider to perform the actions in the requested transaction.
- [unknownCallUUID](unknowncalluuid.md): The requested transaction contains call actions that reference an unknown UUID.
- [callUUIDAlreadyExists](calluuidalreadyexists.md): The requested transaction contains call actions that reference a UUID that already exists.
- [invalidAction](invalidaction.md): The requested transaction contains an invalid action.
- [maximumCallGroupsReached](maximumcallgroupsreached.md): Performing the requested transaction exceeds the maximum number of call groups for the provider.
