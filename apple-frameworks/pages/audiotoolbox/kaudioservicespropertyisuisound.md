> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/kaudioservicespropertyisuisound](https://developer.apple.com/documentation/audiotoolbox/kaudioservicespropertyisuisound)

# kAudioServicesPropertyIsUISound (Swift)

**Framework:** Audio Toolbox  
**Kind:** Global Variable  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

A `UInt32` value, where `1` means that, for the audio file specified by a system sound passed in the `inSpecifier` parameter, the System Sound server respects the user setting in the Sound Effects preference and is silent when the user turns off sound effects.

## Declaration

```swift
var kAudioServicesPropertyIsUISound: AudioServicesPropertyID { get }
```

<a id="Discussion"></a>

## Discussion

This property is set to `1` by default. Set it to `0` for the system sound to always play when passed to [AudioServicesPlaySystemSound(\_:)](audioservicesplaysystemsound%28__%29.md), regardless of the user’s setting in sound preferences.

## See Also

### Constants

- [kAudioServicesPropertyCompletePlaybackIfAppDies](kaudioservicespropertycompleteplaybackifappdies.md): A `UInt32` value, where `1` means that the audio file specified by a system sound passed in the `inSpecifier` parameter should finish playing even if the client application terminates. This could happen, for example, if the user quits or the application terminates unexpectedly while the sound is playing. The default is `0`. That is, you must explicitly set this property’s value to `1` if you want the sound to complete playing even if the application terminates.

# kAudioServicesPropertyIsUISound (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Enumeration Case  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

A `UInt32` value, where `1` means that, for the audio file specified by a system sound passed in the `inSpecifier` parameter, the System Sound server respects the user setting in the Sound Effects preference and is silent when the user turns off sound effects.

## Declaration

```objectivec
kAudioServicesPropertyIsUISound
```

<a id="Discussion"></a>

## Discussion

This property is set to `1` by default. Set it to `0` for the system sound to always play when passed to [AudioServicesPlaySystemSound](audioservicesplaysystemsound%28__%29.md), regardless of the user’s setting in sound preferences.

## See Also

### Constants

- [kAudioServicesPropertyCompletePlaybackIfAppDies](kaudioservicespropertycompleteplaybackifappdies.md): A `UInt32` value, where `1` means that the audio file specified by a system sound passed in the `inSpecifier` parameter should finish playing even if the client application terminates. This could happen, for example, if the user quits or the application terminates unexpectedly while the sound is playing. The default is `0`. That is, you must explicitly set this property’s value to `1` if you want the sound to complete playing even if the application terminates.
