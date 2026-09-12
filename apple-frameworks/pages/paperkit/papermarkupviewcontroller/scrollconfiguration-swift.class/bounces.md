> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/paperkit/papermarkupviewcontroller/scrollconfiguration-swift.class/bounces](https://developer.apple.com/documentation/paperkit/papermarkupviewcontroller/scrollconfiguration-swift.class/bounces)

# bounces

**Framework:** PaperKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

The axes for which the scroll view bounces past the edge of content and back again.

## Declaration

```swift
final var bounces: PaperMarkupViewController.ScrollConfiguration.Axis { get set }
```

<a id="discussion"></a>

## Discussion

Default is `[.vertical, .horizontal]`.

## See Also

### Configuring bouncing behavior

- [alwaysBounces](alwaysbounces.md): The axes for which bouncing always occurs when scrolling reaches the end of the content.
- [bouncesZoom](bounceszoom.md): A Boolean value that controls whether the scroll view animates the content scaling when the scaling exceeds the maximum or minimum limits.
