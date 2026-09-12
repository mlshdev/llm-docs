> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uibuttonconfiguration/macidiomstyle](https://developer.apple.com/documentation/uikit/uibuttonconfiguration/macidiomstyle)

# macIdiomStyle

**Interface language:** Objective-C

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS 1.0+

The style to use when this button appears in macOS.

## Declaration

```objectivec
@property (nonatomic, assign, readwrite) UIButtonConfigurationMacIdiomStyle macIdiomStyle;
```

<a id="Discussion"></a>

## Discussion

Use this property when building your app with Mac Catalyst. The value [UIButtonConfigurationMacIdiomStyleAutomatic](../uibuttonconfigurationmacidiomstyle/uibuttonconfigurationmacidiomstyleautomatic.md) lets the system choose the appropriate style. Select a specific style to force the button to always use that style.

## See Also

### Configuring the appearance on macOS

- [UIButtonConfigurationMacIdiomStyle](../uibuttonconfigurationmacidiomstyle.md): The button style your app uses when running in macOS.
