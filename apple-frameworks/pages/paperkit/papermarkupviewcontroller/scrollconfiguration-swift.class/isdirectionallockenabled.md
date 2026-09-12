> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/paperkit/papermarkupviewcontroller/scrollconfiguration-swift.class/isdirectionallockenabled](https://developer.apple.com/documentation/paperkit/papermarkupviewcontroller/scrollconfiguration-swift.class/isdirectionallockenabled)

# isDirectionalLockEnabled

**Framework:** PaperKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

A Boolean value that determines whether scrolling is disabled in a particular direction.

## Declaration

```swift
final var isDirectionalLockEnabled: Bool { get set }
```

<a id="discussion"></a>

## Discussion

When `true`, the scroll view tries to lock scrolling to the vertical or horizontal direction while dragging. Default is `false`.

## See Also

### Configuring scroll state

- [isScrollEnabled](isscrollenabled.md): A Boolean value that determines whether scrolling is enabled.
- [scrollsToTop](scrollstotop.md): A Boolean value that controls whether the scroll-to-top gesture is enabled.
