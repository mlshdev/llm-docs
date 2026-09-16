> Snapshot-pinned source payload for Apple SwiftUI snapshot-8b55d19a707e; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swiftui/customizabletoolbarcontent

# CustomizableToolbarContent

**Framework:** SwiftUI  
**Kind:** Protocol  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

Conforming types represent items that can be placed in various locations in a customizable toolbar.

## Declaration

```swift
protocol CustomizableToolbarContent : ToolbarContent where Self.Body : CustomizableToolbarContent
```

## Topics

### Using default options

- [defaultCustomization(\_:options:)](customizabletoolbarcontent/defaultcustomization%28__options_%29.md): Configures the way customizable toolbar items with the default behavior behave.

### Customizing behaviors

- [axisBehavior(\_:)](customizabletoolbarcontent/axisbehavior%28__%29.md): Beta. The bar axis behavior of the toolbar item.
- [customizationBehavior(\_:)](customizabletoolbarcontent/customizationbehavior%28__%29.md): Configures the customization behavior of customizable toolbar content.

### Setting visibility

- [hidden(\_:)](customizabletoolbarcontent/hidden%28__%29.md): Hides a toolbar item within its toolbar.
- [sharedBackgroundVisibility(\_:)](customizabletoolbarcontent/sharedbackgroundvisibility%28__%29.md): Controls the visibility of the glass background effect on items in the toolbar. In certain contexts, such as the navigation bar on iOS and the window toolbar on macOS, toolbar items will be given a glass background effect that is shared with other items in the same logical grouping.
- [visibilityPriority(\_:)](customizabletoolbarcontent/visibilitypriority%28__%29.md): Defines the visibility priority for a toolbar item.

### Coordinating with animations

- [matchedTransitionSource(id:in:)](customizabletoolbarcontent/matchedtransitionsource%28id_in_%29.md): Identifies this toolbar content as the source of a navigation transition, such as a zoom transition.

### Adjusting content margins

- [contentMarginsRemoved(\_:)](customizabletoolbarcontent/contentmarginsremoved%28__%29.md): Configures whether the content margins are removed.

### Deprecated

- [defaultCustomization()](customizabletoolbarcontent/defaultcustomization%28%29.md): Deprecated. Configures customizable toolbar content with the default visibility and options.

## Relationships

### Inherits From

- [ToolbarContent](toolbarcontent.md)

### Conforming Types

- [EmptyView](emptyview.md)
- [ForEach](foreach.md)
- [Group](group.md)
- [ToolbarItem](toolbaritem.md)
- [ToolbarOverflowMenu](toolbaroverflowmenu.md)
- [ToolbarSpacer](toolbarspacer.md)
- [ToolbarTitleMenu](toolbartitlemenu.md)
- [TupleContent](tuplecontent.md)

## See Also

### Populating a customizable toolbar

- [toolbar(id:content:)](view/toolbar%28id_content_%29.md): Populates the toolbar or navigation bar with the specified items, allowing for user customization.
- [toolbarItemHidden(\_:)](view/toolbaritemhidden%28__%29.md): Hides an individual view within a control group toolbar item.
- [ToolbarCustomizationBehavior](toolbarcustomizationbehavior.md): The customization behavior of customizable toolbar content.
- [ToolbarCustomizationOptions](toolbarcustomizationoptions.md): Options that influence the default customization behavior of customizable toolbar content.
- [SearchToolbarBehavior](searchtoolbarbehavior.md): The behavior of a search field in a toolbar.
