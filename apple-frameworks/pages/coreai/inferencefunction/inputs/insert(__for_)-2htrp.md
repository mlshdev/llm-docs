> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreai/inferencefunction/inputs/insert(_:for:)-2htrp](https://developer.apple.com/documentation/coreai/inferencefunction/inputs/insert(_:for:)-2htrp)

# insert(\_:for:)

**Framework:** Core AI  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Inserts a view of the value as the input with the specified name.

## Declaration

```swift
mutating func insert(_ value: borrowing some InferenceValue.ViewRepresentable & ~Copyable, for inputName: String)
```

## Parameters

- `value`: The value to borrow as an input.
- `inputName`: The name of the input to set.

## See Also

### Adding inputs

- [insert(\_:for:)](insert%28__for_%29-3eg32.md): Inserts a raw array view as the input with the specified name.
- [insert(\_:for:)](insert%28__for_%29-5o5oi.md): Inserts a typed array view as the input with the specified name.
