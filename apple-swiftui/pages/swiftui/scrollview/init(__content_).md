> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/scrollview/init(_:content:)](https://developer.apple.com/documentation/swiftui/scrollview/init(_:content:))

# init(\_:content:)

**Framework:** SwiftUI  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Creates a new instance that’s scrollable in the direction of the given axis and can show indicators while scrolling.

## Declaration

```swift
@export(implementation) nonisolated init(_ axes: Axis.Set = .vertical, @ContentBuilder content: () -> Content)
```

## Parameters

- `axes`: The scroll view’s scrollable axis. The default axis is the vertical axis.
- `content`: The content builder that creates the scrollable view.

## See Also

### Creating a scroll view

- [init(\_:showsIndicators:content:)](init%28__showsindicators_content_%29.md): Deprecated. Creates a new instance that’s scrollable in the direction of the given axis and can show indicators while scrolling.
