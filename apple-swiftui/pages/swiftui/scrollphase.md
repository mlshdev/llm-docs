> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/scrollphase](https://developer.apple.com/documentation/swiftui/scrollphase)

# ScrollPhase

**Framework:** SwiftUI  
**Kind:** Enumeration  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

A type that describes the state of a scroll gesture of a scrollable view like a scroll view.

## Declaration

```swift
@frozen enum ScrollPhase
```

<a id="overview"></a>

## Overview

A scroll gesture can be in one of four phases: \- idle: No active scroll is occurring. \- panning: An active scroll being driven by the user is occurring. \- decelerating: The user has stopped driving a scroll and the scroll view is decelerating to its final target. \- animating: The system is animating to a final target as a result of a programmatic animated scroll from using a [ScrollViewReader](scrollviewreader.md) or [scrollPosition(id:anchor:)](view/scrollposition%28id_anchor_%29.md) modifier.

SwiftUI provides you a value of this type when using the [onScrollPhaseChange(\_:)](view/onscrollphasechange%28__%29.md) modifier.

## Topics

### Getting scroll gesture states

- [ScrollPhase.animating](scrollphase/animating.md): The animating phase where the scroll view is animating towards a final target.
- [ScrollPhase.decelerating](scrollphase/decelerating.md): The decelerating phase where the user use has stopped interacting with the scroll view and the scroll view is decelerating towards its final target.
- [ScrollPhase.idle](scrollphase/idle.md): The idle phase where no kind of scrolling is occurring.
- [ScrollPhase.interacting](scrollphase/interacting.md): The interacting phase where the user is interacting with the scroll view.
- [ScrollPhase.tracking](scrollphase/tracking.md): The tracking phase where the scroll view is tracking a potential scroll by the user but the user hasn’t started a scroll.

### Checking for active scrolling

- [isScrolling](scrollphase/isscrolling.md): Whether the scroll view is actively scrolling.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Responding to scroll view changes

- [onScrollGeometryChange(for:of:action:)](view/onscrollgeometrychange%28for_of_action_%29.md): Adds an action to be performed when a value, created from a scroll geometry, changes.
- [onScrollTargetVisibilityChange(idType:threshold:\_:)](view/onscrolltargetvisibilitychange%28idtype_threshold___%29.md): Adds an action to be called with information about what views would be considered visible.
- [onScrollVisibilityChange(threshold:\_:)](view/onscrollvisibilitychange%28threshold___%29.md): Adds an action to be called when the view crosses the threshold to be considered on/off screen.
- [onScrollPhaseChange(\_:)](view/onscrollphasechange%28__%29.md): Adds an action to perform when the scroll phase of the first scroll view in the hierarchy changes.
- [ScrollGeometry](scrollgeometry.md): A type that defines the geometry of a scroll view.
- [ScrollPhaseChangeContext](scrollphasechangecontext.md): A type that provides you with more content when the phase of a scroll view changes.
