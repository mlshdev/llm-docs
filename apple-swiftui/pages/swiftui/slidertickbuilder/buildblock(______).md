> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/slidertickbuilder/buildblock(_:_:_:)](https://developer.apple.com/documentation/swiftui/slidertickbuilder/buildblock(_:_:_:))

# buildBlock(\_:\_:\_:)

**Framework:** SwiftUI  
**Kind:** Type Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

## Declaration

```swift
@export(implementation) static func buildBlock<C0, C1, C2>(_ c0: C0, _ c1: C1, _ c2: C2) -> some SliderTickContent<V> where V == C0.Value, C0 : SliderTickContent, C1 : SliderTickContent, C2 : SliderTickContent, C0.Value == C1.Value, C1.Value == C2.Value

```
