> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/ckdatabase/scope/private](https://developer.apple.com/documentation/cloudkit/ckdatabase/scope/private)

# CKDatabase.Scope.private (Swift)

**Framework:** CloudKit  
**Kind:** Case  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

The private database.

## Declaration

```swift
case `private`
```

<a id="discussion"></a>

## Discussion

Records in a private database:

- By default are owner readable and owner writable.
- Are not visible to the application developer via the Developer Portal.
- Are counted towards the owner’s iCloud account storage quota.

## See Also

### Database Scopes

- [CKDatabase.Scope.public](public.md): The public database.
- [CKDatabase.Scope.shared](shared.md): The shared database.

# CKDatabaseScopePrivate (Objective-C)

**Framework:** CloudKit  
**Kind:** Enumeration Case  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

The private database.

## Declaration

```objectivec
CKDatabaseScopePrivate
```

<a id="discussion"></a>

## Discussion

Records in a private database:

- By default are owner readable and owner writable.
- Are not visible to the application developer via the Developer Portal.
- Are counted towards the owner’s iCloud account storage quota.

## See Also

### Database Scopes

- [CKDatabaseScopePublic](public.md): The public database.
- [CKDatabaseScopeShared](shared.md): The shared database.
