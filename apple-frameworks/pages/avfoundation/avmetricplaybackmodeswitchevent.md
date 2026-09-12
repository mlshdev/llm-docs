> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avmetricplaybackmodeswitchevent](https://developer.apple.com/documentation/avfoundation/avmetricplaybackmodeswitchevent)

# AVMetricPlaybackModeSwitchEvent (Swift)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Represents a change in playback state, entering one of AVMetricPlaybackMode

## Declaration

```swift
class AVMetricPlaybackModeSwitchEvent
```

<a id="overview"></a>

## Overview

Subclasses of this type that are used from Swift must fulfill the requirements of a Sendable type.

## Topics

### Identifying the playback mode

- [mode](avmetricplaybackmodeswitchevent/mode.md): Returns the mode into which playback entered.

## Relationships

### Inherits From

- [AVMetricEvent](avmetricevent.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Playback mode

- [AVMetricPlaybackMode](avmetricplaybackmode.md): These constants are the possible playback modes returned by the property “mode” on AVMetricPlaybackModeSwitchEvent

# AVMetricPlaybackModeSwitchEvent (Objective-C)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Represents a change in playback state, entering one of AVMetricPlaybackMode

## Declaration

```objectivec
@interface AVMetricPlaybackModeSwitchEvent : AVMetricEvent
```

<a id="overview"></a>

## Overview

Subclasses of this type that are used from Swift must fulfill the requirements of a Sendable type.

## Topics

### Identifying the playback mode

- [mode](avmetricplaybackmodeswitchevent/mode.md): Returns the mode into which playback entered.

## Relationships

### Inherits From

- [AVMetricEvent](avmetricevent.md)

## See Also

### Playback mode

- [AVMetricPlaybackMode](avmetricplaybackmode.md): These constants are the possible playback modes returned by the property “mode” on AVMetricPlaybackModeSwitchEvent
