> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/focusstate/wrappedvalue](https://developer.apple.com/documentation/swiftui/focusstate/wrappedvalue)

# wrappedValue

**Framework:** SwiftUI  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

The current state value, taking into account whatever bindings might be in effect due to the current location of focus.

## Declaration

```swift
var wrappedValue: Value { get nonmutating set }
```

<a id="discussion"></a>

## Discussion

When focus is not in any view that is bound to this state, the wrapped value will be `nil` (for optional-typed state) or `false` (for `Bool`- typed state).

## See Also

### Inspecting the focus state

- [projectedValue](projectedvalue.md): A projection of the focus state value that returns a binding.
- [FocusState.Binding](binding.md): A property wrapper type that can read and write a value that indicates the current focus location.
