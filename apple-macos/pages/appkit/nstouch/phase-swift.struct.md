> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstouch/phase-swift.struct](https://developer.apple.com/documentation/appkit/nstouch/phase-swift.struct)

# NSTouch.Phase (Swift)

**Framework:** AppKit  
**Kind:** Structure  
**Availability:** macOS 10.7+

The possible phases of a touch.

## Declaration

```swift
struct Phase
```

<a id="overview"></a>

## Overview

These constants are used by [phase](phase-swift.property.md).

## Topics

### Creating a Touch Phase

- [init(rawValue:)](phase-swift.struct/init%28rawvalue_%29.md): Creates a new touch phase from the given raw value.

### Constants

- [began](phase-swift.struct/began.md): A finger touched the device. Or, a resting touch transitioned to an active touch and resting touches are not wanted by the view hierarchy.
- [moved](phase-swift.struct/moved.md): A finger moved on the device.
- [stationary](phase-swift.struct/stationary.md): A finger is touching the device, but hasn’t moved since the previous event.
- [ended](phase-swift.struct/ended.md): A finger was lifted from the screen. Or, an active touch transitioned to a resting touch and resting touches are not wanted by the view hierarchy.
- [cancelled](phase-swift.struct/cancelled.md): The system cancelled tracking for the touch, as when (for example) the window associated with the touch resigns key or is deactivated.
- [touching](phase-swift.struct/touching.md): Matches the [began](phase-swift.struct/began.md), [moved](phase-swift.struct/moved.md), or [stationary](phase-swift.struct/stationary.md) phases of a touch.
- [any](phase-swift.struct/any.md): Matches any phase of a touch.

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

### Using Touch Properties

- [identity](identity.md): The changes to a particular touch during its lifetime.
- [phase](phase-swift.property.md): The current phase of the touch.
- [normalizedPosition](normalizedposition.md): The normalized position of the touch.
- [isResting](isresting.md): The indicator for a resting touch.

# NSTouchPhase (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS 10.7+

The possible phases of a touch.

## Declaration

```objectivec
enum NSTouchPhase : NSUInteger;
```

<a id="overview"></a>

## Overview

These constants are used by [phase](phase-swift.property.md).

## Topics

### Constants

- [NSTouchPhaseBegan](phase-swift.struct/began.md): A finger touched the device. Or, a resting touch transitioned to an active touch and resting touches are not wanted by the view hierarchy.
- [NSTouchPhaseMoved](phase-swift.struct/moved.md): A finger moved on the device.
- [NSTouchPhaseStationary](phase-swift.struct/stationary.md): A finger is touching the device, but hasn’t moved since the previous event.
- [NSTouchPhaseEnded](phase-swift.struct/ended.md): A finger was lifted from the screen. Or, an active touch transitioned to a resting touch and resting touches are not wanted by the view hierarchy.
- [NSTouchPhaseCancelled](phase-swift.struct/cancelled.md): The system cancelled tracking for the touch, as when (for example) the window associated with the touch resigns key or is deactivated.
- [NSTouchPhaseTouching](phase-swift.struct/touching.md): Matches the [NSTouchPhaseBegan](phase-swift.struct/began.md), [NSTouchPhaseMoved](phase-swift.struct/moved.md), or [NSTouchPhaseStationary](phase-swift.struct/stationary.md) phases of a touch.
- [NSTouchPhaseAny](phase-swift.struct/any.md): Matches any phase of a touch.

## See Also

### Using Touch Properties

- [identity](identity.md): The changes to a particular touch during its lifetime.
- [phase](phase-swift.property.md): The current phase of the touch.
- [normalizedPosition](normalizedposition.md): The normalized position of the touch.
- [resting](isresting.md): The indicator for a resting touch.
