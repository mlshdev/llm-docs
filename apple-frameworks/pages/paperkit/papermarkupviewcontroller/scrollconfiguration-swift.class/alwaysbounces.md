> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/paperkit/papermarkupviewcontroller/scrollconfiguration-swift.class/alwaysbounces](https://developer.apple.com/documentation/paperkit/papermarkupviewcontroller/scrollconfiguration-swift.class/alwaysbounces)

# alwaysBounces

**Framework:** PaperKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

The axes for which bouncing always occurs when scrolling reaches the end of the content.

## Declaration

```swift
final var alwaysBounces: PaperMarkupViewController.ScrollConfiguration.Axis { get set }
```

<a id="discussion"></a>

## Discussion

If an axis is included and `bounces` includes that axis, bouncing occurs even if content is smaller than bounds for that axis. Default is `[]`.

## See Also

### Configuring bouncing behavior

- [bounces](bounces.md): The axes for which the scroll view bounces past the edge of content and back again.
- [bouncesZoom](bounceszoom.md): A Boolean value that controls whether the scroll view animates the content scaling when the scaling exceeds the maximum or minimum limits.
