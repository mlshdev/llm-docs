> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uibutton/configuration-swift.struct/cornerstyle-swift.property](https://developer.apple.com/documentation/uikit/uibutton/configuration-swift.struct/cornerstyle-swift.property)

# cornerStyle

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS

The button style that controls the display behavior of the background corner radius.

## Declaration

```swift
var cornerStyle: UIButton.Configuration.CornerStyle { get set }
```

<a id="Discussion"></a>

## Discussion

This property controls the behavior of the [cornerRadius](../../uibackgroundconfiguration-swift.struct/cornerradius.md) you set on the configuration background. The default corner style is [UIButton.Configuration.CornerStyle.dynamic](cornerstyle-swift.enum/dynamic.md).

## See Also

### Configuring the button background

- [background](background.md): The configuration to customize the button background.
- [UIButton.Configuration.CornerStyle](cornerstyle-swift.enum.md): Settings that determine the appearance of the background corner radius.
