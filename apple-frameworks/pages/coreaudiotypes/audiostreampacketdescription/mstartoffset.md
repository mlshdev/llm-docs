> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreaudiotypes/audiostreampacketdescription/mstartoffset](https://developer.apple.com/documentation/coreaudiotypes/audiostreampacketdescription/mstartoffset)

# mStartOffset (Swift)

**Framework:** Core Audio Types  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.2+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 3.0+

The number of bytes from the start of the buffer to the beginning of the packet.

## Declaration

```swift
var mStartOffset: Int64
```

<a id="Discussion"></a>

## Discussion

For example, if the data buffer contains 5 bytes of data, with one byte per packet, then the start offset for the last packet is 4. There are 4 bytes in the buffer before the start of the last packet.

## See Also

### Inspecting an audio stream packet description

- [mDataByteSize](mdatabytesize.md): The number of bytes in the packet.
- [mVariableFramesInPacket](mvariableframesinpacket.md): The number of sample frames of data in the packet.

# mStartOffset (Objective-C)

**Framework:** Core Audio Types  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

The number of bytes from the start of the buffer to the beginning of the packet.

## Declaration

```objectivec
SInt64 mStartOffset;
```

<a id="Discussion"></a>

## Discussion

For example, if the data buffer contains 5 bytes of data, with one byte per packet, then the start offset for the last packet is 4. There are 4 bytes in the buffer before the start of the last packet.

## See Also

### Inspecting an audio stream packet description

- [mDataByteSize](mdatabytesize.md): The number of bytes in the packet.
- [mVariableFramesInPacket](mvariableframesinpacket.md): The number of sample frames of data in the packet.
