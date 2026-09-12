> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/compositorcontent/onappear(perform:)](https://developer.apple.com/documentation/swiftui/compositorcontent/onappear(perform:))

# onAppear(perform:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** macOS 26.0+ · visionOS 26.0+

Adds an action to perform before this content appears.

## Declaration

```swift
nonisolated func onAppear(perform action: (() -> Void)? = nil) -> some CompositorContent

```

## Parameters

- `action`: The action to perform. If `action` is `nil`, the call has no effect.

<a id="return-value"></a>

## Return Value

A CompositorContent that triggers `action` before it appears.

<a id="discussion"></a>

## Discussion

The exact moment that SwiftUI calls this method depends on the specific content type that you apply it to, but the `action` closure completes before the first rendered frame appears.
