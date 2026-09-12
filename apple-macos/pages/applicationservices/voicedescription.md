> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/voicedescription](https://developer.apple.com/documentation/applicationservices/voicedescription)

# VoiceDescription (Swift)

**Framework:** Application Services  
**Kind:** Structure  
**Availability:** macOS 10.0+

Defines a voice description structure.

## Declaration

```swift
struct VoiceDescription
```

<a id="overview"></a>

## Overview

By calling the [GetVoiceDescription(\_:\_:\_:)](1463940-getvoicedescription.md) function, you can obtain information about a voice in a voice description structure.

## Topics

### Initializers

- [init()](voicedescription/1460513-init.md)
- [init(length:voice:version:name:comment:gender:age:script:language:region:reserved:)](voicedescription/1463154-init.md)

### Instance Properties

- [age](voicedescription/1462733-age.md): The approximate age in years of the individual represented by the voice.
- [comment](voicedescription/1461098-comment.md): Additional text information about the voice. Some synthesizers use this field to store a phrase that can be spoken.
- [gender](voicedescription/1460238-gender.md): The gender of the individual represented by the voice. See [Gender Constants](speech_synthesis_manager/1552246-gender_constants.md).
- [language](voicedescription/1464160-language.md): A code that indicates the language of voice output.
- [length](voicedescription/1463606-length.md): The size of the voice description structure, in bytes.
- [name](voicedescription/1459756-name.md): The name of the voice, preceded by a length byte. Names must be 63 characters or less.
- [region](voicedescription/1462975-region.md): A code that indicates the region represented by the voice.
- [reserved](voicedescription/1462772-reserved.md): Reserved. May be used to hold a 32-bit encoding value, if necessary (see the description of the `script` field for more information).
- [script](voicedescription/1461925-script.md): The encoding code of the text that the voice can process.
- [version](voicedescription/1464717-version.md): The version number of the voice.
- [voice](voicedescription/1462456-voice.md): A voice specification structure that uniquely identifies the voice.

# VoiceDescription (Objective-C)

**Framework:** Application Services  
**Kind:** Structure  
**Availability:** macOS 10.0+

Defines a voice description structure.

## Declaration

```objectivec
typedef struct VoiceDescription {
    ...
} VoiceDescription;
```

<a id="overview"></a>

## Overview

By calling the [GetVoiceDescription](1463940-getvoicedescription.md) function, you can obtain information about a voice in a voice description structure.

## Topics

### Instance Properties

- [age](voicedescription/1462733-age.md): The approximate age in years of the individual represented by the voice.
- [comment](voicedescription/1461098-comment.md): Additional text information about the voice. Some synthesizers use this field to store a phrase that can be spoken.
- [gender](voicedescription/1460238-gender.md): The gender of the individual represented by the voice. See [Gender Constants](1552246-gender_constants.md).
- [language](voicedescription/1464160-language.md): A code that indicates the language of voice output.
- [length](voicedescription/1463606-length.md): The size of the voice description structure, in bytes.
- [name](voicedescription/1459756-name.md): The name of the voice, preceded by a length byte. Names must be 63 characters or less.
- [region](voicedescription/1462975-region.md): A code that indicates the region represented by the voice.
- [reserved](voicedescription/1462772-reserved.md): Reserved. May be used to hold a 32-bit encoding value, if necessary (see the description of the `script` field for more information).
- [script](voicedescription/1461925-script.md): The encoding code of the text that the voice can process.
- [version](voicedescription/1464717-version.md): The version number of the voice.
- [voice](voicedescription/1462456-voice.md): A voice specification structure that uniquely identifies the voice.
