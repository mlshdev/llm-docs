> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corespotlight/csindexerror/code](https://developer.apple.com/documentation/corespotlight/csindexerror/code)

# CSIndexError.Code (Swift)

**Framework:** Core Spotlight  
**Kind:** Enumeration  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+

Error codes that describe indexing-specific errors.

## Declaration

```swift
enum Code
```

## Topics

### Getting the indexing error codes

- [CSIndexError.Code.indexUnavailableError](code/indexunavailableerror.md): The indexer is unavailable.
- [CSIndexError.Code.indexingUnsupported](code/indexingunsupported.md): Indexing isn’t supported on the device.
- [CSIndexError.Code.invalidClientStateError](code/invalidclientstateerror.md): The provided client state data is invalid.
- [CSIndexError.Code.invalidItemError](code/invaliditemerror.md): The searchable item object is invalid.
- [CSIndexError.Code.mismatchedClientState](code/mismatchedclientstate.md): The provided client state did not match the information in the index.
- [CSIndexError.Code.quotaExceeded](code/quotaexceeded.md): The quota for the bundle has been exceeded.
- [CSIndexError.Code.remoteConnectionError](code/remoteconnectionerror.md): An error occurred while communicating with the remote process.
- [CSIndexError.Code.unknownError](code/unknownerror.md): An unknown error occurred.

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

# CSIndexErrorCode (Objective-C)

**Framework:** Core Spotlight  
**Kind:** Enumeration  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+

Error codes that describe indexing-specific errors.

## Declaration

```objectivec
enum CSIndexErrorCode : NSInteger;
```

## Topics

### Getting the indexing error codes

- [CSIndexErrorCodeIndexUnavailableError](code/indexunavailableerror.md): The indexer is unavailable.
- [CSIndexErrorCodeIndexingUnsupported](code/indexingunsupported.md): Indexing isn’t supported on the device.
- [CSIndexErrorCodeInvalidClientStateError](code/invalidclientstateerror.md): The provided client state data is invalid.
- [CSIndexErrorCodeInvalidItemError](code/invaliditemerror.md): The searchable item object is invalid.
- [CSIndexErrorCodeMismatchedClientState](code/mismatchedclientstate.md): The provided client state did not match the information in the index.
- [CSIndexErrorCodeQuotaExceeded](code/quotaexceeded.md): The quota for the bundle has been exceeded.
- [CSIndexErrorCodeRemoteConnectionError](code/remoteconnectionerror.md): An error occurred while communicating with the remote process.
- [CSIndexErrorCodeUnknownError](code/unknownerror.md): An unknown error occurred.
