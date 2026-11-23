> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cpplaybackconfiguration/action

# CPPlaybackConfiguration.Action (Swift)

**Framework:** CarPlay  
**Kind:** Enumeration  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+

The action to perform when someone selects the item.

## Declaration

```swift
enum Action
```

<a id="overview"></a>

## Overview

These constants specify the automatic actions the system can take when someone selects media items in a list. These actions offer a convenient way to start, stop, or restart playback of an item when someone selects it in your app’s interface. If you prefer to handle these actions yourself, choose the [CPPlaybackConfiguration.Action.none](action/none.md) option and use your app’s code to manage playback.

## Topics

### Enumeration Cases

- [CPPlaybackConfiguration.Action.none](action/none.md): An option to do nothing when someone selects the item.
- [CPPlaybackConfiguration.Action.pause](action/pause.md): An option to pause playback.
- [CPPlaybackConfiguration.Action.play](action/play.md): An option to start or resume playback.
- [CPPlaybackConfiguration.Action.replay](action/replay.md): An option to start playback of the item from the beginning.

### Initializers

- [init(rawValue:)](action/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

# CPPlaybackAction (Objective-C)

**Framework:** CarPlay  
**Kind:** Enumeration  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 14.0+

The action to perform when someone selects the item.

## Declaration

```objectivec
enum CPPlaybackAction : NSInteger;
```

<a id="overview"></a>

## Overview

These constants specify the automatic actions the system can take when someone selects media items in a list. These actions offer a convenient way to start, stop, or restart playback of an item when someone selects it in your app’s interface. If you prefer to handle these actions yourself, choose the [CPPlaybackActionNone](action/none.md) option and use your app’s code to manage playback.

## Topics

### Enumeration Cases

- [CPPlaybackActionNone](action/none.md): An option to do nothing when someone selects the item.
- [CPPlaybackActionPause](action/pause.md): An option to pause playback.
- [CPPlaybackActionPlay](action/play.md): An option to start or resume playback.
- [CPPlaybackActionReplay](action/replay.md): An option to start playback of the item from the beginning.
