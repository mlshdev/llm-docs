> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corespotlight/cssearchqueryerror](https://developer.apple.com/documentation/corespotlight/cssearchqueryerror)

# CSSearchQueryError

**Framework:** Core Spotlight  
**Kind:** Structure  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · visionOS 1.0+

Search query errors returned by Core Spotlight.

## Declaration

```swift
struct CSSearchQueryError
```

## Topics

### Getting the error codes

- [cancelled](cssearchqueryerror/cancelled.md): The query stopped because someone canceled it.
- [indexUnreachable](cssearchqueryerror/indexunreachable.md): The index is unreachable.
- [invalidQuery](cssearchqueryerror/invalidquery.md): The query is syntactically invalid or specifies items that your app doesn’t have access to.
- [unknown](cssearchqueryerror/unknown.md): An unknown error occurred.

### Getting codes for query-related errors

- [CSSearchQueryError.Code](cssearchqueryerror/code.md): Error codes that describe reasons a query might fail.

### Getting the error description

- [errorDomain](cssearchqueryerror/errordomain.md)

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

- [CSIndexError](csindexerror.md): Index errors returned by Core Spotlight.
- [CSIndex Errors](csindex-errors.md): Index error codes and error domain.
- [CSSearchQuery Errors](cssearchquery-errors.md): Search query error codes and error domain.
