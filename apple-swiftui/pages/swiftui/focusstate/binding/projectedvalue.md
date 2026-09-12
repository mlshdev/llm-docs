> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/focusstate/binding/projectedvalue](https://developer.apple.com/documentation/swiftui/focusstate/binding/projectedvalue)

# projectedValue

**Framework:** SwiftUI  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

A projection of the binding value that returns a binding.

## Declaration

```swift
var projectedValue: FocusState<Value>.Binding { get }
```

<a id="discussion"></a>

## Discussion

Use the projected value to pass a binding value down a view hierarchy.

## See Also

### Inspecting the binding

- [wrappedValue](wrappedvalue.md): The underlying value referenced by the bound property.
