> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/avfaudio/avaudioengine/attachednodes

# attachedNodes (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A read-only set that contains the nodes you attach to the audio engine.

## Declaration

```swift
var attachedNodes: Set<AVAudioNode> { get }
```

## See Also

### Attaching and Detaching Audio Nodes

- [attach(\_:)](attach%28__%29.md): Attaches an audio node to the audio engine.
- [detach(\_:)](detach%28__%29.md): Detaches an audio node from the audio engine.

# attachedNodes (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A read-only set that contains the nodes you attach to the audio engine.

## Declaration

```objectivec
@property (copy, readonly) NSSet<AVAudioNode *> * attachedNodes;
```

## See Also

### Attaching and Detaching Audio Nodes

- [attachNode:](attach%28__%29.md): Attaches an audio node to the audio engine.
- [detachNode:](detach%28__%29.md): Detaches an audio node from the audio engine.
