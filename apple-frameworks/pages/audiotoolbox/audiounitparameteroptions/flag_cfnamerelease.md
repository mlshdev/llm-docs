> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/audiounitparameteroptions/flag_cfnamerelease](https://developer.apple.com/documentation/audiotoolbox/audiounitparameteroptions/flag_cfnamerelease)

# flag_CFNameRelease (Swift)

**Framework:** Audio Toolbox  
**Kind:** Type Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

If an audio unit can generate parameter names dynamically, it should set this flag.

## Declaration

```swift
static var flag_CFNameRelease: AudioUnitParameterOptions { get }
```

<a id="Discussion"></a>

## Discussion

Audio unit hosting applications should check for this flag being set. If it is, the host should release the audio unit parameter name when it is done using it.

If this flag is not set, the host application can assume that the audio unit will release its parameter names.

## See Also

### Constants

- [flag_CanRamp](flag_canramp.md)
- [flag_DisplayCubeRoot](flag_displaycuberoot.md)
- [flag_DisplayCubed](flag_displaycubed.md)
- [flag_DisplayExponential](flag_displayexponential.md)
- [flag_DisplayLogarithmic](flag_displaylogarithmic.md)
- [flag_DisplayMask](flag_displaymask.md)
- [flag_DisplaySquareRoot](flag_displaysquareroot.md)
- [flag_DisplaySquared](flag_displaysquared.md)
- [flag_ExpertMode](flag_expertmode.md)
- [flag_HasCFNameString](flag_hascfnamestring.md)
- [flag_HasClump](flag_hasclump.md)
- [flag_IsElementMeta](flag_iselementmeta.md)
- [flag_IsGlobalMeta](flag_isglobalmeta.md)
- [flag_IsHighResolution](flag_ishighresolution.md)
- [flag_IsReadable](flag_isreadable.md)

# kAudioUnitParameterFlag_CFNameRelease (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Enumeration Case  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

If an audio unit can generate parameter names dynamically, it should set this flag.

## Declaration

```objectivec
kAudioUnitParameterFlag_CFNameRelease
```

<a id="Discussion"></a>

## Discussion

Audio unit hosting applications should check for this flag being set. If it is, the host should release the audio unit parameter name when it is done using it.

If this flag is not set, the host application can assume that the audio unit will release its parameter names.

## See Also

### Constants

- [kAudioUnitParameterFlag_CanRamp](flag_canramp.md)
- [kAudioUnitParameterFlag_DisplayCubeRoot](flag_displaycuberoot.md)
- [kAudioUnitParameterFlag_DisplayCubed](flag_displaycubed.md)
- [kAudioUnitParameterFlag_DisplayExponential](flag_displayexponential.md)
- [kAudioUnitParameterFlag_DisplayLogarithmic](flag_displaylogarithmic.md)
- [kAudioUnitParameterFlag_DisplayMask](flag_displaymask.md)
- [kAudioUnitParameterFlag_DisplaySquareRoot](flag_displaysquareroot.md)
- [kAudioUnitParameterFlag_DisplaySquared](flag_displaysquared.md)
- [kAudioUnitParameterFlag_ExpertMode](flag_expertmode.md)
- [kAudioUnitParameterFlag_HasCFNameString](flag_hascfnamestring.md)
- [kAudioUnitParameterFlag_HasClump](flag_hasclump.md)
- [kAudioUnitParameterFlag_IsElementMeta](flag_iselementmeta.md)
- [kAudioUnitParameterFlag_IsGlobalMeta](flag_isglobalmeta.md)
- [kAudioUnitParameterFlag_IsHighResolution](flag_ishighresolution.md)
- [kAudioUnitParameterFlag_IsReadable](flag_isreadable.md)
