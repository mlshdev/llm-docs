> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/toolbardefaultitemkind](https://developer.apple.com/documentation/swiftui/toolbardefaultitemkind)

# ToolbarDefaultItemKind

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

A kind of toolbar item a `View` adds by default.

## Declaration

```swift
struct ToolbarDefaultItemKind
```

<a id="overview"></a>

## Overview

`View`s can add toolbar items clients may wish to remove or customize. A default item kind can be passed to the [toolbar(removing:)](view/toolbar%28removing_%29.md) modifier to remove the item. Documentation on the `View` placing the default item should reference the `ToolbarDefaultItemKind` used to remove the item.

## Topics

### Getting the default item types

- [sidebarToggle](toolbardefaultitemkind/sidebartoggle.md): The sidebar toggle toolbar item a `NavigationSplitView` adds by default.

### Type Properties

- [search](toolbardefaultitemkind/search.md): The search item added by a [searchable(text:isPresented:placement:prompt:)](view/searchable%28text_ispresented_placement_prompt_%29.md) modifier.
- [title](toolbardefaultitemkind/title.md): The title and subtitle shown in title bar / navigation bar.

## See Also

### Removing default items

- [toolbar(removing:)](view/toolbar%28removing_%29.md): Remove a toolbar item present by default
