> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreaudiotypes/audiostreampacketdescription/mvariableframesinpacket](https://developer.apple.com/documentation/coreaudiotypes/audiostreampacketdescription/mvariableframesinpacket)

# mVariableFramesInPacket (Swift)

**Framework:** Core Audio Types  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.2+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 3.0+

The number of sample frames of data in the packet.

## Declaration

```swift
var mVariableFramesInPacket: UInt32
```

<a id="Discussion"></a>

## Discussion

For formats with a constant number of frames per packet, this value is `0`.

## See Also

### Inspecting an audio stream packet description

- [mDataByteSize](mdatabytesize.md): The number of bytes in the packet.
- [mStartOffset](mstartoffset.md): The number of bytes from the start of the buffer to the beginning of the packet.

# mVariableFramesInPacket (Objective-C)

**Framework:** Core Audio Types  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

The number of sample frames of data in the packet.

## Declaration

```objectivec
UInt32 mVariableFramesInPacket;
```

<a id="Discussion"></a>

## Discussion

For formats with a constant number of frames per packet, this value is `0`.

## See Also

### Inspecting an audio stream packet description

- [mDataByteSize](mdatabytesize.md): The number of bytes in the packet.
- [mStartOffset](mstartoffset.md): The number of bytes from the start of the buffer to the beginning of the packet.
