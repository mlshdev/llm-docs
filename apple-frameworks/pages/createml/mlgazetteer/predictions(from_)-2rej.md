> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mlgazetteer/predictions(from:)-2rej](https://developer.apple.com/documentation/createml/mlgazetteer/predictions(from:)-2rej)

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
- [predictions(from:)](predictions%28from_%29.md): Predicts the labels for the given terms.
- [predictions(from:)](predictions%28from_%29-2jaui.md): Deprecated. Predicts the labels for the given terms in the table column.
