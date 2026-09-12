> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudioengine/connectmidi(_:to:format:block:)-3bc13](https://developer.apple.com/documentation/avfaudio/avaudioengine/connectmidi(_:to:format:block:)-3bc13)

# connectMIDI(\_:to:format:block:) (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ (deprecated in 16.0) · iPadOS 13.0+ (deprecated in 16.0) · Mac Catalyst 13.1+ (deprecated in 16.0) · macOS 10.14+ (deprecated in 13.0) · tvOS 12.0+ (deprecated in 16.0) · visionOS 1.0+ (deprecated in 1.0)

Establishes a MIDI-only connection between two nodes.

> Use [connectMIDI(\_:to:format:eventListBlock:)](connectmidi%28__to_format_eventlistblock_%29-73cd1.md) instead.

## Declaration

```swift
func connectMIDI(_ sourceNode: AVAudioNode, to destinationNode: AVAudioNode, format: AVAudioFormat?, block tapBlock: AUMIDIOutputEventBlock? = nil)
```

## Parameters

- `sourceNode`: The source node.
- `destinationNode`: The destination node.
- `format`: If not `NULL`, the engine uses this value for the format of the source audio node’s output bus. In all cases, the engine matches the format of the destination audio node’s input bus to the source audio node’s output bus.
- `tapBlock`: If not `NULL`, the source node’s [AUMIDIOutputEventBlock](../../audiotoolbox/aumidioutputeventblock.md) calls this block on the real-time thread. The host can tap the MIDI data of the source node through this block.

## See Also

### Managing MIDI Nodes

- [connectMIDI(\_:to:format:eventListProvider:)](connectmidi%28__to_format_eventlistprovider_%29-8tmk8.md)
- [connectMIDI(\_:to:format:eventListProvider:)](connectmidi%28__to_format_eventlistprovider_%29-35k1c.md)
- [connectMIDI(\_:to:format:eventListBlock:)](connectmidi%28__to_format_eventlistblock_%29-73cd1.md): Deprecated. Establishes a MIDI connection between two nodes.
- [connectMIDI(\_:to:format:eventListBlock:)](connectmidi%28__to_format_eventlistblock_%29-7qtd5.md): Deprecated. Establishes a MIDI connection between a source node and multiple destination nodes.
- [disconnectMIDI(\_:from:)](disconnectmidi%28__from_%29-1kssy.md): Removes a MIDI connection between two nodes.
- [disconnectMIDI(\_:from:)](disconnectmidi%28__from_%29-7oaab.md): Removes a MIDI connection between one source node and multiple destination nodes.
- [disconnectMIDIInput(\_:)](disconnectmidiinput%28__%29.md): Disconnects all input MIDI connections from a node.
- [disconnectMIDIOutput(\_:)](disconnectmidioutput%28__%29.md): Disconnects all output MIDI connections from a node.
- [connectMIDI(\_:to:format:block:)](connectmidi%28__to_format_block_%29-666bc.md): Deprecated. Establishes a MIDI-only connection between a source node and multiple destination nodes.

# connectMIDI:to:format:block: (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ (deprecated in 16.0) · iPadOS 13.0+ (deprecated in 16.0) · Mac Catalyst 13.1+ (deprecated in 16.0) · macOS 10.14+ (deprecated in 13.0) · tvOS 12.0+ (deprecated in 16.0) · visionOS 1.0+ (deprecated in 1.0)

Establishes a MIDI-only connection between two nodes.

> Use [connectMIDI:to:format:eventListBlock:](connectmidi%28__to_format_eventlistblock_%29-73cd1.md) instead.

## Declaration

```objectivec
- (void) connectMIDI:(AVAudioNode *) sourceNode to:(AVAudioNode *) destinationNode format:(AVAudioFormat *) format block:(AUMIDIOutputEventBlock) tapBlock;
```

## Parameters

- `sourceNode`: The source node.
- `destinationNode`: The destination node.
- `format`: If not `NULL`, the engine uses this value for the format of the source audio node’s output bus. In all cases, the engine matches the format of the destination audio node’s input bus to the source audio node’s output bus.
- `tapBlock`: If not `NULL`, the source node’s [AUMIDIOutputEventBlock](../../audiotoolbox/aumidioutputeventblock.md) calls this block on the real-time thread. The host can tap the MIDI data of the source node through this block.

## See Also

### Managing MIDI Nodes

- [connectMIDI:to:format:eventListProvider:](connectmidi%28__to_format_eventlistprovider_%29-8tmk8.md)
- [connectMIDI:toNodes:format:eventListProvider:](connectmidi%28__to_format_eventlistprovider_%29-35k1c.md)
- [connectMIDI:to:format:eventListBlock:](connectmidi%28__to_format_eventlistblock_%29-73cd1.md): Deprecated. Establishes a MIDI connection between two nodes.
- [connectMIDI:toNodes:format:eventListBlock:](connectmidi%28__to_format_eventlistblock_%29-7qtd5.md): Deprecated. Establishes a MIDI connection between a source node and multiple destination nodes.
- [disconnectMIDI:from:](disconnectmidi%28__from_%29-1kssy.md): Removes a MIDI connection between two nodes.
- [disconnectMIDI:fromNodes:](disconnectmidi%28__from_%29-7oaab.md): Removes a MIDI connection between one source node and multiple destination nodes.
- [disconnectMIDIInput:](disconnectmidiinput%28__%29.md): Disconnects all input MIDI connections from a node.
- [disconnectMIDIOutput:](disconnectmidioutput%28__%29.md): Disconnects all output MIDI connections from a node.
- [connectMIDI:toNodes:format:block:](connectmidi%28__to_format_block_%29-666bc.md): Deprecated. Establishes a MIDI-only connection between a source node and multiple destination nodes.
