> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avmusiceventenumerationblock](https://developer.apple.com/documentation/avfaudio/avmusiceventenumerationblock)

# AVMusicEventEnumerationBlock (Swift)

**Framework:** AVFAudio  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A type you use to enumerate and remove music events, if necessary.

## Declaration

```swift
typealias AVMusicEventEnumerationBlock = (AVMusicEvent, UnsafeMutablePointer<AVMusicTimeStamp>, UnsafeMutablePointer<ObjCBool>) -> Void
```

## Parameters

- `event`: The music event the block returns.
- `timeStamp`: The beat position of the event in the music track.
- `removeEvent`: A value that determines whether to remove the event from the track.

<a id="Discussion"></a>

## Discussion

You use this type when you use [enumerateEvents(in:using:)](avmusictrack/enumerateevents%28in_using_%29.md). If you modify `event` or `timeStamp`, you change the corresponding value in the track event.

## See Also

### Iterating Over Events

- [enumerateEvents(in:using:)](avmusictrack/enumerateevents%28in_using_%29.md): Iterates through the music events within the track.

# AVMusicEventEnumerationBlock (Objective-C)

**Framework:** AVFAudio  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A type you use to enumerate and remove music events, if necessary.

## Declaration

```objectivec
typedef void (^)(AVMusicEvent *, double *, _Bool *) AVMusicEventEnumerationBlock;
```

## Parameters

- `event`: The music event the block returns.
- `timeStamp`: The beat position of the event in the music track.
- `removeEvent`: A value that determines whether to remove the event from the track.

<a id="Discussion"></a>

## Discussion

You use this type when you use [enumerateEventsInRange:usingBlock:](avmusictrack/enumerateevents%28in_using_%29.md). If you modify `event` or `timeStamp`, you change the corresponding value in the track event.

## See Also

### Iterating Over Events

- [enumerateEventsInRange:usingBlock:](avmusictrack/enumerateevents%28in_using_%29.md): Iterates through the music events within the track.
