> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsapplication/occlusionstate-swift.struct/visible](https://developer.apple.com/documentation/appkit/nsapplication/occlusionstate-swift.struct/visible)

# visible (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS 10.9+

If set, at least part of any window owned by this app is visible.

## Declaration

```swift
static var visible: NSApplication.OcclusionState { get }
```

<a id="Discussion"></a>

## Discussion

If not set, all parts of all windows owned by this app are completely occluded. The menu bar does not count as a window owned by this app, so if only the menu bar is showing then the app is considered not visible. Status items, however, have windows owned by your app. If the status item is present in the menu bar, your app will be considered visible as long as the menu bar is visible.

# NSApplicationOcclusionStateVisible (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration Case  
**Availability:** macOS 10.9+

If set, at least part of any window owned by this app is visible.

## Declaration

```objectivec
NSApplicationOcclusionStateVisible
```

<a id="Discussion"></a>

## Discussion

If not set, all parts of all windows owned by this app are completely occluded. The menu bar does not count as a window owned by this app, so if only the menu bar is showing then the app is considered not visible. Status items, however, have windows owned by your app. If the status item is present in the menu bar, your app will be considered visible as long as the menu bar is visible.
