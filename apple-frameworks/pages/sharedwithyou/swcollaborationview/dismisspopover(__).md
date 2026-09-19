> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/sharedwithyou/swcollaborationview/dismisspopover(_:)

# dismissPopover(\_:) (Swift)

**Framework:** Shared with You  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

Dismisses the popover.

## Declaration

```swift
func dismissPopover(_ completion: (() -> Void)? = nil)
```

```swift
func dismissPopover() async
```

## Parameters

- `completion`: The system calls this handler after the system finishes dismissing the popover.

# dismissPopover: (Objective-C)

**Framework:** Shared with You  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

Dismisses the popover.

## Declaration

```objectivec
- (void) dismissPopover:(void (^)()) completion;
```

## Parameters

- `completion`: The system calls this handler after the system finishes dismissing the popover.
