> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nswindow/occlusionstate-swift.property](https://developer.apple.com/documentation/appkit/nswindow/occlusionstate-swift.property)

# occlusionState (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.9+

The occlusion state of the window.

## Declaration

```swift
var occlusionState: NSWindow.OcclusionState { get }
```

<a id="Discussion"></a>

## Discussion

When the value of this property is [visible](occlusionstate-swift.struct/visible.md), at least part of the window is visible; otherwise, the window is fully occluded.

## See Also

### Managing Window Visibility and Occlusion State

- [isVisible](isvisible.md): A Boolean value that indicates whether the window is visible onscreen (even when it’s obscured by other windows).

# occlusionState (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.9+

The occlusion state of the window.

## Declaration

```objectivec
@property (readonly) NSWindowOcclusionState occlusionState;
```

<a id="Discussion"></a>

## Discussion

When the value of this property is [NSWindowOcclusionStateVisible](occlusionstate-swift.struct/visible.md), at least part of the window is visible; otherwise, the window is fully occluded.

## See Also

### Managing Window Visibility and Occlusion State

- [visible](isvisible.md): A Boolean value that indicates whether the window is visible onscreen (even when it’s obscured by other windows).
