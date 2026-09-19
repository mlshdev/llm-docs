> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appkit/nstextstorageobserving/performeditingtransaction(for:using:)

# performEditingTransaction(for:using:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 12.0+

## Declaration

```swift
func performEditingTransaction(for textStorage: NSTextStorage, using transaction: () -> Void)
```

## See Also

### Managing the editing process

- [processEditing(for:edited:range:changeInLength:invalidatedRange:)](processediting%28for_edited_range_changeinlength_invalidatedrange_%29.md)

# performEditingTransactionForTextStorage:usingBlock: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 12.0+

## Declaration

```objectivec
- (void) performEditingTransactionForTextStorage:(NSTextStorage *) textStorage usingBlock:(void (^)()) transaction;
```

## See Also

### Managing the editing process

- [processEditingForTextStorage:edited:range:changeInLength:invalidatedRange:](processediting%28for_edited_range_changeinlength_invalidatedrange_%29.md)
