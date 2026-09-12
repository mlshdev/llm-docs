> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/text/layout/runslice/subscript(_:)](https://developer.apple.com/documentation/swiftui/text/layout/runslice/subscript(_:))

# subscript(\_:)

**Framework:** SwiftUI  
**Kind:** Instance Subscript  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

The custom attribute of type `T` associated with the run of glyphs, or nil.

## Declaration

```swift
subscript<T>(key: T.Type) -> T? where T : TextAttribute { get }
```
