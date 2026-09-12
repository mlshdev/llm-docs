> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/browserenginekit/bekeyentrycontext](https://developer.apple.com/documentation/browserenginekit/bekeyentrycontext)

# BEKeyEntryContext (Swift)

**Framework:** BrowserEngineKit  
**Kind:** Class  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · tvOS 17.4+ · visionOS 1.1+

A class that describes a key event and the text document with which the event is associated.

## Declaration

```swift
class BEKeyEntryContext
```

<a id="overview"></a>

## Overview

If the key entry occurs within the context of a composed input mode, for example Chinese, Japanese, or Korean input, set [shouldEvaluateForInputSystemHandling](bekeyentrycontext/shouldevaluateforinputsystemhandling.md) to `true`. The text system uses the document’s marked text to combine multiple key events into a single input character.

## Topics

### Creating a key entry context

- [init(keyEntry:)](bekeyentrycontext/init%28keyentry_%29.md): Initializes an instance of BEKeyEventContext with its corresponding `keyState`

### Getting the information about the key event

- [keyEntry](bekeyentrycontext/keyentry.md): BEKeyEntry for which this context is representing.
- [shouldInsertCharacter](bekeyentrycontext/shouldinsertcharacter.md): Represents whether a character should be inserted.
- [shouldEvaluateForInputSystemHandling](bekeyentrycontext/shouldevaluateforinputsystemhandling.md): Represents whether the key event should be evaluated within the context of a composed input mode.

### Getting information about the text document

- [isDocumentEditable](bekeyentrycontext/isdocumenteditable.md): Represents whether the web document is editable

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Keyboard input

- [BEKeyEntry](bekeyentry.md): A class that represents a keyboard event in the text system.
- [BEKeyModifierFlags](bekeymodifierflags.md): An enumeration that records the state of the shift-modifier keys.

# BEKeyEntryContext (Objective-C)

**Framework:** BrowserEngineKit  
**Kind:** Class  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · tvOS 17.4+ · visionOS 1.1+

A class that describes a key event and the text document with which the event is associated.

## Declaration

```objectivec
@interface BEKeyEntryContext : NSObject
```

<a id="overview"></a>

## Overview

If the key entry occurs within the context of a composed input mode, for example Chinese, Japanese, or Korean input, set [shouldEvaluateForInputSystemHandling](bekeyentrycontext/shouldevaluateforinputsystemhandling.md) to `true`. The text system uses the document’s marked text to combine multiple key events into a single input character.

## Topics

### Creating a key entry context

- [initWithKeyEntry:](bekeyentrycontext/init%28keyentry_%29.md): Initializes an instance of BEKeyEventContext with its corresponding `keyState`

### Getting the information about the key event

- [keyEntry](bekeyentrycontext/keyentry.md): BEKeyEntry for which this context is representing.
- [shouldInsertCharacter](bekeyentrycontext/shouldinsertcharacter.md): Represents whether a character should be inserted.
- [shouldEvaluateForInputSystemHandling](bekeyentrycontext/shouldevaluateforinputsystemhandling.md): Represents whether the key event should be evaluated within the context of a composed input mode.

### Getting information about the text document

- [documentEditable](bekeyentrycontext/isdocumenteditable.md): Represents whether the web document is editable

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

## See Also

### Keyboard input

- [BEKeyEntry](bekeyentry.md): A class that represents a keyboard event in the text system.
- [BEKeyModifierFlags](bekeymodifierflags.md): An enumeration that records the state of the shift-modifier keys.
