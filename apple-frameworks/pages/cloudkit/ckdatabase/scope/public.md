> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/ckdatabase/scope/public](https://developer.apple.com/documentation/cloudkit/ckdatabase/scope/public)

# CKDatabase.Scope.public (Swift)

**Framework:** CloudKit  
**Kind:** Case  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

The public database.

## Declaration

```swift
case `public`
```

<a id="discussion"></a>

## Discussion

Records in a public database:

- By default are world readable, owner writable.
- Can be locked down by Roles, a process done in the Developer Portal, a web interface.  Roles are not present in the client API.
- Are visible to the application developer via the Developer Portal.
- Do not contribute to the owner’s iCloud account storage quota.

## See Also

### Database Scopes

- [CKDatabase.Scope.private](private.md): The private database.
- [CKDatabase.Scope.shared](shared.md): The shared database.

# CKDatabaseScopePublic (Objective-C)

**Framework:** CloudKit  
**Kind:** Enumeration Case  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

The public database.

## Declaration

```objectivec
CKDatabaseScopePublic
```

<a id="discussion"></a>

## Discussion

Records in a public database:

- By default are world readable, owner writable.
- Can be locked down by Roles, a process done in the Developer Portal, a web interface.  Roles are not present in the client API.
- Are visible to the application developer via the Developer Portal.
- Do not contribute to the owner’s iCloud account storage quota.

## See Also

### Database Scopes

- [CKDatabaseScopePrivate](private.md): The private database.
- [CKDatabaseScopeShared](shared.md): The shared database.
