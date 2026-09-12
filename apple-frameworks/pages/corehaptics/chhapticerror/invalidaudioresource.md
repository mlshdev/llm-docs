> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corehaptics/chhapticerror/invalidaudioresource](https://developer.apple.com/documentation/corehaptics/chhapticerror/invalidaudioresource)

# invalidAudioResource

**Framework:** Core Haptics  
**Kind:** Type Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 14.0+ · visionOS 1.0+

A pattern dictionary or an event array contain a reference to an invalid audio resource.

## Declaration

```swift
static var invalidAudioResource: CHHapticError.Code { get }
```

## See Also

### Error Code Constants

- [badEventEntry](badevententry.md): An event is missing a required field.
- [badParameterEntry](badparameterentry.md): A parameter in an event is missing a required field.
- [engineNotRunning](enginenotrunning.md): Your app requested haptic playback when the engine wasn’t running.
- [engineStartTimeout](enginestarttimeout.md): The haptic engine timed out while starting.
- [fileNotFound](filenotfound.md): The system couldn’t find an audio file or haptic asset.
- [insufficientPower](insufficientpower.md): The operation failed due to power restrictions.
- [invalidAudioSession](invalidaudiosession.md): The system invalidated the audio session associated with the haptic engine.
- [invalidEngineParameter](invalidengineparameter.md): Your app attempted to initialize the haptic engine with an invalid configuration parameter.
- [invalidEventDuration](invalideventduration.md): An event in the dictionary has an invalid duration.
- [invalidEventTime](invalideventtime.md): The time of an event in the dictionary is invalid.
- [invalidEventType](invalideventtype.md): The type of an event in the dictionary is invalid.
- [invalidParameterType](invalidparametertype.md): A pattern dictionary or parameter array contains an unknown or invalid parameter type.
- [invalidPatternData](invalidpatterndata.md): Your app passed an invalid pattern to the haptic engine or player.
- [invalidPatternDictionary](invalidpatterndictionary.md): A pattern in the dictionary is missing a required field.
- [invalidPatternPlayer](invalidpatternplayer.md): The current pattern player is no longer valid due to a server error.
