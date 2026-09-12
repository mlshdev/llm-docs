> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediatoolbox/mtaudioprocessingtapcallbacks](https://developer.apple.com/documentation/mediatoolbox/mtaudioprocessingtapcallbacks)

# MTAudioProcessingTapCallbacks (Swift)

**Framework:** Media Toolbox  
**Kind:** Structure  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+

A structure that defines life cycle callbacks for an audio processing tap object.

## Declaration

```swift
struct MTAudioProcessingTapCallbacks
```

<a id="Overview"></a>

## Overview

On 64-bit architectures, this struct contains misaligned function pointers. To avoid link-time issues, fill its function pointer fields by using assignment statements, rather than declaring them as global or static structs.

## Topics

### Fields

- [version](mtaudioprocessingtapcallbacks/version.md): The version number of the structure.
- [clientInfo](mtaudioprocessingtapcallbacks/clientinfo.md): App data that the system passes to the initialization callback.
- [init](mtaudioprocessingtapcallbacks/init.md): A callback to initialize the tap processor.
- [finalize](mtaudioprocessingtapcallbacks/finalize.md): A callback to perform any necessary cleanup.
- [prepare](mtaudioprocessingtapcallbacks/prepare.md): A callback to prepare the tap processor.
- [unprepare](mtaudioprocessingtapcallbacks/unprepare.md): A callback to perform any necessary cleanup for previous preparation.
- [process](mtaudioprocessingtapcallbacks/process.md): A callback for processing the audio.

### Callback functions

- [MTAudioProcessingTapInitCallback](mtaudioprocessingtapinitcallback.md): An initialization callback function.
- [MTAudioProcessingTapPrepareCallback](mtaudioprocessingtappreparecallback.md): An audio processing preparation callback function.
- [MTAudioProcessingTapProcessCallback](mtaudioprocessingtapprocesscallback.md): An audio processing callback function.
- [MTAudioProcessingTapUnprepareCallback](mtaudioprocessingtapunpreparecallback.md): An audio processing unpreparation callback function.
- [MTAudioProcessingTapFinalizeCallback](mtaudioprocessingtapfinalizecallback.md): A finalization callback function.

### Versions

- [kMTAudioProcessingTapCallbacksVersion_0](kmtaudioprocessingtapcallbacksversion_0.md): An identifier for version 0 of the callbacks structure.

### Initializers

- [init(version:clientInfo:init:finalize:prepare:unprepare:process:)](mtaudioprocessingtapcallbacks/init%28version_clientinfo_init_finalize_prepare_unprepare_process_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)

# MTAudioProcessingTapCallbacks (Objective-C)

**Framework:** Media Toolbox  
**Kind:** Structure  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 6.0+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+

A structure that defines life cycle callbacks for an audio processing tap object.

## Declaration

```objectivec
typedef struct { ... } MTAudioProcessingTapCallbacks;
```

<a id="Overview"></a>

## Overview

On 64-bit architectures, this struct contains misaligned function pointers. To avoid link-time issues, fill its function pointer fields by using assignment statements, rather than declaring them as global or static structs.

## Topics

### Fields

- [version](mtaudioprocessingtapcallbacks/version.md): The version number of the structure.
- [clientInfo](mtaudioprocessingtapcallbacks/clientinfo.md): App data that the system passes to the initialization callback.
- [init](mtaudioprocessingtapcallbacks/init.md): A callback to initialize the tap processor.
- [finalize](mtaudioprocessingtapcallbacks/finalize.md): A callback to perform any necessary cleanup.
- [prepare](mtaudioprocessingtapcallbacks/prepare.md): A callback to prepare the tap processor.
- [unprepare](mtaudioprocessingtapcallbacks/unprepare.md): A callback to perform any necessary cleanup for previous preparation.
- [process](mtaudioprocessingtapcallbacks/process.md): A callback for processing the audio.

### Callback functions

- [MTAudioProcessingTapInitCallback](mtaudioprocessingtapinitcallback.md): An initialization callback function.
- [MTAudioProcessingTapPrepareCallback](mtaudioprocessingtappreparecallback.md): An audio processing preparation callback function.
- [MTAudioProcessingTapProcessCallback](mtaudioprocessingtapprocesscallback.md): An audio processing callback function.
- [MTAudioProcessingTapUnprepareCallback](mtaudioprocessingtapunpreparecallback.md): An audio processing unpreparation callback function.
- [MTAudioProcessingTapFinalizeCallback](mtaudioprocessingtapfinalizecallback.md): A finalization callback function.

### Versions

- [kMTAudioProcessingTapCallbacksVersion_0](kmtaudioprocessingtapcallbacksversion_0.md): An identifier for version 0 of the callbacks structure.
