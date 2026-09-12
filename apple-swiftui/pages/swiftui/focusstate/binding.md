> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/focusstate/binding](https://developer.apple.com/documentation/swiftui/focusstate/binding)

# FocusState.Binding

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

A property wrapper type that can read and write a value that indicates the current focus location.

## Declaration

```swift
@frozen @propertyWrapper struct Binding
```

## Topics

### Inspecting the binding

- [projectedValue](binding/projectedvalue.md): A projection of the binding value that returns a binding.
- [wrappedValue](binding/wrappedvalue.md): The underlying value referenced by the bound property.

## See Also

### Inspecting the focus state

- [projectedValue](projectedvalue.md): A projection of the focus state value that returns a binding.
- [wrappedValue](wrappedvalue.md): The current state value, taking into account whatever bindings might be in effect due to the current location of focus.
