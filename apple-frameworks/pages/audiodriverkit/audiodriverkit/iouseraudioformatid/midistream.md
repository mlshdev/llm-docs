> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiodriverkit/audiodriverkit/iouseraudioformatid/midistream](https://developer.apple.com/documentation/audiodriverkit/audiodriverkit/iouseraudioformatid/midistream)

# MIDIStream

**Interface language:** Objective-C

**Framework:** AudioDriverKit  
**Kind:** Enumeration Case  
**Availability:** DriverKit 21.0+

A format for a stream of MIDI packet lists.

## Declaration

```objectivec
MIDIStream
```

<a id="Discussion"></a>

## Discussion

This format describes a stream of [MIDIPacketList](../../../coremidi/midipacketlist.md) instances where the time stamps in the [MIDIPacketList](../../../coremidi/midipacketlist.md) are sample offsets in the stream. The [mSampleRate](../iouseraudiostreambasicdescription/msamplerate.md) field describes how the stream passes time. This allows an Audio Unit that receives or generates this stream to define the time for any MIDI event within this list. It does so by using the sample rate, the number of frames it renders and the sample offsets within the [MIDIPacketList](../../../coremidi/midipacketlist.md).

This format uses no flags.

## See Also

### Non-Sample Formats

- [ParameterValueStream](parametervaluestream.md): A format for a side-chain of 32-bit floating-point data.
- [TimeCode](timecode.md): A format for a stream of time stamps.
