> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/nstextstoragedelegate/textstorage(_:didprocessediting:range:changeinlength:)](https://developer.apple.com/documentation/uikit/nstextstoragedelegate/textstorage(_:didprocessediting:range:changeinlength:))

# textStorage(\_:didProcessEditing:range:changeInLength:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

The method the framework calls when a text storage object has finished processing edits.

## Declaration

```swift
optional func textStorage(_ textStorage: NSTextStorage, didProcessEditing editedMask: NSTextStorage.EditActions, range editedRange: NSRange, changeInLength delta: Int)
```

## Parameters

- `textStorage`: The text storage object processing edits.
- `editedMask`: The types of edits done: [editedAttributes](../nstextstorage/editactions/editedattributes.md), [editedCharacters](../nstextstorage/editactions/editedcharacters.md), or both.
- `editedRange`: The range in the original string (before the edit).
- `delta`: The length delta for the editing changes.

<a id="Discussion"></a>

## Discussion

Sent inside [processEditing()](../nstextstorage/processediting%28%29.md) right before notifying layout managers. Delegates can change the attributes.

The delegate can verify the final state of the text storage object; it can’t change the text storage object’s characters without leaving it in an inconsistent state, but if necessary it can change attributes. Note that even in this case it’s possible to put a text storage object into an inconsistent state—for example, by changing the font of a range to one that doesn’t support the characters in that range, such as using a Latin font for Kanji text.

## See Also

### Processing edit actions

- [textStorage(\_:willProcessEditing:range:changeInLength:)](textstorage%28__willprocessediting_range_changeinlength_%29.md): The method the framework calls when a text storage object is about to process edits.

# textStorage:didProcessEditing:range:changeInLength: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

The method the framework calls when a text storage object has finished processing edits.

## Declaration

```objectivec
- (void) textStorage:(NSTextStorage *) textStorage didProcessEditing:(NSTextStorageEditActions) editedMask range:(NSRange) editedRange changeInLength:(NSInteger) delta;
```

## Parameters

- `textStorage`: The text storage object processing edits.
- `editedMask`: The types of edits done: [NSTextStorageEditedAttributes](../nstextstorage/editactions/editedattributes.md), [NSTextStorageEditedCharacters](../nstextstorage/editactions/editedcharacters.md), or both.
- `editedRange`: The range in the original string (before the edit).
- `delta`: The length delta for the editing changes.

<a id="Discussion"></a>

## Discussion

Sent inside [processEditing](../nstextstorage/processediting%28%29.md) right before notifying layout managers. Delegates can change the attributes.

The delegate can verify the final state of the text storage object; it can’t change the text storage object’s characters without leaving it in an inconsistent state, but if necessary it can change attributes. Note that even in this case it’s possible to put a text storage object into an inconsistent state—for example, by changing the font of a range to one that doesn’t support the characters in that range, such as using a Latin font for Kanji text.

## See Also

### Processing edit actions

- [textStorage:willProcessEditing:range:changeInLength:](textstorage%28__willprocessediting_range_changeinlength_%29.md): The method the framework calls when a text storage object is about to process edits.
