> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/cksyncengine-5sie5/fetchchangesoptions/scope-swift.enum](https://developer.apple.com/documentation/cloudkit/cksyncengine-5sie5/fetchchangesoptions/scope-swift.enum)

# CKSyncEngine.FetchChangesOptions.Scope

**Framework:** CloudKit  
**Kind:** Enumeration  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS · watchOS 10.0+

The scope for fetching changes from the server.

## Declaration

```swift
enum Scope
```

## Topics

### Enumeration Cases

- [CKSyncEngine.FetchChangesOptions.Scope.all](scope-swift.enum/all.md): Fetch changes for all zones.
- [CKSyncEngine.FetchChangesOptions.Scope.allExcluding(\_:)](scope-swift.enum/allexcluding%28__%29.md): Fetch changes for all zones except the given set of zones.
- [CKSyncEngine.FetchChangesOptions.Scope.zoneIDs(\_:)](scope-swift.enum/zoneids%28__%29.md): Fetch changes in a specific set of zones.

### Instance Methods

- [contains(\_:)](scope-swift.enum/contains%28__%29.md): Returns true if the specified zone ID is included in this scope.

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
