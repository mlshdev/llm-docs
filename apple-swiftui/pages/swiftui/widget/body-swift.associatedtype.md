> Snapshot-pinned source payload for Apple SwiftUI snapshot-8b55d19a707e; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swiftui/widget/body-swift.associatedtype

# Body

**Framework:** SwiftUI  
**Kind:** Associated Type  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 1.0+ · watchOS 9.0+

The type of configuration representing the content of the widget.

## Declaration

```swift
associatedtype Body : WidgetConfiguration
```

<a id="discussion"></a>

## Discussion

When you create a custom widget, Swift infers this type from your implementation of the required [body](body-swift.property.md) property.

## See Also

### Implementing a widget

- [body](body-swift.property.md): The content and behavior of the widget.
