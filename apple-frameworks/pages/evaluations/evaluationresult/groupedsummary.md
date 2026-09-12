> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/evaluations/evaluationresult/groupedsummary](https://developer.apple.com/documentation/evaluations/evaluationresult/groupedsummary)

# groupedSummary

**Framework:** Evaluations  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+ · watchOS 27.0+ · Xcode 27.0+

A formatted description of summary metrics organized by groups.

## Declaration

```swift
var groupedSummary: String { get }
```

## Mentioned In

- [Evaluating language model responses](../evaluating-language-model-responses.md)

<a id="Example-Output"></a>

## Example Output

```swift
Text Matching:
  Correct (%): 0.75
  First Word Correct (%): 0.83

Text Quality:
  Ratio of Match Length: 0.92
  Length Distribution: 0.014
```

## See Also

### Formatting results

- [jsonRepresentableDataFrame(of:)](jsonrepresentabledataframe%28of_%29.md): Transforms a DataFrame into one with column types compatible with JSON representation.
