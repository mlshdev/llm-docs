> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/speech/speechmodule/availablecompatibleaudioformats

# availableCompatibleAudioFormats

**Framework:** Speech  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

The audio formats that this module is able to analyze, given its configuration.

## Declaration

```swift
var availableCompatibleAudioFormats: [AVAudioFormat] { get async }
```

<a id="discussion"></a>

## Discussion

If the audio format doesn’t matter, then there will be one format listed with a sample rate of `kAudioStreamAnyRate` and other values 0.

If assets are necessary yet not installed on device, then the list will be empty.

This property may be accessed before the module is added to the analyzer.
