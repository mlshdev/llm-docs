> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uibuttonconfiguration/background](https://developer.apple.com/documentation/uikit/uibuttonconfiguration/background)

# background

**Interface language:** Objective-C

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS 1.0+

The configuration to customize the button background.

## Declaration

```objectivec
@property (nonatomic, strong, readwrite) UIBackgroundConfiguration * background;
```

<a id="Discussion"></a>

## Discussion

The button lays out foreground configuration elements such as title, subtitle, and image on top of background elements. Use this property for detailed control over the background.

## See Also

### Configuring the button background

- [cornerStyle](cornerstyle.md): The button style that controls the display behavior of the background corner radius.
- [UIButtonConfigurationCornerStyle](../uibuttonconfigurationcornerstyle.md): Settings that determine the appearance of the background corner radius.
