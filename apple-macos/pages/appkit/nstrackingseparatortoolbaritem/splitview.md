> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstrackingseparatortoolbaritem/splitview](https://developer.apple.com/documentation/appkit/nstrackingseparatortoolbaritem/splitview)

# splitView (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 11.0+

The vertical split view to align with the toolbar separator.

## Declaration

```swift
var splitView: NSSplitView { get set }
```

<a id="Discussion"></a>

## Discussion

The `splitView` must be in the same window as the toolbar containing the `NSTrackingSeparatorToolbarItem` before showing the toolbar.

## See Also

### configuring a tracking separator

- [dividerIndex](dividerindex.md): The index of the split view divider to align with the tracking separator.

# splitView (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 11.0+

The vertical split view to align with the toolbar separator.

## Declaration

```objectivec
@property (strong) NSSplitView * splitView;
```

<a id="Discussion"></a>

## Discussion

The `splitView` must be in the same window as the toolbar containing the `NSTrackingSeparatorToolbarItem` before showing the toolbar.

## See Also

### configuring a tracking separator

- [dividerIndex](dividerindex.md): The index of the split view divider to align with the tracking separator.
