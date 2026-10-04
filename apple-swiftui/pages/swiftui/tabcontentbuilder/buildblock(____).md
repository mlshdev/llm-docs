> Snapshot-pinned source payload for Apple SwiftUI snapshot-8247613c923d; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swiftui/tabcontentbuilder/buildblock(_:_:)

# buildBlock(\_:\_:)

**Framework:** SwiftUI  
**Kind:** Type Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

## Declaration

```swift
@export(implementation) static func buildBlock<C0, C1>(_ c0: C0, _ c1: C1) -> some TabContent<TabValue> where TabValue == C0.TabValue, C0 : TabContent, C1 : TabContent, C0.TabValue == C1.TabValue

```
