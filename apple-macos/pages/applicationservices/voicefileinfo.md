> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/voicefileinfo](https://developer.apple.com/documentation/applicationservices/voicefileinfo)

# VoiceFileInfo (Swift)

**Framework:** Application Services  
**Kind:** Structure  
**Availability:** macOS 10.0+

Defines a voice file information structure.

## Declaration

```swift
struct VoiceFileInfo
```

<a id="overview"></a>

## Overview

A voice file information structure specifies the file in which a voice is stored and the resource ID of the voice within that file. Use the [GetVoiceInfo(\_:\_:\_:)](1461410-getvoiceinfo.md) function to obtain a voice file information structure for a voice.

## Topics

### Initializers

- [init()](voicefileinfo/1464655-init.md)
- [init(fileSpec:resID:)](voicefileinfo/1460648-init.md)

### Instance Properties

- [fileSpec](voicefileinfo/1460824-filespec.md): A file system specification structure that contains the volume, directory, and name of the file containing the voice. Generally, files containing a single voice are of type `kTextToSpeechVoiceFileType`, and files containing multiple voices are of type `kTextToSpeechVoiceBundleType`.
- [resID](voicefileinfo/1462134-resid.md): The resource ID of the voice in the file. Voices are stored in resources of type `kTextToSpeechVoiceType`.

# VoiceFileInfo (Objective-C)

**Framework:** Application Services  
**Kind:** Structure  
**Availability:** macOS 10.0+

Defines a voice file information structure.

## Declaration

```objectivec
typedef struct VoiceFileInfo {
    ...
} VoiceFileInfo;
```

<a id="overview"></a>

## Overview

A voice file information structure specifies the file in which a voice is stored and the resource ID of the voice within that file. Use the [GetVoiceInfo](1461410-getvoiceinfo.md) function to obtain a voice file information structure for a voice.

## Topics

### Instance Properties

- [fileSpec](voicefileinfo/1460824-filespec.md): A file system specification structure that contains the volume, directory, and name of the file containing the voice. Generally, files containing a single voice are of type `kTextToSpeechVoiceFileType`, and files containing multiple voices are of type `kTextToSpeechVoiceBundleType`.
- [resID](voicefileinfo/1462134-resid.md): The resource ID of the voice in the file. Voices are stored in resources of type `kTextToSpeechVoiceType`.
