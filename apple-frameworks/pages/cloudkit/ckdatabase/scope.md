> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/ckdatabase/scope](https://developer.apple.com/documentation/cloudkit/ckdatabase/scope)

# CKDatabase.Scope (Swift)

**Framework:** CloudKit  
**Kind:** Enumeration  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

Constants that represent the scope of a database.

## Declaration

```swift
enum Scope
```

## Topics

### Database Scopes

- [CKDatabase.Scope.public](scope/public.md): The public database.
- [CKDatabase.Scope.private](scope/private.md): The private database.
- [CKDatabase.Scope.shared](scope/shared.md): The shared database.

### Initializers

- [init(rawValue:)](scope/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Getting the Database Type

- [databaseScope](databasescope.md): The type of database.

# CKDatabaseScope (Objective-C)

**Framework:** CloudKit  
**Kind:** Enumeration  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

Constants that represent the scope of a database.

## Declaration

```objectivec
enum CKDatabaseScope : NSInteger;
```

## Topics

### Database Scopes

- [CKDatabaseScopePublic](scope/public.md): The public database.
- [CKDatabaseScopePrivate](scope/private.md): The private database.
- [CKDatabaseScopeShared](scope/shared.md): The shared database.

## See Also

### Getting the Database Type

- [databaseScope](databasescope.md): The type of database.
