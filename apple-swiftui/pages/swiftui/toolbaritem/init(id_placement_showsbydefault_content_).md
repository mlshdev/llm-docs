> Snapshot-pinned source payload for Apple SwiftUI snapshot-8b55d19a707e; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swiftui/toolbaritem/init(id:placement:showsbydefault:content:)

# init(id:placement:showsByDefault:content:)

**Framework:** SwiftUI  
**Kind:** Initializer  
**Availability:** iOS 14.0+ (deprecated in 27.2) · iPadOS 14.0+ (deprecated in 27.2) · Mac Catalyst 14.0+ (deprecated in 27.2) · macOS 11.0+ (deprecated in 27.2) · tvOS 14.0+ (deprecated in 27.2) · visionOS 1.0+ · watchOS 7.0+ (deprecated in 27.2)

Creates a toolbar item with the specified placement and content, which allows for user customization.

> Use the CustomizableToolbarContent/defaultCustomization(\_:options) modifier with a value of .hidden

## Declaration

```swift
nonisolated init(id: String, placement: ToolbarItemPlacement = .automatic, showsByDefault: Bool, @ContentBuilder content: () -> Content)
```

## Parameters

- `id`: A unique identifier for this item.
- `placement`: Which section of the toolbar the item should be placed in.
- `showsByDefault`: Whether the item appears by default in the toolbar, or only shows if the user explicitly adds it via customization.
- `content`: The content of the item.

## See Also

### Creating a toolbar item

- [init(placement:content:)](init%28placement_content_%29.md): Conforms when `ID` is `()` and `Content` conforms to `View`. Creates a toolbar item with the specified placement and content.
- [init(id:placement:content:)](init%28id_placement_content_%29.md): Conforms when `ID` is `String` and `Content` conforms to `View`. Creates a toolbar item with the specified placement and content, which allows for user customization.
