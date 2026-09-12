> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/callkit/cxerrorcodecalldirectorymanagererror-swift.struct/code](https://developer.apple.com/documentation/callkit/cxerrorcodecalldirectorymanagererror-swift.struct/code)

# CXErrorCodeCallDirectoryManagerError.Code (Swift)

**Framework:** CallKit  
**Kind:** Enumeration  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 10.0+ · visionOS 1.0+ · watchOS 9.0+

Error codes the CallKit framework returns.

## Declaration

```swift
enum Code
```

## Topics

### Constants

- [CXErrorCodeCallDirectoryManagerError.Code.unknown](code/unknown.md): An unknown error occurred.
- [CXErrorCodeCallDirectoryManagerError.Code.noExtensionFound](code/noextensionfound.md): The call directory manager could not find a corresponding app extension.
- [CXErrorCodeCallDirectoryManagerError.Code.currentlyLoading](code/currentlyloading.md): The call directory manager is loading the app extension.
- [CXErrorCodeCallDirectoryManagerError.Code.loadingInterrupted](code/loadinginterrupted.md): The call directory manager was interrupted while loading the app extension.
- [CXErrorCodeCallDirectoryManagerError.Code.entriesOutOfOrder](code/entriesoutoforder.md): The entries in the call directory are out of order.
- [CXErrorCodeCallDirectoryManagerError.Code.duplicateEntries](code/duplicateentries.md): There are duplicate entries in the call directory.
- [CXErrorCodeCallDirectoryManagerError.Code.maximumEntriesExceeded](code/maximumentriesexceeded.md): There are too many entries in the call directory.
- [CXErrorCodeCallDirectoryManagerError.Code.extensionDisabled](code/extensiondisabled.md): The call directory extension isn’t enabled by the system.
- [CXErrorCodeCallDirectoryManagerError.Code.unexpectedIncrementalRemoval](code/unexpectedincrementalremoval.md): A request occurred before confirming incremental loading.

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

- [CXCallDirectoryManager.EnabledStatus](../cxcalldirectorymanager/enabledstatus.md): The enabled status of a Call Directory app extension, as reported by the [getEnabledStatusForExtension(withIdentifier:completionHandler:)](../cxcalldirectorymanager/getenabledstatusforextension%28withidentifier_completionhandler_%29.md) method.
- [CXErrorCodeCallDirectoryManagerError](../cxerrorcodecalldirectorymanagererror-swift.struct.md): Errors when interacting with a call directory manager.
- [CXErrorDomainCallDirectoryManager](../cxerrordomaincalldirectorymanager.md): Domain for errors when interacting with a call directory manager.

# CXErrorCodeCallDirectoryManagerError (Objective-C)

**Framework:** CallKit  
**Kind:** Enumeration  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.0+ · visionOS 1.0+ · watchOS 9.0+

Error codes the CallKit framework returns.

## Declaration

```objectivec
enum CXErrorCodeCallDirectoryManagerError : NSInteger;
```

## Topics

### Constants

- [CXErrorCodeCallDirectoryManagerErrorUnknown](code/unknown.md): An unknown error occurred.
- [CXErrorCodeCallDirectoryManagerErrorNoExtensionFound](code/noextensionfound.md): The call directory manager could not find a corresponding app extension.
- [CXErrorCodeCallDirectoryManagerErrorCurrentlyLoading](code/currentlyloading.md): The call directory manager is loading the app extension.
- [CXErrorCodeCallDirectoryManagerErrorLoadingInterrupted](code/loadinginterrupted.md): The call directory manager was interrupted while loading the app extension.
- [CXErrorCodeCallDirectoryManagerErrorEntriesOutOfOrder](code/entriesoutoforder.md): The entries in the call directory are out of order.
- [CXErrorCodeCallDirectoryManagerErrorDuplicateEntries](code/duplicateentries.md): There are duplicate entries in the call directory.
- [CXErrorCodeCallDirectoryManagerErrorMaximumEntriesExceeded](code/maximumentriesexceeded.md): There are too many entries in the call directory.
- [CXErrorCodeCallDirectoryManagerErrorExtensionDisabled](code/extensiondisabled.md): The call directory extension isn’t enabled by the system.
- [CXErrorCodeCallDirectoryManagerErrorUnexpectedIncrementalRemoval](code/unexpectedincrementalremoval.md): A request occurred before confirming incremental loading.

## See Also

### Errors

- [CXCallDirectoryEnabledStatus](../cxcalldirectorymanager/enabledstatus.md): The enabled status of a Call Directory app extension, as reported by the [getEnabledStatusForExtensionWithIdentifier:completionHandler:](../cxcalldirectorymanager/getenabledstatusforextension%28withidentifier_completionhandler_%29.md) method.
- [CXErrorDomainCallDirectoryManager](../cxerrordomaincalldirectorymanager.md): Domain for errors when interacting with a call directory manager.
