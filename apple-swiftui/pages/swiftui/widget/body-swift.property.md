> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/widget/body-swift.property](https://developer.apple.com/documentation/swiftui/widget/body-swift.property)

# body

**Framework:** SwiftUI  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 1.0+ · watchOS 9.0+

The content and behavior of the widget.

## Declaration

```swift
@MainActor @preconcurrency var body: Self.Body { get }
```

<a id="discussion"></a>

## Discussion

For any widgets that you create, provide a computed `body` property that defines the widget as a composition of SwiftUI views.

Swift infers the widget’s [Body](../scene/body-swift.associatedtype.md) associated type based on the contents of the `body` property.

## See Also

### Implementing a widget

- [Body](body-swift.associatedtype.md): The type of configuration representing the content of the widget.
