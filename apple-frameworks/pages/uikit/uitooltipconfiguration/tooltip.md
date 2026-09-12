> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitooltipconfiguration/tooltip](https://developer.apple.com/documentation/uikit/uitooltipconfiguration/tooltip)

# toolTip (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · visionOS 1.0+

The text to display in the tooltip.

## Declaration

```swift
var toolTip: String { get }
```

<a id="Discussion"></a>

## Discussion

To set the tooltip text, create a tooltip configuration object using either the [init(toolTip:)](init%28tooltip_%29.md) or [init(toolTip:in:)](init%28tooltip_in_%29.md) methods.

## See Also

### Accessing the configuration settings

- [sourceRect](sourcerect-8zvo1.md): The region of the view or control where the pointer must hover to trigger the appearance of the tooltip.

# toolTip (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · visionOS 1.0+

The text to display in the tooltip.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSString * toolTip;
```

<a id="Discussion"></a>

## Discussion

To set the tooltip text, create a tooltip configuration object using either the [configurationWithToolTip:](init%28tooltip_%29.md) or [configurationWithToolTip:inRect:](init%28tooltip_in_%29.md) methods.

## See Also

### Accessing the configuration settings

- [sourceRect](sourcerect-iltv.md): The region of the view or control where the pointer must hover to trigger the appearance of the tooltip.
