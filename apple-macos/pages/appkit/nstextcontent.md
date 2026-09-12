> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextcontent](https://developer.apple.com/documentation/appkit/nstextcontent)

# NSTextContent (Swift)

**Framework:** AppKit  
**Kind:** Protocol  
**Availability:** macOS

A protocol that describes specific kinds of input content types.

## Declaration

```swift
protocol NSTextContent
```

## Topics

### Specifying content type

- [contentType](nstextcontent/contenttype.md): The semantic meaning for a text input area.
- [NSTextContentType](nstextcontenttype.md): Constants that identify the semantic meaning for a text-entry area.

## Relationships

### Conforming Types

- [NSComboBox](nscombobox.md)
- [NSSearchField](nssearchfield.md)
- [NSSecureTextField](nssecuretextfield.md)
- [NSTextField](nstextfield.md)
- [NSTextView](nstextview.md)
- [NSTokenField](nstokenfield.md)

## See Also

### Text input

- [Adopting the system text cursor in custom text views](adopting-the-system-text-cursor-in-custom-text-views.md): Incorporate the system text cursor into your custom text UI in AppKit.
- [NSTextInputContext](nstextinputcontext.md): An object that represents the Cocoa text input system.
- [NSTextInputClient](nstextinputclient.md): A set of methods that text views need to implement to interact properly with the text input management system.
- [NSTextAlternatives](nstextalternatives.md): A list of alternative strings for a piece of text.
- [NSTextInsertionIndicator](nstextinsertionindicator.md): A view that represents the insertion indicator in text.
- [NSTextInsertionIndicator.DisplayMode](nstextinsertionindicator/displaymode-swift.enum.md): Constants that determine how to display the system text cursor in a custom text UI.
- [NSTextInsertionIndicator.AutomaticModeOptions](nstextinsertionindicator/automaticmodeoptions-swift.struct.md): Options that affect the automatic display mode.

# NSTextContent (Objective-C)

**Framework:** AppKit  
**Kind:** Protocol  
**Availability:** macOS

A protocol that describes specific kinds of input content types.

## Declaration

```objectivec
@protocol NSTextContent
```

## Topics

### Specifying content type

- [contentType](nstextcontent/contenttype.md): The semantic meaning for a text input area.
- [NSTextContentType](nstextcontenttype.md): Constants that identify the semantic meaning for a text-entry area.

## Relationships

### Conforming Types

- [NSTextField](nstextfield.md)
- [NSTextView](nstextview.md)

## See Also

### Text input

- [Adopting the system text cursor in custom text views](adopting-the-system-text-cursor-in-custom-text-views.md): Incorporate the system text cursor into your custom text UI in AppKit.
- [NSTextInputContext](nstextinputcontext.md): An object that represents the Cocoa text input system.
- [NSTextInputClient](nstextinputclient.md): A set of methods that text views need to implement to interact properly with the text input management system.
- [NSTextAlternatives](nstextalternatives.md): A list of alternative strings for a piece of text.
- [NSTextInsertionIndicator](nstextinsertionindicator.md): A view that represents the insertion indicator in text.
- [NSTextInsertionIndicatorDisplayMode](nstextinsertionindicator/displaymode-swift.enum.md): Constants that determine how to display the system text cursor in a custom text UI.
- [NSTextInsertionIndicatorAutomaticModeOptions](nstextinsertionindicator/automaticmodeoptions-swift.struct.md): Options that affect the automatic display mode.
