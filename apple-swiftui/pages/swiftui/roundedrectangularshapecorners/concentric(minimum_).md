> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/roundedrectangularshapecorners/concentric(minimum:)](https://developer.apple.com/documentation/swiftui/roundedrectangularshapecorners/concentric(minimum:))

# concentric(minimum:)

**Framework:** SwiftUI  
**Kind:** Type Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Corner styles will be concentric with its container, varying the radius as needed in all four corners but never going below zero, or the provided minimum corner style, if provided.

## Declaration

```swift
static func concentric(minimum: Edge.Corner.Style? = nil) -> RoundedRectangularShapeCorners
```
