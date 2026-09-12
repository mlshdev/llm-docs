> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/latentsemanticmapping/lsmtext](https://developer.apple.com/documentation/latentsemanticmapping/lsmtext)

# LSMText (Swift)

**Framework:** Latent Semantic Mapping  
**Kind:** Class  
**Availability:** Mac Catalyst · macOS

An input text.

## Declaration

```swift
class LSMText
```

<a id="overview"></a>

## Overview

An [LSMText](lsmtext.md) is a mutable, opaque Core Foundation type that represents an input text.

## Topics

### Creating a Text Object

- [LSMTextCreate(\_:\_:)](lsmtextcreate%28____%29.md): Creates a new text.

### Adding to the Text

- [LSMTextAddToken(\_:\_:)](lsmtextaddtoken%28____%29.md): Adds an arbitrary binary token to the text.
- [LSMTextAddWord(\_:\_:)](lsmtextaddword%28____%29.md): Adds a word to the text.
- [LSMTextAddWords(\_:\_:\_:\_:)](lsmtextaddwords%28________%29.md): Breaks a string into words using the specified locale, and adds the words to the text.
- [Parsing Flags](parsing-flags.md): Options for parsing words to add to the text.

### Getting the Type Identifier

- [LSMTextGetTypeID()](lsmtextgettypeid%28%29.md): Returns the Core Foundation type identifier for Latent Semantic Mapping texts.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)

## See Also

### Text Classification

- [LSMMap](lsmmap.md): A map between a set of categories and related text.
- [LSMResult](lsmresult.md): A result of a lookup in a map.

# LSMTextRef (Objective-C)

**Framework:** Latent Semantic Mapping  
**Kind:** Type Alias  
**Availability:** Mac Catalyst · macOS

An input text.

## Declaration

```objectivec
typedef struct __LSMText * LSMTextRef;
```

<a id="overview"></a>

## Overview

An [LSMTextRef](lsmtext.md) is a mutable, opaque Core Foundation type that represents an input text.

## Topics

### Creating a Text Object

- [LSMTextCreate](lsmtextcreate%28____%29.md): Creates a new text.

### Adding to the Text

- [LSMTextAddToken](lsmtextaddtoken%28____%29.md): Adds an arbitrary binary token to the text.
- [LSMTextAddWord](lsmtextaddword%28____%29.md): Adds a word to the text.
- [LSMTextAddWords](lsmtextaddwords%28________%29.md): Breaks a string into words using the specified locale, and adds the words to the text.
- [Parsing Flags](parsing-flags.md): Options for parsing words to add to the text.

### Getting the Type Identifier

- [LSMTextGetTypeID](lsmtextgettypeid%28%29.md): Returns the Core Foundation type identifier for Latent Semantic Mapping texts.

## See Also

### Text Classification

- [LSMMapRef](lsmmap.md): A map between a set of categories and related text.
- [LSMResultRef](lsmresult.md): A result of a lookup in a map.
