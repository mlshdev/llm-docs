> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/soundanalysis/snaudiostreamanalyzer/completeanalysis()](https://developer.apple.com/documentation/soundanalysis/snaudiostreamanalyzer/completeanalysis())

# completeAnalysis() (Swift)

**Framework:** Sound Analysis  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Notifies the analyzer when it receives the final audio buffer.

## Declaration

```swift
func completeAnalysis()
```

<a id="Discussion"></a>

## Discussion

Use this method for requests that provide final results when a stream reaches its end. The analyzer ignores any further calls to the [analyze(\_:atAudioFramePosition:)](analyze%28__ataudioframeposition_%29.md) method.

## See Also

### Analyzing Data

- [analyze(\_:atAudioFramePosition:)](analyze%28__ataudioframeposition_%29.md): Adds a new audio buffer to the analyzer’s larger stream buffer.

# completeAnalysis (Objective-C)

**Framework:** Sound Analysis  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Notifies the analyzer when it receives the final audio buffer.

## Declaration

```objectivec
- (void) completeAnalysis;
```

<a id="Discussion"></a>

## Discussion

Use this method for requests that provide final results when a stream reaches its end. The analyzer ignores any further calls to the [analyzeAudioBuffer:atAudioFramePosition:](analyze%28__ataudioframeposition_%29.md) method.

## See Also

### Analyzing Data

- [analyzeAudioBuffer:atAudioFramePosition:](analyze%28__ataudioframeposition_%29.md): Adds a new audio buffer to the analyzer’s larger stream buffer.
