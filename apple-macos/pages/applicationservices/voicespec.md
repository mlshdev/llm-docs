> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/voicespec](https://developer.apple.com/documentation/applicationservices/voicespec)

# VoiceSpec (Swift)

**Framework:** Application Services  
**Kind:** Structure  
**Availability:** macOS 10.0+

Defines a voice specification structure.

## Declaration

```swift
struct VoiceSpec
```

<a id="overview"></a>

## Overview

A voice specification structure provides a unique specification that you must use to obtain information about a voice. You also must use a voice specification structure if you wish to create a speech channel that generates speech in a voice other than the current system default voice.

To ensure compatibility with future versions of the Speech Synthesis Manager, you should never fill in the fields of a voice specification structure yourself. Instead, you should create a voice specification structure by using the [MakeVoiceSpec(\_:\_:\_:)](1461446-makevoicespec.md) function.

## Topics

### Initializers

- [init()](voicespec/1461864-init.md)
- [init(creator:id:)](voicespec/1459363-init.md)

### Instance Properties

- [creator](voicespec/1461398-creator.md): The synthesizer that is required to use the voice. This is equivalent to the value contained in the `synthManufacturer` field of a speech version information structure and that contained in the `synthCreator` field of a speech extension data structure. The set of `OSType` values specified entirely by space characters and lowercase letters is reserved.
- [id](voicespec/1464319-id.md): The voice ID of the voice for the synthesizer. Every voice on a synthesizer has a unique ID.

# VoiceSpec (Objective-C)

**Framework:** Application Services  
**Kind:** Structure  
**Availability:** macOS 10.0+

Defines a voice specification structure.

## Declaration

```objectivec
typedef struct VoiceSpec {
    ...
} VoiceSpec;
```

<a id="overview"></a>

## Overview

A voice specification structure provides a unique specification that you must use to obtain information about a voice. You also must use a voice specification structure if you wish to create a speech channel that generates speech in a voice other than the current system default voice.

To ensure compatibility with future versions of the Speech Synthesis Manager, you should never fill in the fields of a voice specification structure yourself. Instead, you should create a voice specification structure by using the [MakeVoiceSpec](1461446-makevoicespec.md) function.

## Topics

### Instance Properties

- [creator](voicespec/1461398-creator.md): The synthesizer that is required to use the voice. This is equivalent to the value contained in the `synthManufacturer` field of a speech version information structure and that contained in the `synthCreator` field of a speech extension data structure. The set of `OSType` values specified entirely by space characters and lowercase letters is reserved.
- [id](voicespec/1464319-id.md): The voice ID of the voice for the synthesizer. Every voice on a synthesizer has a unique ID.
