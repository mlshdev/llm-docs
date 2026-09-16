> Snapshot-pinned source payload for Apple SwiftUI snapshot-8b55d19a707e; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swiftui/compositorcontent/onchange(of:initial:_:)

# onChange(of:initial:\_:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** macOS 26.0+ · visionOS 26.0+

## Declaration

```swift
nonisolated func onChange<V>(of value: V, initial: Bool = false, _ action: @escaping () -> Void) -> some CompositorContent where V : Equatable

```
