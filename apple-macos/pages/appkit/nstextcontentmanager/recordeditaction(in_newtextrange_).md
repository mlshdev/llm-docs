> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextcontentmanager/recordeditaction(in:newtextrange:)](https://developer.apple.com/documentation/appkit/nstextcontentmanager/recordeditaction(in:newtextrange:))

# recordEditAction(in:newTextRange:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 12.0+

Records information about an edit action to the transaction.

## Declaration

```swift
func recordEditAction(in originalTextRange: NSTextRange, newTextRange: NSTextRange)
```

## Parameters

- `originalTextRange`: The range before the action.
- `newTextRange`: The corresponding range after the action.

<a id="Discussion"></a>

## Discussion

The concrete subclass invokes this method for each edit action.

## See Also

### Performing transactions

- [hasEditingTransaction](haseditingtransaction.md): Indicates there’s an active editing transaction from the primary text layout manager.
- [performEditingTransaction(\_:)](performeditingtransaction%28__%29.md): Performs an editing transaction and invokes a block upon completion.

# recordEditActionInRange:newTextRange: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 12.0+

Records information about an edit action to the transaction.

## Declaration

```objectivec
- (void) recordEditActionInRange:(NSTextRange *) originalTextRange newTextRange:(NSTextRange *) newTextRange;
```

## Parameters

- `originalTextRange`: The range before the action.
- `newTextRange`: The corresponding range after the action.

<a id="Discussion"></a>

## Discussion

The concrete subclass invokes this method for each edit action.

## See Also

### Performing transactions

- [hasEditingTransaction](haseditingtransaction.md): Indicates there’s an active editing transaction from the primary text layout manager.
- [performEditingTransactionUsingBlock:](performeditingtransaction%28__%29.md): Performs an editing transaction and invokes a block upon completion.
