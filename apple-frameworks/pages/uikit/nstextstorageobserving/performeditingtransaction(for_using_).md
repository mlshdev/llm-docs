> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/uikit/nstextstorageobserving/performeditingtransaction(for:using:)

# performEditingTransaction(for:using:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS 1.0+

Performs an editing transaction on the text storage.

## Declaration

```swift
func performEditingTransaction(for textStorage: NSTextStorage, using transaction: () -> Void)
```

## Parameters

- `textStorage`: The text storage.
- `transaction`: The block to execute within the transaction.

## See Also

### Managing the editing process

- [processEditing(for:edited:range:changeInLength:invalidatedRange:)](processediting%28for_edited_range_changeinlength_invalidatedrange_%29.md): Notifies the observer that the text storage has been edited.

# performEditingTransactionForTextStorage:usingBlock: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS 1.0+

Performs an editing transaction on the text storage.

## Declaration

```objectivec
- (void) performEditingTransactionForTextStorage:(NSTextStorage *) textStorage usingBlock:(void (^)()) transaction;
```

## Parameters

- `textStorage`: The text storage.
- `transaction`: The block to execute within the transaction.

## See Also

### Managing the editing process

- [processEditingForTextStorage:edited:range:changeInLength:invalidatedRange:](processediting%28for_edited_range_changeinlength_invalidatedrange_%29.md): Notifies the observer that the text storage has been edited.
