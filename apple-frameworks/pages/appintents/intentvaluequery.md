> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/intentvaluequery](https://developer.apple.com/documentation/appintents/intentvaluequery)

# IntentValueQuery

**Framework:** App Intents  
**Kind:** Protocol  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

A query that provides entity values to the system; for example, for visual intelligence search.

## Declaration

```swift
protocol IntentValueQuery : PersistentlyIdentifiable, _SupportsAppDependencies, Sendable
```

## Topics

### Associated Types

- [Input](intentvaluequery/input.md)
- [Result](intentvaluequery/result.md)
- [ResultValue](intentvaluequery/resultvalue.md)

### Initializers

- [init()](intentvaluequery/init%28%29.md)

### Instance Methods

- [values(for:)](intentvaluequery/values%28for_%29.md)

### Type Aliases

- [IntentValueQuery.ExecutionTargets](intentvaluequery/executiontargets.md)

### Type Properties

- [allowedExecutionTargets](intentvaluequery/allowedexecutiontargets.md): A set of targets that can run this query.

## Relationships

### Inherits From

- [PersistentlyIdentifiable](persistentlyidentifiable.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Intent queries

- [IntentValueContainer](intentvaluecontainer.md): A container that stores a value that supports intent value conversion.
- [IntentValueExpression](intentvalueexpression.md): A type that represents a lazily evaluated intent value.
