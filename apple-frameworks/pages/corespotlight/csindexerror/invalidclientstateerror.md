> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corespotlight/csindexerror/invalidclientstateerror](https://developer.apple.com/documentation/corespotlight/csindexerror/invalidclientstateerror)

# invalidClientStateError

**Framework:** Core Spotlight  
**Kind:** Type Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+

The provided client state data is invalid.

## Declaration

```swift
static var invalidClientStateError: CSIndexError.Code { get }
```

## See Also

### Getting the error codes

- [indexUnavailableError](indexunavailableerror.md): The indexer is unavailable.
- [indexingUnsupported](indexingunsupported.md): Indexing isn’t supported on the device.
- [invalidItemError](invaliditemerror.md): The searchable item object is invalid.
- [mismatchedClientState](mismatchedclientstate.md): The provided client state did not match the information in the index.
- [quotaExceeded](quotaexceeded.md): The quota for the bundle has been exceeded.
- [remoteConnectionError](remoteconnectionerror.md): An error occurred while communicating with the remote process.
- [unknownError](unknownerror.md): An unknown error occurred.
