> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avkit/avcaptureevent/play(_:)](https://developer.apple.com/documentation/avkit/avcaptureevent/play(_:))

# play(\_:) (Swift)

**Framework:** AVKit  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

Plays the specified capture sound through AirPods.

## Declaration

```swift
func play(_ sound: AVCaptureEventSound) -> Bool
```

## Parameters

- `sound`: The capture sound to play for this event.

<a id="return-value"></a>

## Return Value

A Boolean value that indicates whether the system played the sound.

<a id="discussion"></a>

## Discussion

This method has no effect if [shouldPlaySound](shouldplaysound.md) is `false` or if the event object’s lifetime exceeds 15 seconds.

> **Important**

> To use AirPods Camera Control, it must be available in your country or region. AirPods Camera Control is not currently available in the European Union.

## See Also

### Playing a sound

- [shouldPlaySound](shouldplaysound.md): A Boolean value that indicates whether you must play a sound manually.

# playSound: (Objective-C)

**Framework:** AVKit  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+

Plays the specified capture sound through AirPods.

## Declaration

```objectivec
- (BOOL) playSound:(AVCaptureEventSound *) sound;
```

## Parameters

- `sound`: The capture sound to play for this event.

<a id="return-value"></a>

## Return Value

A Boolean value that indicates whether the system played the sound.

<a id="discussion"></a>

## Discussion

This method has no effect if [shouldPlaySound](shouldplaysound.md) is `false` or if the event object’s lifetime exceeds 15 seconds.

> **Important**

> To use AirPods Camera Control, it must be available in your country or region. AirPods Camera Control is not currently available in the European Union.

## See Also

### Playing a sound

- [shouldPlaySound](shouldplaysound.md): A Boolean value that indicates whether you must play a sound manually.
