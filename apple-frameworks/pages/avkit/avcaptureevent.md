> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/avkit/avcaptureevent

# AVCaptureEvent (Swift)

**Framework:** AVKit  
**Kind:** Class  
**Availability:** iOS 17.2+ · iPadOS 17.2+ · Mac Catalyst 17.2+

An object that describes a user interaction with a system hardware button.

## Declaration

```swift
class AVCaptureEvent
```

<a id="overview"></a>

## Overview

Inspect a capture event’s [phase](avcaptureevent/phase.md) to determine whether the event begins, ends, or is in a canceled state.

## Topics

### Inspecting the event

- [phase](avcaptureevent/phase.md): The current phase of a capture event.
- [AVCaptureEventPhase](avcaptureeventphase.md): Constants that indicate the phase of a system capture event.

### Playing a sound

- [shouldPlaySound](avcaptureevent/shouldplaysound.md): A Boolean value that indicates whether you must play a sound manually.
- [play(\_:)](avcaptureevent/play%28__%29.md): Plays the specified capture sound through AirPods.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Capture events

- [AVCaptureEventInteraction](avcaptureeventinteraction.md): An object that registers handlers to respond to capture events from system hardware buttons.
- [AVCaptureEventSound](avcaptureeventsound.md): A sound object for a capture event.

# AVCaptureEvent (Objective-C)

**Framework:** AVKit  
**Kind:** Class  
**Availability:** iOS 17.2+ · iPadOS 17.2+ · Mac Catalyst 17.2+

An object that describes a user interaction with a system hardware button.

## Declaration

```objectivec
@interface AVCaptureEvent : NSObject
```

<a id="overview"></a>

## Overview

Inspect a capture event’s [phase](avcaptureevent/phase.md) to determine whether the event begins, ends, or is in a canceled state.

## Topics

### Inspecting the event

- [phase](avcaptureevent/phase.md): The current phase of a capture event.
- [AVCaptureEventPhase](avcaptureeventphase.md): Constants that indicate the phase of a system capture event.

### Playing a sound

- [shouldPlaySound](avcaptureevent/shouldplaysound.md): A Boolean value that indicates whether you must play a sound manually.
- [playSound:](avcaptureevent/play%28__%29.md): Plays the specified capture sound through AirPods.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Capture events

- [AVCaptureEventInteraction](avcaptureeventinteraction.md): An object that registers handlers to respond to capture events from system hardware buttons.
- [AVCaptureEventSound](avcaptureeventsound.md): A sound object for a capture event.
