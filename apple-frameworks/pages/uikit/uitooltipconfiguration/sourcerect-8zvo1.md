> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/uikit/uitooltipconfiguration/sourcerect-8zvo1

# sourceRect

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · visionOS

The region of the view or control where the pointer must hover to trigger the appearance of the tooltip.

## Declaration

```swift
@MainActor @preconcurrency var sourceRect: CGRect? { get }
```

<a id="Discussion"></a>

## Discussion

To set [sourceRect](../uiviewcontrollerpreviewing/sourcerect.md), create a tooltip configuration object using the [init(toolTip:in:)](init%28tooltip_in_%29.md) method.

## See Also

### Accessing the configuration settings

- [toolTip](tooltip.md): The text to display in the tooltip.
