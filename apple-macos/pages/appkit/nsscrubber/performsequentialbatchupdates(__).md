> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsscrubber/performsequentialbatchupdates(_:)](https://developer.apple.com/documentation/appkit/nsscrubber/performsequentialbatchupdates(_:))

# performSequentialBatchUpdates(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.12.2+

Combines multiple scrubber content updates into a single action.

## Declaration

```swift
func performSequentialBatchUpdates(_ updateBlock: () -> Void)
```

## Parameters

- `updateBlock`: A block that represents the combination of insertion, removal, moving, and reloading instructions that should be performed simultaneously.

# performSequentialBatchUpdates: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.12.2+

Combines multiple scrubber content updates into a single action.

## Declaration

```objectivec
- (void) performSequentialBatchUpdates:(void (^)()) updateBlock;
```

## Parameters

- `updateBlock`: A block that represents the combination of insertion, removal, moving, and reloading instructions that should be performed simultaneously.
