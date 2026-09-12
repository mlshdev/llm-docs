> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreai/ndarray/mutableview/mutablerawview](https://developer.apple.com/documentation/coreai/ndarray/mutableview/mutablerawview)

# mutableRawView

**Framework:** Core AI  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Returns a mutable raw view over the same data.

## Declaration

```swift
@export(implementation) var mutableRawView: NDArray.MutableRawView { get }
```

## See Also

### Converting to other views

- [view](view.md): Conforms when `Element` conforms to `BitwiseCopyable`. An immutable view of this mutable view.
