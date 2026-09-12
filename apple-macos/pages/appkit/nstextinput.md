> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextinput](https://developer.apple.com/documentation/appkit/nstextinput)

# NSTextInput (Swift)

**Framework:** AppKit  
**Kind:** Protocol  
**Availability:** macOS

A set of methods that text views need to implement to interact properly with the text input management system.

## Declaration

```swift
protocol NSTextInput
```

<a id="overview"></a>

## Overview

> **Important**

>  [NSTextInput](nstextinput.md) protocol is slated for deprecation. Please use the [NSTextInputClient](nstextinputclient.md) protocol instead.

`NSTextView` and its abstract superclass `NSText` are the only classes included in Cocoa that implement `NSTextInput`. To create another text view class, you can either subclass `NSTextView` (and not `NSText`, for historical reasons), or subclass `NSView` and implement the `NSTextInput` protocol.

> **Important**

>  Methods specific to the `NSTextInput` protocol are intended for dealing with text input and generally are not suitable for other purposes.

## Relationships

### Conforming Types

- [NSTextView](nstextview.md)

# NSTextInput (Objective-C)

**Framework:** AppKit  
**Kind:** Protocol  
**Availability:** macOS

A set of methods that text views need to implement to interact properly with the text input management system.

## Declaration

```objectivec
@protocol NSTextInput
```

<a id="overview"></a>

## Overview

> **Important**

>  [NSTextInput](nstextinput.md) protocol is slated for deprecation. Please use the [NSTextInputClient](nstextinputclient.md) protocol instead.

`NSTextView` and its abstract superclass `NSText` are the only classes included in Cocoa that implement `NSTextInput`. To create another text view class, you can either subclass `NSTextView` (and not `NSText`, for historical reasons), or subclass `NSView` and implement the `NSTextInput` protocol.

> **Important**

>  Methods specific to the `NSTextInput` protocol are intended for dealing with text input and generally are not suitable for other purposes.

## Topics

### Marked text

- [hasMarkedText](nstextinput/hasmarkedtext.md): Deprecated. Returns a Boolean value indicating whether or not the receiver has marked text.
- [markedRange](nstextinput/markedrange.md): Deprecated. Returns the range of the marked text.
- [selectedRange](nstextinput/selectedrange.md): Deprecated. Returns the range of selected text.
- [setMarkedText:selectedRange:](nstextinput/setmarkedtext_selectedrange_.md): Deprecated. Replaces currently marked text in the receiver’s text storage with the given string and sets the selection to the given range, computed from the beginning of the marked text.
- [unmarkText](nstextinput/unmarktext.md): Deprecated. Removes any marking from pending input text and disposes of the marked text as it wishes. The text view should accept the marked text as if it had been inserted normally.
- [validAttributesForMarkedText](nstextinput/validattributesformarkedtext.md): Deprecated. Returns an array of names for the attributes supported by the receiver.

### Text storage

- [attributedSubstringFromRange:](nstextinput/attributedsubstringfromrange_.md): Deprecated. Returns an attributed string derived from the given range in the receiver’s text storage.
- [insertText:](nstextinput/inserttext_.md): Deprecated. Inserts the given string into the receiver’s text storage.

### Character coordinates

- [characterIndexForPoint:](nstextinput/characterindexforpoint_.md): Deprecated. Returns the index of the character whose frame rectangle includes the given point.
- [firstRectForCharacterRange:](nstextinput/firstrectforcharacterrange_.md): Deprecated. Returns the first frame rectangle for characters in the given range, in screen coordinates.

### Key bindings

- [doCommandBySelector:](nstextinput/docommandbyselector_.md): Deprecated. Invokes the given selector if possible.

### Other

- [conversationIdentifier](nstextinput/conversationidentifier.md): Deprecated. Returns a number used to identify the receiver’s context to the input server.

## Relationships

### Conforming Types

- [NSInputManager](nsinputmanager.md)
- [NSTextView](nstextview.md)
