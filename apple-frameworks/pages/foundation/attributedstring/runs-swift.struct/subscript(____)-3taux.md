> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundation/attributedstring/runs-swift.struct/subscript(_:_:)-3taux

# subscript(\_:\_:)

**Framework:** Foundation  
**Kind:** Instance Subscript  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

## Declaration

```swift
@preconcurrency subscript<T, U>(t: T.Type, u: U.Type) -> AttributedString.Runs.AttributesSlice2<T, U> where T : AttributedStringKey, U : AttributedStringKey, T.Value : Sendable, U.Value : Sendable { get }
```
