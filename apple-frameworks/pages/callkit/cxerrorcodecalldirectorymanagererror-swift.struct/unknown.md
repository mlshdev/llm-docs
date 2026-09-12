> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/callkit/cxerrorcodecalldirectorymanagererror-swift.struct/unknown](https://developer.apple.com/documentation/callkit/cxerrorcodecalldirectorymanagererror-swift.struct/unknown)

# unknown

**Framework:** CallKit  
**Kind:** Type Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 10.0+ · visionOS 1.0+ · watchOS 9.0+

An unknown error occurred.

## Declaration

```swift
static var unknown: CXErrorCodeCallDirectoryManagerError.Code { get }
```

## See Also

### Constants

- [noExtensionFound](noextensionfound.md): The call directory manager can’t find a corresponding app extension.
- [currentlyLoading](currentlyloading.md): The call directory manager is loading the app extension.
- [loadingInterrupted](loadinginterrupted.md): The system interrupted the call directory manager while loading the app extension.
- [entriesOutOfOrder](entriesoutoforder.md): The entries in the call directory are out of order.
- [duplicateEntries](duplicateentries.md): There are duplicate entries in the call directory.
- [maximumEntriesExceeded](maximumentriesexceeded.md): There are too many entries in the call directory.
- [extensionDisabled](extensiondisabled.md): The call directory extension isn’t in an enabled state.
- [unexpectedIncrementalRemoval](unexpectedincrementalremoval.md): A request occurred before confirming incremental loading.
