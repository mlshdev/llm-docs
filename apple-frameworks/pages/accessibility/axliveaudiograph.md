> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accessibility/axliveaudiograph](https://developer.apple.com/documentation/accessibility/axliveaudiograph)

# AXLiveAudioGraph (Swift)

**Framework:** Accessibility  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

An object that represents an audio graph for a live-updating, continuous data series for VoiceOver.

## Declaration

```swift
class AXLiveAudioGraph
```

<a id="overview"></a>

## Overview

Use [AXLiveAudioGraph](axliveaudiograph.md) to interact with an ongoing, continuous stream of data that updates with new data in real time.

## Topics

### Controlling playback

- [start()](axliveaudiograph/start%28%29.md): Begins the live audio graph session.
- [stop()](axliveaudiograph/stop%28%29.md): Ends the live audio graph session.

### Configuring pitch

- [updateValue(\_:)](axliveaudiograph/updatevalue%28__%29.md): Sets the pitch of the audio graph’s tone.

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

# AXLiveAudioGraph (Objective-C)

**Framework:** Accessibility  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

An object that represents an audio graph for a live-updating, continuous data series for VoiceOver.

## Declaration

```objectivec
@interface AXLiveAudioGraph : NSObject
```

<a id="overview"></a>

## Overview

Use [AXLiveAudioGraph](axliveaudiograph.md) to interact with an ongoing, continuous stream of data that updates with new data in real time.

## Topics

### Controlling playback

- [start](axliveaudiograph/start%28%29.md): Begins the live audio graph session.
- [stop](axliveaudiograph/stop%28%29.md): Ends the live audio graph session.

### Configuring pitch

- [updateValue:](axliveaudiograph/updatevalue%28__%29.md): Sets the pitch of the audio graph’s tone.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)
