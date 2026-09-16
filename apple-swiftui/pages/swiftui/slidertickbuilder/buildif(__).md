> Snapshot-pinned source payload for Apple SwiftUI snapshot-8b55d19a707e; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swiftui/slidertickbuilder/buildif(_:)

# buildIf(\_:)

**Framework:** SwiftUI  
**Kind:** Type Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Produces an optional slider content for conditional statements in multi-statement closures that’s only visible when the condition evaluates to true.

## Declaration

```swift
@export(implementation) static func buildIf(_ content: some SliderTickContent<V>) -> some SliderTickContent<V>

```
