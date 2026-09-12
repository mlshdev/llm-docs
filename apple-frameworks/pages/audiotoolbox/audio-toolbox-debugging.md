> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/audio-toolbox-debugging](https://developer.apple.com/documentation/audiotoolbox/audio-toolbox-debugging)

# Audio Toolbox Debugging (Swift)

**Framework:** Audio Toolbox  
**Kind:** API Collection

Obtain the internal state of Core Audio objects during the development and debugging of your code.

<a id="overview"></a>

## Overview

The `AudioToolbox.h` header file provides auxiliary functions for obtaining the internal state of a Core Audio object. Use these functions during development and debugging.

## Topics

### Audio Toolbox Debugging Functions

- [CAShow(\_:)](cashow%28__%29.md): Prints the internal state of an object to `stdio`.
- [CAShowFile(\_:\_:)](cashowfile%28____%29.md): Prints the internal state of an object to a file.

### Instrument Functions

- [CopyNameFromSoundBank(\_:\_:)](copynamefromsoundbank%28____%29.md): Copies the name of a sound bank from a sound bank file at a specified URL.
- [CopyInstrumentInfoFromSoundBank(\_:\_:)](copyinstrumentinfofromsoundbank%28____%29.md)
- [kInstrumentInfoKey_LSB](kinstrumentinfokey_lsb.md)
- [kInstrumentInfoKey_MSB](kinstrumentinfokey_msb.md)
- [kInstrumentInfoKey_Name](kinstrumentinfokey_name.md)
- [kInstrumentInfoKey_Program](kinstrumentinfokey_program.md)

### Constants

- [AUDIO_TOOLBOX_VERSION](audio_toolbox_version.md)

## See Also

### Utilities

- [Analyzing audio performance with Instruments](analyzing-audio-performance-with-instruments.md): Ensure a smooth and immersive audio experience in your apps using Audio System Trace.
- [Audio Converter Services](audio-converter-services.md): Convert between linear PCM audio formats, and between linear PCM and compressed formats.
- [Audio Session Support](audio-session-support.md): Describe the properties that you associate with audio sessions and audio routes.
- [Workgroup Management](workgroup-management.md): Coordinate the activity of custom real-time audio threads with those of the system and other processes.
- [Audio Codec](audio-codec.md): Translate audio data from one format to another.
- [Clock Utilities](clock-utilities.md): Manage time-related information associated with audio playback.

# Audio Toolbox Debugging (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** API Collection

Obtain the internal state of Core Audio objects during the development and debugging of your code.

<a id="overview"></a>

## Overview

The `AudioToolbox.h` header file provides auxiliary functions for obtaining the internal state of a Core Audio object. Use these functions during development and debugging.

## Topics

### Audio Toolbox Debugging Functions

- [CAShow](cashow%28__%29.md): Prints the internal state of an object to `stdio`.
- [CAShowFile](cashowfile%28____%29.md): Prints the internal state of an object to a file.

### Instrument Functions

- [CopyNameFromSoundBank](copynamefromsoundbank%28____%29.md): Copies the name of a sound bank from a sound bank file at a specified URL.
- [CopyInstrumentInfoFromSoundBank](copyinstrumentinfofromsoundbank%28____%29.md)
- [GetNameFromSoundBank](getnamefromsoundbank.md): Deprecated. Gets the name of a sound bank from a sound bank file.
- [kInstrumentInfoKey_LSB](kinstrumentinfokey_lsb.md)
- [kInstrumentInfoKey_MSB](kinstrumentinfokey_msb.md)
- [kInstrumentInfoKey_Name](kinstrumentinfokey_name.md)
- [kInstrumentInfoKey_Program](kinstrumentinfokey_program.md)

### Constants

- [AUDIO_TOOLBOX_VERSION](audio_toolbox_version.md)

## See Also

### Utilities

- [Analyzing audio performance with Instruments](analyzing-audio-performance-with-instruments.md): Ensure a smooth and immersive audio experience in your apps using Audio System Trace.
- [Audio Converter Services](audio-converter-services.md): Convert between linear PCM audio formats, and between linear PCM and compressed formats.
- [Audio Session Support](audio-session-support.md): Describe the properties that you associate with audio sessions and audio routes.
- [Workgroup Management](workgroup-management.md): Coordinate the activity of custom real-time audio threads with those of the system and other processes.
- [Audio Codec](audio-codec.md): Translate audio data from one format to another.
- [Clock Utilities](clock-utilities.md): Manage time-related information associated with audio playback.
