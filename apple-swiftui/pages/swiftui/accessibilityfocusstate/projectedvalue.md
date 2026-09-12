> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/accessibilityfocusstate/projectedvalue](https://developer.apple.com/documentation/swiftui/accessibilityfocusstate/projectedvalue)

# projectedValue

**Framework:** SwiftUI  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

A projection of the state value that can be used to establish bindings between view content and accessibility focus placement.

## Declaration

```swift
var projectedValue: AccessibilityFocusState<Value>.Binding { get }
```

<a id="discussion"></a>

## Discussion

Use `projectedValue` in conjunction with [accessibilityFocused(\_:equals:)](../view/accessibilityfocused%28__equals_%29.md) to establish bindings between view content and accessibility focus placement.

## See Also

### Getting the state

- [wrappedValue](wrappedvalue.md): The current state value, taking into account whatever bindings might be in effect due to the current location of focus.
- [AccessibilityFocusState.Binding](binding.md)
