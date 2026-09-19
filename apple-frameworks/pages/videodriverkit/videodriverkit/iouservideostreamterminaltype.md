> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/videodriverkit/videodriverkit/iouservideostreamterminaltype

# IOUserVideoStreamTerminalType

**Interface language:** Objective-C

**Framework:** VideoDriverKit  
**Kind:** Enumeration  
**Availability:** DriverKit 27.0+ beta

The terminal type of video stream.

## Declaration

```objectivec
enum IOUserVideoStreamTerminalType : uint32_t;
```

## Topics

### Terminal types

- [Line](iouservideostreamterminaltype/line.md): Beta. The identifier for a terminal type of a line level stream.
- [DigitalVideoInterface](iouservideostreamterminaltype/digitalvideointerface.md): Beta. The ID for a terminal type of stream from/to a digital audio interface as defined by ISO 60958 (aka SPDIF or AES/EBU).
- [Speaker](iouservideostreamterminaltype/speaker.md): Beta. The identifier for a terminal type of a speaker.
- [Headphones](iouservideostreamterminaltype/headphones.md): Beta. The identifier for a terminal type of headphones.
- [LFESpeaker](iouservideostreamterminaltype/lfespeaker.md): Beta. The identifier for a terminal type of a speaker for low frequency effects.
- [ReceiverSpeaker](iouservideostreamterminaltype/receiverspeaker.md): Beta. The identifier for a terminal type of a speaker on a telephone handset receiver.
- [Microphone](iouservideostreamterminaltype/microphone.md): Beta. The identifier for a terminal type of a microphone.
- [HeadsetMicrophone](iouservideostreamterminaltype/headsetmicrophone.md): Beta. The identifier for a terminal type of a microphone attached to an headset.
- [ReceiverMicrophone](iouservideostreamterminaltype/receivermicrophone.md): Beta. The identifier for a terminal type of a microphone on a telephone handset receiver.
- [TTY](iouservideostreamterminaltype/tty.md): Beta. The identifier for a terminal type of a device providing a TTY signal.
- [HDMI](iouservideostreamterminaltype/hdmi.md): Beta. The identifier for a terminal type of a stream from/to an HDMI port.
- [DisplayPort](iouservideostreamterminaltype/displayport.md): Beta. The identifier for a terminal type of a stream from/to an DisplayPort port.
- [Unknown](iouservideostreamterminaltype/unknown.md): Beta. The identifier used when the terminal type for the stream is not known.

## See Also

### Working with stream terminals

- [SetTerminalType](../iouservideostream/setterminaltype.md): Beta. Sets the terminal type of the stream.
- [GetTerminalType](../iouservideostream/getterminaltype.md): Beta. Gets the terminal type of the stream.
