> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/ioaudiotypes_h_user-space](https://developer.apple.com/documentation/iokit/ioaudiotypes_h_user-space)

# IOAudioTypes.h User-Space

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** API Collection

<a id="overview"></a>

## Overview

<a id="1770820"></a>

### Included Headers

- \<libkern/OSTypes.h\>
- \<mach/message.h\>
- \<device/device_types.h\>

## Topics

### Data Types

- [IOAudioControlCalls](https://developer.apple.com/documentation/kernel/ioaudiocontrolcalls): The set of constants passed to IOAudioControlUserClient::getExternalMethodForIndex() when making calls from the IOAudioFamily user client code.
- [IOAudioControlNotifications](https://developer.apple.com/documentation/kernel/ioaudiocontrolnotifications): The set of constants passed in the type field of IOAudioControlUserClient::registerNotificaitonPort().
- [IOAudioEngineCalls](https://developer.apple.com/documentation/kernel/ioaudioenginecalls): The set of constants passed to IOAudioEngineUserClient::getExternalMethodForIndex() when making calls from the IOAudioFamily user client code.
- [IOAudioEngineMemory](https://developer.apple.com/documentation/kernel/ioaudioenginememory): Used to identify the type of memory requested by a client process to be mapped into its process space
- [IOAudioEngineState](https://developer.apple.com/documentation/kernel/ioaudioenginestate): Represents the state of an IOAudioEngine
- [IOAudioEngineStatus](https://developer.apple.com/documentation/kernel/ioaudioenginestatus): Shared-memory structure giving audio engine status
- [IOAudioNotificationMessage](https://developer.apple.com/documentation/kernel/ioaudionotificationmessage): Used in the mach message for IOAudio notifications.
- [IOAudioSMPTETime](https://developer.apple.com/documentation/kernel/ioaudiosmptetime): A structure for holding a SMPTE time.
- [IOAudioStreamDirection](https://developer.apple.com/documentation/kernel/ioaudiostreamdirection): Represents the direction of an IOAudioStream

### Constants

- [Defines](ioaudiotypes_h_user-space/defines.md)
