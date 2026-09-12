> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/nstextcontentmanager/haseditingtransaction](https://developer.apple.com/documentation/uikit/nstextcontentmanager/haseditingtransaction)

# hasEditingTransaction (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS 1.0+

Indicates there’s an active editing transaction from the primary text layout manager.

## Declaration

```swift
var hasEditingTransaction: Bool { get }
```

<a id="Discussion"></a>

## Discussion

When this property is `true`, there’s an active editing transaction from the `primaryTextLayoutManager`. The synchronization operations to nonprimary text layout managers and the backing store block (or fail when synchronous) while this property is `true`. Avoid accessing the elements from a nonprimary text layout manager while this values is `true`.

This property is KVO-compliant.

## See Also

### Performing transactions

- [performEditingTransaction(\_:)](performeditingtransaction%28__%29.md): Performs an editing transaction and invokes a block upon completion.
- [recordEditAction(in:newTextRange:)](recordeditaction%28in_newtextrange_%29.md): Records information about an edit action to the transaction.

# hasEditingTransaction (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS 1.0+

Indicates there’s an active editing transaction from the primary text layout manager.

## Declaration

```objectivec
@property (readonly) BOOL hasEditingTransaction;
```

<a id="Discussion"></a>

## Discussion

When this property is `true`, there’s an active editing transaction from the `primaryTextLayoutManager`. The synchronization operations to nonprimary text layout managers and the backing store block (or fail when synchronous) while this property is `true`. Avoid accessing the elements from a nonprimary text layout manager while this values is `true`.

This property is KVO-compliant.

## See Also

### Performing transactions

- [performEditingTransactionUsingBlock:](performeditingtransaction%28__%29.md): Performs an editing transaction and invokes a block upon completion.
- [recordEditActionInRange:newTextRange:](recordeditaction%28in_newtextrange_%29.md): Records information about an edit action to the transaction.
