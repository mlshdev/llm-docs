> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avplayeritem/add(_:)-16ctk](https://developer.apple.com/documentation/avfoundation/avplayeritem/add(_:)-16ctk)

# add(\_:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

Adds the specified player item output object to the receiver.

## Declaration

```swift
nonisolated func add(_ output: AVPlayerItemOutput)
```

## Parameters

- `output`: The player item output object to associate with the item.

<a id="Discussion"></a>

## Discussion

When you add an [AVPlayerItemOutput](../avplayeritemoutput.md) object to an item, the samples associated with that output object are processed according to the rules for mixing, composing, or excluding content that the [AVPlayer](../avplayer.md) object honors for the specific media type. For example, video media is composed according to the instructions provided by the player item’s video composition object and audio media is mixed according to the parameters of its audio mix object.

## See Also

### Related Documentation

- [audioMix](audiomix.md): The audio mix parameters to be applied during playback.
- [videoComposition](videocomposition.md): The video composition settings to be applied during playback.

### Managing player item outputs

- [outputs](outputs.md): An array of outputs associated with the player item.
- [remove(\_:)](remove%28__%29-46b1r.md): Removes the specified player item output object from the receiver.

# addOutput: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

Adds the specified player item output object to the receiver.

## Declaration

```objectivec
- (void) addOutput:(AVPlayerItemOutput *) output;
```

## Parameters

- `output`: The player item output object to associate with the item.

<a id="Discussion"></a>

## Discussion

When you add an [AVPlayerItemOutput](../avplayeritemoutput.md) object to an item, the samples associated with that output object are processed according to the rules for mixing, composing, or excluding content that the [AVPlayer](../avplayer.md) object honors for the specific media type. For example, video media is composed according to the instructions provided by the player item’s video composition object and audio media is mixed according to the parameters of its audio mix object.

## See Also

### Related Documentation

- [audioMix](audiomix.md): The audio mix parameters to be applied during playback.
- [videoComposition](videocomposition.md): The video composition settings to be applied during playback.

### Managing player item outputs

- [outputs](outputs.md): An array of outputs associated with the player item.
- [removeOutput:](remove%28__%29-46b1r.md): Removes the specified player item output object from the receiver.
