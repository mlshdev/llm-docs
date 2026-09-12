> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uibutton/configuration-swift.struct/indicator-swift.property](https://developer.apple.com/documentation/uikit/uibutton/configuration-swift.struct/indicator-swift.property)

# indicator

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · tvOS 16.0+ · visionOS

The style of the indicator that appears on the button.

## Declaration

```swift
var indicator: UIButton.Configuration.Indicator { get set }
```

<a id="Discussion"></a>

## Discussion

Use this property to control the style of the indicator that appears on the trailing edge of the button. For example, the following code disables the indicator by setting this style to [UIButton.Configuration.Indicator.none](indicator-swift.enum/none.md).

```swift
var config = UIButton.Configuration.filled()
config.indicator = .none
```

## See Also

### Configuring the indicator

- [UIButton.Configuration.Indicator](indicator-swift.enum.md): Constants that determine the style of the indicator that appears on a button.
- [indicatorColorTransformer](indicatorcolortransformer.md): The color transformer for resolving the indicator color.
