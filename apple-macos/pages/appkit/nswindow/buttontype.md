> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nswindow/buttontype](https://developer.apple.com/documentation/appkit/nswindow/buttontype)

# NSWindow.ButtonType (Swift)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS

Constants that provide a way to access standard title bar buttons.

## Declaration

```swift
enum ButtonType
```

## Topics

### Constants

- [NSWindow.ButtonType.closeButton](buttontype/closebutton.md): The close button.
- [NSWindow.ButtonType.miniaturizeButton](buttontype/miniaturizebutton.md): The minimize button.
- [NSWindow.ButtonType.zoomButton](buttontype/zoombutton.md): The zoom button.
- [NSWindow.ButtonType.toolbarButton](buttontype/toolbarbutton.md): The toolbar button.
- [NSWindow.ButtonType.documentIconButton](buttontype/documenticonbutton.md): The document icon button.
- [NSWindow.ButtonType.documentVersionsButton](buttontype/documentversionsbutton.md): The document versions button.
- [fullScreenButton](buttontype/fullscreenbutton.md): Deprecated. The fullscreen icon button.

### Initializers

- [init(rawValue:)](buttontype/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Constants

- [NSWindow.SelectionDirection](selectiondirection.md): Constants that specify the direction a window is currently using to change the key view.
- [NSRunLoop—Ordering Modes for NSWindow](../nsrunloop-ordering-modes-for-nsw.md): Constants that specify the priority for runloop messages.
- [NSWindow.Depth](depth.md): A type that represents the depth, or amount of memory, for a single pixel in a window or screen.
- [NSWindow.BackingStoreType](backingstoretype.md): Constants that specify how the window device buffers the drawing done in a window.
- [NSWindow.OrderingMode](orderingmode.md): Constants that let you specify how a window is ordered relative to another window.
- [NSWindow.SharingType](sharingtype-swift.enum.md): Constants that represent the access levels other processes can have to a window’s content.
- [NSWindow.NumberListOptions](numberlistoptions.md): Options to use when retrieving window numbers from the system.
- [NSWindow.AnimationBehavior](animationbehavior-swift.enum.md): Constants that control the automatic window animation behavior windows use when ordering to the front or out of view.
- [NSWindow.CollectionBehavior](collectionbehavior-swift.struct.md): Window collection behaviors related to Mission Control, Spaces, and Stage Manager.
- [NSWindow.OcclusionState](occlusionstate-swift.struct.md): Specifies whether the window is occluded.
- [NSWindow.TitleVisibility](titlevisibility-swift.enum.md): Specifies the appearance of the window’s title bar area.
- [NSWindow.UserTabbingPreference](usertabbingpreference-swift.enum.md): A value that indicates the user’s preference for window tabbing.
- [NSWindow.TabbingMode](tabbingmode-swift.enum.md): The preferred tabbing behavior of a window.
- [Application Kit Version for Deferred Window Display Support](../application-kit-version-for-deferred-window-display-support.md): The version of the AppKit.framework containing a specific bug fix or capability.
- [Application Kit Version for Custom Sheet Position](../application-kit-version-for-custom-sheet-position.md): The version of the AppKit.framework containing a specific bug fix or capability.

# NSWindowButton (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS

Constants that provide a way to access standard title bar buttons.

## Declaration

```objectivec
enum NSWindowButton : NSUInteger;
```

## Topics

### Constants

- [NSWindowCloseButton](buttontype/closebutton.md): The close button.
- [NSWindowMiniaturizeButton](buttontype/miniaturizebutton.md): The minimize button.
- [NSWindowZoomButton](buttontype/zoombutton.md): The zoom button.
- [NSWindowToolbarButton](buttontype/toolbarbutton.md): The toolbar button.
- [NSWindowDocumentIconButton](buttontype/documenticonbutton.md): The document icon button.
- [NSWindowDocumentVersionsButton](buttontype/documentversionsbutton.md): The document versions button.
- [NSWindowFullScreenButton](buttontype/fullscreenbutton.md): Deprecated. The fullscreen icon button.

## See Also

### Constants

- [NSSelectionDirection](selectiondirection.md): Constants that specify the direction a window is currently using to change the key view.
- [NSRunLoop—Ordering Modes for NSWindow](../nsrunloop-ordering-modes-for-nsw.md): Constants that specify the priority for runloop messages.
- [NSWindowDepth](depth.md): A type that represents the depth, or amount of memory, for a single pixel in a window or screen.
- [NSBackingStoreType](backingstoretype.md): Constants that specify how the window device buffers the drawing done in a window.
- [NSWindowOrderingMode](orderingmode.md): Constants that let you specify how a window is ordered relative to another window.
- [NSWindowSharingType](sharingtype-swift.enum.md): Constants that represent the access levels other processes can have to a window’s content.
- [NSWindowNumberListOptions](numberlistoptions.md): Options to use when retrieving window numbers from the system.
- [NSWindowAnimationBehavior](animationbehavior-swift.enum.md): Constants that control the automatic window animation behavior windows use when ordering to the front or out of view.
- [NSWindowCollectionBehavior](collectionbehavior-swift.struct.md): Window collection behaviors related to Mission Control, Spaces, and Stage Manager.
- [NSWindowOcclusionState](occlusionstate-swift.struct.md): Specifies whether the window is occluded.
- [NSWindowTitleVisibility](titlevisibility-swift.enum.md): Specifies the appearance of the window’s title bar area.
- [NSWindowUserTabbingPreference](usertabbingpreference-swift.enum.md): A value that indicates the user’s preference for window tabbing.
- [NSWindowTabbingMode](tabbingmode-swift.enum.md): The preferred tabbing behavior of a window.
- [Application Kit Version for Deferred Window Display Support](../application-kit-version-for-deferred-window-display-support.md): The version of the AppKit.framework containing a specific bug fix or capability.
- [Application Kit Version for Custom Sheet Position](../application-kit-version-for-custom-sheet-position.md): The version of the AppKit.framework containing a specific bug fix or capability.
