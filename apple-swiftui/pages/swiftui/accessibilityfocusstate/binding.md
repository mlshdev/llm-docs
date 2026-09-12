> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/accessibilityfocusstate/binding](https://developer.apple.com/documentation/swiftui/accessibilityfocusstate/binding)

# AccessibilityFocusState.Binding

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

## Declaration

```swift
@propertyWrapper @frozen struct Binding
```

## Topics

### Getting the state

- [projectedValue](binding/projectedvalue.md): The currently focused element.
- [wrappedValue](binding/wrappedvalue.md): The underlying value referenced by the bound property.

## See Also

### Getting the state

- [projectedValue](projectedvalue.md): A projection of the state value that can be used to establish bindings between view content and accessibility focus placement.
- [wrappedValue](wrappedvalue.md): The current state value, taking into account whatever bindings might be in effect due to the current location of focus.
