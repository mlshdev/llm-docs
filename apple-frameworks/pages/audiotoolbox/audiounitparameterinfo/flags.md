> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/audiounitparameterinfo/flags](https://developer.apple.com/documentation/audiotoolbox/audiounitparameterinfo/flags)

# flags (Swift)

**Framework:** Audio Toolbox  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

The host should check for this flag and, if present, release the parameter name when it is finished with it.

## Declaration

```swift
var flags: AudioUnitParameterOptions
```

<a id="discussion"></a>

## Discussion

Due to some vagaries about the ways in which Parameter’s CFNames have been described, it was necessary to add a flag: [flag_CFNameRelease](../audiounitparameteroptions/flag_cfnamerelease.md). In normal usage a parameter name is essentially a static object, but sometimes an audio unit will generate parameter names dynamically. As these are expected to be [CFString](../../corefoundation/cfstring.md) objects, in that case the host should release those names when it is finished with them, but there was no way to communicate this distinction in behavior. Thus, if an audio unit can generate a name dynamically, it should set this flag in the parameter’s info. The host should check for this flag and, if present, release the parameter name when it is finished with it.

# flags (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

The host should check for this flag and, if present, release the parameter name when it is finished with it.

## Declaration

```objectivec
AudioUnitParameterOptions flags;
```

<a id="discussion"></a>

## Discussion

Due to some vagaries about the ways in which Parameter’s CFNames have been described, it was necessary to add a flag: [kAudioUnitParameterFlag_CFNameRelease](../audiounitparameteroptions/flag_cfnamerelease.md). In normal usage a parameter name is essentially a static object, but sometimes an audio unit will generate parameter names dynamically. As these are expected to be [CFStringRef](../../corefoundation/cfstring.md) objects, in that case the host should release those names when it is finished with them, but there was no way to communicate this distinction in behavior. Thus, if an audio unit can generate a name dynamically, it should set this flag in the parameter’s info. The host should check for this flag and, if present, release the parameter name when it is finished with it.
