> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/callkit/cxerrorcodecalldirectorymanagererror-swift.struct/code/currentlyloading](https://developer.apple.com/documentation/callkit/cxerrorcodecalldirectorymanagererror-swift.struct/code/currentlyloading)

# CXErrorCodeCallDirectoryManagerError.Code.currentlyLoading (Swift)

**Framework:** CallKit  
**Kind:** Case  
**Availability:** iOS 10.3+ · iPadOS 10.3+ · Mac Catalyst 10.3+ · visionOS 1.0+ · watchOS 3.2+

The call directory manager is loading the app extension.

## Declaration

```swift
case currentlyLoading
```

## See Also

### Constants

- [CXErrorCodeCallDirectoryManagerError.Code.unknown](unknown.md): An unknown error occurred.
- [CXErrorCodeCallDirectoryManagerError.Code.noExtensionFound](noextensionfound.md): The call directory manager could not find a corresponding app extension.
- [CXErrorCodeCallDirectoryManagerError.Code.loadingInterrupted](loadinginterrupted.md): The call directory manager was interrupted while loading the app extension.
- [CXErrorCodeCallDirectoryManagerError.Code.entriesOutOfOrder](entriesoutoforder.md): The entries in the call directory are out of order.
- [CXErrorCodeCallDirectoryManagerError.Code.duplicateEntries](duplicateentries.md): There are duplicate entries in the call directory.
- [CXErrorCodeCallDirectoryManagerError.Code.maximumEntriesExceeded](maximumentriesexceeded.md): There are too many entries in the call directory.
- [CXErrorCodeCallDirectoryManagerError.Code.extensionDisabled](extensiondisabled.md): The call directory extension isn’t enabled by the system.
- [CXErrorCodeCallDirectoryManagerError.Code.unexpectedIncrementalRemoval](unexpectedincrementalremoval.md): A request occurred before confirming incremental loading.

# CXErrorCodeCallDirectoryManagerErrorCurrentlyLoading (Objective-C)

**Framework:** CallKit  
**Kind:** Enumeration Case  
**Availability:** iOS 10.3+ · iPadOS 10.3+ · Mac Catalyst 13.0+ · visionOS 1.0+ · watchOS 9.0+

The call directory manager is loading the app extension.

## Declaration

```objectivec
CXErrorCodeCallDirectoryManagerErrorCurrentlyLoading
```

## See Also

### Constants

- [CXErrorCodeCallDirectoryManagerErrorUnknown](unknown.md): An unknown error occurred.
- [CXErrorCodeCallDirectoryManagerErrorNoExtensionFound](noextensionfound.md): The call directory manager could not find a corresponding app extension.
- [CXErrorCodeCallDirectoryManagerErrorLoadingInterrupted](loadinginterrupted.md): The call directory manager was interrupted while loading the app extension.
- [CXErrorCodeCallDirectoryManagerErrorEntriesOutOfOrder](entriesoutoforder.md): The entries in the call directory are out of order.
- [CXErrorCodeCallDirectoryManagerErrorDuplicateEntries](duplicateentries.md): There are duplicate entries in the call directory.
- [CXErrorCodeCallDirectoryManagerErrorMaximumEntriesExceeded](maximumentriesexceeded.md): There are too many entries in the call directory.
- [CXErrorCodeCallDirectoryManagerErrorExtensionDisabled](extensiondisabled.md): The call directory extension isn’t enabled by the system.
- [CXErrorCodeCallDirectoryManagerErrorUnexpectedIncrementalRemoval](unexpectedincrementalremoval.md): A request occurred before confirming incremental loading.
