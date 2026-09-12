> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/intentvalueconvertiblewrapper](https://developer.apple.com/documentation/appintents/intentvalueconvertiblewrapper)

# IntentValueConvertibleWrapper

**Framework:** App Intents  
**Kind:** Protocol  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

A protocol for types that wrap another intent value that supports conversion.

## Declaration

```swift
protocol IntentValueConvertibleWrapper : IntentValueConvertible
```

<a id="overview"></a>

## Overview

`IntentValueConvertibleWrapper` enables you to create specialized types that derive their `IntentValueConvertible` conformance from an underlying base type. This pattern allows you to extend existing convertible types with additional functionality while preserving their ability to work within the AppIntents framework.

Use this protocol when you want to create a type that:

- Wraps an existing `IntentValueConvertible` type
- Adds domain-specific properties or methods
- Maintains compatibility with the AppIntents framework

<a id="Example"></a>

## Example

```swift
struct LandmarkEntity: IntentValueConvertibleWrapper {
    var baseValue: AnyAppEntity

    init(baseValue: AnyAppEntity) {
        self.baseValue = baseValue
    }

    var continent: String {
        get throws {
            try baseValue.continent
        }
    }
}
```

## Topics

### Associated Types

- [BaseValue](intentvalueconvertiblewrapper/basevalue-swift.associatedtype.md): The underlying type that provides protocol conformance.

### Initializers

- [init(baseValue:)](intentvalueconvertiblewrapper/init%28basevalue_%29.md): Creates a new instance that wraps the specified base value.

### Instance Properties

- [baseValue](intentvalueconvertiblewrapper/basevalue-swift.property.md): The underlying value that this type wraps.

## Relationships

### Inherits From

- [IntentValueConvertible](intentvalueconvertible.md)
- [IntentValueExpressing](intentvalueexpressing.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Type conversions

- [IntentValueConvertible](intentvalueconvertible.md): A protocol that allows the system to use types to as app intent parameters or properties.
- [IntentValueExpressing](intentvalueexpressing.md): A protocol for types that can create intent value expressions.
