> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/paperkit/papermarkupviewcontroller/scrollconfiguration-swift.class/contentinsetadjustmentbehavior](https://developer.apple.com/documentation/paperkit/papermarkupviewcontroller/scrollconfiguration-swift.class/contentinsetadjustmentbehavior)

# contentInsetAdjustmentBehavior

**Framework:** PaperKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · visionOS 27.0+

The behavior for determining the adjusted content inset.

## Declaration

```swift
final var contentInsetAdjustmentBehavior: UIScrollView.ContentInsetAdjustmentBehavior { get set }
```

<a id="discussion"></a>

## Discussion

Default is `.automatic`.

## See Also

### Configuring content insets

- [contentInset](contentinset-1ktjn.md): The custom distance to inset the content view from the scroll view edges.
- [contentInset](contentinset-3vn4v.md): The custom distance to inset the content view from the safe area or scroll view edges.
- [adjustedContentInset](adjustedcontentinset.md): The insets that the system derives from the content insets and safe area insets.
