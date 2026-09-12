> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uibackgroundconfiguration-swift.struct](https://developer.apple.com/documentation/uikit/uibackgroundconfiguration-swift.struct)

# UIBackgroundConfiguration

**Framework:** UIKit  
**Kind:** Structure  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · tvOS 14.0+ · visionOS

A configuration that describes a specific background appearance.

## Declaration

```swift
struct UIBackgroundConfiguration
```

<a id="overview"></a>

## Overview

Background configurations provide a lightweight way for you to create backgrounds for your views. Using a background configuration, you can obtain system default background styling for a variety of different view states. You apply background configurations directly to [UIButton](uibutton.md) or to cells, headers, and footers in [UICollectionView](uicollectionview.md) and [UITableView](uitableview.md).

To use a background configuration:

1. Create a background configuration with one of the default system styles.
2. Modify the configuration to match your view’s style if you need additional customization.
3. Set the view’s current background configuration to your configuration.

```swift
var backgroundConfig = UIBackgroundConfiguration.listPlainCell()

// Set a nil background color to use the view's tint color. 
backgroundConfig.backgroundColor = nil 

cell.backgroundConfiguration = backgroundConfig
```

You can also start by creating an empty background configuration using `clear()`, which produces a transparent background.

Each of the system background styles provides system default values for different configuration states ([UIConfigurationState](uiconfigurationstate-8d7pd.md)). If you apply a background configuration to a view whose [automaticallyUpdatesBackgroundConfiguration](uicollectionviewcell/automaticallyupdatesbackgroundconfiguration.md) property is [true](https://developer.apple.com/documentation/swift/true), the system automatically updates the background configuration when the view’s state changes.

If you want additional customization beyond the system default values, you can choose to manually update the background configuration by overriding the view’s [updateConfiguration(using:)](uicollectionviewcell/updateconfiguration%28using_%29.md) method.

```swift
override func updateConfiguration(using state: UIConfigurationState) {
    // Get the system default background configuration for a plain style list cell in the current state. 
    var backgroundConfig = UIBackgroundConfiguration.listPlainCell().updated(for: state) 

    // Customize the background color to use the tint color when the cell is highlighted or selected. 
     if state.isHighlighted || state.isSelected { 
        backgroundConfig.backgroundColor = nil 
     } 

    // Apply the background configuration to the cell. 
    self.backgroundConfiguration = backgroundConfig 
} 
```

When you apply a configuration to a view, UIKit performs the actual drawing and rendering of the background. When you use background configurations instead of rendering your own backgrounds, the system provides automatic view hierarchy management, support for interactive and interruptible animations and transitions, and performance optimizations.

## Topics

### Creating cell background configurations

- [listPlainCell()](uibackgroundconfiguration-swift.struct/listplaincell%28%29.md): Deprecated. Creates the default configuration you use to style a cell in a plain list.
- [listGroupedCell()](uibackgroundconfiguration-swift.struct/listgroupedcell%28%29.md): Deprecated. Creates the default configuration you use to style a cell in a grouped list.
- [listSidebarCell()](uibackgroundconfiguration-swift.struct/listsidebarcell%28%29.md): Deprecated. Creates the default configuration you use to style a cell in a sidebar list.
- [listAccompaniedSidebarCell()](uibackgroundconfiguration-swift.struct/listaccompaniedsidebarcell%28%29.md): Creates the default configuration you use to style a cell in an accompanied sidebar list.

### Creating header and footer background configurations

- [listPlainHeaderFooter()](uibackgroundconfiguration-swift.struct/listplainheaderfooter%28%29.md): Deprecated. Creates the default configuration you use to style a plain list header or footer.
- [listGroupedHeaderFooter()](uibackgroundconfiguration-swift.struct/listgroupedheaderfooter%28%29.md): Deprecated. Creates the default configuration you use to style a grouped list header or footer.
- [listSidebarHeader()](uibackgroundconfiguration-swift.struct/listsidebarheader%28%29.md): Deprecated. Creates the default configuration you use to style a sidebar list header.

### Creating an empty background configuration

- [clear()](uibackgroundconfiguration-swift.struct/clear%28%29.md): Creates an empty background configuration with a transparent background and no default styling.

### Customizing the background

- [customView](uibackgroundconfiguration-swift.struct/customview.md): A custom view for the background.
- [cornerRadius](uibackgroundconfiguration-swift.struct/cornerradius.md): The preferred corner radius, using a continuous corner curve, for the background and stroke.
- [backgroundInsets](uibackgroundconfiguration-swift.struct/backgroundinsets.md): The insets (or outsets, if negative) for the background and stroke, relative to the edges of the containing view.
- [edgesAddingLayoutMarginsToBackgroundInsets](uibackgroundconfiguration-swift.struct/edgesaddinglayoutmarginstobackgroundinsets.md): The edges on which the configuration adds the containing view’s layout margins to the background insets.
- [backgroundColor](uibackgroundconfiguration-swift.struct/backgroundcolor.md): The color of the background.
- [backgroundColorTransformer](uibackgroundconfiguration-swift.struct/backgroundcolortransformer.md): The color transformer for resolving the background color.
- [resolvedBackgroundColor(for:)](uibackgroundconfiguration-swift.struct/resolvedbackgroundcolor%28for_%29.md): Generates the resolved background color for the specified tint color, using the background color and color transformer.
- [visualEffect](uibackgroundconfiguration-swift.struct/visualeffect.md): The visual effect that the configuration applies to the background.
- [shadowProperties](uibackgroundconfiguration-swift.struct/shadowproperties.md)
- [UIShadowProperties](uishadowproperties-swift.struct.md)
- [strokeColor](uibackgroundconfiguration-swift.struct/strokecolor.md): The color of the stroke.
- [strokeColorTransformer](uibackgroundconfiguration-swift.struct/strokecolortransformer.md): The color transformer for resolving the stroke color.
- [resolvedStrokeColor(for:)](uibackgroundconfiguration-swift.struct/resolvedstrokecolor%28for_%29.md): Generates the resolved stroke color for the specified tint color, using the stroke color and color transformer.
- [strokeWidth](uibackgroundconfiguration-swift.struct/strokewidth.md): The width of the stroke.
- [strokeOutset](uibackgroundconfiguration-swift.struct/strokeoutset.md): The outset (or inset, if negative) for the stroke.
- [image](uibackgroundconfiguration-swift.struct/image.md): The image displayed in the view’s background.
- [imageContentMode](uibackgroundconfiguration-swift.struct/imagecontentmode.md): A property that determines the layout of a background image in a view when its bounds change.

### Updating background configurations

- [updated(for:)](uibackgroundconfiguration-swift.struct/updated%28for_%29.md): Generates a configuration for the specified state by applying the configuration’s default values for that state to any properties that you haven’t customized.

### Type Methods

- [listCell()](uibackgroundconfiguration-swift.struct/listcell%28%29.md)
- [listFooter()](uibackgroundconfiguration-swift.struct/listfooter%28%29.md)
- [listHeader()](uibackgroundconfiguration-swift.struct/listheader%28%29.md)

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomReflectable](https://developer.apple.com/documentation/swift/customreflectable)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
