> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatial/coordinatespace3d/ancestorspace](https://developer.apple.com/documentation/spatial/coordinatespace3d/ancestorspace)

# ancestorSpace

**Framework:** Spatial  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

An ancestor coordinate space.

## Declaration

```swift
var ancestorSpace: Self.AncestorCoordinateSpace? { get }
```

<a id="discussion"></a>

## Discussion

A `nil` ancestor indicates this space is a root.
