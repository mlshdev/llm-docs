> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/uikit/uibutton/configuration-swift.struct/contentinsets

# contentInsets

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS

The distance from the button’s content area to its bounds.

## Declaration

```swift
var contentInsets: NSDirectionalEdgeInsets { get set }
```

<a id="Discussion"></a>

## Discussion

A button has a default inset based on its styling. This property is an additional inset applied after that default inset.

## See Also

### Configuring layout

- [buttonSize](buttonsize.md): A size that requests a preferred size for the button.
- [UIButton.Configuration.Size](size.md): A predefined size for button elements.
- [setDefaultContentInsets()](setdefaultcontentinsets%28%29.md): Restores the default content insets.
