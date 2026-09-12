> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediatoolbox/mtaudioprocessingtapunpreparecallback](https://developer.apple.com/documentation/mediatoolbox/mtaudioprocessingtapunpreparecallback)

# MTAudioProcessingTapUnprepareCallback (Swift)

**Framework:** Media Toolbox  
**Kind:** Type Alias  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 6.0+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+

An audio processing unpreparation callback function.

## Declaration

```swift
typealias MTAudioProcessingTapUnprepareCallback = (MTAudioProcessingTap) -> Void
```

## Parameters

- `tap`: The processing tap.

<a id="Overview"></a>

## Overview

The unpreparation callback is invoked when the underlying audio machinery stops calling the process callback.

Preparation and unpreparation callbacks are always paired.

Process callbacks will only ever be called after the prepare callback returns, and before unprepare is called.

## Topics

### Flags

- [MTAudioProcessingTapCreationFlags](mtaudioprocessingtapcreationflags.md): Flags to use when creating audio processing taps.

## See Also

### Callback functions

- [MTAudioProcessingTapInitCallback](mtaudioprocessingtapinitcallback.md): An initialization callback function.
- [MTAudioProcessingTapPrepareCallback](mtaudioprocessingtappreparecallback.md): An audio processing preparation callback function.
- [MTAudioProcessingTapProcessCallback](mtaudioprocessingtapprocesscallback.md): An audio processing callback function.
- [MTAudioProcessingTapFinalizeCallback](mtaudioprocessingtapfinalizecallback.md): A finalization callback function.

# MTAudioProcessingTapUnprepareCallback (Objective-C)

**Framework:** Media Toolbox  
**Kind:** Type Alias  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 6.0+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+

An audio processing unpreparation callback function.

## Declaration

```objectivec
typedef void (*)(const struct opaqueMTAudioProcessingTap *) MTAudioProcessingTapUnprepareCallback;
```

## Parameters

- `tap`: The processing tap.

<a id="Overview"></a>

## Overview

The unpreparation callback is invoked when the underlying audio machinery stops calling the process callback.

Preparation and unpreparation callbacks are always paired.

Process callbacks will only ever be called after the prepare callback returns, and before unprepare is called.

## Topics

### Flags

- [MTAudioProcessingTapCreationFlags](mtaudioprocessingtapcreationflags.md): Flags to use when creating audio processing taps.

## See Also

### Callback functions

- [MTAudioProcessingTapInitCallback](mtaudioprocessingtapinitcallback.md): An initialization callback function.
- [MTAudioProcessingTapPrepareCallback](mtaudioprocessingtappreparecallback.md): An audio processing preparation callback function.
- [MTAudioProcessingTapProcessCallback](mtaudioprocessingtapprocesscallback.md): An audio processing callback function.
- [MTAudioProcessingTapFinalizeCallback](mtaudioprocessingtapfinalizecallback.md): A finalization callback function.
