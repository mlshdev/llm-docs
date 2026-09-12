> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uibutton/configuration-swift.struct/buttonsize](https://developer.apple.com/documentation/uikit/uibutton/configuration-swift.struct/buttonsize)

# buttonSize

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS

A size that requests a preferred size for the button.

## Declaration

```swift
var buttonSize: UIButton.Configuration.Size { get set }
```

<a id="Discussion"></a>

## Discussion

The size indicates a system-defined size you prefer for this button. The exact size of the button may change regardless of this value.

## See Also

### Configuring layout

- [UIButton.Configuration.Size](size.md): A predefined size for button elements.
- [contentInsets](contentinsets.md): The distance from the button’s content area to its bounds.
- [setDefaultContentInsets()](setdefaultcontentinsets%28%29.md): Restores the default content insets.
