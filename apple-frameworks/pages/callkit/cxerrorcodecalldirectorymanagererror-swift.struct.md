> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/callkit/cxerrorcodecalldirectorymanagererror-swift.struct](https://developer.apple.com/documentation/callkit/cxerrorcodecalldirectorymanagererror-swift.struct)

# CXErrorCodeCallDirectoryManagerError

**Framework:** CallKit  
**Kind:** Structure  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 10.0+ · visionOS 1.0+ · watchOS 9.0+

Errors when interacting with a call directory manager.

## Declaration

```swift
struct CXErrorCodeCallDirectoryManagerError
```

## Topics

### Constants

- [unknown](cxerrorcodecalldirectorymanagererror-swift.struct/unknown.md): An unknown error occurred.
- [noExtensionFound](cxerrorcodecalldirectorymanagererror-swift.struct/noextensionfound.md): The call directory manager can’t find a corresponding app extension.
- [currentlyLoading](cxerrorcodecalldirectorymanagererror-swift.struct/currentlyloading.md): The call directory manager is loading the app extension.
- [loadingInterrupted](cxerrorcodecalldirectorymanagererror-swift.struct/loadinginterrupted.md): The system interrupted the call directory manager while loading the app extension.
- [entriesOutOfOrder](cxerrorcodecalldirectorymanagererror-swift.struct/entriesoutoforder.md): The entries in the call directory are out of order.
- [duplicateEntries](cxerrorcodecalldirectorymanagererror-swift.struct/duplicateentries.md): There are duplicate entries in the call directory.
- [maximumEntriesExceeded](cxerrorcodecalldirectorymanagererror-swift.struct/maximumentriesexceeded.md): There are too many entries in the call directory.
- [extensionDisabled](cxerrorcodecalldirectorymanagererror-swift.struct/extensiondisabled.md): The call directory extension isn’t in an enabled state.
- [unexpectedIncrementalRemoval](cxerrorcodecalldirectorymanagererror-swift.struct/unexpectedincrementalremoval.md): A request occurred before confirming incremental loading.

### Enumerations

- [CXErrorCodeCallDirectoryManagerError.Code](cxerrorcodecalldirectorymanagererror-swift.struct/code.md): Error codes the CallKit framework returns.

### Type Properties

- [errorDomain](cxerrorcodecalldirectorymanagererror-swift.struct/errordomain.md)

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

- [CXCallDirectoryManager.EnabledStatus](cxcalldirectorymanager/enabledstatus.md): The enabled status of a Call Directory app extension, as reported by the [getEnabledStatusForExtension(withIdentifier:completionHandler:)](cxcalldirectorymanager/getenabledstatusforextension%28withidentifier_completionhandler_%29.md) method.
- [CXErrorCodeCallDirectoryManagerError.Code](cxerrorcodecalldirectorymanagererror-swift.struct/code.md): Error codes the CallKit framework returns.
- [CXErrorDomainCallDirectoryManager](cxerrordomaincalldirectorymanager.md): Domain for errors when interacting with a call directory manager.
