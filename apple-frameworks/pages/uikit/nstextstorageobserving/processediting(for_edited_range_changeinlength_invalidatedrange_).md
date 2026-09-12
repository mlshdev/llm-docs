> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/nstextstorageobserving/processediting(for:edited:range:changeinlength:invalidatedrange:)](https://developer.apple.com/documentation/uikit/nstextstorageobserving/processediting(for:edited:range:changeinlength:invalidatedrange:))

# processEditing(for:edited:range:changeInLength:invalidatedRange:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS 1.0+

Notifies the observer that the text storage has been edited.

## Declaration

```swift
func processEditing(for textStorage: NSTextStorage, edited editMask: NSTextStorage.EditActions, range newCharRange: NSRange, changeInLength delta: Int, invalidatedRange invalidatedCharRange: NSRange)
```

## Parameters

- `textStorage`: The text storage that was edited.
- `editMask`: The type of edit.
- `newCharRange`: The range of characters that changed.
- `delta`: The change in length.
- `invalidatedCharRange`: The full invalidated range including attribute fixing.

<a id="discussion"></a>

## Discussion

The `newCharRange` is the range in the final string which was explicitly edited. The `invalidatedRange` includes portions that changed as a result of attribute fixing — it is either equal to `newCharRange` or larger. Controllers should not change the contents of the text storage during the execution of this message.

## See Also

### Managing the editing process

- [performEditingTransaction(for:using:)](performeditingtransaction%28for_using_%29.md): Performs an editing transaction on the text storage.

# processEditingForTextStorage:edited:range:changeInLength:invalidatedRange: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS 1.0+

Notifies the observer that the text storage has been edited.

## Declaration

```objectivec
- (void) processEditingForTextStorage:(NSTextStorage *) textStorage edited:(NSTextStorageEditActions) editMask range:(NSRange) newCharRange changeInLength:(NSInteger) delta invalidatedRange:(NSRange) invalidatedCharRange;
```

## Parameters

- `textStorage`: The text storage that was edited.
- `editMask`: The type of edit.
- `newCharRange`: The range of characters that changed.
- `delta`: The change in length.
- `invalidatedCharRange`: The full invalidated range including attribute fixing.

<a id="discussion"></a>

## Discussion

The `newCharRange` is the range in the final string which was explicitly edited. The `invalidatedRange` includes portions that changed as a result of attribute fixing — it is either equal to `newCharRange` or larger. Controllers should not change the contents of the text storage during the execution of this message.

## See Also

### Managing the editing process

- [performEditingTransactionForTextStorage:usingBlock:](performeditingtransaction%28for_using_%29.md): Performs an editing transaction on the text storage.
