> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/speech/speechanalyzer/finalize(through:)](https://developer.apple.com/documentation/speech/speechanalyzer/finalize(through:))

# finalize(through:)

**Framework:** Speech  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Finalizes the modules’ analyses.

## Declaration

```swift
final func finalize(through: CMTime?) async throws
```

## Parameters

- `through`: Finalizes up to and including the given time-code. If the analyzer hasn’t already consumed that audio from the input sequence, the method waits until the analyzer consumes that audio before finalizing.

  If `nil`, finalizes up to and including the last audio the analyzer *has* consumed from the input sequence, and if the analyzer has not consumed any audio from the input sequence, this method does nothing.

<a id="discussion"></a>

## Discussion

At the return of this method, input up to and including the given time will have been analyzed. Modules will have published the finalized results to their stream, but the application may not have consumed them from the results stream yet. [volatileRange](volatilerange.md) will post-date the given time.

If the given time has already been finalized (it pre-dates the volatile range), then this method does nothing.

> **Throws**

> Various errors including `CancellationError` if analysis is finished early before the given input time

## See Also

### Finalizing and cancelling results

- [cancelAnalysis(before:)](cancelanalysis%28before_%29.md): Stops analyzing audio predating the given time.
