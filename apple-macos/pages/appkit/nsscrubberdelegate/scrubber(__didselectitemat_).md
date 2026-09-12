> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsscrubberdelegate/scrubber(_:didselectitemat:)](https://developer.apple.com/documentation/appkit/nsscrubberdelegate/scrubber(_:didselectitemat:))

# scrubber(\_:didSelectItemAt:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.12.2+

Tells the delegate that the item at the specified index was selected.

## Declaration

```swift
@MainActor optional func scrubber(_ scrubber: NSScrubber, didSelectItemAt selectedIndex: Int)
```

## Parameters

- `scrubber`: The scrubber object that is notifying you of the selection change.
- `selectedIndex`: The index of the item that was selected.

## See Also

### Handling item selection and highlighting

- [scrubber(\_:didHighlightItemAt:)](scrubber%28__didhighlightitemat_%29.md): Tells the delegate that the item at the specified index was highlighted.

# scrubber:didSelectItemAtIndex: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.12.2+

Tells the delegate that the item at the specified index was selected.

## Declaration

```objectivec
- (void) scrubber:(NSScrubber *) scrubber didSelectItemAtIndex:(NSInteger) selectedIndex;
```

## Parameters

- `scrubber`: The scrubber object that is notifying you of the selection change.
- `selectedIndex`: The index of the item that was selected.

## See Also

### Handling item selection and highlighting

- [scrubber:didHighlightItemAtIndex:](scrubber%28__didhighlightitemat_%29.md): Tells the delegate that the item at the specified index was highlighted.
