> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiodriverkit/audiodriverkit/iouseraudiostreambasicdescription/mbytesperframe](https://developer.apple.com/documentation/audiodriverkit/audiodriverkit/iouseraudiostreambasicdescription/mbytesperframe)

# mBytesPerFrame

**Interface language:** Objective-C

**Framework:** AudioDriverKit  
**Kind:** Instance Property  
**Availability:** DriverKit 21.0+

The byte count in each frame of data.

## Declaration

```objectivec
uint32_t mBytesPerFrame;
```

## See Also

### Accessing Packet and Frame Layout

- [mBytesPerPacket](mbytesperpacket.md): The byte count in each packet of data.
- [mFramesPerPacket](mframesperpacket.md): The number of sample frames in each packet of data.
- [mChannelsPerFrame](mchannelsperframe.md): The number of channels in each frame of data.
- [mBitsPerChannel](mbitsperchannel.md): The number of bits of sample data for each channel in a frame of data.
