> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/phonemedescriptor](https://developer.apple.com/documentation/applicationservices/phonemedescriptor)

# PhonemeDescriptor (Swift)

**Framework:** Application Services  
**Kind:** Structure  
**Availability:** macOS 10.0+

Defines a phoneme descriptor structure.

## Declaration

```swift
struct PhonemeDescriptor
```

<a id="overview"></a>

## Overview

By calling the [GetSpeechInfo](1552220-getspeechinfo.md) function with the `soPhonemeSymbols` selector, you can obtain a phoneme descriptor structure, which describes all phonemes defined for the current synthesizer.

A common use for a phoneme descriptor structure is to provide a graphical display to the user of all available phonemes. Such a list is used only for a user entering phonemic data directly rather than just entering text.

## Topics

### Initializers

- [init()](phonemedescriptor/1461428-init.md)
- [init(phonemeCount:thePhonemes:)](phonemedescriptor/1464380-init.md)

### Instance Properties

- [phonemeCount](phonemedescriptor/1463147-phonemecount.md): The number of phonemes that the current synthesizer defines. Typically, this will correspond to the number of phonemes in the language supported by the synthesizer.
- [thePhonemes](phonemedescriptor/1464118-thephonemes.md): An array of phoneme information structures.

# PhonemeDescriptor (Objective-C)

**Framework:** Application Services  
**Kind:** Structure  
**Availability:** macOS 10.0+

Defines a phoneme descriptor structure.

## Declaration

```objectivec
typedef struct PhonemeDescriptor {
    ...
} PhonemeDescriptor;
```

<a id="overview"></a>

## Overview

By calling the [GetSpeechInfo](1552220-getspeechinfo.md) function with the `soPhonemeSymbols` selector, you can obtain a phoneme descriptor structure, which describes all phonemes defined for the current synthesizer.

A common use for a phoneme descriptor structure is to provide a graphical display to the user of all available phonemes. Such a list is used only for a user entering phonemic data directly rather than just entering text.

## Topics

### Instance Properties

- [phonemeCount](phonemedescriptor/1463147-phonemecount.md): The number of phonemes that the current synthesizer defines. Typically, this will correspond to the number of phonemes in the language supported by the synthesizer.
- [thePhonemes](phonemedescriptor/1464118-thephonemes.md): An array of phoneme information structures.
