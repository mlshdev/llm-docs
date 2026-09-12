> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/toolbarcontentbuilder](https://developer.apple.com/documentation/swiftui/toolbarcontentbuilder)

# ToolbarContentBuilder

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

Constructs a toolbar item set from multi-expression closures.

## Declaration

```swift
@resultBuilder struct ToolbarContentBuilder
```

## Topics

### Building toolbar content

- [buildBlock(\_:)](toolbarcontentbuilder/buildblock%28__%29.md)
- [buildBlock(\_:\_:)](toolbarcontentbuilder/buildblock%28____%29.md)
- [buildBlock(\_:\_:\_:)](toolbarcontentbuilder/buildblock%28______%29.md)
- [buildBlock(\_:\_:\_:\_:)](toolbarcontentbuilder/buildblock%28________%29.md)
- [buildBlock(\_:\_:\_:\_:\_:)](toolbarcontentbuilder/buildblock%28__________%29.md)
- [buildBlock(\_:\_:\_:\_:\_:\_:)](toolbarcontentbuilder/buildblock%28____________%29.md)
- [buildBlock(\_:\_:\_:\_:\_:\_:\_:)](toolbarcontentbuilder/buildblock%28______________%29.md)
- [buildBlock(\_:\_:\_:\_:\_:\_:\_:\_:)](toolbarcontentbuilder/buildblock%28________________%29.md)
- [buildBlock(\_:\_:\_:\_:\_:\_:\_:\_:\_:)](toolbarcontentbuilder/buildblock%28__________________%29.md)
- [buildBlock(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](toolbarcontentbuilder/buildblock%28____________________%29.md)

### Building conditional toolbar content

- [buildIf(\_:)](toolbarcontentbuilder/buildif%28__%29.md)
- [buildEither(first:)](toolbarcontentbuilder/buildeither%28first_%29.md)
- [buildEither(second:)](toolbarcontentbuilder/buildeither%28second_%29.md)
- [buildExpression(\_:)](toolbarcontentbuilder/buildexpression%28__%29.md): Builds an expression within the builder.
- [buildLimitedAvailability(\_:)](toolbarcontentbuilder/buildlimitedavailability%28__%29.md)

## See Also

### Populating a toolbar

- [toolbar(content:)](view/toolbar%28content_%29.md): Populates the toolbar or navigation bar with the specified items.
- [ToolbarItem](toolbaritem.md): A model that represents an item which can be placed in the toolbar or navigation bar.
- [ToolbarItemGroup](toolbaritemgroup.md): A model that represents a group of `ToolbarItem`s which can be placed in the toolbar or navigation bar.
- [ToolbarItemPlacement](toolbaritemplacement.md): A structure that defines the placement of a toolbar item.
- [toolbarOverflowMenu(content:)](view/toolbaroverflowmenu%28content_%29.md): Configures the overflow menu of a toolbar.
- [ToolbarOverflowMenu](toolbaroverflowmenu.md): The overflow menu of a toolbar.
- [ToolbarContent](toolbarcontent.md): Conforming types represent items that can be placed in various locations in a toolbar.
- [ToolbarSpacer](toolbarspacer.md): A standard space item in toolbars.
- [DefaultToolbarItem](defaulttoolbaritem.md): A toolbar item that represents a system component.
