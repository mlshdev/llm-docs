> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/avfaudio/avmusictrack/enumerateevents(in:using:)

# enumerateEvents(in:using:) (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

Iterates through the music events within the track.

## Declaration

```swift
func enumerateEvents(in range: AVBeatRange, using block: (AVMusicEvent, UnsafeMutablePointer<AVMusicTimeStamp>, UnsafeMutablePointer<ObjCBool>) -> Void)
```

## Parameters

- `range`: The range to iterate through.
- `block`: The block to call for each event.

<a id="Discussion"></a>

## Discussion

Examine each event the block returns by using [isKind(of:)](../../objectivec/nsobjectprotocol/iskind%28of_%29.md) to determine the subclass, and then cast and access it accordingly.

The iteration may continue after removing an event.

The event object returned through the block won’t be the same instances you add to the [AVMusicTrack](../avmusictrack.md), though the content is identical.

## See Also

### Iterating Over Events

- [AVMusicEventEnumerationBlock](../avmusiceventenumerationblock.md): A type you use to enumerate and remove music events, if necessary.

# enumerateEventsInRange:usingBlock: (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

Iterates through the music events within the track.

## Declaration

```objectivec
- (void) enumerateEventsInRange:(AVBeatRange) range usingBlock:(AVMusicEventEnumerationBlock) block;
```

## Parameters

- `range`: The range to iterate through.
- `block`: The block to call for each event.

<a id="Discussion"></a>

## Discussion

Examine each event the block returns by using [isKindOfClass:](../../objectivec/nsobjectprotocol/iskind%28of_%29.md) to determine the subclass, and then cast and access it accordingly.

The iteration may continue after removing an event.

The event object returned through the block won’t be the same instances you add to the [AVMusicTrack](../avmusictrack.md), though the content is identical.

## See Also

### Iterating Over Events

- [AVMusicEventEnumerationBlock](../avmusiceventenumerationblock.md): A type you use to enumerate and remove music events, if necessary.
