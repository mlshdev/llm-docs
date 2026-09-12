> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsscrubberdelegate/scrubber(_:didchangevisiblerange:)](https://developer.apple.com/documentation/appkit/nsscrubberdelegate/scrubber(_:didchangevisiblerange:))

# scrubber(\_:didChangeVisibleRange:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.12.2+

Tells the delegate that the range of items currently visible in the scrubber has changed.

## Declaration

```swift
@MainActor optional func scrubber(_ scrubber: NSScrubber, didChangeVisibleRange visibleRange: NSRange)
```

## Parameters

- `scrubber`: The scrubber object that is notifying you of the change in the range of items that are currently visible.
- `visibleRange`: The range of items that are now visible in the scrubber.

# scrubber:didChangeVisibleRange: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.12.2+

Tells the delegate that the range of items currently visible in the scrubber has changed.

## Declaration

```objectivec
- (void) scrubber:(NSScrubber *) scrubber didChangeVisibleRange:(NSRange) visibleRange;
```

## Parameters

- `scrubber`: The scrubber object that is notifying you of the change in the range of items that are currently visible.
- `visibleRange`: The range of items that are now visible in the scrubber.
