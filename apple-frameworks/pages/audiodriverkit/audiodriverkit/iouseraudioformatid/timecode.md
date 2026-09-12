> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiodriverkit/audiodriverkit/iouseraudioformatid/timecode](https://developer.apple.com/documentation/audiodriverkit/audiodriverkit/iouseraudioformatid/timecode)

# TimeCode

**Interface language:** Objective-C

**Framework:** AudioDriverKit  
**Kind:** Enumeration Case  
**Availability:** DriverKit 21.0+

A format for a stream of time stamps.

## Declaration

```objectivec
TimeCode
```

<a id="Discussion"></a>

## Discussion

This format describes a stream of [IOAudioTimeStamp](../../../iokit/ioaudiotimestamp.md) valuess, using the [IOAudioTimeStamp](../../../iokit/ioaudiotimestamp.md) flags.

## See Also

### Non-Sample Formats

- [MIDIStream](midistream.md): A format for a stream of MIDI packet lists.
- [ParameterValueStream](parametervaluestream.md): A format for a side-chain of 32-bit floating-point data.
