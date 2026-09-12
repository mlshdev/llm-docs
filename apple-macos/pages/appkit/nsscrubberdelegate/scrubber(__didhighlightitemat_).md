> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsscrubberdelegate/scrubber(_:didhighlightitemat:)](https://developer.apple.com/documentation/appkit/nsscrubberdelegate/scrubber(_:didhighlightitemat:))

# scrubber(\_:didHighlightItemAt:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.12.2+

Tells the delegate that the item at the specified index was highlighted.

## Declaration

```swift
@MainActor optional func scrubber(_ scrubber: NSScrubber, didHighlightItemAt highlightedIndex: Int)
```

## Parameters

- `scrubber`: The scrubber object that is notifying you of the highlight change.
- `highlightedIndex`: The index of the item that is now highlighted.

## See Also

### Handling item selection and highlighting

- [scrubber(\_:didSelectItemAt:)](scrubber%28__didselectitemat_%29.md): Tells the delegate that the item at the specified index was selected.

# scrubber:didHighlightItemAtIndex: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.12.2+

Tells the delegate that the item at the specified index was highlighted.

## Declaration

```objectivec
- (void) scrubber:(NSScrubber *) scrubber didHighlightItemAtIndex:(NSInteger) highlightedIndex;
```

## Parameters

- `scrubber`: The scrubber object that is notifying you of the highlight change.
- `highlightedIndex`: The index of the item that is now highlighted.

## See Also

### Handling item selection and highlighting

- [scrubber:didSelectItemAtIndex:](scrubber%28__didselectitemat_%29.md): Tells the delegate that the item at the specified index was selected.
