> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usdkit/usdvalue/matrix4d/init(_:)-6b27q](https://developer.apple.com/documentation/usdkit/usdvalue/matrix4d/init(_:)-6b27q)

# init(\_:)

**Framework:** USDKit  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Creates a matrix from a Spatial projective transform (double-precision).

## Declaration

```swift
init(_ projectiveTransform: ProjectiveTransform3D)
```

<a id="discussion"></a>

## Discussion

`ProjectiveTransform3D` is column-major and treats vectors as column vectors; `Matrix4d` is row-major and treats vectors as row vectors. The in-memory layout is identical, so this initializer reads each `m[col, row]` element and lays it out row-major.
