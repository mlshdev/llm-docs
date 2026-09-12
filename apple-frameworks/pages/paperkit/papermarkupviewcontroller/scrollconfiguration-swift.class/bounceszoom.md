> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/paperkit/papermarkupviewcontroller/scrollconfiguration-swift.class/bounceszoom](https://developer.apple.com/documentation/paperkit/papermarkupviewcontroller/scrollconfiguration-swift.class/bounceszoom)

# bouncesZoom

**Framework:** PaperKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

A Boolean value that controls whether the scroll view animates the content scaling when the scaling exceeds the maximum or minimum limits.

## Declaration

```swift
final var bouncesZoom: Bool { get set }
```

<a id="discussion"></a>

## Discussion

When enabled, a person can zoom past the minimum or maximum scale while gesturing, and the scale animates to the minimum or maximum value when the gesture ends. Default is `true`.

## See Also

### Configuring bouncing behavior

- [bounces](bounces.md): The axes for which the scroll view bounces past the edge of content and back again.
- [alwaysBounces](alwaysbounces.md): The axes for which bouncing always occurs when scrolling reaches the end of the content.
