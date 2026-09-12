> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/toolbaritem/init(id:placement:content:)](https://developer.apple.com/documentation/swiftui/toolbaritem/init(id:placement:content:))

# init(id:placement:content:)

**Framework:** SwiftUI  
**Kind:** Initializer  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

Creates a toolbar item with the specified placement and content, which allows for user customization.

## Declaration

```swift
@export(implementation) nonisolated init(id: String, placement: ToolbarItemPlacement = .automatic, @ContentBuilder content: () -> Content)
```

## Parameters

- `id`: A unique identifier for this item.
- `placement`: Which section of the toolbar the item should be placed in.
- `content`: The content of the item.

## See Also

### Creating a toolbar item

- [init(placement:content:)](init%28placement_content_%29.md): Conforms when `ID` is `()` and `Content` conforms to `View`. Creates a toolbar item with the specified placement and content.
- [init(id:placement:showsByDefault:content:)](init%28id_placement_showsbydefault_content_%29.md): Deprecated. Conforms when `ID` is `String` and `Content` conforms to `View`. Creates a toolbar item with the specified placement and content, which allows for user customization.
