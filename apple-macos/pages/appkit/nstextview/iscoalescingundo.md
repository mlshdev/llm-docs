> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextview/iscoalescingundo](https://developer.apple.com/documentation/appkit/nstextview/iscoalescingundo)

# isCoalescingUndo (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.6+

A Boolean value that indicates whether undo coalescing is in progress.

## Declaration

```swift
var isCoalescingUndo: Bool { get }
```

<a id="Discussion"></a>

## Discussion

[true](https://developer.apple.com/documentation/swift/true) if undo coalescing is in progress, otherwise [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Supporting undo

- [breakUndoCoalescing()](breakundocoalescing%28%29.md): Informs the receiver that it should begin coalescing successive typing operations in a new undo grouping.

# coalescingUndo (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.6+

A Boolean value that indicates whether undo coalescing is in progress.

## Declaration

```objectivec
@property (readonly, getter=isCoalescingUndo) BOOL coalescingUndo;
```

<a id="Discussion"></a>

## Discussion

[true](https://developer.apple.com/documentation/swift/true) if undo coalescing is in progress, otherwise [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Supporting undo

- [breakUndoCoalescing](breakundocoalescing%28%29.md): Informs the receiver that it should begin coalescing successive typing operations in a new undo grouping.
