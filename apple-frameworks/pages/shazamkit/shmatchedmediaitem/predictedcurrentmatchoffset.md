> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/shazamkit/shmatchedmediaitem/predictedcurrentmatchoffset](https://developer.apple.com/documentation/shazamkit/shmatchedmediaitem/predictedcurrentmatchoffset)

# predictedCurrentMatchOffset (Swift)

**Framework:** ShazamKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

The updated timecode in the reference recording that matches the current playback position of the query audio, in seconds.

## Declaration

```swift
var predictedCurrentMatchOffset: TimeInterval { get }
```

## Mentioned In

- [Matching audio using the built-in microphone](../matching-audio-using-the-built-in-microphone.md)

## See Also

### Reading information about the match

- [matchOffset](matchoffset.md): The timecode in the reference recording that matches the start of the query, in seconds.
- [frequencySkew](frequencyskew.md): A multiple for the difference in frequency between the matched audio and the query audio.

# predictedCurrentMatchOffset (Objective-C)

**Framework:** ShazamKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

The updated timecode in the reference recording that matches the current playback position of the query audio, in seconds.

## Declaration

```objectivec
@property (nonatomic, assign, readonly) NSTimeInterval predictedCurrentMatchOffset;
```

```objectivec
@property (atomic, assign, readonly) NSTimeInterval predictedCurrentMatchOffset;
```

## Mentioned In

- [Matching audio using the built-in microphone](../matching-audio-using-the-built-in-microphone.md)

## See Also

### Reading information about the match

- [matchOffset](matchoffset.md): The timecode in the reference recording that matches the start of the query, in seconds.
- [frequencySkew](frequencyskew.md): A multiple for the difference in frequency between the matched audio and the query audio.
