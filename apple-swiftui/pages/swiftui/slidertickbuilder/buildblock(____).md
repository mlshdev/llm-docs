> Snapshot-pinned source payload for Apple SwiftUI snapshot-8b55d19a707e; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swiftui/slidertickbuilder/buildblock(_:_:)

# buildBlock(\_:\_:)

**Framework:** SwiftUI  
**Kind:** Type Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

## Declaration

```swift
@export(implementation) static func buildBlock<C0, C1>(_ c0: C0, _ c1: C1) -> some SliderTickContent<V> where V == C0.Value, C0 : SliderTickContent, C1 : SliderTickContent, C0.Value == C1.Value

```
