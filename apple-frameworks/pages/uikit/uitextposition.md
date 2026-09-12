> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitextposition](https://developer.apple.com/documentation/uikit/uitextposition)

# UITextPosition (Swift)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

A position in a text container—that is, an index into the backing string in a text-display view.

## Declaration

```swift
@MainActor class UITextPosition
```

<a id="overview"></a>

## Overview

Classes that adopt the [UITextInput](uitextinput.md) protocol must create custom [UITextPosition](uitextposition.md) objects for representing specific locations within the text managed by the class. The text input system uses both these objects and [UITextRange](uitextrange.md) objects for communicating text-layout information. There are two reasons for using objects for text positions rather than primitive types such as [NSInteger](../objectivec/nsinteger.md):

- Some documents contain nested elements (for example, HTML tags and embedded objects) and you need to track both absolute position and position in the visible text.
- The WebKit framework requires that text indexes and offsets be represented by objects.

The simplest of [UITextPosition](uitextposition.md) objects—for example, one used in plain text—might have a single integer property that represents an offset into a string. If you adopt the [UITextInput](uitextinput.md) protocol, you must create a custom [UITextRange](uitextrange.md) subclass as well as a custom [UITextPosition](uitextposition.md) subclass.

This class declares no methods of its own.

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

## See Also

### Metrics

- [UITextRange](uitextrange.md): A range of characters in a text container with a starting index and an ending index in string backing a text-entry object.
- [UITextSelectionRect](uitextselectionrect.md): An encapsulation of information about a selected range of text in a document.

# UITextPosition (Objective-C)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

A position in a text container—that is, an index into the backing string in a text-display view.

## Declaration

```objectivec
@interface UITextPosition : NSObject
```

<a id="overview"></a>

## Overview

Classes that adopt the [UITextInput](uitextinput.md) protocol must create custom [UITextPosition](uitextposition.md) objects for representing specific locations within the text managed by the class. The text input system uses both these objects and [UITextRange](uitextrange.md) objects for communicating text-layout information. There are two reasons for using objects for text positions rather than primitive types such as [NSInteger](../objectivec/nsinteger.md):

- Some documents contain nested elements (for example, HTML tags and embedded objects) and you need to track both absolute position and position in the visible text.
- The WebKit framework requires that text indexes and offsets be represented by objects.

The simplest of [UITextPosition](uitextposition.md) objects—for example, one used in plain text—might have a single integer property that represents an offset into a string. If you adopt the [UITextInput](uitextinput.md) protocol, you must create a custom [UITextRange](uitextrange.md) subclass as well as a custom [UITextPosition](uitextposition.md) subclass.

This class declares no methods of its own.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Metrics

- [UITextRange](uitextrange.md): A range of characters in a text container with a starting index and an ending index in string backing a text-entry object.
- [UITextSelectionRect](uitextselectionrect.md): An encapsulation of information about a selected range of text in a document.
