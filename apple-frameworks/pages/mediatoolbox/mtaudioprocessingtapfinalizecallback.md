> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediatoolbox/mtaudioprocessingtapfinalizecallback](https://developer.apple.com/documentation/mediatoolbox/mtaudioprocessingtapfinalizecallback)

# MTAudioProcessingTapFinalizeCallback (Swift)

**Framework:** Media Toolbox  
**Kind:** Type Alias  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 6.0+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+

A finalization callback function.

## Declaration

```swift
typealias MTAudioProcessingTapFinalizeCallback = (MTAudioProcessingTap) -> Void
```

## Parameters

- `tap`: The processing tap.

<a id="Overview"></a>

## Overview

This callback is called when it is safe to free any buffers or other state associated with the tap. This callback will be called exactly once when the MTAudioProcessingTap object is finalized. If tapStorage was allocated in the init callback, it should be freed here.

## See Also

### Callback functions

- [MTAudioProcessingTapInitCallback](mtaudioprocessingtapinitcallback.md): An initialization callback function.
- [MTAudioProcessingTapPrepareCallback](mtaudioprocessingtappreparecallback.md): An audio processing preparation callback function.
- [MTAudioProcessingTapProcessCallback](mtaudioprocessingtapprocesscallback.md): An audio processing callback function.
- [MTAudioProcessingTapUnprepareCallback](mtaudioprocessingtapunpreparecallback.md): An audio processing unpreparation callback function.

# MTAudioProcessingTapFinalizeCallback (Objective-C)

**Framework:** Media Toolbox  
**Kind:** Type Alias  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 6.0+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+

A finalization callback function.

## Declaration

```objectivec
typedef void (*)(const struct opaqueMTAudioProcessingTap *) MTAudioProcessingTapFinalizeCallback;
```

## Parameters

- `tap`: The processing tap.

<a id="Overview"></a>

## Overview

This callback is called when it is safe to free any buffers or other state associated with the tap. This callback will be called exactly once when the MTAudioProcessingTap object is finalized. If tapStorage was allocated in the init callback, it should be freed here.

## See Also

### Callback functions

- [MTAudioProcessingTapInitCallback](mtaudioprocessingtapinitcallback.md): An initialization callback function.
- [MTAudioProcessingTapPrepareCallback](mtaudioprocessingtappreparecallback.md): An audio processing preparation callback function.
- [MTAudioProcessingTapProcessCallback](mtaudioprocessingtapprocesscallback.md): An audio processing callback function.
- [MTAudioProcessingTapUnprepareCallback](mtaudioprocessingtapunpreparecallback.md): An audio processing unpreparation callback function.
