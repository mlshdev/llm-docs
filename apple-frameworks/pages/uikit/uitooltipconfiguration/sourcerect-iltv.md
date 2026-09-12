> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitooltipconfiguration/sourcerect-iltv](https://developer.apple.com/documentation/uikit/uitooltipconfiguration/sourcerect-iltv)

# sourceRect

**Interface language:** Objective-C

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · visionOS 1.0+

The region of the view or control where the pointer must hover to trigger the appearance of the tooltip.

## Declaration

```objectivec
@property (nonatomic, readonly) CGRect sourceRect;
```

<a id="Discussion"></a>

## Discussion

To set [sourceRect](sourcerect-iltv.md), create a tooltip configuration object using the [configurationWithToolTip:inRect:](init%28tooltip_in_%29.md) method.

## See Also

### Accessing the configuration settings

- [toolTip](tooltip.md): The text to display in the tooltip.
