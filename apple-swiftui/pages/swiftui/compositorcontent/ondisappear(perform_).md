> Snapshot-pinned source payload for Apple SwiftUI snapshot-8b55d19a707e; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swiftui/compositorcontent/ondisappear(perform:)

# onDisappear(perform:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** macOS 26.0+ · visionOS 26.0+

Adds an action to perform after this content disappears.

## Declaration

```swift
nonisolated func onDisappear(perform action: (() -> Void)? = nil) -> some CompositorContent

```

## Parameters

- `action`: The action to perform. If `action` is `nil`, the call has no effect.

<a id="return-value"></a>

## Return Value

A CompositorContent that triggers `action` after it disappears.

<a id="discussion"></a>

## Discussion

The exact moment that SwiftUI calls this method depends on the specific content type that you apply it to, but the `action` closure doesn’t execute until the content disappears from the interface.
