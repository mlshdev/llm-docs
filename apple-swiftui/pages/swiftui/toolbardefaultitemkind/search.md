> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/toolbardefaultitemkind/search](https://developer.apple.com/documentation/swiftui/toolbardefaultitemkind/search)

# search

**Framework:** SwiftUI  
**Kind:** Type Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+

The search item added by a [searchable(text:isPresented:placement:prompt:)](../view/searchable%28text_ispresented_placement_prompt_%29.md) modifier.

## Declaration

```swift
static let search: ToolbarDefaultItemKind
```

<a id="discussion"></a>

## Discussion

Use a `.search` default item kind with [init(kind:placement:)](../defaulttoolbaritem/init%28kind_placement_%29.md) to customize the [ToolbarItemPlacement](../toolbaritemplacement.md) of a default item kind. The search default item kind can be placed in the [bottomBar](../toolbaritemplacement/bottombar.md) on all supported platforms. On iOS, it can also be placed in the top bar.
