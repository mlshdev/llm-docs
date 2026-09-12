> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreai/ndarray/mutableview/view](https://developer.apple.com/documentation/coreai/ndarray/mutableview/view)

# view

**Framework:** Core AI  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

An immutable view of this mutable view.

## Declaration

```swift
@export(implementation) var view: NDArray.View<Element> { get }
```

## See Also

### Converting to other views

- [mutableRawView](mutablerawview.md): Conforms when `Element` conforms to `BitwiseCopyable`. Returns a mutable raw view over the same data.
