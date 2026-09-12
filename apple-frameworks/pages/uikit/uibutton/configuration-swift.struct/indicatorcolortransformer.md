> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uibutton/configuration-swift.struct/indicatorcolortransformer](https://developer.apple.com/documentation/uikit/uibutton/configuration-swift.struct/indicatorcolortransformer)

# indicatorColorTransformer

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · tvOS 16.0+ · visionOS

The color transformer for resolving the indicator color.

## Declaration

```swift
var indicatorColorTransformer: UIConfigurationColorTransformer? { get set }
```

<a id="Discussion"></a>

## Discussion

Use this color transformer to set a custom color for [indicator](../../uibuttonconfiguration/indicator.md). For example, the following code uses a grayscale color for the indicator instead of the default color.

```swift
var config = UIButton.Configuration.filled()
config.indicatorColorTransformer = UIConfigurationColorTransformer.grayscale
```

## See Also

### Configuring the indicator

- [indicator](indicator-swift.property.md): The style of the indicator that appears on the button.
- [UIButton.Configuration.Indicator](indicator-swift.enum.md): Constants that determine the style of the indicator that appears on a button.
