> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextstorageobserving/processediting(for:edited:range:changeinlength:invalidatedrange:)](https://developer.apple.com/documentation/appkit/nstextstorageobserving/processediting(for:edited:range:changeinlength:invalidatedrange:))

# processEditing(for:edited:range:changeInLength:invalidatedRange:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 12.0+

## Declaration

```swift
func processEditing(for textStorage: NSTextStorage, edited editMask: NSTextStorageEditActions, range newCharRange: NSRange, changeInLength delta: Int, invalidatedRange invalidatedCharRange: NSRange)
```

## See Also

### Managing the editing process

- [performEditingTransaction(for:using:)](performeditingtransaction%28for_using_%29.md)

# processEditingForTextStorage:edited:range:changeInLength:invalidatedRange: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 12.0+

## Declaration

```objectivec
- (void) processEditingForTextStorage:(NSTextStorage *) textStorage edited:(NSTextStorageEditActions) editMask range:(NSRange) newCharRange changeInLength:(NSInteger) delta invalidatedRange:(NSRange) invalidatedCharRange;
```

## See Also

### Managing the editing process

- [performEditingTransactionForTextStorage:usingBlock:](performeditingtransaction%28for_using_%29.md)
