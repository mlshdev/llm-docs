> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/soundanalysis/snaudiostreamanalyzer/init(format:)](https://developer.apple.com/documentation/soundanalysis/snaudiostreamanalyzer/init(format:))

# init(format:) (Swift)

**Framework:** Sound Analysis  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Creates a new audio stream analyzer.

## Declaration

```swift
init(format: AVAudioFormat)
```

## Parameters

- `format`: The audio format of an audio stream.

<a id="Discussion"></a>

## Discussion

> **Important**

>  The audio stream format must be a linear PCM (pulse code modulation).

# initWithFormat: (Objective-C)

**Framework:** Sound Analysis  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Creates a new audio stream analyzer.

## Declaration

```objectivec
- (instancetype) initWithFormat:(AVAudioFormat *) format;
```

## Parameters

- `format`: The audio format of an audio stream.

<a id="Discussion"></a>

## Discussion

> **Important**

>  The audio stream format must be a linear PCM (pulse code modulation).
