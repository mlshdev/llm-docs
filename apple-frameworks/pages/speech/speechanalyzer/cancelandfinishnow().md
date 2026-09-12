> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/speech/speechanalyzer/cancelandfinishnow()](https://developer.apple.com/documentation/speech/speechanalyzer/cancelandfinishnow())

# cancelAndFinishNow()

**Framework:** Speech  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Finishes analysis immediately.

## Declaration

```swift
final func cancelAndFinishNow() async
```

<a id="discussion"></a>

## Discussion

This method cancels all pending work and then finishes analysis. It works similarly to calling [cancelAnalysis(before:)](cancelanalysis%28before_%29.md) and then [finish(after:)](finish%28after_%29.md), but unlike `finish(after:)`, this method is able to finish analysis prior to any input. The post-conditions for this method are identical to `finish(after:)`.

You do not need to call this method before releasing this analyzer or its modules.

## See Also

### Finishing analysis

- [finalizeAndFinishThroughEndOfInput()](finalizeandfinishthroughendofinput%28%29.md): Finishes analysis after an audio input sequence has been terminated and fully consumed and the modules’ results are finalized.
- [finalizeAndFinish(through:)](finalizeandfinish%28through_%29.md): Finishes analysis after finalizing results for a given time-code.
- [finish(after:)](finish%28after_%29.md): Finishes analysis once input for a given time is consumed.
