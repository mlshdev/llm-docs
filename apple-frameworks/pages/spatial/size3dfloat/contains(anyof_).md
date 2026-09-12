> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatial/size3dfloat/contains(anyof:)](https://developer.apple.com/documentation/spatial/size3dfloat/contains(anyof:))

# contains(anyOf:)

**Framework:** Spatial  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Returns a Boolean value that indicates whether this volume contains any of the specified points.

## Declaration

```swift
func contains(anyOf points: [Point3DFloat]) -> Bool
```

## Parameters

- `points`: An array of points.

<a id="discussion"></a>

## Discussion

- Returns A Boolean value that indicates whether `self` contains any of the specified points.
