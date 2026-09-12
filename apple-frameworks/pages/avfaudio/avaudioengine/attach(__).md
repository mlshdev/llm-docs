> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudioengine/attach(_:)](https://developer.apple.com/documentation/avfaudio/avaudioengine/attach(_:))

# attach(\_:) (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Attaches an audio node to the audio engine.

## Declaration

```swift
func attach(_ node: AVAudioNode)
```

## Parameters

- `node`: The audio node to attach.

<a id="Discussion"></a>

## Discussion

An instance of [AVAudioNode](../avaudionode.md) isn’t usable until you attach it to the audio engine using this method.

```swift
// Create a player node that's used for audio playback.
let playerNode = AVAudioPlayerNode()

// Attach the player node to the engine.
engine.attach(playerNode)
```

## See Also

### Attaching and Detaching Audio Nodes

- [detach(\_:)](detach%28__%29.md): Detaches an audio node from the audio engine.
- [attachedNodes](attachednodes.md): A read-only set that contains the nodes you attach to the audio engine.

# attachNode: (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Attaches an audio node to the audio engine.

## Declaration

```objectivec
- (void) attachNode:(AVAudioNode *) node;
```

## Parameters

- `node`: The audio node to attach.

<a id="Discussion"></a>

## Discussion

An instance of [AVAudioNode](../avaudionode.md) isn’t usable until you attach it to the audio engine using this method.

```swift
// Create a player node that's used for audio playback.
let playerNode = AVAudioPlayerNode()

// Attach the player node to the engine.
engine.attach(playerNode)
```

## See Also

### Attaching and Detaching Audio Nodes

- [detachNode:](detach%28__%29.md): Detaches an audio node from the audio engine.
- [attachedNodes](attachednodes.md): A read-only set that contains the nodes you attach to the audio engine.
