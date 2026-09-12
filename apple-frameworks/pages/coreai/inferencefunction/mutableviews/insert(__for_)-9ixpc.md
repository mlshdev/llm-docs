> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreai/inferencefunction/mutableviews/insert(_:for:)-9ixpc](https://developer.apple.com/documentation/coreai/inferencefunction/mutableviews/insert(_:for:)-9ixpc)

# insert(\_:for:)

**Framework:** Core AI  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Insert the mutable view for the value named `name`.

## Declaration

```swift
mutating func insert(_ mutableRawView: consuming NDArray.MutableRawView, for name: String)
```

## Parameters

- `mutableRawView`: A mutable raw view of the ndArray to be used as the value.
- `name`: The name of the value that this view should be used for.

## See Also

### Adding views

- [insert(\_:for:)](insert%28__for_%29-1b2yx.md): Insert a new value to the output views.
- [insert(\_:for:)](insert%28__for_%29-8ossp.md): Insert the mutable view to be used as the ndArray value named `name`.
