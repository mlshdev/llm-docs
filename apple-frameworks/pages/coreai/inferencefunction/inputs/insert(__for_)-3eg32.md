> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreai/inferencefunction/inputs/insert(_:for:)-3eg32](https://developer.apple.com/documentation/coreai/inferencefunction/inputs/insert(_:for:)-3eg32)

# insert(\_:for:)

**Framework:** Core AI  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Inserts a raw array view as the input with the specified name.

## Declaration

```swift
mutating func insert(_ rawView: consuming NDArray.RawView, for inputName: String)
```

## Parameters

- `rawView`: A raw view of the array to use as the input value.
- `inputName`: The name of the input to set.

## See Also

### Adding inputs

- [insert(\_:for:)](insert%28__for_%29-2htrp.md): Inserts a view of the value as the input with the specified name.
- [insert(\_:for:)](insert%28__for_%29-5o5oi.md): Inserts a typed array view as the input with the specified name.
