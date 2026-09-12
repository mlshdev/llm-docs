> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/focusedbinding/projectedvalue](https://developer.apple.com/documentation/swiftui/focusedbinding/projectedvalue)

# projectedValue

**Framework:** SwiftUI  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

A binding to the optional value.

## Declaration

```swift
var projectedValue: Binding<Value?> { get }
```

<a id="discussion"></a>

## Discussion

The unwrapped value is `nil` when no focused view hierarchy has published a corresponding binding.

## See Also

### Getting the value

- [wrappedValue](wrappedvalue.md): The unwrapped value for the focus key given the current scope and state of the focused view hierarchy.
