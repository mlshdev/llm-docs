> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/createmlcomponents/temporaltransformertoupdatableestimatoradaptor/maketransformer()

# makeTransformer()

**Framework:** Create ML Components  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ (deprecated in 18.0) · iPadOS 16.0+ (deprecated in 18.0) · Mac Catalyst 16.0+ (deprecated in 18.0) · macOS 13.0+ (deprecated in 15.0) · tvOS 16.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0)

Creates a default-initialized transformer suitable for incremental fitting.

## Declaration

```swift
func makeTransformer() -> Transformer
```

## See Also

### Fitting and updating

- [fitted(to:eventHandler:)](fitted%28to_eventhandler_%29.md): Deprecated. Returns the pre-defined transformer.
- [update(\_:with:eventHandler:)](update%28__with_eventhandler_%29.md): Deprecated. Does nothing since this estimator uses a pre-defined transformer.
