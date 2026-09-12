> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/paperkit/papermarkupviewcontroller/scrollconfiguration-swift.class/visiblescrollindicators](https://developer.apple.com/documentation/paperkit/papermarkupviewcontroller/scrollconfiguration-swift.class/visiblescrollindicators)

# visibleScrollIndicators

**Framework:** PaperKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

The axes for which scroll indicators are visible.

## Declaration

```swift
final var visibleScrollIndicators: PaperMarkupViewController.ScrollConfiguration.Axis { get set }
```

<a id="discussion"></a>

## Discussion

Scroll indicators appear while tracking and fade out after tracking. Default is `[.vertical, .horizontal]`.

## See Also

### Configuring scroll indicators

- [PaperMarkupViewController.ScrollConfiguration.Axis](axis.md): The axes you use to specify scroll view behavior.
