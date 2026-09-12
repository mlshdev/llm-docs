> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/show(_:)-5r938](https://developer.apple.com/documentation/createml/show(_:)-5r938)

# show(\_:)

**Framework:** Create ML  
**Kind:** Function  
**Availability:** macOS 10.15+ (deprecated in 14.0)

Generates a streaming visualization of the data column.

## Declaration

```swift
func show<Element>(_ column: MLDataColumn<Element>) -> any MLStreamingVisualizable where Element : MLDataValueConvertible
```

## See Also

### Column visualizations

- [show(\_:)](show%28__%29-9645r.md): Deprecated. Generates a streaming visualization of the untyped column.
