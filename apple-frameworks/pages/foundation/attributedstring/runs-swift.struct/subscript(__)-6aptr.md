> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/attributedstring/runs-swift.struct/subscript(_:)-6aptr](https://developer.apple.com/documentation/foundation/attributedstring/runs-swift.struct/subscript(_:)-6aptr)

# subscript(\_:)

**Framework:** Foundation  
**Kind:** Instance Subscript  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

## Declaration

```swift
@preconcurrency subscript<T>(keyPath: KeyPath<AttributeDynamicLookup, T>) -> AttributedString.Runs.AttributesSlice1<T> where T : AttributedStringKey, T.Value : Sendable { get }
```
