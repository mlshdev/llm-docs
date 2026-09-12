> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/paperkit/shapemarkup/shape-swift.enum/rectangle-swift.struct/init(cornerradius:)](https://developer.apple.com/documentation/paperkit/shapemarkup/shape-swift.enum/rectangle-swift.struct/init(cornerradius:))

# init(cornerRadius:)

**Framework:** PaperKit  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

Create a new rectangle with optionally rounded corners.

## Declaration

```swift
init(cornerRadius: CGFloat? = nil)
```

## Parameters

- `cornerRadius`: The corner radius in unit coordinate space (0.0 to 1.0). A value of `0.1` represents 10% of the minimum dimension of the shape.

  If `nil` then this is a plain rectangle.
