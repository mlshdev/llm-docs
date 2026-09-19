> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/corespotlight/csindexerror/invaliditemerror

# invalidItemError

**Framework:** Core Spotlight  
**Kind:** Type Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+

The searchable item object is invalid.

## Declaration

```swift
static var invalidItemError: CSIndexError.Code { get }
```

<a id="Discussion"></a>

## Discussion

Verify the information in your [CSSearchableItem](../cssearchableitem.md) object is correct.

## See Also

### Getting the error codes

- [indexUnavailableError](indexunavailableerror.md): The indexer is unavailable.
- [indexingUnsupported](indexingunsupported.md): Indexing isn’t supported on the device.
- [invalidClientStateError](invalidclientstateerror.md): The provided client state data is invalid.
- [mismatchedClientState](mismatchedclientstate.md): The provided client state did not match the information in the index.
- [quotaExceeded](quotaexceeded.md): The quota for the bundle has been exceeded.
- [remoteConnectionError](remoteconnectionerror.md): An error occurred while communicating with the remote process.
- [unknownError](unknownerror.md): An unknown error occurred.
