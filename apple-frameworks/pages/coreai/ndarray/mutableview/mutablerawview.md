> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coreai/ndarray/mutableview/mutablerawview

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
