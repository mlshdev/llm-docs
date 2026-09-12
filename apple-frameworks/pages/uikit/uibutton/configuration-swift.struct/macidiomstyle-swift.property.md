> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uibutton/configuration-swift.struct/macidiomstyle-swift.property](https://developer.apple.com/documentation/uikit/uibutton/configuration-swift.struct/macidiomstyle-swift.property)

# macIdiomStyle

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS

The style to use when this button appears in macOS.

## Declaration

```swift
var macIdiomStyle: UIButton.Configuration.MacIdiomStyle { get set }
```

<a id="Discussion"></a>

## Discussion

Use this property when building your app with Mac Catalyst. The value [UIButton.Configuration.MacIdiomStyle.automatic](macidiomstyle-swift.enum/automatic.md) lets the system choose the appropriate style. Select a specific style to force the button to always use that style.

## See Also

### Configuring the appearance on macOS

- [UIButton.Configuration.MacIdiomStyle](macidiomstyle-swift.enum.md): The button style your app uses when running in macOS.
