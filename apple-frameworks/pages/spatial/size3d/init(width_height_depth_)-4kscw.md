> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatial/size3d/init(width:height:depth:)-4kscw](https://developer.apple.com/documentation/spatial/size3d/init(width:height:depth:)-4kscw)

# init(width:height:depth:)

**Framework:** Spatial  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

Creates a size structure from the specified floating-point values.

## Declaration

```swift
init<T>(width: T, height: T, depth: T) where T : BinaryFloatingPoint
```

## Parameters

- `width`: A floating-point value that specifies the width.
- `height`: A floating-point value that specifies the height.
- `depth`: A floating-point value that specifies the depth.

## See Also

### Creating a 3D size structure

- [init()](init%28%29.md): Creates a size structure.
- [init(width:height:depth:)](init%28width_height_depth_%29-4j9bk.md): Creates a size structure from the specified double-precision values.
- [init(\_:)](init%28__%29-2ibhr.md): Creates a size structure from the specified single-precision vector.
- [init(\_:)](init%28__%29-3y7nr.md): Creates a size structure from the specified double-precision vector.
- [init(vector:)](init%28vector_%29.md): Creates a size structure from the specified double-precision vector.
- [init(\_:)](init%28__%29-7kyp0.md): Creates a size structure from the specified Spatial point.
- [init(\_:)](init%28__%29-6nss1.md): Creates a size structure from the specified Spatial vector.
