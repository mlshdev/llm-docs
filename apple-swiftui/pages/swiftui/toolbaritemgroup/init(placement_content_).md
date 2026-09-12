> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/toolbaritemgroup/init(placement:content:)](https://developer.apple.com/documentation/swiftui/toolbaritemgroup/init(placement:content:))

# init(placement:content:)

**Framework:** SwiftUI  
**Kind:** Initializer  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

Creates a toolbar item group with a specified placement and content.

## Declaration

```swift
nonisolated init(placement: ToolbarItemPlacement = .automatic, @ContentBuilder content: () -> Content)
```

<a id="discussion"></a>

## Discussion

- placement: Which section of the toolbar all of its vended `ToolbarItem`s should be placed in.
- content: The content of the group. Each view specified in the `ContentBuilder` will be given its own `ToolbarItem` in the toolbar.

## See Also

### Creating a toolbar item group

- [init(placement:content:label:)](init%28placement_content_label_%29.md): Conforms when `Content` conforms to `View`. Creates a toolbar item group with the specified placement, content, and a label describing that content.
