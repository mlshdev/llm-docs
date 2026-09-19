> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/createml/mlgazetteer/predictions(from:)-2jaui

# predictions(from:)

**Framework:** Create ML  
**Kind:** Instance Method  
**Availability:** macOS 10.15+ (deprecated in 14.0)

Predicts the labels for the given terms in the table column.

## Declaration

```swift
func predictions(from texts: MLDataColumn<String>) throws -> MLDataColumn<String>
```

## Parameters

- `texts`: The column of terms.

<a id="return-value"></a>

## Return Value

A column of labels.

## See Also

### Testing a gazetteer

- [prediction(from:)](prediction%28from_%29.md): Predicts the label for the given term.
- [predictions(from:)](predictions%28from_%29.md): Predicts the labels for the given terms.
- [predictions(from:)](predictions%28from_%29-2rej.md): Predicts the labels for the given terms.
