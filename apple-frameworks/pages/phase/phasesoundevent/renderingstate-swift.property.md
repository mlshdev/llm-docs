> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/phase/phasesoundevent/renderingstate-swift.property](https://developer.apple.com/documentation/phase/phasesoundevent/renderingstate-swift.property)

# renderingState (Swift)

**Framework:** PHASE  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

The sound event’s playback status.

## Declaration

```swift
var renderingState: PHASESoundEvent.RenderingState { get }
```

<a id="Discussion"></a>

## Discussion

Access this property to check the sound event’s playback status. The value reflects the state you control by calling one of the functions: [start(completion:)](start%28completion_%29.md), [stopAndInvalidate()](stopandinvalidate%28%29.md), or [pause()](pause%28%29.md).

## See Also

### Checking Playback Status

- [PHASESoundEvent.RenderingState](renderingstate-swift.enum.md): The playback status of audio.

# renderingState (Objective-C)

**Framework:** PHASE  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

The sound event’s playback status.

## Declaration

```objectivec
@property (readonly) PHASERenderingState renderingState;
```

<a id="Discussion"></a>

## Discussion

Access this property to check the sound event’s playback status. The value reflects the state you control by calling one of the functions: [startWithCompletion:](start%28completion_%29.md), [stopAndInvalidate](stopandinvalidate%28%29.md), or [pause](pause%28%29.md).

## See Also

### Checking Playback Status

- [PHASERenderingState](renderingstate-swift.enum.md): The playback status of audio.
