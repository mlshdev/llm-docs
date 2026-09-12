> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlsize/init(width:height:depth:)](https://developer.apple.com/documentation/metal/mtlsize/init(width:height:depth:))

# init(width:height:depth:)

**Framework:** Metal  
**Kind:** Initializer  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

Creates a size instance with values for its width, height, and depth properties.

## Declaration

```swift
init(width: Int, height: Int, depth: Int)
```

## Parameters

- `width`: A value for the x-axis dimension.
- `height`: A value for the y-axis dimension. Pass `1` for sizes with one dimension.
- `depth`: A value for the z-axis dimension. Pass `1` for sizes with one or two dimensions.

## See Also

### Creating a size instance

- [init()](init%28%29.md): Creates a default size instance by setting the initial values for its width, height, and depth properties to zero.
- [MTLSizeMake(\_:\_:\_:)](../mtlsizemake%28______%29.md): Creates a size instance with values for its width, height, and depth properties.
