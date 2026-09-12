> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/anyintentvalue](https://developer.apple.com/documentation/appintents/anyintentvalue)

# AnyIntentValue

**Framework:** App Intents  
**Kind:** Protocol  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

A type the system uses to access a parameter or property value.

## Declaration

```swift
protocol AnyIntentValue : Sendable
```

## Topics

### Getting the value type

- [Value](anyintentvalue/value.md)

### Getting type-specific information

- [title](anyintentvalue/title.md)
- [isOptional](anyintentvalue/isoptional.md)

## Relationships

### Inherits From

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

### Conforming Types

- [EntityProperty](entityproperty.md)
- [IntentParameter](intentparameter.md)
- [IntentParameterContext](intentparametercontext.md)

## See Also

### Foundational types

- [AppValue](appvalue.md): An interface that describes conceptual types you use in app intents.
