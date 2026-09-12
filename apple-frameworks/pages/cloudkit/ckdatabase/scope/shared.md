> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/ckdatabase/scope/shared](https://developer.apple.com/documentation/cloudkit/ckdatabase/scope/shared)

# CKDatabase.Scope.shared (Swift)

**Framework:** CloudKit  
**Kind:** Case  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

The shared database.

## Declaration

```swift
case shared
```

<a id="discussion"></a>

## Discussion

Records in a shared database:

- Are available to share participants based on the permissions of the enclosing [CKShare](../../ckshare.md)
- Are not visible to the application developer via the Developer Portal.
- Are counted towards the originating owner’s iCloud account storage quota.

## See Also

### Database Scopes

- [CKDatabase.Scope.public](public.md): The public database.
- [CKDatabase.Scope.private](private.md): The private database.

# CKDatabaseScopeShared (Objective-C)

**Framework:** CloudKit  
**Kind:** Enumeration Case  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

The shared database.

## Declaration

```objectivec
CKDatabaseScopeShared
```

<a id="discussion"></a>

## Discussion

Records in a shared database:

- Are available to share participants based on the permissions of the enclosing [CKShare](../../ckshare.md)
- Are not visible to the application developer via the Developer Portal.
- Are counted towards the originating owner’s iCloud account storage quota.

## See Also

### Database Scopes

- [CKDatabaseScopePublic](public.md): The public database.
- [CKDatabaseScopePrivate](private.md): The private database.
