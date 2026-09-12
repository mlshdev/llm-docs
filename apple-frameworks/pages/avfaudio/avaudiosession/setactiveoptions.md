> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudiosession/setactiveoptions](https://developer.apple.com/documentation/avfaudio/avaudiosession/setactiveoptions)

# AVAudioSession.SetActiveOptions (Swift)

**Framework:** AVFAudio  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS · watchOS

Options that provide additional information about your app’s audio intentions upon session deactivation.

## Declaration

```swift
struct SetActiveOptions
```

<a id="overview"></a>

## Overview

Use this option to request that the system notify an interrupted app that the interruption has ended and it may resume playback. This option is only valid on session deactivation.

## Topics

### Creating an Activation Option

- [init(rawValue:)](setactiveoptions/init%28rawvalue_%29.md): Creates a new instance with the raw value you specify.

### Getting Standard  Options

- [notifyOthersOnDeactivation](setactiveoptions/notifyothersondeactivation.md): An option that indicates that the system should notify other apps that you’ve deactivated your app’s audio session.
- [AVAudioSessionSetActiveFlags_NotifyOthersOnDeactivation](../avaudiosessionsetactiveflags_notifyothersondeactivation.md): Deprecated. A flag that indicates that when your audio session deactivates, any audio sessions that your audio session interrupted can reactivate themselves.

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

# AVAudioSessionSetActiveOptions (Objective-C)

**Framework:** AVFAudio  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Options that provide additional information about your app’s audio intentions upon session deactivation.

## Declaration

```objectivec
enum AVAudioSessionSetActiveOptions : NSUInteger;
```

<a id="overview"></a>

## Overview

Use this option to request that the system notify an interrupted app that the interruption has ended and it may resume playback. This option is only valid on session deactivation.

## Topics

### Getting Standard  Options

- [AVAudioSessionSetActiveOptionNotifyOthersOnDeactivation](setactiveoptions/notifyothersondeactivation.md): An option that indicates that the system should notify other apps that you’ve deactivated your app’s audio session.
- [AVAudioSessionSetActiveFlags_NotifyOthersOnDeactivation](../avaudiosessionsetactiveflags_notifyothersondeactivation.md): Deprecated. A flag that indicates that when your audio session deactivates, any audio sessions that your audio session interrupted can reactivate themselves.
