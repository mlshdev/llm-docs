> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreai/inferencefunction/mutableviews/insert(_:for:)-1b2yx](https://developer.apple.com/documentation/coreai/inferencefunction/mutableviews/insert(_:for:)-1b2yx)

# insert(\_:for:)

**Framework:** Core AI  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Insert a new value to the output views.

## Declaration

```swift
mutating func insert(_ value: inout some InferenceValue.MutableViewRepresentable & ~Copyable, for name: String)
```

## Parameters

- `value`: The value which will be updated in-place.
- `name`: The name of the value that this view should be used for.

## See Also

### Adding views

- [insert(\_:for:)](insert%28__for_%29-8ossp.md): Insert the mutable view to be used as the ndArray value named `name`.
- [insert(\_:for:)](insert%28__for_%29-9ixpc.md): Insert the mutable view for the value named `name`.
