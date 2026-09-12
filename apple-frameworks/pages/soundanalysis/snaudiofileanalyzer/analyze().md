> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/soundanalysis/snaudiofileanalyzer/analyze()](https://developer.apple.com/documentation/soundanalysis/snaudiofileanalyzer/analyze())

# analyze() (Swift)

**Framework:** Sound Analysis  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Analyzes the audio file synchronously.

## Declaration

```swift
func analyze()
```

## Mentioned In

- [Classifying Sounds in an Audio File](../classifying-sounds-in-an-audio-file.md)

<a id="Discussion"></a>

## Discussion

This method executes synchronously and may block the calling thread for a long time.

> **Important**

>  Keep your app’s user interface responsive by calling this method from a thread other than the main thread.

The audio file analyzer sends errors to each request’s results observer.

## See Also

### Analyzing Data

- [analyze(completionHandler:)](analyze%28completionhandler_%29.md): Analyzes the audio file asynchronously.
- [cancelAnalysis()](cancelanalysis%28%29.md): Cancels all the asynchronous sound analysis requests the analyzer is currently processing.

# analyze (Objective-C)

**Framework:** Sound Analysis  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Analyzes the audio file synchronously.

## Declaration

```objectivec
- (void) analyze;
```

## Mentioned In

- [Classifying Sounds in an Audio File](../classifying-sounds-in-an-audio-file.md)

<a id="Discussion"></a>

## Discussion

This method executes synchronously and may block the calling thread for a long time.

> **Important**

>  Keep your app’s user interface responsive by calling this method from a thread other than the main thread.

The audio file analyzer sends errors to each request’s results observer.

## See Also

### Analyzing Data

- [analyzeWithCompletionHandler:](analyze%28completionhandler_%29.md): Analyzes the audio file asynchronously.
- [cancelAnalysis](cancelanalysis%28%29.md): Cancels all the asynchronous sound analysis requests the analyzer is currently processing.
