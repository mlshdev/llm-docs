> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudioengine/connectmidi(_:to:format:eventlistprovider:)-35k1c](https://developer.apple.com/documentation/avfaudio/avaudioengine/connectmidi(_:to:format:eventlistprovider:)-35k1c)

# connectMIDI(\_:to:format:eventListProvider:) (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

## Declaration

```swift
func connectMIDI(_ sourceNode: AVAudioNode, to destinationNodes: [AVAudioNode], format: AVAudioFormat?, eventListProvider tapBlock: AVMIDIEventListBlock? = nil)
```

## Parameters

- `sourceNode`: The source node.
- `destinationNodes`: An array of AVAudioNodes specifying destination nodes.
- `format`: If non-nil, the format of the source node’s output bus is set to this format. In all cases, the format of the source nodes’ output bus has to match with the destination nodes’ output bus format. Although the output bus of the source is not in use, the format needs to be set in order to be able to use the sample rate for MIDI event timing calculations.
- `tapBlock`: This block is called from the source node’s `AUMIDIOutputEventListBlock` on the realtime thread. The host can tap the MIDI data of the source node through this block.

<a id="discussion"></a>

## Discussion

Establish a MIDI only connection between a source node and multiple destination nodes.

Use this method to establish a MIDI only connection between a source node and multiple destination nodes.

The source node can only be a AVAudioUnit node of type `kAudioUnitType_MIDIProcessor`. The destination node types can be `kAudioUnitType_MusicDevice`, `kAudioUnitType_MusicEffect` or `kAudioUnitType_MIDIProcessor`.

MIDI connections made using this method are either one-to-one (when a single destination connection is specified) or one-to-many (when multiple connections are specified), but never many-to-one.

Note that any pre-existing connection involving the destination will be broken.

Any client installed block on the source node’s audio unit `AUMIDIOutputEventListBlock` will be overwritten when making the MIDI connection.

## See Also

### Managing MIDI Nodes

- [connectMIDI(\_:to:format:eventListProvider:)](connectmidi%28__to_format_eventlistprovider_%29-8tmk8.md)
- [connectMIDI(\_:to:format:eventListBlock:)](connectmidi%28__to_format_eventlistblock_%29-73cd1.md): Deprecated. Establishes a MIDI connection between two nodes.
- [connectMIDI(\_:to:format:eventListBlock:)](connectmidi%28__to_format_eventlistblock_%29-7qtd5.md): Deprecated. Establishes a MIDI connection between a source node and multiple destination nodes.
- [disconnectMIDI(\_:from:)](disconnectmidi%28__from_%29-1kssy.md): Removes a MIDI connection between two nodes.
- [disconnectMIDI(\_:from:)](disconnectmidi%28__from_%29-7oaab.md): Removes a MIDI connection between one source node and multiple destination nodes.
- [disconnectMIDIInput(\_:)](disconnectmidiinput%28__%29.md): Disconnects all input MIDI connections from a node.
- [disconnectMIDIOutput(\_:)](disconnectmidioutput%28__%29.md): Disconnects all output MIDI connections from a node.
- [connectMIDI(\_:to:format:block:)](connectmidi%28__to_format_block_%29-3bc13.md): Deprecated. Establishes a MIDI-only connection between two nodes.
- [connectMIDI(\_:to:format:block:)](connectmidi%28__to_format_block_%29-666bc.md): Deprecated. Establishes a MIDI-only connection between a source node and multiple destination nodes.

# connectMIDI:toNodes:format:eventListProvider: (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

## Declaration

```objectivec
- (void) connectMIDI:(AVAudioNode *) sourceNode toNodes:(NSArray<AVAudioNode *> *) destinationNodes format:(AVAudioFormat *) format eventListProvider:(AVMIDIEventListBlock) tapBlock;
```

## Parameters

- `sourceNode`: The source node.
- `destinationNodes`: An array of AVAudioNodes specifying destination nodes.
- `format`: If non-nil, the format of the source node’s output bus is set to this format. In all cases, the format of the source nodes’ output bus has to match with the destination nodes’ output bus format. Although the output bus of the source is not in use, the format needs to be set in order to be able to use the sample rate for MIDI event timing calculations.
- `tapBlock`: This block is called from the source node’s `AUMIDIOutputEventListBlock` on the realtime thread. The host can tap the MIDI data of the source node through this block.

<a id="discussion"></a>

## Discussion

Establish a MIDI only connection between a source node and multiple destination nodes.

Use this method to establish a MIDI only connection between a source node and multiple destination nodes.

The source node can only be a AVAudioUnit node of type `kAudioUnitType_MIDIProcessor`. The destination node types can be `kAudioUnitType_MusicDevice`, `kAudioUnitType_MusicEffect` or `kAudioUnitType_MIDIProcessor`.

MIDI connections made using this method are either one-to-one (when a single destination connection is specified) or one-to-many (when multiple connections are specified), but never many-to-one.

Note that any pre-existing connection involving the destination will be broken.

Any client installed block on the source node’s audio unit `AUMIDIOutputEventListBlock` will be overwritten when making the MIDI connection.

## See Also

### Managing MIDI Nodes

- [connectMIDI:to:format:eventListProvider:](connectmidi%28__to_format_eventlistprovider_%29-8tmk8.md)
- [connectMIDI:to:format:eventListBlock:](connectmidi%28__to_format_eventlistblock_%29-73cd1.md): Deprecated. Establishes a MIDI connection between two nodes.
- [connectMIDI:toNodes:format:eventListBlock:](connectmidi%28__to_format_eventlistblock_%29-7qtd5.md): Deprecated. Establishes a MIDI connection between a source node and multiple destination nodes.
- [disconnectMIDI:from:](disconnectmidi%28__from_%29-1kssy.md): Removes a MIDI connection between two nodes.
- [disconnectMIDI:fromNodes:](disconnectmidi%28__from_%29-7oaab.md): Removes a MIDI connection between one source node and multiple destination nodes.
- [disconnectMIDIInput:](disconnectmidiinput%28__%29.md): Disconnects all input MIDI connections from a node.
- [disconnectMIDIOutput:](disconnectmidioutput%28__%29.md): Disconnects all output MIDI connections from a node.
- [connectMIDI:to:format:block:](connectmidi%28__to_format_block_%29-3bc13.md): Deprecated. Establishes a MIDI-only connection between two nodes.
- [connectMIDI:toNodes:format:block:](connectmidi%28__to_format_block_%29-666bc.md): Deprecated. Establishes a MIDI-only connection between a source node and multiple destination nodes.
