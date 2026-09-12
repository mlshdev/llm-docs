> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitextselectionrect](https://developer.apple.com/documentation/uikit/uitextselectionrect)

# UITextSelectionRect (Swift)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

An encapsulation of information about a selected range of text in a document.

## Declaration

```swift
@MainActor class UITextSelectionRect
```

<a id="overview"></a>

## Overview

This class is an abstract class and must be subclassed to be used. The system text input views provide their own concrete implementations of this class.

<a id="Subclassing-Notes"></a>

### Subclassing Notes

If you are implementing a custom text input view, you can subclass and use your custom class to return selection-related information. When subclassing, you should override and reimplement all properties. In your custom implementations, do not call `super`.

## Topics

### Accessing the Selection Rectangle

- [rect](uitextselectionrect/rect.md): The rectangle that encloses the text selection rectangle’s text range.

### Accessing Text-Related Attributes

- [writingDirection](uitextselectionrect/writingdirection.md): The writing direction of text in the text selection rectangle’s text range.
- [isVertical](uitextselectionrect/isvertical.md): A Boolean value that indicates whether the text is vertical.

### Determining the Selection Status

- [containsStart](uitextselectionrect/containsstart.md): A Boolean value that indicates whether the rectangle contains the start of the selection.
- [containsEnd](uitextselectionrect/containsend.md): A Boolean value that indicates whether the rectangle contains the end of the selection.

### Instance Properties

- [transform](uitextselectionrect/transform.md): Custom transform for highlight rects. This transform is assumed to be in the `textInputView` coordinate space. Default is CGAffineTransformIdentity (no transform applied).

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
- [UITextRange](uitextrange.md): A range of characters in a text container with a starting index and an ending index in string backing a text-entry object.

# UITextSelectionRect (Objective-C)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

An encapsulation of information about a selected range of text in a document.

## Declaration

```objectivec
@interface UITextSelectionRect : NSObject
```

<a id="overview"></a>

## Overview

This class is an abstract class and must be subclassed to be used. The system text input views provide their own concrete implementations of this class.

<a id="Subclassing-Notes"></a>

### Subclassing Notes

If you are implementing a custom text input view, you can subclass and use your custom class to return selection-related information. When subclassing, you should override and reimplement all properties. In your custom implementations, do not call `super`.

## Topics

### Accessing the Selection Rectangle

- [rect](uitextselectionrect/rect.md): The rectangle that encloses the text selection rectangle’s text range.

### Accessing Text-Related Attributes

- [writingDirection](uitextselectionrect/writingdirection.md): The writing direction of text in the text selection rectangle’s text range.
- [isVertical](uitextselectionrect/isvertical.md): A Boolean value that indicates whether the text is vertical.

### Determining the Selection Status

- [containsStart](uitextselectionrect/containsstart.md): A Boolean value that indicates whether the rectangle contains the start of the selection.
- [containsEnd](uitextselectionrect/containsend.md): A Boolean value that indicates whether the rectangle contains the end of the selection.

### Instance Properties

- [transform](uitextselectionrect/transform.md): Custom transform for highlight rects. This transform is assumed to be in the `textInputView` coordinate space. Default is CGAffineTransformIdentity (no transform applied).

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Metrics

- [UITextPosition](uitextposition.md): A position in a text container—that is, an index into the backing string in a text-display view.
- [UITextRange](uitextrange.md): A range of characters in a text container with a starting index and an ending index in string backing a text-entry object.
