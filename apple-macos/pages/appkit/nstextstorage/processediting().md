> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextstorage/processediting()](https://developer.apple.com/documentation/appkit/nstextstorage/processediting())

# processEditing() (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.0+

Cleans up changes to the text storage object and notifies its delegate and layout managers of changes.

## Declaration

```swift
func processEditing()
```

<a id="Discussion"></a>

## Discussion

This method is automatically invoked in response to an [edited(\_:range:changeInLength:)](edited%28__range_changeinlength_%29.md) message or an [endEditing()](https://developer.apple.com/documentation/foundation/nsmutableattributedstring/endediting%28%29) message if edits were made within the scope of a [beginEditing()](https://developer.apple.com/documentation/foundation/nsmutableattributedstring/beginediting%28%29) block. You should never need to invoke it directly.

This method begins by posting an [willProcessEditingNotification](willprocesseditingnotification.md) to the default notification center (which results in the delegate receiving a [textStorage(\_:willProcessEditing:range:changeInLength:)](../nstextstoragedelegate/textstorage%28__willprocessediting_range_changeinlength_%29.md) message). Then it fixes attributes. After this, it posts an [didProcessEditingNotification](didprocesseditingnotification.md) to the default notification center (which results in the delegate receiving a [textStorage(\_:didProcessEditing:range:changeInLength:)](../nstextstoragedelegate/textstorage%28__didprocessediting_range_changeinlength_%29.md) message). Finally, it sends a [textStorage(\_:edited:range:changeInLength:invalidatedRange:)](../nslayoutmanager/textstorage%28__edited_range_changeinlength_invalidatedrange_%29.md) message to each of the receiver’s layout managers using the argument values provided.

## See Also

### Managing edits

- [edited(\_:range:changeInLength:)](edited%28__range_changeinlength_%29.md): Tracks changes made to the text storage object, allowing the text storage to record the full extent of changes.

# processEditing (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.0+

Cleans up changes to the text storage object and notifies its delegate and layout managers of changes.

## Declaration

```objectivec
- (void) processEditing;
```

<a id="Discussion"></a>

## Discussion

This method is automatically invoked in response to an [edited:range:changeInLength:](edited%28__range_changeinlength_%29.md) message or an [endEditing](https://developer.apple.com/documentation/foundation/nsmutableattributedstring/endediting%28%29) message if edits were made within the scope of a [beginEditing](https://developer.apple.com/documentation/foundation/nsmutableattributedstring/beginediting%28%29) block. You should never need to invoke it directly.

This method begins by posting an [NSTextStorageWillProcessEditingNotification](willprocesseditingnotification.md) to the default notification center (which results in the delegate receiving a [textStorage:willProcessEditing:range:changeInLength:](../nstextstoragedelegate/textstorage%28__willprocessediting_range_changeinlength_%29.md) message). Then it fixes attributes. After this, it posts an [NSTextStorageDidProcessEditingNotification](didprocesseditingnotification.md) to the default notification center (which results in the delegate receiving a [textStorage:didProcessEditing:range:changeInLength:](../nstextstoragedelegate/textstorage%28__didprocessediting_range_changeinlength_%29.md) message). Finally, it sends a [textStorage:edited:range:changeInLength:invalidatedRange:](../nslayoutmanager/textstorage%28__edited_range_changeinlength_invalidatedrange_%29.md) message to each of the receiver’s layout managers using the argument values provided.

## See Also

### Managing edits

- [edited:range:changeInLength:](edited%28__range_changeinlength_%29.md): Tracks changes made to the text storage object, allowing the text storage to record the full extent of changes.
