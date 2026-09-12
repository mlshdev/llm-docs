> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nswindow/collectionbehavior-swift.struct](https://developer.apple.com/documentation/appkit/nswindow/collectionbehavior-swift.struct)

# NSWindow.CollectionBehavior (Swift)

**Framework:** AppKit  
**Kind:** Structure  
**Availability:** macOS 10.5+

Window collection behaviors related to Mission Control, Spaces, and Stage Manager.

## Declaration

```swift
struct CollectionBehavior
```

<a id="overview"></a>

## Overview

Collection behaviors are properties you set on windows to control their display characteristics in window management technologies. Use them to specify a preference on how windows behave in window management technologies like Mission Control, Spaces, and Stage Manager.

To set a collection behavior on a window, assign one or more behavior options to the window’s [collectionBehavior](collectionbehavior-swift.property.md) property:

**Swift**

```swift
window.collectionBehavior = .primary
```

**Objective-C**

```objc
window.collectionBehavior = NSWindowCollectionBehaviorPrimary;
```

Not all collection behaviors apply to all windowing management technologies, and some are mutually exclusive to their respective groups. For example, [primary](collectionbehavior-swift.struct/primary.md), [auxiliary](collectionbehavior-swift.struct/auxiliary.md), and [canJoinAllApplications](collectionbehavior-swift.struct/canjoinallapplications.md) only apply to full screen and Stage Manager. They’re also mutually exclusive. Specify at most one per window.

## Topics

### Window Collection Behaviors Creation

- [init(rawValue:)](collectionbehavior-swift.struct/init%28rawvalue_%29.md): Creates a window collection behavior using the given raw value.

### Stage Manager and full screen

- [primary](collectionbehavior-swift.struct/primary.md): The behavior marking this window as primary for both Stage Manager and full screen.
- [auxiliary](collectionbehavior-swift.struct/auxiliary.md): The behavior marking this window as auxiliary for both Stage Manager and full screen.
- [canJoinAllApplications](collectionbehavior-swift.struct/canjoinallapplications.md): The behavior marking this window as one that can join all apps for both Stage Manager and full screen.

### Spaces

- [canJoinAllSpaces](collectionbehavior-swift.struct/canjoinallspaces.md): The window can appear in all spaces.
- [moveToActiveSpace](collectionbehavior-swift.struct/movetoactivespace.md): When the window becomes active, move it to the active space instead of switching spaces.

### Mission Control

- [stationary](collectionbehavior-swift.struct/stationary.md): Mission Control doesn’t affect the window, so it stays visible and stationary, like the desktop window.

### Spaces and Mission Control

- [managed](collectionbehavior-swift.struct/managed.md): The window participates in Mission Control and Spaces.
- [transient](collectionbehavior-swift.struct/transient.md): The window floats in Spaces and hides in Mission Control.

### Full screen

- [fullScreenPrimary](collectionbehavior-swift.struct/fullscreenprimary.md): The window can enter full-screen mode.
- [fullScreenAuxiliary](collectionbehavior-swift.struct/fullscreenauxiliary.md): The window displays on the same space as the full screen window.
- [fullScreenNone](collectionbehavior-swift.struct/fullscreennone.md): The window doesn’t support full-screen mode.
- [fullScreenAllowsTiling](collectionbehavior-swift.struct/fullscreenallowstiling.md): The window can be a secondary full screen tile even if it can’t be a full screen window itself.
- [fullScreenDisallowsTiling](collectionbehavior-swift.struct/fullscreendisallowstiling.md): The window doesn’t support being a full-screen tile window, but may support being a full-screen window.

### Window cycling

- [participatesInCycle](collectionbehavior-swift.struct/participatesincycle.md): The window participates in the window cycle for use with the Cycle Through Windows menu item.
- [ignoresCycle](collectionbehavior-swift.struct/ignorescycle.md): The window isn’t part of the window cycle for use with the Cycle Through Windows menu item.

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
- [NSWindow.OcclusionState](occlusionstate-swift.struct.md): Specifies whether the window is occluded.
- [NSWindow.TitleVisibility](titlevisibility-swift.enum.md): Specifies the appearance of the window’s title bar area.
- [NSWindow.UserTabbingPreference](usertabbingpreference-swift.enum.md): A value that indicates the user’s preference for window tabbing.
- [NSWindow.TabbingMode](tabbingmode-swift.enum.md): The preferred tabbing behavior of a window.
- [Application Kit Version for Deferred Window Display Support](../application-kit-version-for-deferred-window-display-support.md): The version of the AppKit.framework containing a specific bug fix or capability.
- [Application Kit Version for Custom Sheet Position](../application-kit-version-for-custom-sheet-position.md): The version of the AppKit.framework containing a specific bug fix or capability.

# NSWindowCollectionBehavior (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS 10.5+

Window collection behaviors related to Mission Control, Spaces, and Stage Manager.

## Declaration

```objectivec
enum NSWindowCollectionBehavior : NSUInteger;
```

<a id="overview"></a>

## Overview

Collection behaviors are properties you set on windows to control their display characteristics in window management technologies. Use them to specify a preference on how windows behave in window management technologies like Mission Control, Spaces, and Stage Manager.

To set a collection behavior on a window, assign one or more behavior options to the window’s [collectionBehavior](collectionbehavior-swift.property.md) property:

**Swift**

```swift
window.collectionBehavior = .primary
```

**Objective-C**

```objc
window.collectionBehavior = NSWindowCollectionBehaviorPrimary;
```

Not all collection behaviors apply to all windowing management technologies, and some are mutually exclusive to their respective groups. For example, [NSWindowCollectionBehaviorPrimary](collectionbehavior-swift.struct/primary.md), [NSWindowCollectionBehaviorAuxiliary](collectionbehavior-swift.struct/auxiliary.md), and [NSWindowCollectionBehaviorCanJoinAllApplications](collectionbehavior-swift.struct/canjoinallapplications.md) only apply to full screen and Stage Manager. They’re also mutually exclusive. Specify at most one per window.

## Topics

### Stage Manager and full screen

- [NSWindowCollectionBehaviorPrimary](collectionbehavior-swift.struct/primary.md): The behavior marking this window as primary for both Stage Manager and full screen.
- [NSWindowCollectionBehaviorAuxiliary](collectionbehavior-swift.struct/auxiliary.md): The behavior marking this window as auxiliary for both Stage Manager and full screen.
- [NSWindowCollectionBehaviorCanJoinAllApplications](collectionbehavior-swift.struct/canjoinallapplications.md): The behavior marking this window as one that can join all apps for both Stage Manager and full screen.

### Spaces

- [NSWindowCollectionBehaviorDefault](../nswindowcollectionbehavior/nswindowcollectionbehaviordefault.md): The window appears in only one space at a time.
- [NSWindowCollectionBehaviorCanJoinAllSpaces](collectionbehavior-swift.struct/canjoinallspaces.md): The window can appear in all spaces.
- [NSWindowCollectionBehaviorMoveToActiveSpace](collectionbehavior-swift.struct/movetoactivespace.md): When the window becomes active, move it to the active space instead of switching spaces.

### Mission Control

- [NSWindowCollectionBehaviorStationary](collectionbehavior-swift.struct/stationary.md): Mission Control doesn’t affect the window, so it stays visible and stationary, like the desktop window.

### Spaces and Mission Control

- [NSWindowCollectionBehaviorManaged](collectionbehavior-swift.struct/managed.md): The window participates in Mission Control and Spaces.
- [NSWindowCollectionBehaviorTransient](collectionbehavior-swift.struct/transient.md): The window floats in Spaces and hides in Mission Control.

### Full screen

- [NSWindowCollectionBehaviorFullScreenPrimary](collectionbehavior-swift.struct/fullscreenprimary.md): The window can enter full-screen mode.
- [NSWindowCollectionBehaviorFullScreenAuxiliary](collectionbehavior-swift.struct/fullscreenauxiliary.md): The window displays on the same space as the full screen window.
- [NSWindowCollectionBehaviorFullScreenNone](collectionbehavior-swift.struct/fullscreennone.md): The window doesn’t support full-screen mode.
- [NSWindowCollectionBehaviorFullScreenAllowsTiling](collectionbehavior-swift.struct/fullscreenallowstiling.md): The window can be a secondary full screen tile even if it can’t be a full screen window itself.
- [NSWindowCollectionBehaviorFullScreenDisallowsTiling](collectionbehavior-swift.struct/fullscreendisallowstiling.md): The window doesn’t support being a full-screen tile window, but may support being a full-screen window.

### Window cycling

- [NSWindowCollectionBehaviorParticipatesInCycle](collectionbehavior-swift.struct/participatesincycle.md): The window participates in the window cycle for use with the Cycle Through Windows menu item.
- [NSWindowCollectionBehaviorIgnoresCycle](collectionbehavior-swift.struct/ignorescycle.md): The window isn’t part of the window cycle for use with the Cycle Through Windows menu item.

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
- [NSWindowOcclusionState](occlusionstate-swift.struct.md): Specifies whether the window is occluded.
- [NSWindowTitleVisibility](titlevisibility-swift.enum.md): Specifies the appearance of the window’s title bar area.
- [NSWindowUserTabbingPreference](usertabbingpreference-swift.enum.md): A value that indicates the user’s preference for window tabbing.
- [NSWindowTabbingMode](tabbingmode-swift.enum.md): The preferred tabbing behavior of a window.
- [Application Kit Version for Deferred Window Display Support](../application-kit-version-for-deferred-window-display-support.md): The version of the AppKit.framework containing a specific bug fix or capability.
- [Application Kit Version for Custom Sheet Position](../application-kit-version-for-custom-sheet-position.md): The version of the AppKit.framework containing a specific bug fix or capability.
