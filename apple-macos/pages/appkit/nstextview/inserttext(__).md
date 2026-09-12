> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextview/inserttext(_:)](https://developer.apple.com/documentation/appkit/nstextview/inserttext(_:))

# insertText(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 10.11)

Inserts `aString` into the receiver’s text at the insertion point if there is one, otherwise replacing the selection.

> Use `NSTextInputClient` method [insertText(\_:replacementRange:)](../nstextinputclient/inserttext%28__replacementrange_%29.md) instead.

## Declaration

```swift
func insertText(_ insertString: Any)
```

## Parameters

- `insertString`: The string to insert. `aString` can be either an [NSString](https://developer.apple.com/documentation/foundation/nsstring) object or an [NSAttributedString](https://developer.apple.com/documentation/foundation/nsattributedstring) object.

<a id="Discussion"></a>

## Discussion

The inserted text is assigned the current typing attributes.

This method is the means by which text typed by the user enters an NSTextView. See the [NSInputManager](../nsinputmanager.md) class and [NSTextInput](../nstextinput.md) protocol specifications for more information.

This method is the entry point for inserting text typed by the user and is generally not suitable for other purposes. Programmatic modification of the text is best done by operating on the text storage directly. Because this method pertains to the actions of the user, the text view must be editable for the insertion to work.

## See Also

### Related Documentation

- [typingAttributes](typingattributes.md): The receiver’s typing attributes.

### Inserting text

- [allowedInputSourceLocales](allowedinputsourcelocales.md): An array of locale identifiers representing input sources that are allowed to be enabled when the receiver has the keyboard focus.

# insertText: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 10.11)

Inserts `aString` into the receiver’s text at the insertion point if there is one, otherwise replacing the selection.

> Use `NSTextInputClient` method [insertText:replacementRange:](../nstextinputclient/inserttext%28__replacementrange_%29.md) instead.

## Declaration

```objectivec
- (void) insertText:(id) insertString;
```

## Parameters

- `insertString`: The string to insert. `aString` can be either an [NSString](https://developer.apple.com/documentation/foundation/nsstring) object or an [NSAttributedString](https://developer.apple.com/documentation/foundation/nsattributedstring) object.

<a id="Discussion"></a>

## Discussion

The inserted text is assigned the current typing attributes.

This method is the means by which text typed by the user enters an NSTextView. See the [NSInputManager](../nsinputmanager.md) class and [NSTextInput](../nstextinput.md) protocol specifications for more information.

This method is the entry point for inserting text typed by the user and is generally not suitable for other purposes. Programmatic modification of the text is best done by operating on the text storage directly. Because this method pertains to the actions of the user, the text view must be editable for the insertion to work.

## See Also

### Related Documentation

- [typingAttributes](typingattributes.md): The receiver’s typing attributes.

### Inserting text

- [allowedInputSourceLocales](allowedinputsourcelocales.md): An array of locale identifiers representing input sources that are allowed to be enabled when the receiver has the keyboard focus.
