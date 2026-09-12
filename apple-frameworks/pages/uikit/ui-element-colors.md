> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/ui-element-colors](https://developer.apple.com/documentation/uikit/ui-element-colors)

# UI element colors (Swift)

**Framework:** UIKit  
**Kind:** API Collection

Choose colors for UI elements such as labels, text, backgrounds, and links.

<a id="overview"></a>

## Overview

UIKit provides color objects for the foreground and background colors of your app’s UI elements. The names of these color objects reflect their intended use, rather than specific color values.

Except where noted, the color objects adapt automatically to Dark Mode changes when you use the provided [UIColor](uicolor.md) object. If you retrieve the color values, either directly or using another type such as [CGColor](../coregraphics/cgcolor.md), you must handle Dark Mode changes yourself. For more information about supporting Dark Mode, see [Supporting Dark Mode in your interface](supporting-dark-mode-in-your-interface.md).

## Topics

### Label colors

- [label](uicolor/label.md): The color for text labels that contain primary content.
- [secondaryLabel](uicolor/secondarylabel.md): The color for text labels that contain secondary content.
- [tertiaryLabel](uicolor/tertiarylabel.md): The color for text labels that contain tertiary content.
- [quaternaryLabel](uicolor/quaternarylabel.md): The color for text labels that contain quaternary content.

### Fill colors

- [systemFill](uicolor/systemfill.md): An overlay fill color for thin and small shapes.
- [secondarySystemFill](uicolor/secondarysystemfill.md): An overlay fill color for medium-size shapes.
- [tertiarySystemFill](uicolor/tertiarysystemfill.md): An overlay fill color for large shapes.
- [quaternarySystemFill](uicolor/quaternarysystemfill.md): An overlay fill color for large areas that contain complex content.

### Text colors

- [placeholderText](uicolor/placeholdertext.md): The color for placeholder text in controls or text views.

### Tint color

- [tintColor](uicolor/tintcolor.md): A color value that resolves at runtime based on the current tint color of the app or trait hierarchy.

### Standard content background colors

- [systemBackground](uicolor/systembackground.md): The color for the main background of your interface.
- [secondarySystemBackground](uicolor/secondarysystembackground.md): The color for content layered on top of the main background.
- [tertiarySystemBackground](uicolor/tertiarysystembackground.md): The color for content layered on top of secondary backgrounds.

### Grouped content background colors

- [systemGroupedBackground](uicolor/systemgroupedbackground.md): The color for the main background of your grouped interface.
- [secondarySystemGroupedBackground](uicolor/secondarysystemgroupedbackground.md): The color for content layered on top of the main background of your grouped interface.
- [tertiarySystemGroupedBackground](uicolor/tertiarysystemgroupedbackground.md): The color for content layered on top of secondary backgrounds of your grouped interface.

### Separator colors

- [separator](uicolor/separator.md): The color for thin borders or divider lines that allows some underlying content to be visible.
- [opaqueSeparator](uicolor/opaqueseparator.md): The color for borders or divider lines that hides any underlying content.

### Link color

- [link](uicolor/link.md): The specified color for links.

### Nonadaptable colors

- [darkText](uicolor/darktext.md): The nonadaptable system color for text on a light background.
- [lightText](uicolor/lighttext.md): The nonadaptable system color for text on a dark background.

### Deprecated colors

- [groupTableViewBackground](uicolor/grouptableviewbackground.md): Deprecated. The system color to use for the background of a grouped table.

## See Also

### Getting existing colors

- [Standard colors](standard-colors.md): Define standard color objects for specific shades, such as red, blue, green, black, white, and more.
- [Color creation](color-creation.md): Load colors from asset catalogs and create colors from raw component values.

# UI element colors (Objective-C)

**Framework:** UIKit  
**Kind:** API Collection

Choose colors for UI elements such as labels, text, backgrounds, and links.

<a id="overview"></a>

## Overview

UIKit provides color objects for the foreground and background colors of your app’s UI elements. The names of these color objects reflect their intended use, rather than specific color values.

Except where noted, the color objects adapt automatically to Dark Mode changes when you use the provided [UIColor](uicolor.md) object. If you retrieve the color values, either directly or using another type such as [CGColorRef](../coregraphics/cgcolor.md), you must handle Dark Mode changes yourself. For more information about supporting Dark Mode, see [Supporting Dark Mode in your interface](supporting-dark-mode-in-your-interface.md).

## Topics

### Label colors

- [labelColor](uicolor/label.md): The color for text labels that contain primary content.
- [secondaryLabelColor](uicolor/secondarylabel.md): The color for text labels that contain secondary content.
- [tertiaryLabelColor](uicolor/tertiarylabel.md): The color for text labels that contain tertiary content.
- [quaternaryLabelColor](uicolor/quaternarylabel.md): The color for text labels that contain quaternary content.

### Fill colors

- [systemFillColor](uicolor/systemfill.md): An overlay fill color for thin and small shapes.
- [secondarySystemFillColor](uicolor/secondarysystemfill.md): An overlay fill color for medium-size shapes.
- [tertiarySystemFillColor](uicolor/tertiarysystemfill.md): An overlay fill color for large shapes.
- [quaternarySystemFillColor](uicolor/quaternarysystemfill.md): An overlay fill color for large areas that contain complex content.

### Text colors

- [placeholderTextColor](uicolor/placeholdertext.md): The color for placeholder text in controls or text views.

### Tint color

- [tintColor](uicolor/tintcolor.md): A color value that resolves at runtime based on the current tint color of the app or trait hierarchy.

### Standard content background colors

- [systemBackgroundColor](uicolor/systembackground.md): The color for the main background of your interface.
- [secondarySystemBackgroundColor](uicolor/secondarysystembackground.md): The color for content layered on top of the main background.
- [tertiarySystemBackgroundColor](uicolor/tertiarysystembackground.md): The color for content layered on top of secondary backgrounds.

### Grouped content background colors

- [systemGroupedBackgroundColor](uicolor/systemgroupedbackground.md): The color for the main background of your grouped interface.
- [secondarySystemGroupedBackgroundColor](uicolor/secondarysystemgroupedbackground.md): The color for content layered on top of the main background of your grouped interface.
- [tertiarySystemGroupedBackgroundColor](uicolor/tertiarysystemgroupedbackground.md): The color for content layered on top of secondary backgrounds of your grouped interface.

### Separator colors

- [separatorColor](uicolor/separator.md): The color for thin borders or divider lines that allows some underlying content to be visible.
- [opaqueSeparatorColor](uicolor/opaqueseparator.md): The color for borders or divider lines that hides any underlying content.

### Link color

- [linkColor](uicolor/link.md): The specified color for links.

### Nonadaptable colors

- [darkTextColor](uicolor/darktext.md): The nonadaptable system color for text on a light background.
- [lightTextColor](uicolor/lighttext.md): The nonadaptable system color for text on a dark background.

### Deprecated colors

- [groupTableViewBackgroundColor](uicolor/grouptableviewbackground.md): Deprecated. The system color to use for the background of a grouped table.
- [scrollViewTexturedBackgroundColor](uicolor/scrollviewtexturedbackgroundcolor.md): Deprecated. The system pattern color to use for the area behind scrollable content.
- [underPageBackgroundColor](uicolor/underpagebackgroundcolor.md): Deprecated. The system pattern color to use for the background of a page.
- [viewFlipsideBackgroundColor](uicolor/viewflipsidebackgroundcolor.md): Deprecated. The system color to use for the back side of a view when it’s flipped.

## See Also

### Getting existing colors

- [Standard colors](standard-colors.md): Define standard color objects for specific shades, such as red, blue, green, black, white, and more.
- [Color creation](color-creation.md): Load colors from asset catalogs and create colors from raw component values.
