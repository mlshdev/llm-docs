> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/speech/speechanalyzer/finalizeandfinish(through:)](https://developer.apple.com/documentation/speech/speechanalyzer/finalizeandfinish(through:))

# finalizeAndFinish(through:)

**Framework:** Speech  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Finishes analysis after finalizing results for a given time-code.

## Declaration

```swift
final func finalizeAndFinish(through: CMTime) async throws
```

## Parameters

- `through`: A time-code of the last audio sample that you want to analyze.

<a id="discussion"></a>

## Discussion

This method finalizes like [finalize(through:)](finalize%28through_%29.md) and finishes analysis like [finish(after:)](finish%28after_%29.md).

> **Throws**

> Various errors including `CancellationError` if analysis is finished early before the given input time.

## See Also

### Finishing analysis

- [cancelAndFinishNow()](cancelandfinishnow%28%29.md): Finishes analysis immediately.
- [finalizeAndFinishThroughEndOfInput()](finalizeandfinishthroughendofinput%28%29.md): Finishes analysis after an audio input sequence has been terminated and fully consumed and the modules’ results are finalized.
- [finish(after:)](finish%28after_%29.md): Finishes analysis once input for a given time is consumed.
