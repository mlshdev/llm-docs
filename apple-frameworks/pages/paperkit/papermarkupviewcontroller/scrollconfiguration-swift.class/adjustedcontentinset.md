> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/paperkit/papermarkupviewcontroller/scrollconfiguration-swift.class/adjustedcontentinset

# adjustedContentInset

**Framework:** PaperKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · visionOS 27.0+

The insets that the system derives from the content insets and safe area insets.

## Declaration

```swift
final var adjustedContentInset: UIEdgeInsets { get }
```

<a id="discussion"></a>

## Discussion

When `contentInsetAdjustmentBehavior` allows, the scroll view may incorporate its safe area insets into the adjusted content inset.

## See Also

### Configuring content insets

- [contentInset](contentinset-1ktjn.md): The custom distance to inset the content view from the scroll view edges.
- [contentInset](contentinset-3vn4v.md): The custom distance to inset the content view from the safe area or scroll view edges.
- [contentInsetAdjustmentBehavior](contentinsetadjustmentbehavior.md): The behavior for determining the adjusted content inset.
