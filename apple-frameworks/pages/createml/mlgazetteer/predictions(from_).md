> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/createml/mlgazetteer/predictions(from:)

# predictions(from:)

**Framework:** Create ML  
**Kind:** Instance Method  
**Availability:** macOS 10.15+

Predicts the labels for the given terms.

## Declaration

```swift
func predictions(from texts: [String]) throws -> [String]
```

## Parameters

- `texts`: The array of input terms.

<a id="return-value"></a>

## Return Value

An array of labels.

## See Also

### Testing a gazetteer

- [prediction(from:)](prediction%28from_%29.md): Predicts the label for the given term.
- [predictions(from:)](predictions%28from_%29-2rej.md): Predicts the labels for the given terms.
- [predictions(from:)](predictions%28from_%29-2jaui.md): Deprecated. Predicts the labels for the given terms in the table column.
