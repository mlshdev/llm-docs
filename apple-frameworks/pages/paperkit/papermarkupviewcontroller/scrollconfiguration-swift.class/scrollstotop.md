> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/paperkit/papermarkupviewcontroller/scrollconfiguration-swift.class/scrollstotop](https://developer.apple.com/documentation/paperkit/papermarkupviewcontroller/scrollconfiguration-swift.class/scrollstotop)

# scrollsToTop

**Framework:** PaperKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

A Boolean value that controls whether the scroll-to-top gesture is enabled.

## Declaration

```swift
final var scrollsToTop: Bool { get set }
```

<a id="discussion"></a>

## Discussion

When a person taps the status bar, the scroll view closest to the status bar scrolls to the top, but only if its `scrollsToTop` property is `true`, its delegate does not return `false` from `scrollViewShouldScrollToTop:`, and it is not already at the top.

On iPhone, this gesture works only if one on-screen scroll view has `scrollsToTop == true`. If more than one exists, none scroll to the top.

Default is `true`.

## See Also

### Configuring scroll state

- [isScrollEnabled](isscrollenabled.md): A Boolean value that determines whether scrolling is enabled.
- [isDirectionalLockEnabled](isdirectionallockenabled.md): A Boolean value that determines whether scrolling is disabled in a particular direction.
