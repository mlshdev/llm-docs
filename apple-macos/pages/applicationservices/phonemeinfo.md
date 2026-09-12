> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/phonemeinfo](https://developer.apple.com/documentation/applicationservices/phonemeinfo)

# PhonemeInfo (Swift)

**Framework:** Application Services  
**Kind:** Structure  
**Availability:** macOS 10.0+

Defines a structure that stores information about a phoneme.

## Declaration

```swift
struct PhonemeInfo
```

<a id="overview"></a>

## Overview

Ordinarily, you use a phoneme information structure to show the user how to enter text to represent a particular phoneme when the `'PHON'` input mode is activated.

You might use the information contained in the `hiliteStart` and `hiliteEnd` fields to highlight the characters in the example word that represent the phoneme.

To obtain a phoneme information structure for an individual phoneme, you must obtain a list of phonemes through a phoneme descriptor structure.

## Topics

### Initializers

- [init()](phonemeinfo/1461979-init.md)
- [init(opcode:phStr:exampleStr:hiliteStart:hiliteEnd:)](phonemeinfo/1459158-init.md)

### Instance Properties

- [exampleStr](phonemeinfo/1460341-examplestr.md): An example word that illustrates use of the phoneme.
- [hiliteEnd](phonemeinfo/1464802-hiliteend.md): The number of characters between the beginning of the example word and the end of the portion of that word representing the phoneme.
- [hiliteStart](phonemeinfo/1464138-hilitestart.md): The number of characters in the example word that precede the portion of that word representing the phoneme.
- [opcode](phonemeinfo/1459025-opcode.md): The opcode for the phoneme.
- [phStr](phonemeinfo/1461253-phstr.md): The string used to represent the phoneme. The string does not necessarily have a phonetic connection to the phoneme, but might simply be an abstract textual representation of it.

# PhonemeInfo (Objective-C)

**Framework:** Application Services  
**Kind:** Structure  
**Availability:** macOS 10.0+

Defines a structure that stores information about a phoneme.

## Declaration

```objectivec
typedef struct PhonemeInfo {
    ...
} PhonemeInfo;
```

<a id="overview"></a>

## Overview

Ordinarily, you use a phoneme information structure to show the user how to enter text to represent a particular phoneme when the `'PHON'` input mode is activated.

You might use the information contained in the `hiliteStart` and `hiliteEnd` fields to highlight the characters in the example word that represent the phoneme.

To obtain a phoneme information structure for an individual phoneme, you must obtain a list of phonemes through a phoneme descriptor structure.

## Topics

### Instance Properties

- [exampleStr](phonemeinfo/1460341-examplestr.md): An example word that illustrates use of the phoneme.
- [hiliteEnd](phonemeinfo/1464802-hiliteend.md): The number of characters between the beginning of the example word and the end of the portion of that word representing the phoneme.
- [hiliteStart](phonemeinfo/1464138-hilitestart.md): The number of characters in the example word that precede the portion of that word representing the phoneme.
- [opcode](phonemeinfo/1459025-opcode.md): The opcode for the phoneme.
- [phStr](phonemeinfo/1461253-phstr.md): The string used to represent the phoneme. The string does not necessarily have a phonetic connection to the phoneme, but might simply be an abstract textual representation of it.
