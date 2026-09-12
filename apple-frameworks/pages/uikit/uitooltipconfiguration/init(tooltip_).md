> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitooltipconfiguration/init(tooltip:)](https://developer.apple.com/documentation/uikit/uitooltipconfiguration/init(tooltip:))

# init(toolTip:) (Swift)

**Framework:** UIKit  
**Kind:** Initializer  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · visionOS 1.0+

Creates a tooltip configuration and sets the tooltip text.

## Declaration

```swift
convenience init(toolTip: String)
```

## Parameters

- `toolTip`: The text that appears in the tooltip.

<a id="Discussion"></a>

## Discussion

Create a configuration using this method to show the tooltip when the pointer hovers over any area of the view or control. For example, the following code listing creates a configuration that instructs the view to show the tooltip when the pointer hovers over any area of the view:

```swift
let configuration = UIToolTipConfiguration(toolTip: "The color is \(colorName).")
```

## See Also

### Creating a tooltip configuration

- [init(toolTip:in:)](init%28tooltip_in_%29.md): Creates a tooltip configuration, and sets the tooltip text and hover region within the view or control.

# configurationWithToolTip: (Objective-C)

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · visionOS 1.0+

Creates a tooltip configuration and sets the tooltip text.

## Declaration

```objectivec
+ (instancetype) configurationWithToolTip:(NSString *) toolTip;
```

## Parameters

- `toolTip`: The text that appears in the tooltip.

<a id="Discussion"></a>

## Discussion

Create a configuration using this method to show the tooltip when the pointer hovers over any area of the view or control. For example, the following code listing creates a configuration that instructs the view to show the tooltip when the pointer hovers over any area of the view:

```swift
let configuration = UIToolTipConfiguration(toolTip: "The color is \(colorName).")
```

## See Also

### Creating a tooltip configuration

- [configurationWithToolTip:inRect:](init%28tooltip_in_%29.md): Creates a tooltip configuration, and sets the tooltip text and hover region within the view or control.
