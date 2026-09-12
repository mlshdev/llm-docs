> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/audiocomponentvalidate(_:_:_:)](https://developer.apple.com/documentation/audiotoolbox/audiocomponentvalidate(_:_:_:))

# AudioComponentValidate(\_:\_:\_:) (Swift)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 10.7+ · visionOS 1.0+

## Declaration

```swift
func AudioComponentValidate(_ inComponent: AudioComponent, _ inValidationParameters: CFDictionary?, _ outValidationResult: UnsafeMutablePointer<AudioComponentValidationResult>) -> OSStatus
```

## See Also

### Validating an Audio Component

- [kAudioComponentValidationParameter_LoadOutOfProcess](kaudiocomponentvalidationparameter_loadoutofprocess.md)
- [AudioComponentValidationResult](audiocomponentvalidationresult.md)

# AudioComponentValidate (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 10.7+ · visionOS 1.0+

## Declaration

```objectivec
extern OSStatus AudioComponentValidate(AudioComponent inComponent, CFDictionaryRef inValidationParameters, AudioComponentValidationResult *outValidationResult);
```

## See Also

### Validating an Audio Component

- [kAudioComponentValidationParameter_LoadOutOfProcess](kaudiocomponentvalidationparameter_loadoutofprocess.md)
- [AudioComponentValidationResult](audiocomponentvalidationresult.md)
