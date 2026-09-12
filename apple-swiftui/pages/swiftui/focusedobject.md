> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/focusedobject](https://developer.apple.com/documentation/swiftui/focusedobject)

# FocusedObject

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

A property wrapper type for an observable object supplied by the focused view or one of its ancestors.

## Declaration

```swift
@MainActor @frozen @propertyWrapper @preconcurrency struct FocusedObject<ObjectType> where ObjectType : ObservableObject
```

<a id="overview"></a>

## Overview

Focused objects invalidate the current view whenever the observable object changes. If multiple views publish a focused object using the same key, the wrapped property will reflect the object that’s closest to the focused view.

## Topics

### Creating the focused object

- [init()](focusedobject/init%28%29.md): Creates a focused object.

### Getting the value

- [projectedValue](focusedobject/projectedvalue.md): A projection of the focused object that creates bindings to its properties using dynamic member lookup.
- [wrappedValue](focusedobject/wrappedvalue.md): The underlying value referenced by the focused object.
- [FocusedObject.Wrapper](focusedobject/wrapper.md): A wrapper around the underlying focused object that can create bindings to its properties using dynamic member lookup.

## Relationships

### Conforms To

- [DynamicProperty](dynamicproperty.md)

## See Also

### Exposing reference types to focused views

- [focusedObject(\_:)](view/focusedobject%28__%29.md): Creates a new view that exposes the provided object to other views whose whose state depends on the focused view hierarchy.
- [focusedSceneObject(\_:)](view/focusedsceneobject%28__%29.md): Creates a new view that exposes the provided object to other views whose whose state depends on the active scene.
