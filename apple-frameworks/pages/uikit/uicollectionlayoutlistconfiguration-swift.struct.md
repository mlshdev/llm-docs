> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicollectionlayoutlistconfiguration-swift.struct](https://developer.apple.com/documentation/uikit/uicollectionlayoutlistconfiguration-swift.struct)

# UICollectionLayoutListConfiguration

**Framework:** UIKit  
**Kind:** Structure  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · tvOS 14.0+ · visionOS

A configuration for creating a list layout.

## Declaration

```swift
struct UICollectionLayoutListConfiguration
```

<a id="overview"></a>

## Overview

Use this configuration to create a list section for a compositional layout ([UICollectionViewCompositionalLayout](uicollectionviewcompositionallayout.md)), or a layout containing only list sections. The following example shows how to create a compositional layout that contains only list sections by applying the same configuration to each section in the list layout:

```swift
let configuration = UICollectionLayoutListConfiguration(appearance: .sidebar)
let layout = UICollectionViewCompositionalLayout.list(using: configuration)
```

To implement different list configurations for different sections, use a compositional layout’s section provider to create each section with its own list configuration.

```swift
let layout = UICollectionViewCompositionalLayout() { sectionIndex, layoutEnvironment in
    
    var configuration = UICollectionLayoutListConfiguration(appearance: .insetGrouped)
    configuration.headerMode = sectionIndex == 0 ? .supplementary : .none
    
    let section = NSCollectionLayoutSection.list(using: configuration,
                                                 layoutEnvironment: layoutEnvironment)
    
    return section
}
```

## Topics

### Creating a list layout configuration

- [init(appearance:)](uicollectionlayoutlistconfiguration-swift.struct/init%28appearance_%29.md): Creates a list layout configuration with the specified appearance.

### Configuring appearance

- [appearance](uicollectionlayoutlistconfiguration-swift.struct/appearance-swift.property.md): The overall appearance of the list.
- [backgroundColor](uicollectionlayoutlistconfiguration-swift.struct/backgroundcolor.md): The background color of the list.
- [UICollectionLayoutListConfiguration.Appearance](uicollectionlayoutlistconfiguration-swift.struct/appearance-swift.enum.md): Constants that describe the appearance of the list.

### Configuring separators

- [showsSeparators](uicollectionlayoutlistconfiguration-swift.struct/showsseparators.md): A Boolean value that determines whether the list shows separators between cells.
- [separatorConfiguration](uicollectionlayoutlistconfiguration-swift.struct/separatorconfiguration.md): The section’s preferred configuration for list separators.
- [UIListSeparatorConfiguration](uilistseparatorconfiguration-swift.struct.md): A configuration that controls the list separator appearance in a list section.
- [itemSeparatorHandler](uicollectionlayoutlistconfiguration-swift.struct/itemseparatorhandler-swift.property.md): The closure that provides granular control over the list separator appearance of each item.
- [UICollectionLayoutListConfiguration.ItemSeparatorHandler](uicollectionlayoutlistconfiguration-swift.struct/itemseparatorhandler-swift.typealias.md): A closure that provides granular control over list separator appearance.

### Configuring headers and footers

- [headerMode](uicollectionlayoutlistconfiguration-swift.struct/headermode-swift.property.md): The type of header to use for the list.
- [footerMode](uicollectionlayoutlistconfiguration-swift.struct/footermode-swift.property.md): The type of footer to use for the list.
- [UICollectionLayoutListConfiguration.HeaderMode](uicollectionlayoutlistconfiguration-swift.struct/headermode-swift.enum.md): Constants that describe the list’s header mode.
- [UICollectionLayoutListConfiguration.FooterMode](uicollectionlayoutlistconfiguration-swift.struct/footermode-swift.enum.md): Constants that describe the list’s footer mode.
- [headerTopPadding](uicollectionlayoutlistconfiguration-swift.struct/headertoppadding.md): The amount of padding above each section header.

### Customizing swipe actions

- [leadingSwipeActionsConfigurationProvider](uicollectionlayoutlistconfiguration-swift.struct/leadingswipeactionsconfigurationprovider.md): The closure that provides the set of actions to display when swiping on the leading edge of the cell.
- [trailingSwipeActionsConfigurationProvider](uicollectionlayoutlistconfiguration-swift.struct/trailingswipeactionsconfigurationprovider.md): The closure that provides the set of actions to display when swiping on the trailing edge of the cell.
- [UICollectionLayoutListConfiguration.SwipeActionsConfigurationProvider](uicollectionlayoutlistconfiguration-swift.struct/swipeactionsconfigurationprovider.md): A closure that configures the swipe actions for a cell.

### Managing content-hugging behavior

- [contentHuggingElements](uicollectionlayoutlistconfiguration-swift.struct/contenthuggingelements-swift.property.md): A setting that determines which type of items tightly hug their content.
- [UICollectionLayoutListConfiguration.ContentHuggingElements](uicollectionlayoutlistconfiguration-swift.struct/contenthuggingelements-swift.struct.md): Constants that determine which types of items in a collection view tightly hug their content.

## See Also

### Related Documentation

- [list(using:layoutEnvironment:)](nscollectionlayoutsection/list%28using_layoutenvironment_%29.md): Creates a list section with the specified list configuration and layout environment.

### Creating a list layout

- [list(using:)](uicollectionviewcompositionallayout/list%28using_%29.md): Creates a compositional layout that contains only list sections of the specified configuration.
