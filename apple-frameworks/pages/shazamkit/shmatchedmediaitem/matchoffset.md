> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/shazamkit/shmatchedmediaitem/matchoffset](https://developer.apple.com/documentation/shazamkit/shmatchedmediaitem/matchoffset)

# matchOffset (Swift)

**Framework:** ShazamKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

The timecode in the reference recording that matches the start of the query, in seconds.

## Declaration

```swift
var matchOffset: TimeInterval { get }
```

<a id="Discussion"></a>

## Discussion

The value can be negative if the query signature contains unrecognizable data before the data that corresponds to the start of the matched reference item.

## See Also

### Reading information about the match

- [predictedCurrentMatchOffset](predictedcurrentmatchoffset.md): The updated timecode in the reference recording that matches the current playback position of the query audio, in seconds.
- [frequencySkew](frequencyskew.md): A multiple for the difference in frequency between the matched audio and the query audio.

# matchOffset (Objective-C)

**Framework:** ShazamKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

The timecode in the reference recording that matches the start of the query, in seconds.

## Declaration

```objectivec
@property (nonatomic, assign, readonly) NSTimeInterval matchOffset;
```

```objectivec
@property (atomic, assign, readonly) NSTimeInterval matchOffset;
```

<a id="Discussion"></a>

## Discussion

The value can be negative if the query signature contains unrecognizable data before the data that corresponds to the start of the matched reference item.

## See Also

### Reading information about the match

- [predictedCurrentMatchOffset](predictedcurrentmatchoffset.md): The updated timecode in the reference recording that matches the current playback position of the query audio, in seconds.
- [frequencySkew](frequencyskew.md): A multiple for the difference in frequency between the matched audio and the query audio.
