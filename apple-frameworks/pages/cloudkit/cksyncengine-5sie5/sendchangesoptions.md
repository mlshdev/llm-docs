> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/cksyncengine-5sie5/sendchangesoptions](https://developer.apple.com/documentation/cloudkit/cksyncengine-5sie5/sendchangesoptions)

# CKSyncEngine.SendChangesOptions

**Framework:** CloudKit  
**Kind:** Structure  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS · watchOS 10.0+

A set of options to use when sending changes to the server.

## Declaration

```swift
struct SendChangesOptions
```

## Topics

### Managing attributes

- [description](sendchangesoptions/description.md): A textual description of the options that’s suitable for logging.
- [operationGroup](sendchangesoptions/operationgroup.md): The operation group to use for the underlying CloudKit operations.

### Debugging options

- [description](sendchangesoptions/description.md): A textual description of the options that’s suitable for logging.

### Initializers

- [init(scope:operationGroup:)](sendchangesoptions/init%28scope_operationgroup_%29.md): Creates a new set of send changes options.

### Instance Properties

- [scope](sendchangesoptions/scope-swift.property.md): The scope of the changes to send.

### Enumerations

- [CKSyncEngine.SendChangesOptions.Scope](sendchangesoptions/scope-swift.enum.md): The scope for sending changes to the server.

### Default Implementations

- [CustomStringConvertible Implementations](sendchangesoptions/customstringconvertible-implementations.md)

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Invoking manual sync operations

- [fetchChanges(\_:)](fetchchanges%28__%29.md): Fetches pending remote changes from the server.
- [CKSyncEngine.FetchChangesOptions](fetchchangesoptions.md): A set of options to use when fetching changes from the server.
- [sendChanges(\_:)](sendchanges%28__%29.md): Sends pending local changes to the server.
