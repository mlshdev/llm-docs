> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiscribbleinteraction](https://developer.apple.com/documentation/uikit/uiscribbleinteraction)

# UIScribbleInteraction (Swift)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

An interaction for customizing the behavior of Scribble on text input views, or for suppressing it entirely in specific cases.

## Declaration

```swift
@MainActor class UIScribbleInteraction
```

<a id="overview"></a>

## Overview

By default, Scribble lets users enter text by writing directly into any editable view that implements [UITextInput](uitextinput.md).

In apps with customized text fields, you can use the [UIScribbleInteractionDelegate](uiscribbleinteractiondelegate.md) callbacks to optimize the UI for a better writing experience. For example, you can hide custom placeholders when the user starts writing, or delay focusing on the field if it moves while gaining focus.

With text views that support drawing with Apple Pencil, you’ll need to suppress Scribble on nearby text fields to keep them from taking over the Pencil events for writing.

## Topics

### Creating a Scribble interaction

- [init(delegate:)](uiscribbleinteraction/init%28delegate_%29.md): Creates a Scribble interaction that allows customizing the behavior of Scribble on text input views with the delegate you provide.

### Managing Scribble interactions

- [delegate](uiscribbleinteraction/delegate.md): The object that acts as the delegate for this interaction and responds to Scribble events for text input views.

### Detecting writing

- [isHandlingWriting](uiscribbleinteraction/ishandlingwriting.md): A Boolean value that indicates whether the user is actively writing in a text view.

### Expecting input from Apple Pencil

- [isPencilInputExpected](uiscribbleinteraction/ispencilinputexpected.md): A Boolean value that indicates the user is likely to use Apple Pencil and handwriting instead of the keyboard to enter text.

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
- [UIInteraction](uiinteraction.md)

## See Also

### Text fields

- [UIScribbleInteractionDelegate](uiscribbleinteractiondelegate.md): Methods for customizing or suppressing Scribble behavior within text input views.

# UIScribbleInteraction (Objective-C)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

An interaction for customizing the behavior of Scribble on text input views, or for suppressing it entirely in specific cases.

## Declaration

```objectivec
@interface UIScribbleInteraction : NSObject
```

<a id="overview"></a>

## Overview

By default, Scribble lets users enter text by writing directly into any editable view that implements [UITextInput](uitextinput.md).

In apps with customized text fields, you can use the [UIScribbleInteractionDelegate](uiscribbleinteractiondelegate.md) callbacks to optimize the UI for a better writing experience. For example, you can hide custom placeholders when the user starts writing, or delay focusing on the field if it moves while gaining focus.

With text views that support drawing with Apple Pencil, you’ll need to suppress Scribble on nearby text fields to keep them from taking over the Pencil events for writing.

## Topics

### Creating a Scribble interaction

- [initWithDelegate:](uiscribbleinteraction/init%28delegate_%29.md): Creates a Scribble interaction that allows customizing the behavior of Scribble on text input views with the delegate you provide.

### Managing Scribble interactions

- [delegate](uiscribbleinteraction/delegate.md): The object that acts as the delegate for this interaction and responds to Scribble events for text input views.

### Detecting writing

- [handlingWriting](uiscribbleinteraction/ishandlingwriting.md): A Boolean value that indicates whether the user is actively writing in a text view.

### Expecting input from Apple Pencil

- [pencilInputExpected](uiscribbleinteraction/ispencilinputexpected.md): A Boolean value that indicates the user is likely to use Apple Pencil and handwriting instead of the keyboard to enter text.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [UIInteraction](uiinteraction.md)

## See Also

### Text fields

- [UIScribbleInteractionDelegate](uiscribbleinteractiondelegate.md): Methods for customizing or suppressing Scribble behavior within text input views.
