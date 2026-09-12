> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiodriverkit/audiodriverkit/iouseraudioreservedconfigchangeaction](https://developer.apple.com/documentation/audiodriverkit/audiodriverkit/iouseraudioreservedconfigchangeaction)

# IOUserAudioReservedConfigChangeAction

**Interface language:** Objective-C

**Framework:** AudioDriverKit  
**Kind:** Enumeration  
**Availability:** DriverKit 21.0+

Identifiers for object state changes that require a configuration change.

## Declaration

```objectivec
enum IOUserAudioReservedConfigChangeAction : uint64_t;
```

## Topics

### Configuration Change Identifiers

- [RingBufferFrameSize](iouseraudioreservedconfigchangeaction/ringbufferframesize.md): An indicator for a change to the ring buffer frame size.
- [SampleRate](iouseraudioreservedconfigchangeaction/samplerate.md): An indicator for a change to the sample rate.
- [StreamFormat](iouseraudioreservedconfigchangeaction/streamformat.md): An indicator for a change to the stream format.
