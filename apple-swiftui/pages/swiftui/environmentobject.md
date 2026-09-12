> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/environmentobject](https://developer.apple.com/documentation/swiftui/environmentobject)

# EnvironmentObject

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A property wrapper type for an observable object that a parent or ancestor view supplies.

## Declaration

```swift
@MainActor @frozen @propertyWrapper @preconcurrency struct EnvironmentObject<ObjectType> where ObjectType : ObservableObject
```

<a id="overview"></a>

## Overview

An environment object invalidates the current view whenever the observable object that conforms to [ObservableObject](https://developer.apple.com/documentation/combine/observableobject) changes. If you declare a property as an environment object, be sure to set a corresponding model object on an ancestor view by calling its [environmentObject(\_:)](view/environmentobject%28__%29.md) modifier.

> **Note**

> If your observable object conforms to the [Observable](https://developer.apple.com/documentation/observation/observable) protocol, use [Environment](environment.md) instead of `EnvironmentObject` and set the model object in an ancestor view by calling its [environment(\_:)](view/environment%28__%29.md) or [environment(\_:\_:)](view/environment%28____%29.md) modifiers.

## Topics

### Creating an environment object

- [init()](environmentobject/init%28%29.md): Creates an environment object.

### Getting the value

- [wrappedValue](environmentobject/wrappedvalue.md): The underlying value referenced by the environment object.
- [projectedValue](environmentobject/projectedvalue.md): A projection of the environment object that creates bindings to its properties using dynamic member lookup.
- [EnvironmentObject.Wrapper](environmentobject/wrapper.md): A wrapper of the underlying environment object that can create bindings to its properties using dynamic member lookup.

## Relationships

### Conforms To

- [DynamicProperty](dynamicproperty.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Distributing model data throughout your app

- [environmentObject(\_:)](view/environmentobject%28__%29.md): Supplies an observable object to a view’s hierarchy.
- [environmentObject(\_:)](scene/environmentobject%28__%29.md): Supplies an `ObservableObject` to a view subhierarchy.
