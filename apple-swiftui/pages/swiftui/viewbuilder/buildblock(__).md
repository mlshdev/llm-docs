> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/viewbuilder/buildblock(_:)](https://developer.apple.com/documentation/swiftui/viewbuilder/buildblock(_:))

# buildBlock(\_:)

**Framework:** SwiftUI  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Passes a single piece of content written as a child view through unmodified.

## Declaration

```swift
@export(implementation) static func buildBlock<Content>(_ content: Content) -> Content
```

<a id="discussion"></a>

## Discussion

An example of a single item written as child content is `{ Text("Hello") }`.

## See Also

### Building content

- [buildBlock()](buildblock%28%29.md): Builds an empty content from a block containing no statements.
