> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundation/attributedstring/runs-swift.struct/subscript(_:_:_:)-10o3s

# subscript(\_:\_:\_:)

**Framework:** Foundation  
**Kind:** Instance Subscript  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

## Declaration

```swift
@preconcurrency subscript<T, U, V>(t: KeyPath<AttributeDynamicLookup, T>, u: KeyPath<AttributeDynamicLookup, U>, v: KeyPath<AttributeDynamicLookup, V>) -> AttributedString.Runs.AttributesSlice3<T, U, V> where T : AttributedStringKey, U : AttributedStringKey, V : AttributedStringKey, T.Value : Sendable, U.Value : Sendable, V.Value : Sendable { get }
```
