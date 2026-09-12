> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextinputclient](https://developer.apple.com/documentation/appkit/nstextinputclient)

# NSTextInputClient (Swift)

**Framework:** AppKit  
**Kind:** Protocol  
**Availability:** macOS

A set of methods that text views need to implement to interact properly with the text input management system.

## Declaration

```swift
protocol NSTextInputClient : NSObjectProtocol
```

## Mentioned In

- [Adopting the system text cursor in custom text views](adopting-the-system-text-cursor-in-custom-text-views.md)

<a id="overview"></a>

## Overview

To create another text view class, you can either subclass [NSTextView](nstextview.md), or subclass [NSView](nsview.md) and implement the [NSTextInputClient](nstextinputclient.md) protocol.

> **Important**

>  Methods specific to the [NSTextInputClient](nstextinputclient.md) protocol are intended for dealing with text input and generally aren’t suitable for other purposes.

## Topics

### Handling marked text

- [hasMarkedText()](nstextinputclient/hasmarkedtext%28%29.md): Returns a Boolean value indicating whether the receiver has marked text.
- [markedRange()](nstextinputclient/markedrange%28%29.md): Returns the range of the marked text.
- [selectedRange()](nstextinputclient/selectedrange%28%29.md): Returns the range of selected text.
- [setMarkedText(\_:selectedRange:replacementRange:)](nstextinputclient/setmarkedtext%28__selectedrange_replacementrange_%29.md): Replaces a specified range in the receiver’s text storage with the given string and sets the selection.
- [unmarkText()](nstextinputclient/unmarktext%28%29.md): Unmarks the marked text.
- [validAttributesForMarkedText()](nstextinputclient/validattributesformarkedtext%28%29.md): Returns an array of attribute names recognized by the receiver.

### Storing text

- [attributedString()](nstextinputclient/attributedstring%28%29.md): Returns an attributed string representing the receiver’s text storage.
- [attributedSubstring(forProposedRange:actualRange:)](nstextinputclient/attributedsubstring%28forproposedrange_actualrange_%29.md): Returns an attributed string derived from the given range in the receiver’s text storage.
- [insertText(\_:replacementRange:)](nstextinputclient/inserttext%28__replacementrange_%29.md): Inserts the given string into the receiver, replacing the specified content.

### Getting character coordinates

- [characterIndex(for:)](nstextinputclient/characterindex%28for_%29.md): Returns the index of the character whose bounding rectangle includes the given point.
- [firstRect(forCharacterRange:actualRange:)](nstextinputclient/firstrect%28forcharacterrange_actualrange_%29.md): Returns the first logical boundary rectangle for characters in the given range.
- [baselineDeltaForCharacter(at:)](nstextinputclient/baselinedeltaforcharacter%28at_%29.md): Returns the baseline position of a given character relative to the origin of rectangle returned by [firstRect(forCharacterRange:actualRange:)](nstextinputclient/firstrect%28forcharacterrange_actualrange_%29.md).
- [drawsVerticallyForCharacter(at:)](nstextinputclient/drawsverticallyforcharacter%28at_%29.md): Informs the text input management system whether the protocol-conforming client renders the character at the given index vertically.
- [fractionOfDistanceThroughGlyph(for:)](nstextinputclient/fractionofdistancethroughglyph%28for_%29.md): Returns the fraction of the distance from the left side of the character to the right side that a given point lies.

### Placing content

- [documentVisibleRect](nstextinputclient/documentvisiblerect.md)
- [unionRectInVisibleSelectedRange](nstextinputclient/unionrectinvisibleselectedrange.md)
- [preferredTextAccessoryPlacement()](nstextinputclient/preferredtextaccessoryplacement%28%29.md)
- [windowLevel()](nstextinputclient/windowlevel%28%29.md): Returns the window level of the receiver.

### Binding keystrokes

- [doCommand(by:)](nstextinputclient/docommand%28by_%29.md): Invokes the action specified by the given selector.

### Supporting adaptive images

- [supportsAdaptiveImageGlyph](nstextinputclient/supportsadaptiveimageglyph.md): A Boolean value that indicates whether the document supports adaptive images in the input.
- [insert(\_:replacementRange:)](nstextinputclient/insert%28__replacementrange_%29.md): Inserts an adaptive image into the text at the specifed location.

## Relationships

### Inherits From

- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

### Inherited By

- [NSTextCheckingClient](nstextcheckingclient.md)

### Conforming Types

- [NSTextView](nstextview.md)

## See Also

### Text input

- [Adopting the system text cursor in custom text views](adopting-the-system-text-cursor-in-custom-text-views.md): Incorporate the system text cursor into your custom text UI in AppKit.
- [NSTextInputContext](nstextinputcontext.md): An object that represents the Cocoa text input system.
- [NSTextAlternatives](nstextalternatives.md): A list of alternative strings for a piece of text.
- [NSTextContent](nstextcontent.md): A protocol that describes specific kinds of input content types.
- [NSTextInsertionIndicator](nstextinsertionindicator.md): A view that represents the insertion indicator in text.
- [NSTextInsertionIndicator.DisplayMode](nstextinsertionindicator/displaymode-swift.enum.md): Constants that determine how to display the system text cursor in a custom text UI.
- [NSTextInsertionIndicator.AutomaticModeOptions](nstextinsertionindicator/automaticmodeoptions-swift.struct.md): Options that affect the automatic display mode.

# NSTextInputClient (Objective-C)

**Framework:** AppKit  
**Kind:** Protocol  
**Availability:** macOS

A set of methods that text views need to implement to interact properly with the text input management system.

## Declaration

```objectivec
@protocol NSTextInputClient <NSObject>
```

## Mentioned In

- [Adopting the system text cursor in custom text views](adopting-the-system-text-cursor-in-custom-text-views.md)

<a id="overview"></a>

## Overview

To create another text view class, you can either subclass [NSTextView](nstextview.md), or subclass [NSView](nsview.md) and implement the [NSTextInputClient](nstextinputclient.md) protocol.

> **Important**

>  Methods specific to the [NSTextInputClient](nstextinputclient.md) protocol are intended for dealing with text input and generally aren’t suitable for other purposes.

## Topics

### Handling marked text

- [hasMarkedText](nstextinputclient/hasmarkedtext%28%29.md): Returns a Boolean value indicating whether the receiver has marked text.
- [markedRange](nstextinputclient/markedrange%28%29.md): Returns the range of the marked text.
- [selectedRange](nstextinputclient/selectedrange%28%29.md): Returns the range of selected text.
- [setMarkedText:selectedRange:replacementRange:](nstextinputclient/setmarkedtext%28__selectedrange_replacementrange_%29.md): Replaces a specified range in the receiver’s text storage with the given string and sets the selection.
- [unmarkText](nstextinputclient/unmarktext%28%29.md): Unmarks the marked text.
- [validAttributesForMarkedText](nstextinputclient/validattributesformarkedtext%28%29.md): Returns an array of attribute names recognized by the receiver.

### Storing text

- [attributedString](nstextinputclient/attributedstring%28%29.md): Returns an attributed string representing the receiver’s text storage.
- [attributedSubstringForProposedRange:actualRange:](nstextinputclient/attributedsubstring%28forproposedrange_actualrange_%29.md): Returns an attributed string derived from the given range in the receiver’s text storage.
- [insertText:replacementRange:](nstextinputclient/inserttext%28__replacementrange_%29.md): Inserts the given string into the receiver, replacing the specified content.

### Getting character coordinates

- [characterIndexForPoint:](nstextinputclient/characterindex%28for_%29.md): Returns the index of the character whose bounding rectangle includes the given point.
- [firstRectForCharacterRange:actualRange:](nstextinputclient/firstrect%28forcharacterrange_actualrange_%29.md): Returns the first logical boundary rectangle for characters in the given range.
- [baselineDeltaForCharacterAtIndex:](nstextinputclient/baselinedeltaforcharacter%28at_%29.md): Returns the baseline position of a given character relative to the origin of rectangle returned by [firstRectForCharacterRange:actualRange:](nstextinputclient/firstrect%28forcharacterrange_actualrange_%29.md).
- [drawsVerticallyForCharacterAtIndex:](nstextinputclient/drawsverticallyforcharacter%28at_%29.md): Informs the text input management system whether the protocol-conforming client renders the character at the given index vertically.
- [fractionOfDistanceThroughGlyphForPoint:](nstextinputclient/fractionofdistancethroughglyph%28for_%29.md): Returns the fraction of the distance from the left side of the character to the right side that a given point lies.

### Placing content

- [documentVisibleRect](nstextinputclient/documentvisiblerect.md)
- [unionRectInVisibleSelectedRange](nstextinputclient/unionrectinvisibleselectedrange.md)
- [preferredTextAccessoryPlacement](nstextinputclient/preferredtextaccessoryplacement%28%29.md)
- [windowLevel](nstextinputclient/windowlevel%28%29.md): Returns the window level of the receiver.

### Binding keystrokes

- [doCommandBySelector:](nstextinputclient/docommand%28by_%29.md): Invokes the action specified by the given selector.

### Supporting adaptive images

- [supportsAdaptiveImageGlyph](nstextinputclient/supportsadaptiveimageglyph.md): A Boolean value that indicates whether the document supports adaptive images in the input.
- [insertAdaptiveImageGlyph:replacementRange:](nstextinputclient/insert%28__replacementrange_%29.md): Inserts an adaptive image into the text at the specifed location.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

### Inherited By

- [NSTextCheckingClient](nstextcheckingclient.md)

### Conforming Types

- [NSTextView](nstextview.md)

## See Also

### Text input

- [Adopting the system text cursor in custom text views](adopting-the-system-text-cursor-in-custom-text-views.md): Incorporate the system text cursor into your custom text UI in AppKit.
- [NSTextInputContext](nstextinputcontext.md): An object that represents the Cocoa text input system.
- [NSTextAlternatives](nstextalternatives.md): A list of alternative strings for a piece of text.
- [NSTextContent](nstextcontent.md): A protocol that describes specific kinds of input content types.
- [NSTextInsertionIndicator](nstextinsertionindicator.md): A view that represents the insertion indicator in text.
- [NSTextInsertionIndicatorDisplayMode](nstextinsertionindicator/displaymode-swift.enum.md): Constants that determine how to display the system text cursor in a custom text UI.
- [NSTextInsertionIndicatorAutomaticModeOptions](nstextinsertionindicator/automaticmodeoptions-swift.struct.md): Options that affect the automatic display mode.
