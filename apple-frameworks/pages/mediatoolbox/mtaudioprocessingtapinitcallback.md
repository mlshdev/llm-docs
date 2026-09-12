> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediatoolbox/mtaudioprocessingtapinitcallback](https://developer.apple.com/documentation/mediatoolbox/mtaudioprocessingtapinitcallback)

# MTAudioProcessingTapInitCallback (Swift)

**Framework:** Media Toolbox  
**Kind:** Type Alias  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 6.0+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+

An initialization callback function.

## Declaration

```swift
typealias MTAudioProcessingTapInitCallback = (MTAudioProcessingTap, UnsafeMutableRawPointer?, UnsafeMutablePointer<UnsafeMutableRawPointer?>) -> Void
```

## Parameters

- `tap`: The processing tap.
- `clientInfo`: The client data of the processing tap passed in callbacks struct in MTAudioProcessingTapCreate().
- `tapStorageOut`: Additional client data.  The intent is for clients to allocate a block of memory for use within their custom  MTAudioProcessingTap implementation that will be freed when the finalize callback is invoked.  This argument is optional.

<a id="Overview"></a>

## Overview

An init callback that is invoked when MTAudioProcessingTapCreate() is called. The init callback is always balanced by a finalize callback when the MTAudioProcessingTap object is released.

## See Also

### Callback functions

- [MTAudioProcessingTapPrepareCallback](mtaudioprocessingtappreparecallback.md): An audio processing preparation callback function.
- [MTAudioProcessingTapProcessCallback](mtaudioprocessingtapprocesscallback.md): An audio processing callback function.
- [MTAudioProcessingTapUnprepareCallback](mtaudioprocessingtapunpreparecallback.md): An audio processing unpreparation callback function.
- [MTAudioProcessingTapFinalizeCallback](mtaudioprocessingtapfinalizecallback.md): A finalization callback function.

# MTAudioProcessingTapInitCallback (Objective-C)

**Framework:** Media Toolbox  
**Kind:** Type Alias  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 6.0+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+

An initialization callback function.

## Declaration

```objectivec
typedef void (*)(const struct opaqueMTAudioProcessingTap *, void *, void **) MTAudioProcessingTapInitCallback;
```

## Parameters

- `tap`: The processing tap.
- `clientInfo`: The client data of the processing tap passed in callbacks struct in MTAudioProcessingTapCreate().
- `tapStorageOut`: Additional client data.  The intent is for clients to allocate a block of memory for use within their custom  MTAudioProcessingTap implementation that will be freed when the finalize callback is invoked.  This argument is optional.

<a id="Overview"></a>

## Overview

An init callback that is invoked when MTAudioProcessingTapCreate() is called. The init callback is always balanced by a finalize callback when the MTAudioProcessingTap object is released.

## See Also

### Callback functions

- [MTAudioProcessingTapPrepareCallback](mtaudioprocessingtappreparecallback.md): An audio processing preparation callback function.
- [MTAudioProcessingTapProcessCallback](mtaudioprocessingtapprocesscallback.md): An audio processing callback function.
- [MTAudioProcessingTapUnprepareCallback](mtaudioprocessingtapunpreparecallback.md): An audio processing unpreparation callback function.
- [MTAudioProcessingTapFinalizeCallback](mtaudioprocessingtapfinalizecallback.md): A finalization callback function.
