> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/focusedvalue/wrappedvalue](https://developer.apple.com/documentation/swiftui/focusedvalue/wrappedvalue)

# wrappedValue

**Framework:** SwiftUI  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

The value for the focus key given the current scope and state of the focused view hierarchy.

## Declaration

```swift
var wrappedValue: Value? { get }
```

<a id="discussion"></a>

## Discussion

Returns `nil` when nothing in the focused view hierarchy exports a value.
