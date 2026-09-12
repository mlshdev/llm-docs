> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/cksyncengine-5sie5/sendchangesoptions/scope-swift.enum](https://developer.apple.com/documentation/cloudkit/cksyncengine-5sie5/sendchangesoptions/scope-swift.enum)

# CKSyncEngine.SendChangesOptions.Scope

**Framework:** CloudKit  
**Kind:** Enumeration  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS · watchOS 10.0+

The scope for sending changes to the server.

## Declaration

```swift
enum Scope
```

## Topics

### Enumeration Cases

- [CKSyncEngine.SendChangesOptions.Scope.all](scope-swift.enum/all.md): Send changes for all zones.
- [CKSyncEngine.SendChangesOptions.Scope.allExcluding(\_:)](scope-swift.enum/allexcluding%28__%29.md): Send changes for all zones except the given set of zones.
- [CKSyncEngine.SendChangesOptions.Scope.recordIDs(\_:)](scope-swift.enum/recordids%28__%29.md): Send changes for a specific set of records.
- [CKSyncEngine.SendChangesOptions.Scope.zoneIDs(\_:)](scope-swift.enum/zoneids%28__%29.md): Send changes in a specific set of zones.

### Instance Methods

- [contains(\_:)](scope-swift.enum/contains%28__%29-59hve.md): Returns true if the specified record ID is included in this scope.
- [contains(\_:)](scope-swift.enum/contains%28__%29-8qiyf.md): Returns true if the specified pending record zone change is included in this scope.

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
