> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uilistseparatorconfiguration-swift.struct](https://developer.apple.com/documentation/uikit/uilistseparatorconfiguration-swift.struct)

# UIListSeparatorConfiguration

**Framework:** UIKit  
**Kind:** Structure  
**Availability:** iOS 14.5+ · iPadOS 14.5+ · Mac Catalyst 14.5+ · visionOS

A configuration that controls the list separator appearance in a list section.

## Declaration

```swift
struct UIListSeparatorConfiguration
```

<a id="overview"></a>

## Overview

To specify list separator appearance for a section, set a default sectionwide [separatorConfiguration](uicollectionlayoutlistconfiguration-swift.struct/separatorconfiguration.md) on your [UICollectionLayoutListConfiguration](uicollectionlayoutlistconfiguration-swift.struct.md) when you create your list.

```swift
var listConfig = UICollectionLayoutListConfiguration(appearance: .plain)
listConfig.separatorConfiguration.color = .tertiarySystemFill
let layout = UICollectionViewCompositionalLayout.list(using: listConfig)
```

To override list separator appearance on a per-item basis, use the [itemSeparatorHandler](uicollectionlayoutlistconfiguration-swift.struct/itemseparatorhandler-swift.property.md) property.

```swift
var listConfig = UICollectionLayoutListConfiguration(appearance: .plain)
listConfig.separatorConfiguration.color = .tertiarySystemFill

let indexPathToHide = IndexPath()
 
listConfig.itemSeparatorHandler = { (indexPath, sectionSeparatorConfiguration) in    
    var configuration = sectionSeparatorConfiguration
    if indexPath == indexPathToHide {
        configuration.bottomSeparatorVisibility = .hidden    
    }    
    return configuration
}

let layout = UICollectionViewCompositionalLayout.list(using: listConfig)
```

## Topics

### Creating a list separator configuration

- [init(listAppearance:)](uilistseparatorconfiguration-swift.struct/init%28listappearance_%29.md): Creates a list separator configuration with default values according to the specified list appearance.

### Controlling separator visibility

- [topSeparatorVisibility](uilistseparatorconfiguration-swift.struct/topseparatorvisibility.md): The visibility of the top separator for the item the configuration applies to.
- [bottomSeparatorVisibility](uilistseparatorconfiguration-swift.struct/bottomseparatorvisibility.md): The visibility of the bottom separator for the item the configuration applies to.
- [UIListSeparatorConfiguration.Visibility](uilistseparatorconfiguration-swift.struct/visibility.md): Constants that define the visibility of list separators.

### Configuring separator insets

- [topSeparatorInsets](uilistseparatorconfiguration-swift.struct/topseparatorinsets.md): Insets to apply to the top separator of the item the configuration applies to.
- [bottomSeparatorInsets](uilistseparatorconfiguration-swift.struct/bottomseparatorinsets.md): Insets to apply to the bottom separator of the item the configuration applies to.
- [automaticInsets](uilistseparatorconfiguration-swift.struct/automaticinsets.md): A constant that specifies a placeholder size for separator insets.

### Configuring separator appearance

- [color](uilistseparatorconfiguration-swift.struct/color.md): The color to use for the separators of the item the configuration applies to.
- [multipleSelectionColor](uilistseparatorconfiguration-swift.struct/multipleselectioncolor.md): The color to use for the separators of the item the configuration applies to when the item is in a multiple-selection group.
- [visualEffect](uilistseparatorconfiguration-swift.struct/visualeffect.md): The visual effect to use for the separators of the item the configuration applies to.

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomReflectable](https://developer.apple.com/documentation/swift/customreflectable)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)

## See Also

### Configuring separators

- [showsSeparators](uicollectionlayoutlistconfiguration-swift.struct/showsseparators.md): A Boolean value that determines whether the list shows separators between cells.
- [separatorConfiguration](uicollectionlayoutlistconfiguration-swift.struct/separatorconfiguration.md): The section’s preferred configuration for list separators.
- [itemSeparatorHandler](uicollectionlayoutlistconfiguration-swift.struct/itemseparatorhandler-swift.property.md): The closure that provides granular control over the list separator appearance of each item.
- [UICollectionLayoutListConfiguration.ItemSeparatorHandler](uicollectionlayoutlistconfiguration-swift.struct/itemseparatorhandler-swift.typealias.md): A closure that provides granular control over list separator appearance.
