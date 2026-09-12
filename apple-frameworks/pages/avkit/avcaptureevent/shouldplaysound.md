> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avkit/avcaptureevent/shouldplaysound](https://developer.apple.com/documentation/avkit/avcaptureevent/shouldplaysound)

# shouldPlaySound (Swift)

**Framework:** AVKit  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

A Boolean value that indicates whether you must play a sound manually.

## Declaration

```swift
var shouldPlaySound: Bool { get }
```

<a id="discussion"></a>

## Discussion

This property is `true` only when both of the following conditions are true:

1. A person performs an AirPod stem click.
2. You disable the default capture sound.

If this property is `false`, calling [play(\_:)](play%28__%29.md) has no effect. Omitting the sound when expected can significantly impact the user experience.

> **Important**

> To use AirPods Camera Control, it must be available in your country or region. AirPods Camera Control is not currently available in the European Union.

## See Also

### Playing a sound

- [play(\_:)](play%28__%29.md): Plays the specified capture sound through AirPods.

# shouldPlaySound (Objective-C)

**Framework:** AVKit  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+

A Boolean value that indicates whether you must play a sound manually.

## Declaration

```objectivec
@property (nonatomic, readonly) BOOL shouldPlaySound;
```

<a id="discussion"></a>

## Discussion

This property is `true` only when both of the following conditions are true:

1. A person performs an AirPod stem click.
2. You disable the default capture sound.

If this property is `false`, calling [playSound:](play%28__%29.md) has no effect. Omitting the sound when expected can significantly impact the user experience.

> **Important**

> To use AirPods Camera Control, it must be available in your country or region. AirPods Camera Control is not currently available in the European Union.

## See Also

### Playing a sound

- [playSound:](play%28__%29.md): Plays the specified capture sound through AirPods.
