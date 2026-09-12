> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corespotlight/csindexerror/mismatchedclientstate](https://developer.apple.com/documentation/corespotlight/csindexerror/mismatchedclientstate)

# mismatchedClientState

**Framework:** Core Spotlight  
**Kind:** Type Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · visionOS 2.0+

The provided client state did not match the information in the index.

## Declaration

```swift
static var mismatchedClientState: CSIndexError.Code { get }
```

## See Also

### Getting the error codes

- [indexUnavailableError](indexunavailableerror.md): The indexer is unavailable.
- [indexingUnsupported](indexingunsupported.md): Indexing isn’t supported on the device.
- [invalidClientStateError](invalidclientstateerror.md): The provided client state data is invalid.
- [invalidItemError](invaliditemerror.md): The searchable item object is invalid.
- [quotaExceeded](quotaexceeded.md): The quota for the bundle has been exceeded.
- [remoteConnectionError](remoteconnectionerror.md): An error occurred while communicating with the remote process.
- [unknownError](unknownerror.md): An unknown error occurred.
