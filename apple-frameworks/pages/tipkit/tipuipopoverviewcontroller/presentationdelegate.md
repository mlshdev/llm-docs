> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/tipkit/tipuipopoverviewcontroller/presentationdelegate

# presentationDelegate

**Framework:** TipKit  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · visionOS 1.0+

The popover presentation delegate, which lets you customize the behavior of a popover-based presentation.

## Declaration

```swift
@MainActor @preconcurrency final var presentationDelegate: (any UIPopoverPresentationControllerDelegate)? { get set }
```
