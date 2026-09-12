> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitextinputstringtokenizer](https://developer.apple.com/documentation/uikit/uitextinputstringtokenizer)

# UITextInputStringTokenizer (Swift)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

A base implementation of the text-input tokenizer protocol.

## Declaration

```swift
@MainActor class UITextInputStringTokenizer
```

<a id="overview"></a>

## Overview

If you want to take advantage of this base implementation of the [UITextInputTokenizer](uitextinputtokenizer.md) protocol, you should subclass this class and handle application-specific directions and granularities affected by layout. When you instantiate a class you must supply the document class that’s adopting the [UITextInput](uitextinput.md) protocol for your application.

<a id="Subclassing-notes"></a>

### Subclassing notes

When you subclass [UITextInputStringTokenizer](uitextinputstringtokenizer.md), override all [UITextInputTokenizer](uitextinputtokenizer.md) methods, calling the superclass implementation (`super`) when method parameters aren’t affected by layout. For example, the subclass needs a custom implementation of all methods for line granularity. For the left direction, it needs to decide whether left corresponds at a given position to forward or backward, and then call `super` passing in the storage direction ([UITextStorageDirection](uitextstoragedirection.md)).

## Topics

### Initializing a tokenizer

- [init(textInput:)](uitextinputstringtokenizer/init%28textinput_%29.md): Returns an object initialized with the document object that directly communicates with the text input system.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [UITextInputTokenizer](uitextinputtokenizer.md)

## See Also

### Text tokenizer

- [UITextInputTokenizer](uitextinputtokenizer.md): A tokenizer, which is an object that allows the text input system to evaluate text units of different granularities.

# UITextInputStringTokenizer (Objective-C)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

A base implementation of the text-input tokenizer protocol.

## Declaration

```objectivec
@interface UITextInputStringTokenizer : NSObject
```

<a id="overview"></a>

## Overview

If you want to take advantage of this base implementation of the [UITextInputTokenizer](uitextinputtokenizer.md) protocol, you should subclass this class and handle application-specific directions and granularities affected by layout. When you instantiate a class you must supply the document class that’s adopting the [UITextInput](uitextinput.md) protocol for your application.

<a id="Subclassing-notes"></a>

### Subclassing notes

When you subclass [UITextInputStringTokenizer](uitextinputstringtokenizer.md), override all [UITextInputTokenizer](uitextinputtokenizer.md) methods, calling the superclass implementation (`super`) when method parameters aren’t affected by layout. For example, the subclass needs a custom implementation of all methods for line granularity. For the left direction, it needs to decide whether left corresponds at a given position to forward or backward, and then call `super` passing in the storage direction ([UITextStorageDirection](uitextstoragedirection.md)).

## Topics

### Initializing a tokenizer

- [initWithTextInput:](uitextinputstringtokenizer/init%28textinput_%29.md): Returns an object initialized with the document object that directly communicates with the text input system.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [UITextInputTokenizer](uitextinputtokenizer.md)

## See Also

### Text tokenizer

- [UITextInputTokenizer](uitextinputtokenizer.md): A tokenizer, which is an object that allows the text input system to evaluate text units of different granularities.
