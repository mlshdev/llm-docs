> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextstoragedelegate/textstorage(_:willprocessediting:range:changeinlength:)](https://developer.apple.com/documentation/appkit/nstextstoragedelegate/textstorage(_:willprocessediting:range:changeinlength:))

# textStorage(\_:willProcessEditing:range:changeInLength:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.11+

The method the framework calls when a text storage object is about to process edits.

## Declaration

```swift
optional func textStorage(_ textStorage: NSTextStorage, willProcessEditing editedMask: NSTextStorageEditActions, range editedRange: NSRange, changeInLength delta: Int)
```

## Parameters

- `textStorage`: The text storage object processing edits.
- `editedMask`: The types of edits to do: [editedAttributes](../nstextstorageeditactions/editedattributes.md) [editedCharacters](../nstextstorageeditactions/editedcharacters.md), or both.
- `editedRange`: The range in the original string (before the edit).
- `delta`: The length delta for the editing changes.

<a id="Discussion"></a>

## Discussion

Sent inside [processEditing()](../nstextstorage/processediting%28%29.md) right before fixing attributes. Delegates can change the characters or attributes.

The delegate can verify the changed state of the text storage object and make changes to the text storage object’s characters or attributes to enforce whatever constraints it establishes. Programmatic changes don’t cause the object to send this message.

## See Also

### Processing edit actions

- [textStorage(\_:didProcessEditing:range:changeInLength:)](textstorage%28__didprocessediting_range_changeinlength_%29.md): The method the framework calls when a text storage object has finished processing edits.

# textStorage:willProcessEditing:range:changeInLength: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.11+

The method the framework calls when a text storage object is about to process edits.

## Declaration

```objectivec
- (void) textStorage:(NSTextStorage *) textStorage willProcessEditing:(NSTextStorageEditActions) editedMask range:(NSRange) editedRange changeInLength:(NSInteger) delta;
```

## Parameters

- `textStorage`: The text storage object processing edits.
- `editedMask`: The types of edits to do: [NSTextStorageEditedAttributes](../nstextstorageeditactions/editedattributes.md) [NSTextStorageEditedCharacters](../nstextstorageeditactions/editedcharacters.md), or both.
- `editedRange`: The range in the original string (before the edit).
- `delta`: The length delta for the editing changes.

<a id="Discussion"></a>

## Discussion

Sent inside [processEditing](../nstextstorage/processediting%28%29.md) right before fixing attributes. Delegates can change the characters or attributes.

The delegate can verify the changed state of the text storage object and make changes to the text storage object’s characters or attributes to enforce whatever constraints it establishes. Programmatic changes don’t cause the object to send this message.

## See Also

### Processing edit actions

- [textStorage:didProcessEditing:range:changeInLength:](textstorage%28__didprocessediting_range_changeinlength_%29.md): The method the framework calls when a text storage object has finished processing edits.
