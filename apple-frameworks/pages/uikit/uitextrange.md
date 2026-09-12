> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitextrange](https://developer.apple.com/documentation/uikit/uitextrange)

# UITextRange (Swift)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

A range of characters in a text container with a starting index and an ending index in string backing a text-entry object.

## Declaration

```swift
@MainActor class UITextRange
```

<a id="overview"></a>

## Overview

Classes that adopt the [UITextInput](uitextinput.md) protocol must create custom [UITextRange](uitextrange.md) objects for representing ranges within the text managed by the class. The starting and ending indexes of the range are represented by [UITextPosition](uitextposition.md) objects. The text system uses both [UITextRange](uitextrange.md) and [UITextPosition](uitextposition.md) objects for communicating text-layout information. There are two reasons for using objects for text ranges rather than primitive types such as [NSRange](../foundation/nsrange-c.struct.md):

- Some documents contain nested elements (for example, HTML tags and embedded objects) and you need to track both absolute position and position in the visible text.
- The WebKit framework requires that text indexes and offsets be represented by objects.

If you adopt the [UITextInput](uitextinput.md) protocol, you must create a custom [UITextRange](uitextrange.md) subclass as well as a custom [UITextPosition](uitextposition.md) subclass.

## Topics

### Defining Ranges of Text

- [start](uitextrange/start.md): The start of a range of text.
- [end](uitextrange/end.md): The end of the range of text.
- [isEmpty](uitextrange/isempty.md): A Boolean value that indicates whether the range of text represented by the receiver is zero-length.

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

- [UITextPosition](uitextposition.md): A position in a text container—that is, an index into the backing string in a text-display view.
- [UITextSelectionRect](uitextselectionrect.md): An encapsulation of information about a selected range of text in a document.

# UITextRange (Objective-C)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

A range of characters in a text container with a starting index and an ending index in string backing a text-entry object.

## Declaration

```objectivec
@interface UITextRange : NSObject
```

<a id="overview"></a>

## Overview

Classes that adopt the [UITextInput](uitextinput.md) protocol must create custom [UITextRange](uitextrange.md) objects for representing ranges within the text managed by the class. The starting and ending indexes of the range are represented by [UITextPosition](uitextposition.md) objects. The text system uses both [UITextRange](uitextrange.md) and [UITextPosition](uitextposition.md) objects for communicating text-layout information. There are two reasons for using objects for text ranges rather than primitive types such as [NSRange](../foundation/nsrange-c.struct.md):

- Some documents contain nested elements (for example, HTML tags and embedded objects) and you need to track both absolute position and position in the visible text.
- The WebKit framework requires that text indexes and offsets be represented by objects.

If you adopt the [UITextInput](uitextinput.md) protocol, you must create a custom [UITextRange](uitextrange.md) subclass as well as a custom [UITextPosition](uitextposition.md) subclass.

## Topics

### Defining Ranges of Text

- [start](uitextrange/start.md): The start of a range of text.
- [end](uitextrange/end.md): The end of the range of text.
- [empty](uitextrange/isempty.md): A Boolean value that indicates whether the range of text represented by the receiver is zero-length.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Metrics

- [UITextPosition](uitextposition.md): A position in a text container—that is, an index into the backing string in a text-display view.
- [UITextSelectionRect](uitextselectionrect.md): An encapsulation of information about a selected range of text in a document.
