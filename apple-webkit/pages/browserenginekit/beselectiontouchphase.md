> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/browserenginekit/beselectiontouchphase](https://developer.apple.com/documentation/browserenginekit/beselectiontouchphase)

# BESelectionTouchPhase (Swift)

**Framework:** BrowserEngineKit  
**Kind:** Enumeration  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · macOS · tvOS 17.4+ · visionOS 1.1+

The different phases of touch interaction during text selection operations.

## Declaration

```swift
enum BESelectionTouchPhase
```

<a id="overview"></a>

## Overview

The [BETextInput](betextinput.md) protocol provides your app an instance of this structure as an argument to the  [adjustSelectionBoundary(to:touchPhase:baseIsStart:flags:)](betextinput/adjustselectionboundary%28to_touchphase_baseisstart_flags_%29.md) callback.

## Topics

### Identifying a selection touch phase

- [BESelectionTouchPhase.ended](beselectiontouchphase/ended.md): A phase that indicates when the touch interaction for text selection completes without specifying movement direction.
- [BESelectionTouchPhase.endedMovingBackward](beselectiontouchphase/endedmovingbackward.md): A phase that indicates when the touch interaction ends after moving in a backward direction.
- [BESelectionTouchPhase.endedMovingForward](beselectiontouchphase/endedmovingforward.md): A phase that indicates when the touch interaction ends after moving in a forward direction.
- [BESelectionTouchPhase.endedNotMoving](beselectiontouchphase/endednotmoving.md): A phase that indicates when the touch interaction ends without any movement of the selection boundaries.
- [BESelectionTouchPhase.moved](beselectiontouchphase/moved.md): A phase that indicates that a touch actively adjusts the text selection boundaries.
- [BESelectionTouchPhase.started](beselectiontouchphase/started.md): A phase that indicates when a new touch interaction for text selection begins.

### Creating a selection touch phase

- [init(rawValue:)](beselectiontouchphase/init%28rawvalue_%29.md): Creates a text selection phase with the specified underlying value.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Text selection

- [BETextSelectionDirectionNavigation](betextselectiondirectionnavigation.md): A protocol that defines methods for cursor and selection adjustments.
- [BESelectionFlags](beselectionflags.md): Flags that indicate different states or characteristics of a text selection.

# BESelectionTouchPhase (Objective-C)

**Framework:** BrowserEngineKit  
**Kind:** Enumeration  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · macOS · tvOS 17.4+ · visionOS 1.1+

The different phases of touch interaction during text selection operations.

## Declaration

```objectivec
enum BESelectionTouchPhase : NSInteger;
```

<a id="overview"></a>

## Overview

The [BETextInput](betextinput.md) protocol provides your app an instance of this structure as an argument to the  [adjustSelectionBoundaryToPoint:touchPhase:baseIsStart:flags:](betextinput/adjustselectionboundary%28to_touchphase_baseisstart_flags_%29.md) callback.

## Topics

### Identifying a selection touch phase

- [BESelectionTouchPhaseEnded](beselectiontouchphase/ended.md): A phase that indicates when the touch interaction for text selection completes without specifying movement direction.
- [BESelectionTouchPhaseEndedMovingBackward](beselectiontouchphase/endedmovingbackward.md): A phase that indicates when the touch interaction ends after moving in a backward direction.
- [BESelectionTouchPhaseEndedMovingForward](beselectiontouchphase/endedmovingforward.md): A phase that indicates when the touch interaction ends after moving in a forward direction.
- [BESelectionTouchPhaseEndedNotMoving](beselectiontouchphase/endednotmoving.md): A phase that indicates when the touch interaction ends without any movement of the selection boundaries.
- [BESelectionTouchPhaseMoved](beselectiontouchphase/moved.md): A phase that indicates that a touch actively adjusts the text selection boundaries.
- [BESelectionTouchPhaseStarted](beselectiontouchphase/started.md): A phase that indicates when a new touch interaction for text selection begins.

## See Also

### Text selection

- [BETextSelectionDirectionNavigation](betextselectiondirectionnavigation.md): A protocol that defines methods for cursor and selection adjustments.
- [BESelectionFlags](beselectionflags.md): Flags that indicate different states or characteristics of a text selection.
