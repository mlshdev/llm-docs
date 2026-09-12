> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreml/mlstate/withmultiarray(for:_:)](https://developer.apple.com/documentation/coreml/mlstate/withmultiarray(for:_:))

# withMultiArray(for:\_:)

**Framework:** Core ML  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 1.0+ · watchOS 11.0+

## Declaration

```swift
func withMultiArray<R>(for stateName: String, _ body: (MLMultiArray) throws -> R) rethrows -> R
```

## See Also

### Getting a state buffer

- [withMultiArray(\_:)](withmultiarray%28__%29.md): Deprecated.
