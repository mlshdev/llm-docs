> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/paperkit/papermarkupviewcontroller/scrollconfiguration-swift.class/contentinset-3vn4v](https://developer.apple.com/documentation/paperkit/papermarkupviewcontroller/scrollconfiguration-swift.class/contentinset-3vn4v)

# contentInset

**Framework:** PaperKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · visionOS 27.0+

The custom distance to inset the content view from the safe area or scroll view edges.

## Declaration

```swift
final var contentInset: UIEdgeInsets { get set }
```

<a id="discussion"></a>

## Discussion

Use this property to add additional scroll area around content. Default is `.zero`.

## See Also

### Configuring content insets

- [contentInset](contentinset-1ktjn.md): The custom distance to inset the content view from the scroll view edges.
- [adjustedContentInset](adjustedcontentinset.md): The insets that the system derives from the content insets and safe area insets.
- [contentInsetAdjustmentBehavior](contentinsetadjustmentbehavior.md): The behavior for determining the adjusted content inset.
