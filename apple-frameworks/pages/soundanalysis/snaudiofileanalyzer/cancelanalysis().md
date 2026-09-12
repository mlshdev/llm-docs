> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/soundanalysis/snaudiofileanalyzer/cancelanalysis()](https://developer.apple.com/documentation/soundanalysis/snaudiofileanalyzer/cancelanalysis())

# cancelAnalysis() (Swift)

**Framework:** Sound Analysis  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Cancels all the asynchronous sound analysis requests the analyzer is currently processing.

## Declaration

```swift
func cancelAnalysis()
```

<a id="Discussion"></a>

## Discussion

The method executes asynchronously, and when it completes, the analyzer calls the completion handler you provide to the [analyze(completionHandler:)](analyze%28completionhandler_%29.md) method.

## See Also

### Analyzing Data

- [analyze()](analyze%28%29.md): Analyzes the audio file synchronously.
- [analyze(completionHandler:)](analyze%28completionhandler_%29.md): Analyzes the audio file asynchronously.

# cancelAnalysis (Objective-C)

**Framework:** Sound Analysis  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Cancels all the asynchronous sound analysis requests the analyzer is currently processing.

## Declaration

```objectivec
- (void) cancelAnalysis;
```

<a id="Discussion"></a>

## Discussion

The method executes asynchronously, and when it completes, the analyzer calls the completion handler you provide to the [analyzeWithCompletionHandler:](analyze%28completionhandler_%29.md) method.

## See Also

### Analyzing Data

- [analyze](analyze%28%29.md): Analyzes the audio file synchronously.
- [analyzeWithCompletionHandler:](analyze%28completionhandler_%29.md): Analyzes the audio file asynchronously.
