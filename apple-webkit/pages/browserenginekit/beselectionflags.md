> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/browserenginekit/beselectionflags](https://developer.apple.com/documentation/browserenginekit/beselectionflags)

# BESelectionFlags (Swift)

**Framework:** BrowserEngineKit  
**Kind:** Structure  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · macOS · tvOS 17.4+ · visionOS 1.1+

Flags that indicate different states or characteristics of a text selection.

## Declaration

```swift
struct BESelectionFlags
```

<a id="overview"></a>

## Overview

The [BETextInput](betextinput.md) protocol provides your app an instance of this structure as an argument to the  [adjustSelectionBoundary(to:touchPhase:baseIsStart:flags:)](betextinput/adjustselectionboundary%28to_touchphase_baseisstart_flags_%29.md) callback.

## Topics

### Describing a text selection

- [phraseBoundaryChanged](beselectionflags/phraseboundarychanged.md): A flag that indicates whether a text selection crosses or modifies phrase boundaries in an active selection.
- [selectionFlipped](beselectionflags/selectionflipped.md): A flag that indicates whether a text selection is reversed or flipped in direction from its original direction.
- [wordIsNearTap](beselectionflags/wordisneartap.md): A flag that indicates whether a word resides near the person’s tap gesture.

### Creating a selection flag

- [init(rawValue:)](beselectionflags/init%28rawvalue_%29.md): Creates a selection flags instance with the given underlying value.

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

### Text selection

- [BETextSelectionDirectionNavigation](betextselectiondirectionnavigation.md): A protocol that defines methods for cursor and selection adjustments.
- [BESelectionTouchPhase](beselectiontouchphase.md): The different phases of touch interaction during text selection operations.

# BESelectionFlags (Objective-C)

**Framework:** BrowserEngineKit  
**Kind:** Enumeration  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · macOS · tvOS 17.4+ · visionOS 1.1+

Flags that indicate different states or characteristics of a text selection.

## Declaration

```objectivec
enum BESelectionFlags : NSUInteger;
```

<a id="overview"></a>

## Overview

The [BETextInput](betextinput.md) protocol provides your app an instance of this structure as an argument to the  [adjustSelectionBoundaryToPoint:touchPhase:baseIsStart:flags:](betextinput/adjustselectionboundary%28to_touchphase_baseisstart_flags_%29.md) callback.

## Topics

### Describing a text selection

- [BESelectionFlagsNone](beselectionflags/beselectionflagsnone.md): An option that indicates no active flags.
- [BEPhraseBoundaryChanged](beselectionflags/phraseboundarychanged.md): A flag that indicates whether a text selection crosses or modifies phrase boundaries in an active selection.
- [BESelectionFlipped](beselectionflags/selectionflipped.md): A flag that indicates whether a text selection is reversed or flipped in direction from its original direction.
- [BEWordIsNearTap](beselectionflags/wordisneartap.md): A flag that indicates whether a word resides near the person’s tap gesture.

## See Also

### Text selection

- [BETextSelectionDirectionNavigation](betextselectiondirectionnavigation.md): A protocol that defines methods for cursor and selection adjustments.
- [BESelectionTouchPhase](beselectiontouchphase.md): The different phases of touch interaction during text selection operations.
