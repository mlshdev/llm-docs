> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corehaptics/error-constants](https://developer.apple.com/documentation/corehaptics/error-constants)

# Error Constants (Swift)

**Framework:** Core Haptics  
**Kind:** API Collection

Error code constants for framework operations.

## Topics

### Error Code Constants

- [badEventEntry](chhapticerror/badevententry.md): An event is missing a required field.
- [badParameterEntry](chhapticerror/badparameterentry.md): A parameter in an event is missing a required field.
- [engineNotRunning](chhapticerror/enginenotrunning.md): Your app requested haptic playback when the engine wasn’t running.
- [engineStartTimeout](chhapticerror/enginestarttimeout.md): The haptic engine timed out while starting.
- [fileNotFound](chhapticerror/filenotfound.md): The system couldn’t find an audio file or haptic asset.
- [insufficientPower](chhapticerror/insufficientpower.md): The operation failed due to power restrictions.
- [invalidAudioResource](chhapticerror/invalidaudioresource.md): A pattern dictionary or an event array contain a reference to an invalid audio resource.
- [invalidAudioSession](chhapticerror/invalidaudiosession.md): The system invalidated the audio session associated with the haptic engine.
- [invalidEngineParameter](chhapticerror/invalidengineparameter.md): Your app attempted to initialize the haptic engine with an invalid configuration parameter.
- [invalidEventDuration](chhapticerror/invalideventduration.md): An event in the dictionary has an invalid duration.
- [invalidEventTime](chhapticerror/invalideventtime.md): The time of an event in the dictionary is invalid.
- [invalidEventType](chhapticerror/invalideventtype.md): The type of an event in the dictionary is invalid.
- [invalidParameterType](chhapticerror/invalidparametertype.md): A pattern dictionary or parameter array contains an unknown or invalid parameter type.
- [invalidPatternData](chhapticerror/invalidpatterndata.md): Your app passed an invalid pattern to the haptic engine or player.
- [invalidPatternDictionary](chhapticerror/invalidpatterndictionary.md): A pattern in the dictionary is missing a required field.
- [invalidPatternPlayer](chhapticerror/invalidpatternplayer.md): The current pattern player is no longer valid due to a server error.
- [invalidTime](chhapticerror/invalidtime.md): The time offset passed to the haptic engine is invalid.
- [memoryError](chhapticerror/memoryerror.md): The operation failed due to a lack of memory.
- [notSupported](chhapticerror/notsupported.md): The current device doesn’t support the haptic engine.
- [operationNotPermitted](chhapticerror/operationnotpermitted.md): Your app requested an operation that the haptic engine disallows.
- [resourceNotAvailable](chhapticerror/resourcenotavailable.md): The framework didn’t locate a named resource.
- [serverInterrupted](chhapticerror/serverinterrupted.md): Your app lost its connection to the haptic server.
- [serverInitFailed](chhapticerror/serverinitfailed.md): The haptic server failed to initialize.
- [unknownError](chhapticerror/unknownerror.md): An operation failed due to an unknown error.

## See Also

### Inspecting an Error

- [CHHapticError.Code](chhapticerror/code.md): Error codes for framework operations.

# Error Constants (Objective-C)

**Framework:** Core Haptics  
**Kind:** API Collection

Error code constants for framework operations.

## See Also

### Inspecting an Error

- [CHHapticErrorCode](chhapticerror/code.md): Error codes for framework operations.
