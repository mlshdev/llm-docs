> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/audiotoolbox/audiocomponentvalidate(_:_:_:)

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
