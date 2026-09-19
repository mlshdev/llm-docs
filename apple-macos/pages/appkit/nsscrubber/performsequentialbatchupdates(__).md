> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appkit/nsscrubber/performsequentialbatchupdates(_:)

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
