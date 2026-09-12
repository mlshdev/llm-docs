> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/callkit/cxerrorcoderequesttransactionerror-swift.struct/code/unentitled](https://developer.apple.com/documentation/callkit/cxerrorcoderequesttransactionerror-swift.struct/code/unentitled)

# CXErrorCodeRequestTransactionError.Code.unentitled (Swift)

**Framework:** CallKit  
**Kind:** Case  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 10.0+ · visionOS 1.0+ · watchOS 9.0+

The app isn’t entitled to perform the actions in the requested transaction.

## Declaration

```swift
case unentitled
```

<a id="Discussion"></a>

## Discussion

You most commonly receive this error code when the `voip` value is missing from the `UIBackgroundModes` array in your app’s `Info.plist` file.

## See Also

### Constants

- [CXErrorCodeRequestTransactionError.Code.unknown](unknown.md): An unknown error occurred.
- [CXErrorCodeRequestTransactionError.Code.unknownCallProvider](unknowncallprovider.md): The controller couldn’t find a call provider to perform the actions in the requested transaction.
- [CXErrorCodeRequestTransactionError.Code.emptyTransaction](emptytransaction.md): The requested transaction contains no actions.
- [CXErrorCodeRequestTransactionError.Code.unknownCallUUID](unknowncalluuid.md): The requested transaction contains call actions that reference an unknown UUID.
- [CXErrorCodeRequestTransactionError.Code.callUUIDAlreadyExists](calluuidalreadyexists.md): The requested transaction contains call actions that reference a UUID that already exists.
- [CXErrorCodeRequestTransactionError.Code.invalidAction](invalidaction.md): The requested transaction contains an invalid action.
- [CXErrorCodeRequestTransactionError.Code.maximumCallGroupsReached](maximumcallgroupsreached.md): The requested transaction contains actions that, if performed, would exceed the maximum number of call groups for the provider.

# CXErrorCodeRequestTransactionErrorUnentitled (Objective-C)

**Framework:** CallKit  
**Kind:** Enumeration Case  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.0+ · visionOS 1.0+ · watchOS 9.0+

The app isn’t entitled to perform the actions in the requested transaction.

## Declaration

```objectivec
CXErrorCodeRequestTransactionErrorUnentitled
```

<a id="Discussion"></a>

## Discussion

You most commonly receive this error code when the `voip` value is missing from the `UIBackgroundModes` array in your app’s `Info.plist` file.

## See Also

### Constants

- [CXErrorCodeRequestTransactionErrorUnknown](unknown.md): An unknown error occurred.
- [CXErrorCodeRequestTransactionErrorUnknownCallProvider](unknowncallprovider.md): The controller couldn’t find a call provider to perform the actions in the requested transaction.
- [CXErrorCodeRequestTransactionErrorEmptyTransaction](emptytransaction.md): The requested transaction contains no actions.
- [CXErrorCodeRequestTransactionErrorUnknownCallUUID](unknowncalluuid.md): The requested transaction contains call actions that reference an unknown UUID.
- [CXErrorCodeRequestTransactionErrorCallUUIDAlreadyExists](calluuidalreadyexists.md): The requested transaction contains call actions that reference a UUID that already exists.
- [CXErrorCodeRequestTransactionErrorInvalidAction](invalidaction.md): The requested transaction contains an invalid action.
- [CXErrorCodeRequestTransactionErrorMaximumCallGroupsReached](maximumcallgroupsreached.md): The requested transaction contains actions that, if performed, would exceed the maximum number of call groups for the provider.
