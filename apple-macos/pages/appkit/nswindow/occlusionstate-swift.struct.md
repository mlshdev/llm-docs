> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nswindow/occlusionstate-swift.struct](https://developer.apple.com/documentation/appkit/nswindow/occlusionstate-swift.struct)

# NSWindow.OcclusionState (Swift)

**Framework:** AppKit  
**Kind:** Structure  
**Availability:** macOS 10.9+

Specifies whether the window is occluded.

## Declaration

```swift
struct OcclusionState
```

## Topics

### Constants

- [visible](occlusionstate-swift.struct/visible.md): If set, at least part of the window is visible; if not set, the entire window is occluded. A window that has a nonrectangular shape can be entirely occluded onscreen, but if its bounding box falls into a visible region, the window is considered to be visible. Note that a completely transparent window may also be considered visible.

### Occlusion State Creation

- [init(rawValue:)](occlusionstate-swift.struct/init%28rawvalue_%29.md): Creates an occlusion state using the given raw value.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

## See Also

### Constants

- [NSWindow.SelectionDirection](selectiondirection.md): Constants that specify the direction a window is currently using to change the key view.
- [NSWindow.ButtonType](buttontype.md): Constants that provide a way to access standard title bar buttons.
- [NSRunLoop—Ordering Modes for NSWindow](../nsrunloop-ordering-modes-for-nsw.md): Constants that specify the priority for runloop messages.
- [NSWindow.Depth](depth.md): A type that represents the depth, or amount of memory, for a single pixel in a window or screen.
- [NSWindow.BackingStoreType](backingstoretype.md): Constants that specify how the window device buffers the drawing done in a window.
- [NSWindow.OrderingMode](orderingmode.md): Constants that let you specify how a window is ordered relative to another window.
- [NSWindow.SharingType](sharingtype-swift.enum.md): Constants that represent the access levels other processes can have to a window’s content.
- [NSWindow.NumberListOptions](numberlistoptions.md): Options to use when retrieving window numbers from the system.
- [NSWindow.AnimationBehavior](animationbehavior-swift.enum.md): Constants that control the automatic window animation behavior windows use when ordering to the front or out of view.
- [NSWindow.CollectionBehavior](collectionbehavior-swift.struct.md): Window collection behaviors related to Mission Control, Spaces, and Stage Manager.
- [NSWindow.TitleVisibility](titlevisibility-swift.enum.md): Specifies the appearance of the window’s title bar area.
- [NSWindow.UserTabbingPreference](usertabbingpreference-swift.enum.md): A value that indicates the user’s preference for window tabbing.
- [NSWindow.TabbingMode](tabbingmode-swift.enum.md): The preferred tabbing behavior of a window.
- [Application Kit Version for Deferred Window Display Support](../application-kit-version-for-deferred-window-display-support.md): The version of the AppKit.framework containing a specific bug fix or capability.
- [Application Kit Version for Custom Sheet Position](../application-kit-version-for-custom-sheet-position.md): The version of the AppKit.framework containing a specific bug fix or capability.

# NSWindowOcclusionState (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS 10.9+

Specifies whether the window is occluded.

## Declaration

```objectivec
enum NSWindowOcclusionState : NSUInteger;
```

## Topics

### Constants

- [NSWindowOcclusionStateVisible](occlusionstate-swift.struct/visible.md): If set, at least part of the window is visible; if not set, the entire window is occluded. A window that has a nonrectangular shape can be entirely occluded onscreen, but if its bounding box falls into a visible region, the window is considered to be visible. Note that a completely transparent window may also be considered visible.

## See Also

### Constants

- [NSSelectionDirection](selectiondirection.md): Constants that specify the direction a window is currently using to change the key view.
- [NSWindowButton](buttontype.md): Constants that provide a way to access standard title bar buttons.
- [NSRunLoop—Ordering Modes for NSWindow](../nsrunloop-ordering-modes-for-nsw.md): Constants that specify the priority for runloop messages.
- [NSWindowDepth](depth.md): A type that represents the depth, or amount of memory, for a single pixel in a window or screen.
- [NSBackingStoreType](backingstoretype.md): Constants that specify how the window device buffers the drawing done in a window.
- [NSWindowOrderingMode](orderingmode.md): Constants that let you specify how a window is ordered relative to another window.
- [NSWindowSharingType](sharingtype-swift.enum.md): Constants that represent the access levels other processes can have to a window’s content.
- [NSWindowNumberListOptions](numberlistoptions.md): Options to use when retrieving window numbers from the system.
- [NSWindowAnimationBehavior](animationbehavior-swift.enum.md): Constants that control the automatic window animation behavior windows use when ordering to the front or out of view.
- [NSWindowCollectionBehavior](collectionbehavior-swift.struct.md): Window collection behaviors related to Mission Control, Spaces, and Stage Manager.
- [NSWindowTitleVisibility](titlevisibility-swift.enum.md): Specifies the appearance of the window’s title bar area.
- [NSWindowUserTabbingPreference](usertabbingpreference-swift.enum.md): A value that indicates the user’s preference for window tabbing.
- [NSWindowTabbingMode](tabbingmode-swift.enum.md): The preferred tabbing behavior of a window.
- [Application Kit Version for Deferred Window Display Support](../application-kit-version-for-deferred-window-display-support.md): The version of the AppKit.framework containing a specific bug fix or capability.
- [Application Kit Version for Custom Sheet Position](../application-kit-version-for-custom-sheet-position.md): The version of the AppKit.framework containing a specific bug fix or capability.
