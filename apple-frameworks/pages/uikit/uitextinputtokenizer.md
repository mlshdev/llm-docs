> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitextinputtokenizer](https://developer.apple.com/documentation/uikit/uitextinputtokenizer)

# UITextInputTokenizer (Swift)

**Framework:** UIKit  
**Kind:** Protocol  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

A tokenizer, which is an object that allows the text input system to evaluate text units of different granularities.

## Declaration

```swift
@MainActor protocol UITextInputTokenizer : NSObjectProtocol
```

<a id="overview"></a>

## Overview

Granularities of text units are always evaluated with reference to a storage or reference direction.

Text-processing objects that conform to the [UITextInput](uitextinput.md) protocol must hold a reference to a tokenizer (through the [tokenizer](uitextinput/tokenizer.md) property). The [UITextInputStringTokenizer](uitextinputstringtokenizer.md) class provides a default base implementation of the [UITextInputTokenizer](uitextinputtokenizer.md) protocol. Tokenizers of this class are suitable for most western-language keyboards. Apps with different requirements may adopt the [UITextInputTokenizer](uitextinputtokenizer.md) protocol and create their own tokenizers.

## Topics

### Determining text positions relative to unit boundaries

- [isPosition(\_:atBoundary:inDirection:)](uitextinputtokenizer/isposition%28__atboundary_indirection_%29.md): Return whether a text position is at a boundary of a text unit of a specified granularity in a specified direction.
- [isPosition(\_:withinTextUnit:inDirection:)](uitextinputtokenizer/isposition%28__withintextunit_indirection_%29.md): Return whether a text position is within a text unit of a specified granularity in a specified direction.

### Computing text position by unit boundaries

- [position(from:toBoundary:inDirection:)](uitextinputtokenizer/position%28from_toboundary_indirection_%29.md): Return the next text position at a boundary of a text unit of the given granularity in a given direction.

### Getting ranges of specific text units

- [rangeEnclosingPosition(\_:with:inDirection:)](uitextinputtokenizer/rangeenclosingposition%28__with_indirection_%29.md): Return the range for the text enclosing a text position in a text unit of a given granularity in a given direction.

### Constants

- [UITextDirection](uitextdirection.md): The direction of the text.
- [UITextGranularity](uitextgranularity.md): The granularity of a unit of text.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

### Conforming Types

- [UITextInputStringTokenizer](uitextinputstringtokenizer.md)

## See Also

### Text tokenizer

- [UITextInputStringTokenizer](uitextinputstringtokenizer.md): A base implementation of the text-input tokenizer protocol.

# UITextInputTokenizer (Objective-C)

**Framework:** UIKit  
**Kind:** Protocol  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

A tokenizer, which is an object that allows the text input system to evaluate text units of different granularities.

## Declaration

```objectivec
@protocol UITextInputTokenizer <NSObject>
```

<a id="overview"></a>

## Overview

Granularities of text units are always evaluated with reference to a storage or reference direction.

Text-processing objects that conform to the [UITextInput](uitextinput.md) protocol must hold a reference to a tokenizer (through the [tokenizer](uitextinput/tokenizer.md) property). The [UITextInputStringTokenizer](uitextinputstringtokenizer.md) class provides a default base implementation of the [UITextInputTokenizer](uitextinputtokenizer.md) protocol. Tokenizers of this class are suitable for most western-language keyboards. Apps with different requirements may adopt the [UITextInputTokenizer](uitextinputtokenizer.md) protocol and create their own tokenizers.

## Topics

### Determining text positions relative to unit boundaries

- [isPosition:atBoundary:inDirection:](uitextinputtokenizer/isposition%28__atboundary_indirection_%29.md): Return whether a text position is at a boundary of a text unit of a specified granularity in a specified direction.
- [isPosition:withinTextUnit:inDirection:](uitextinputtokenizer/isposition%28__withintextunit_indirection_%29.md): Return whether a text position is within a text unit of a specified granularity in a specified direction.

### Computing text position by unit boundaries

- [positionFromPosition:toBoundary:inDirection:](uitextinputtokenizer/position%28from_toboundary_indirection_%29.md): Return the next text position at a boundary of a text unit of the given granularity in a given direction.

### Getting ranges of specific text units

- [rangeEnclosingPosition:withGranularity:inDirection:](uitextinputtokenizer/rangeenclosingposition%28__with_indirection_%29.md): Return the range for the text enclosing a text position in a text unit of a given granularity in a given direction.

### Constants

- [UITextDirection](uitextdirection.md): The direction of the text.
- [UITextGranularity](uitextgranularity.md): The granularity of a unit of text.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

### Conforming Types

- [UITextInputStringTokenizer](uitextinputstringtokenizer.md)

## See Also

### Text tokenizer

- [UITextInputStringTokenizer](uitextinputstringtokenizer.md): A base implementation of the text-input tokenizer protocol.
