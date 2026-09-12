> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corehaptics/chhapticerror/code](https://developer.apple.com/documentation/corehaptics/chhapticerror/code)

# CHHapticError.Code (Swift)

**Framework:** Core Haptics  
**Kind:** Enumeration  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 14.0+ · visionOS 1.0+

Error codes for framework operations.

## Declaration

```swift
enum Code
```

## Topics

### Error Codes

- [CHHapticError.Code.badEventEntry](code/badevententry.md): An event is missing a required field.
- [CHHapticError.Code.badParameterEntry](code/badparameterentry.md): A parameter in an event is missing a required field.
- [CHHapticError.Code.engineNotRunning](code/enginenotrunning.md): Your app requested haptic playback when the engine wasn’t running.
- [CHHapticError.Code.engineStartTimeout](code/enginestarttimeout.md): The haptic engine timed out while starting.
- [CHHapticError.Code.fileNotFound](code/filenotfound.md): The system couldn’t find an audio file or haptic asset.
- [CHHapticError.Code.insufficientPower](code/insufficientpower.md): The operation failed due to power restrictions.
- [CHHapticError.Code.invalidAudioResource](code/invalidaudioresource.md): A pattern dictionary or an event array contain a reference to an invalid audio resource.
- [CHHapticError.Code.invalidAudioSession](code/invalidaudiosession.md): The system invalidated the audio session associated with the haptic engine.
- [CHHapticError.Code.invalidEngineParameter](code/invalidengineparameter.md): Your app attempted to initialize the haptic engine with an invalid configuration parameter.
- [CHHapticError.Code.invalidEventDuration](code/invalideventduration.md): An event in the dictionary has an invalid duration.
- [CHHapticError.Code.invalidEventTime](code/invalideventtime.md): The time of an event in the dictionary is invalid.
- [CHHapticError.Code.invalidEventType](code/invalideventtype.md): The type of an event in the dictionary is invalid.
- [CHHapticError.Code.invalidParameterType](code/invalidparametertype.md): A pattern dictionary or parameter array contains an unknown or invalid parameter type.
- [CHHapticError.Code.invalidPatternData](code/invalidpatterndata.md): Your app passed an invalid pattern to the haptic engine or player.
- [CHHapticError.Code.invalidPatternDictionary](code/invalidpatterndictionary.md): A pattern in the dictionary is missing a required field.
- [CHHapticError.Code.invalidPatternPlayer](code/invalidpatternplayer.md): The current pattern player is no longer valid due to a server error.
- [CHHapticError.Code.invalidTime](code/invalidtime.md): The time offset passed to the haptic engine is invalid.
- [CHHapticError.Code.memoryError](code/memoryerror.md): The operation failed due to a lack of memory.
- [CHHapticError.Code.notSupported](code/notsupported.md): The current device doesn’t support the haptic engine.
- [CHHapticError.Code.operationNotPermitted](code/operationnotpermitted.md): Your app requested an operation that the haptic engine disallows.
- [CHHapticError.Code.resourceNotAvailable](code/resourcenotavailable.md): The requested operation couldn’t finish due to a limit on available resources.
- [CHHapticError.Code.serverInterrupted](code/serverinterrupted.md): Your app lost its connection to the haptic server.
- [CHHapticError.Code.serverInitFailed](code/serverinitfailed.md): The haptic server failed to initialize.
- [CHHapticError.Code.unknownError](code/unknownerror.md): An operation failed due to an unknown error.

### Initializers

- [init(rawValue:)](code/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Haptic errors

- [CoreHapticsErrorDomain](../corehapticserrordomain.md): A string representation of the haptic error domain.
- [CHHapticError](../chhapticerror.md): A structure that represents a framework error.

# CHHapticErrorCode (Objective-C)

**Framework:** Core Haptics  
**Kind:** Enumeration  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 14.0+ · visionOS 1.0+

Error codes for framework operations.

## Declaration

```objectivec
enum CHHapticErrorCode : NSInteger;
```

## Topics

### Error Codes

- [CHHapticErrorCodeBadEventEntry](code/badevententry.md): An event is missing a required field.
- [CHHapticErrorCodeBadParameterEntry](code/badparameterentry.md): A parameter in an event is missing a required field.
- [CHHapticErrorCodeEngineNotRunning](code/enginenotrunning.md): Your app requested haptic playback when the engine wasn’t running.
- [CHHapticErrorCodeEngineStartTimeout](code/enginestarttimeout.md): The haptic engine timed out while starting.
- [CHHapticErrorCodeFileNotFound](code/filenotfound.md): The system couldn’t find an audio file or haptic asset.
- [CHHapticErrorCodeInsufficientPower](code/insufficientpower.md): The operation failed due to power restrictions.
- [CHHapticErrorCodeInvalidAudioResource](code/invalidaudioresource.md): A pattern dictionary or an event array contain a reference to an invalid audio resource.
- [CHHapticErrorCodeInvalidAudioSession](code/invalidaudiosession.md): The system invalidated the audio session associated with the haptic engine.
- [CHHapticErrorCodeInvalidEngineParameter](code/invalidengineparameter.md): Your app attempted to initialize the haptic engine with an invalid configuration parameter.
- [CHHapticErrorCodeInvalidEventDuration](code/invalideventduration.md): An event in the dictionary has an invalid duration.
- [CHHapticErrorCodeInvalidEventTime](code/invalideventtime.md): The time of an event in the dictionary is invalid.
- [CHHapticErrorCodeInvalidEventType](code/invalideventtype.md): The type of an event in the dictionary is invalid.
- [CHHapticErrorCodeInvalidParameterType](code/invalidparametertype.md): A pattern dictionary or parameter array contains an unknown or invalid parameter type.
- [CHHapticErrorCodeInvalidPatternData](code/invalidpatterndata.md): Your app passed an invalid pattern to the haptic engine or player.
- [CHHapticErrorCodeInvalidPatternDictionary](code/invalidpatterndictionary.md): A pattern in the dictionary is missing a required field.
- [CHHapticErrorCodeInvalidPatternPlayer](code/invalidpatternplayer.md): The current pattern player is no longer valid due to a server error.
- [CHHapticErrorCodeInvalidTime](code/invalidtime.md): The time offset passed to the haptic engine is invalid.
- [CHHapticErrorCodeMemoryError](code/memoryerror.md): The operation failed due to a lack of memory.
- [CHHapticErrorCodeNotSupported](code/notsupported.md): The current device doesn’t support the haptic engine.
- [CHHapticErrorCodeOperationNotPermitted](code/operationnotpermitted.md): Your app requested an operation that the haptic engine disallows.
- [CHHapticErrorCodeResourceNotAvailable](code/resourcenotavailable.md): The requested operation couldn’t finish due to a limit on available resources.
- [CHHapticErrorCodeServerInterrupted](code/serverinterrupted.md): Your app lost its connection to the haptic server.
- [CHHapticErrorCodeServerInitFailed](code/serverinitfailed.md): The haptic server failed to initialize.
- [CHHapticErrorCodeUnknownError](code/unknownerror.md): An operation failed due to an unknown error.

## See Also

### Haptic errors

- [CoreHapticsErrorDomain](../corehapticserrordomain.md): A string representation of the haptic error domain.
