> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corespotlight/csindexerror](https://developer.apple.com/documentation/corespotlight/csindexerror)

# CSIndexError

**Framework:** Core Spotlight  
**Kind:** Structure  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+

Index errors returned by Core Spotlight.

## Declaration

```swift
struct CSIndexError
```

## Topics

### Getting the error codes

- [indexUnavailableError](csindexerror/indexunavailableerror.md): The indexer is unavailable.
- [indexingUnsupported](csindexerror/indexingunsupported.md): Indexing isn’t supported on the device.
- [invalidClientStateError](csindexerror/invalidclientstateerror.md): The provided client state data is invalid.
- [invalidItemError](csindexerror/invaliditemerror.md): The searchable item object is invalid.
- [mismatchedClientState](csindexerror/mismatchedclientstate.md): The provided client state did not match the information in the index.
- [quotaExceeded](csindexerror/quotaexceeded.md): The quota for the bundle has been exceeded.
- [remoteConnectionError](csindexerror/remoteconnectionerror.md): An error occurred while communicating with the remote process.
- [unknownError](csindexerror/unknownerror.md): An unknown error occurred.

### Getting codes for indexing errors

- [CSIndexError.Code](csindexerror/code.md): Error codes that describe indexing-specific errors.

### Getting the error description

- [errorDomain](csindexerror/errordomain.md)

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

- [CSSearchQueryError](cssearchqueryerror.md): Search query errors returned by Core Spotlight.
- [CSIndex Errors](csindex-errors.md): Index error codes and error domain.
- [CSSearchQuery Errors](cssearchquery-errors.md): Search query error codes and error domain.
