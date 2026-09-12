> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uibuttonconfiguration/indicatorcolortransformer](https://developer.apple.com/documentation/uikit/uibuttonconfiguration/indicatorcolortransformer)

# indicatorColorTransformer

**Interface language:** Objective-C

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · tvOS 16.0+ · visionOS 1.0+

The color transformer for resolving the indicator color.

## Declaration

```objectivec
@property (nonatomic, copy, readwrite, nullable) UIConfigurationColorTransformer indicatorColorTransformer;
```

<a id="Discussion"></a>

## Discussion

Use this color transformer to set a custom color for [indicator](indicator.md). For example, the following code uses a grayscale color for the indicator instead of the default color.

```objc
UIButtonConfiguration *config = UIButtonConfiguration.filledButtonConfiguration;
config.indicatorColorTransformer = UIConfigurationColorTransformerGrayscale;
```

## See Also

### Configuring the indicator

- [indicator](indicator.md): The style of the indicator that appears on the button.
- [UIButtonConfigurationIndicator](../uibuttonconfigurationindicator.md): Constants that determine the style of the indicator that appears on a button.
