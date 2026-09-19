> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/createml/show(_:_:)-537qb

# show(\_:\_:)

**Framework:** Create ML  
**Kind:** Function  
**Availability:** macOS 10.15+ (deprecated in 14.0)

Generates a streaming plot visualization of the two data columns.

## Declaration

```swift
func show<ElementX, ElementY>(_ x: MLDataColumn<ElementX>, _ y: MLDataColumn<ElementY>) -> any MLStreamingVisualizable where ElementX : MLDataValueConvertible, ElementY : MLDataValueConvertible
```

## See Also

### Plot visualizations

- [show(\_:\_:)](show%28____%29-2tmbf.md): Deprecated. Generates a streaming plot visualization of the two untyped columns.
