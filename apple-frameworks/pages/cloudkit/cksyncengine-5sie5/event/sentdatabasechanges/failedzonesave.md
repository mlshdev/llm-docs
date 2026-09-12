> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/cksyncengine-5sie5/event/sentdatabasechanges/failedzonesave](https://developer.apple.com/documentation/cloudkit/cksyncengine-5sie5/event/sentdatabasechanges/failedzonesave)

# CKSyncEngine.Event.SentDatabaseChanges.FailedZoneSave

**Framework:** CloudKit  
**Kind:** Structure  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS · watchOS 10.0+

A type that describes an unsuccessful attempt to modify a single record zone.

## Declaration

```swift
struct FailedZoneSave
```

## Topics

### Accessing the record zone

- [zone](failedzonesave/zone.md): The record zone that CloudKit is unable to modify.

### Accessing the error

- [error](failedzonesave/error.md): An error that describes the reason for the unsuccessful attempt to modify the associated record zone.

### Debugging the type

- [description](failedzonesave/description.md): A textual description of the type that’s suitable for logging.

### Default Implementations

- [CustomStringConvertible Implementations](failedzonesave/customstringconvertible-implementations.md)

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Accessing failed changes

- [failedZoneDeletes](failedzonedeletes.md): The unique identifiers of the record zones CloudKit is unable to delete, and the reasons why.
- [failedZoneSaves](failedzonesaves.md): The record zones that CloudKit is unable to modify.
