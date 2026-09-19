> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/uikit/uibutton/configuration-swift.struct/background

# background

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS

The configuration to customize the button background.

## Declaration

```swift
var background: UIBackgroundConfiguration { get set }
```

<a id="Discussion"></a>

## Discussion

The button lays out foreground configuration elements such as title, subtitle, and image on top of background elements. Use this property for detailed control over the background.

## See Also

### Configuring the button background

- [cornerStyle](cornerstyle-swift.property.md): The button style that controls the display behavior of the background corner radius.
- [UIButton.Configuration.CornerStyle](cornerstyle-swift.enum.md): Settings that determine the appearance of the background corner radius.
