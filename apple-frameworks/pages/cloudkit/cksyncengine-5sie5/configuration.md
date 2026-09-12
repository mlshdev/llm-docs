> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/cksyncengine-5sie5/configuration](https://developer.apple.com/documentation/cloudkit/cksyncengine-5sie5/configuration)

# CKSyncEngine.Configuration

**Framework:** CloudKit  
**Kind:** Structure  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS · watchOS 10.0+

A type that configures the attributes and behavior of a sync engine.

## Declaration

```swift
struct Configuration
```

## Topics

### Creating configurations

- [init(database:stateSerialization:delegate:)](configuration/init%28database_stateserialization_delegate_%29.md): Creates a configuration for the specified database and serialized state.

### Handling record changes

- [delegate](configuration/delegate.md): The object that provides the records to sync and handles any related events.
- [CKSyncEngineDelegate](../cksyncenginedelegate-1q7g8.md): An interface for providing record data to a sync engine and customizing that engine’s behavior.

### Managing attributes

- [automaticallySync](configuration/automaticallysync.md): A Boolean value that determines whether the engine syncs automatically.
- [database](configuration/database.md): The associated database.
- [subscriptionID](configuration/subscriptionid.md): The subscription identifier for the associated database.
- [stateSerialization](configuration/stateserialization.md): The sync engine’s serialized state.

### Debugging the configuration

- [description](configuration/description.md): A textual description of the configuration that’s suitable for logging.

### Default Implementations

- [CustomStringConvertible Implementations](configuration/customstringconvertible-implementations.md)

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Creating a sync engine

- [init(\_:)](init%28__%29.md): Creates a sync engine with the specified configuration.
