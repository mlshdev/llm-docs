> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/testing/testtrait/evaluates(_:info:recordtranscripts:)](https://developer.apple.com/documentation/testing/testtrait/evaluates(_:info:recordtranscripts:))

# evaluates(\_:info:recordTranscripts:)

**Framework:** Swift Testing  
**Kind:** Type Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+ · watchOS 27.0+ · Swift 6.0+ · Xcode 16.0+

Creates a trait that runs a single evaluation and makes its result available through the current evaluation context.

## Declaration

```swift
static func evaluates(_ evaluation: any Evaluation, info: [String : String] = [:], recordTranscripts: Bool = false) -> Self
```

## Parameters

- `evaluation`: The evaluation to run.
- `info`: User-defined key-value pairs attached to the result, such as model name or dataset version.
- `recordTranscripts`: When `true`, each row’s transcript snapshot is embedded in the `.xcevalresult` attachment under the `Transcript` column. Recoverable on load via `EvaluationResult/transcriptSnapshots`. Defaults to `false` so the attachment stays small for runs that don’t need transcripts.

<a id="discussion"></a>

## Discussion

```swift
let accuracyMetric = Metric("Accuracy")

@Test(.evaluates(myEvaluation, info: ["model": "gpt-4"]))
func testAccuracy() async throws {
    let result = EvaluationContext.current.result
    #expect(result.aggregateValue(.mean(of: accuracyMetric)) >= 0.8)
}
```
