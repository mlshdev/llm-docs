> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nswindow/occlusionstate-swift.struct/visible](https://developer.apple.com/documentation/appkit/nswindow/occlusionstate-swift.struct/visible)

# visible (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS 10.9+

If set, at least part of the window is visible; if not set, the entire window is occluded. A window that has a nonrectangular shape can be entirely occluded onscreen, but if its bounding box falls into a visible region, the window is considered to be visible. Note that a completely transparent window may also be considered visible.

## Declaration

```swift
static var visible: NSWindow.OcclusionState { get }
```

# NSWindowOcclusionStateVisible (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration Case  
**Availability:** macOS 10.9+

If set, at least part of the window is visible; if not set, the entire window is occluded. A window that has a nonrectangular shape can be entirely occluded onscreen, but if its bounding box falls into a visible region, the window is considered to be visible. Note that a completely transparent window may also be considered visible.

## Declaration

```objectivec
NSWindowOcclusionStateVisible
```
