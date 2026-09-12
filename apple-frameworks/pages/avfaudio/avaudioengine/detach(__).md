> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudioengine/detach(_:)](https://developer.apple.com/documentation/avfaudio/avaudioengine/detach(_:))

# detach(\_:) (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Detaches an audio node from the audio engine.

## Declaration

```swift
func detach(_ node: AVAudioNode)
```

## Parameters

- `node`: The audio node to detach.

<a id="Discussion"></a>

## Discussion

If necessary, the audio engine safely disconnects the audio node before detaching it.

## See Also

### Attaching and Detaching Audio Nodes

- [attach(\_:)](attach%28__%29.md): Attaches an audio node to the audio engine.
- [attachedNodes](attachednodes.md): A read-only set that contains the nodes you attach to the audio engine.

# detachNode: (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Detaches an audio node from the audio engine.

## Declaration

```objectivec
- (void) detachNode:(AVAudioNode *) node;
```

## Parameters

- `node`: The audio node to detach.

<a id="Discussion"></a>

## Discussion

If necessary, the audio engine safely disconnects the audio node before detaching it.

## See Also

### Attaching and Detaching Audio Nodes

- [attachNode:](attach%28__%29.md): Attaches an audio node to the audio engine.
- [attachedNodes](attachednodes.md): A read-only set that contains the nodes you attach to the audio engine.
