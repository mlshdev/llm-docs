> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiodriverkit/audiodriverkit/iouseraudioformatid/parametervaluestream](https://developer.apple.com/documentation/audiodriverkit/audiodriverkit/iouseraudioformatid/parametervaluestream)

# ParameterValueStream

**Interface language:** Objective-C

**Framework:** AudioDriverKit  
**Kind:** Enumeration Case  
**Availability:** DriverKit 21.0+

A format for a side-chain of 32-bit floating-point data.

## Declaration

```objectivec
ParameterValueStream
```

<a id="Discussion"></a>

## Discussion

The data in this kind of stream flows to or from an Audio Unit to send a high density of parameter value control information. An Audio Unit typically runs a [ParameterValueStream](parametervaluestream.md) at the sample rate of the AudioUnit’s audio data. It can also use some integer divisor of this rate, such as a half or a third of the audio’s sample rate. The sample rate of the [IOUserAudioStreamBasicDescription](../iouseraudiostreambasicdescription.md) describes this relationship.

This format uses no flags.

## See Also

### Non-Sample Formats

- [MIDIStream](midistream.md): A format for a stream of MIDI packet lists.
- [TimeCode](timecode.md): A format for a stream of time stamps.
