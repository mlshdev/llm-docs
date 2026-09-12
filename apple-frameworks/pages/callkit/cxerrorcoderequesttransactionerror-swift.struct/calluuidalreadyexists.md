> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/callkit/cxerrorcoderequesttransactionerror-swift.struct/calluuidalreadyexists](https://developer.apple.com/documentation/callkit/cxerrorcoderequesttransactionerror-swift.struct/calluuidalreadyexists)

# callUUIDAlreadyExists

**Framework:** CallKit  
**Kind:** Type Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 10.0+ · visionOS 1.0+ · watchOS 9.0+

The requested transaction contains call actions that reference a UUID that already exists.

## Declaration

```swift
static var callUUIDAlreadyExists: CXErrorCodeRequestTransactionError.Code { get }
```

## See Also

### Constants

- [unknown](unknown.md): An unknown error occurred.
- [unentitled](unentitled.md): The app doesn’t have the entitlement to perform the actions in the requested transaction.
- [unknownCallProvider](unknowncallprovider.md): The controller can’t find a call provider to perform the actions in the requested transaction.
- [emptyTransaction](emptytransaction.md): The requested transaction doesn’t contain any actions.
- [unknownCallUUID](unknowncalluuid.md): The requested transaction contains call actions that reference an unknown UUID.
- [invalidAction](invalidaction.md): The requested transaction contains an invalid action.
- [maximumCallGroupsReached](maximumcallgroupsreached.md): Performing the requested transaction exceeds the maximum number of call groups for the provider.
