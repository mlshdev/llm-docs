> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/soundanalysis/snaudiofileanalyzer/init(url:)-336no](https://developer.apple.com/documentation/soundanalysis/snaudiofileanalyzer/init(url:)-336no)

# init(url:) (Swift)

**Framework:** Sound Analysis  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Creates a new audio file analyzer.

## Declaration

```swift
init(url: URL) throws
```

## Parameters

- `url`: A path to an audio file.

## Mentioned In

- [Classifying Sounds in an Audio File](../classifying-sounds-in-an-audio-file.md)

# initWithURL:error: (Objective-C)

**Framework:** Sound Analysis  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Creates a new audio file analyzer.

## Declaration

```objectivec
- (instancetype) initWithURL:(NSURL *) url error:(NSError **) error;
```

## Parameters

- `url`: A path to an audio file.
- `error`: On return, if an error occurs, a pointer to an error information instance; otherwise, `nil`.

## Mentioned In

- [Classifying Sounds in an Audio File](../classifying-sounds-in-an-audio-file.md)
