> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudioengine/disconnectmidi(_:from:)-1kssy](https://developer.apple.com/documentation/avfaudio/avaudioengine/disconnectmidi(_:from:)-1kssy)

# disconnectMIDI(\_:from:) (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+

Removes a MIDI connection between two nodes.

## Declaration

```swift
func disconnectMIDI(_ sourceNode: AVAudioNode, from destinationNode: AVAudioNode)
```

## Parameters

- `sourceNode`: The node with the MIDI output to disconnect.
- `destinationNode`: The node with the MIDI input to disconnect.

## See Also

### Managing MIDI Nodes

- [connectMIDI(\_:to:format:eventListProvider:)](connectmidi%28__to_format_eventlistprovider_%29-8tmk8.md)
- [connectMIDI(\_:to:format:eventListProvider:)](connectmidi%28__to_format_eventlistprovider_%29-35k1c.md)
- [connectMIDI(\_:to:format:eventListBlock:)](connectmidi%28__to_format_eventlistblock_%29-73cd1.md): Deprecated. Establishes a MIDI connection between two nodes.
- [connectMIDI(\_:to:format:eventListBlock:)](connectmidi%28__to_format_eventlistblock_%29-7qtd5.md): Deprecated. Establishes a MIDI connection between a source node and multiple destination nodes.
- [disconnectMIDI(\_:from:)](disconnectmidi%28__from_%29-7oaab.md): Removes a MIDI connection between one source node and multiple destination nodes.
- [disconnectMIDIInput(\_:)](disconnectmidiinput%28__%29.md): Disconnects all input MIDI connections from a node.
- [disconnectMIDIOutput(\_:)](disconnectmidioutput%28__%29.md): Disconnects all output MIDI connections from a node.
- [connectMIDI(\_:to:format:block:)](connectmidi%28__to_format_block_%29-3bc13.md): Deprecated. Establishes a MIDI-only connection between two nodes.
- [connectMIDI(\_:to:format:block:)](connectmidi%28__to_format_block_%29-666bc.md): Deprecated. Establishes a MIDI-only connection between a source node and multiple destination nodes.

# disconnectMIDI:from: (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+

Removes a MIDI connection between two nodes.

## Declaration

```objectivec
- (void) disconnectMIDI:(AVAudioNode *) sourceNode from:(AVAudioNode *) destinationNode;
```

## Parameters

- `sourceNode`: The node with the MIDI output to disconnect.
- `destinationNode`: The node with the MIDI input to disconnect.

## See Also

### Managing MIDI Nodes

- [connectMIDI:to:format:eventListProvider:](connectmidi%28__to_format_eventlistprovider_%29-8tmk8.md)
- [connectMIDI:toNodes:format:eventListProvider:](connectmidi%28__to_format_eventlistprovider_%29-35k1c.md)
- [connectMIDI:to:format:eventListBlock:](connectmidi%28__to_format_eventlistblock_%29-73cd1.md): Deprecated. Establishes a MIDI connection between two nodes.
- [connectMIDI:toNodes:format:eventListBlock:](connectmidi%28__to_format_eventlistblock_%29-7qtd5.md): Deprecated. Establishes a MIDI connection between a source node and multiple destination nodes.
- [disconnectMIDI:fromNodes:](disconnectmidi%28__from_%29-7oaab.md): Removes a MIDI connection between one source node and multiple destination nodes.
- [disconnectMIDIInput:](disconnectmidiinput%28__%29.md): Disconnects all input MIDI connections from a node.
- [disconnectMIDIOutput:](disconnectmidioutput%28__%29.md): Disconnects all output MIDI connections from a node.
- [connectMIDI:to:format:block:](connectmidi%28__to_format_block_%29-3bc13.md): Deprecated. Establishes a MIDI-only connection between two nodes.
- [connectMIDI:toNodes:format:block:](connectmidi%28__to_format_block_%29-666bc.md): Deprecated. Establishes a MIDI-only connection between a source node and multiple destination nodes.
