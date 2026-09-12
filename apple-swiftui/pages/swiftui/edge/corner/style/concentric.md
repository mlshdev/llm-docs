> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/edge/corner/style/concentric](https://developer.apple.com/documentation/swiftui/edge/corner/style/concentric)

# concentric

**Framework:** SwiftUI  
**Kind:** Type Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

A rounded corner style where the corner’s radius shares a center point with the container shape’s corner radius.

## Declaration

```swift
static var concentric: Edge.Corner.Style { get }
```

<a id="discussion"></a>

## Discussion

When a corner is concentric to its container, the system calculates the corner radius to equal the container shape’s corner radius minus the distance between corners. When the system calculates a zero radius, the corner is square.
