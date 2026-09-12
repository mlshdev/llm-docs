> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreaudiotypes/audiostreampacketdependencydescription](https://developer.apple.com/documentation/coreaudiotypes/audiostreampacketdependencydescription)

# AudioStreamPacketDependencyDescription (Swift)

**Framework:** Core Audio Types  
**Kind:** Structure  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

## Declaration

```swift
struct AudioStreamPacketDependencyDescription
```

<a id="overview"></a>

## Overview

A structure to provide a description of the dependencies of one audio packet on other audio packets.

```
                1 if the packet is independently decodable, 0 otherwise.
```

```
                The count of packets that must be decoded after this packet in order to refresh the decoder,
                if the packet is independently decodable.  This value should be ignored if
                ``mIsIndependentlyDecodable`` is 0.
```

```
                Currently unused.
```

```
                Reserved for future use.
```

For independently decodable packets, the [mPreRollCount](audiostreampacketdependencydescription/mprerollcount.md) indicates how many additional packets need to be decoded after this packet in order for the decoder to start returning optimal output, if this is the first packet decoded since the decoder was initialized.

```
For example, if this packet is packet #123 of some given packet stream, and ``mIsIndependentlyDecodable``
is 0, or ``mIsIndependentlyDecodable`` is 1 and ``mPreRollCount`` is non-zero, and the client desires optimal
output starting with the output corresponding with packet #123 (because for example the client
is an audio player whose user seeks to a starting playback position corresponding with packet #123),
the client would scan back, starting at packet #122, searching for an independently decodable
packet with a preroll not intersecting packet #123.  If for packet #122 ``mIsIndependentlyDecodable``
is 0, or ``mIsIndependentlyDecodable`` is 1 but ``mPreRollCount`` is 2 or more, the client would still not
get optimal output for packet #123 if starting here, so the client continues to scan back.
If for packet #121 ``mIsIndependentlyDecodable`` is 1 and ``mPreRollCount`` is 2 or less, the client would
start decoding from this point, but discard the output equivalent of the two extra input packets
(desired first output packet - actual first decoded packet, or 122 - 120 == 2).
```

## Topics

### Initializers

- [init()](audiostreampacketdependencydescription/init%28%29.md)
- [init(mIsIndependentlyDecodable:mPreRollCount:mFlags:mReserved:)](audiostreampacketdependencydescription/init%28misindependentlydecodable_mprerollcount_mflags_mreserved_%29.md)

### Instance Properties

- [mFlags](audiostreampacketdependencydescription/mflags.md)
- [mIsIndependentlyDecodable](audiostreampacketdependencydescription/misindependentlydecodable.md)
- [mPreRollCount](audiostreampacketdependencydescription/mprerollcount.md)
- [mReserved](audiostreampacketdependencydescription/mreserved.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

# AudioStreamPacketDependencyDescription (Objective-C)

**Framework:** Core Audio Types  
**Kind:** Structure  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

## Declaration

```objectivec
struct AudioStreamPacketDependencyDescription;
```

<a id="overview"></a>

## Overview

A structure to provide a description of the dependencies of one audio packet on other audio packets.

```
                1 if the packet is independently decodable, 0 otherwise.
```

```
                The count of packets that must be decoded after this packet in order to refresh the decoder,
                if the packet is independently decodable.  This value should be ignored if
                ``mIsIndependentlyDecodable`` is 0.
```

```
                Currently unused.
```

```
                Reserved for future use.
```

For independently decodable packets, the [mPreRollCount](audiostreampacketdependencydescription/mprerollcount.md) indicates how many additional packets need to be decoded after this packet in order for the decoder to start returning optimal output, if this is the first packet decoded since the decoder was initialized.

```
For example, if this packet is packet #123 of some given packet stream, and ``mIsIndependentlyDecodable``
is 0, or ``mIsIndependentlyDecodable`` is 1 and ``mPreRollCount`` is non-zero, and the client desires optimal
output starting with the output corresponding with packet #123 (because for example the client
is an audio player whose user seeks to a starting playback position corresponding with packet #123),
the client would scan back, starting at packet #122, searching for an independently decodable
packet with a preroll not intersecting packet #123.  If for packet #122 ``mIsIndependentlyDecodable``
is 0, or ``mIsIndependentlyDecodable`` is 1 but ``mPreRollCount`` is 2 or more, the client would still not
get optimal output for packet #123 if starting here, so the client continues to scan back.
If for packet #121 ``mIsIndependentlyDecodable`` is 1 and ``mPreRollCount`` is 2 or less, the client would
start decoding from this point, but discard the output equivalent of the two extra input packets
(desired first output packet - actual first decoded packet, or 122 - 120 == 2).
```

## Topics

### Instance Properties

- [mFlags](audiostreampacketdependencydescription/mflags.md)
- [mIsIndependentlyDecodable](audiostreampacketdependencydescription/misindependentlydecodable.md)
- [mPreRollCount](audiostreampacketdependencydescription/mprerollcount.md)
- [mReserved](audiostreampacketdependencydescription/mreserved.md)
