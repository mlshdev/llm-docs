> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextcontentmanager/performeditingtransaction(_:)](https://developer.apple.com/documentation/appkit/nstextcontentmanager/performeditingtransaction(_:))

# performEditingTransaction(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 12.0+

Performs an editing transaction and invokes a block upon completion.

## Declaration

```swift
func performEditingTransaction(_ transaction: () -> Void)
```

## Parameters

- `transaction`: The editing transaction.

<a id="Discussion"></a>

## Discussion

The primary [NSTextLayoutManager](../nstextlayoutmanager.md) controlling the active editing transaction invokes this method. It’s possible to nest multiple editing transactions. The outer most transaction toggles `hasEditingTransaction` and sends synchronization messages if enabled after invoking a transaction.

## See Also

### Performing transactions

- [hasEditingTransaction](haseditingtransaction.md): Indicates there’s an active editing transaction from the primary text layout manager.
- [recordEditAction(in:newTextRange:)](recordeditaction%28in_newtextrange_%29.md): Records information about an edit action to the transaction.

# performEditingTransactionUsingBlock: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 12.0+

Performs an editing transaction and invokes a block upon completion.

## Declaration

```objectivec
- (void) performEditingTransactionUsingBlock:(void (^)()) transaction;
```

## Parameters

- `transaction`: The editing transaction.

<a id="Discussion"></a>

## Discussion

The primary [NSTextLayoutManager](../nstextlayoutmanager.md) controlling the active editing transaction invokes this method. It’s possible to nest multiple editing transactions. The outer most transaction toggles `hasEditingTransaction` and sends synchronization messages if enabled after invoking a transaction.

## See Also

### Performing transactions

- [hasEditingTransaction](haseditingtransaction.md): Indicates there’s an active editing transaction from the primary text layout manager.
- [recordEditActionInRange:newTextRange:](recordeditaction%28in_newtextrange_%29.md): Records information about an edit action to the transaction.
