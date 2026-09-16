> Snapshot-pinned source payload for Apple SwiftUI snapshot-8b55d19a707e; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swiftui/text/layout/runslice/subscript(_:)

# subscript(\_:)

**Framework:** SwiftUI  
**Kind:** Instance Subscript  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

The custom attribute of type `T` associated with the run of glyphs, or nil.

## Declaration

```swift
subscript<T>(key: T.Type) -> T? where T : TextAttribute { get }
```
