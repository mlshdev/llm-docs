> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corespotlight/cssearchqueryerror/code](https://developer.apple.com/documentation/corespotlight/cssearchqueryerror/code)

# CSSearchQueryError.Code (Swift)

**Framework:** Core Spotlight  
**Kind:** Enumeration  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · visionOS 1.0+

Error codes that describe reasons a query might fail.

## Declaration

```swift
enum Code
```

## Topics

### Getting the error codes

- [CSSearchQueryError.Code.cancelled](code/cancelled.md): The query stopped because someone canceled it.
- [CSSearchQueryError.Code.indexUnreachable](code/indexunreachable.md): The index is unreachable.
- [CSSearchQueryError.Code.invalidQuery](code/invalidquery.md): The query is syntactically invalid or specifies items that your app doesn’t have access to.
- [CSSearchQueryError.Code.unknown](code/unknown.md): An unknown error occurred.

### Creating a query error

- [init(rawValue:)](code/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

# CSSearchQueryErrorCode (Objective-C)

**Framework:** Core Spotlight  
**Kind:** Enumeration  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · visionOS 1.0+

Error codes that describe reasons a query might fail.

## Declaration

```objectivec
enum CSSearchQueryErrorCode : NSInteger;
```

## Topics

### Getting the error codes

- [CSSearchQueryErrorCodeCancelled](code/cancelled.md): The query stopped because someone canceled it.
- [CSSearchQueryErrorCodeIndexUnreachable](code/indexunreachable.md): The index is unreachable.
- [CSSearchQueryErrorCodeInvalidQuery](code/invalidquery.md): The query is syntactically invalid or specifies items that your app doesn’t have access to.
- [CSSearchQueryErrorCodeUnknown](code/unknown.md): An unknown error occurred.
