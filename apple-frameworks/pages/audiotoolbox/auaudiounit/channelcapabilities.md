> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/auaudiounit/channelcapabilities](https://developer.apple.com/documentation/audiotoolbox/auaudiounit/channelcapabilities)

# channelCapabilities (Swift)

**Framework:** Audio Toolbox  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Expresses valid combinations of input and output channels.

## Declaration

```swift
var channelCapabilities: [NSNumber]? { get }
```

<a id="Discussion"></a>

## Discussion

Array elements are [NSNumber](../../foundation/nsnumber.md) values containing integers.

The array index alternates between input and output counts, in ascending order of input/output channels—for example: \[0\] = first input count, \[1\] = first output count, \[2\] = second input count, \[3\] = second output count, etc.

Positive array values specify the number of input and/or output channels supported.

Negative array values have particular meanings. An input/output value pair of `(-1, -1)` (i.e. \[0\] = -1, \[1\] = -1) indicates that any number of channels are supported, as long as they are the same number for both input and output. An input/output value pair combination of `-1` and `-2` (e.g. \[0\] = -1, \[1\] = -2) also indicates that any number of channels are supported, but without the requirement that the input and output counts are the same. A negative value less than `-2` (e.g. \[0\] = -16) specifies a total number of channels across every bus in that scope, regardless of how many channels are set on any particular bus.

An array value of `0` (e.g. \[0\] = 0) specifies that the input/output channel is not applicable (though typically only used for input channels).

The table below shows a sample selection of valid input and output channel combinations:

| Array Index | Integer Value | Meaning |
| --- | --- | --- |
| \[0\] ![](https://developer.apple.com/images/com.apple.audiotoolbox/spacer.png) \[1\] | -1 ![](https://developer.apple.com/images/com.apple.audiotoolbox/spacer.png) -1 | First input/output count. ![](https://developer.apple.com/images/com.apple.audiotoolbox/spacer.png) Any number of input and output channels, requiring that the numbers match. This is the default case. |
| \[2\] ![](https://developer.apple.com/images/com.apple.audiotoolbox/spacer.png) \[3\] | -1 ![](https://developer.apple.com/images/com.apple.audiotoolbox/spacer.png) -2 | Second input/output count. ![](https://developer.apple.com/images/com.apple.audiotoolbox/spacer.png) Any number of input and output channels, without requiring that the numbers match. |
| \[4\] ![](https://developer.apple.com/images/com.apple.audiotoolbox/spacer.png) \[5\] | 2 ![](https://developer.apple.com/images/com.apple.audiotoolbox/spacer.png) 6 | Third input/output count. ![](https://developer.apple.com/images/com.apple.audiotoolbox/spacer.png) Exactly two input channels, exactly six output channels. |
| \[6\] ![](https://developer.apple.com/images/com.apple.audiotoolbox/spacer.png) \[7\] | -1 ![](https://developer.apple.com/images/com.apple.audiotoolbox/spacer.png) 2 | Fourth input/output count. ![](https://developer.apple.com/images/com.apple.audiotoolbox/spacer.png) Any number of input channels, exactly two output channels. |
| \[8\] ![](https://developer.apple.com/images/com.apple.audiotoolbox/spacer.png) \[9\] | 0 ![](https://developer.apple.com/images/com.apple.audiotoolbox/spacer.png) 1 | Fifth input/output count. ![](https://developer.apple.com/images/com.apple.audiotoolbox/spacer.png) No input channels, exactly one output channel. |
| \[10\] ![](https://developer.apple.com/images/com.apple.audiotoolbox/spacer.png) \[11\] | -4 ![](https://developer.apple.com/images/com.apple.audiotoolbox/spacer.png) -8 | Sixth input/output count. ![](https://developer.apple.com/images/com.apple.audiotoolbox/spacer.png) Up to four input channels, up to eight output channels. |

This version 3 property is bridged to the version 2 `kAudioUnitProperty_SupportedNumChannels` API.

## See Also

### Configuring the Channel Capabilities

- [channelMap](channelmap.md)
- [profileState(forCable:channel:)](profilestate%28forcable_channel_%29.md)
- [enable(\_:cable:onChannel:)](enable%28__cable_onchannel_%29.md)
- [disableProfile(\_:cable:onChannel:)](disableprofile%28__cable_onchannel_%29.md)
- [profileChangedBlock](profilechangedblock.md)

# channelCapabilities (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Expresses valid combinations of input and output channels.

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) NSArray<NSNumber *> * channelCapabilities;
```

```objectivec
@property (atomic, copy, readonly, nullable) NSArray<NSNumber *> * channelCapabilities;
```

<a id="Discussion"></a>

## Discussion

Array elements are [NSNumber](../../foundation/nsnumber.md) values containing integers.

The array index alternates between input and output counts, in ascending order of input/output channels—for example: \[0\] = first input count, \[1\] = first output count, \[2\] = second input count, \[3\] = second output count, etc.

Positive array values specify the number of input and/or output channels supported.

Negative array values have particular meanings. An input/output value pair of `(-1, -1)` (i.e. \[0\] = -1, \[1\] = -1) indicates that any number of channels are supported, as long as they are the same number for both input and output. An input/output value pair combination of `-1` and `-2` (e.g. \[0\] = -1, \[1\] = -2) also indicates that any number of channels are supported, but without the requirement that the input and output counts are the same. A negative value less than `-2` (e.g. \[0\] = -16) specifies a total number of channels across every bus in that scope, regardless of how many channels are set on any particular bus.

An array value of `0` (e.g. \[0\] = 0) specifies that the input/output channel is not applicable (though typically only used for input channels).

The table below shows a sample selection of valid input and output channel combinations:

| Array Index | Integer Value | Meaning |
| --- | --- | --- |
| \[0\] ![](https://developer.apple.com/images/com.apple.audiotoolbox/spacer.png) \[1\] | -1 ![](https://developer.apple.com/images/com.apple.audiotoolbox/spacer.png) -1 | First input/output count. ![](https://developer.apple.com/images/com.apple.audiotoolbox/spacer.png) Any number of input and output channels, requiring that the numbers match. This is the default case. |
| \[2\] ![](https://developer.apple.com/images/com.apple.audiotoolbox/spacer.png) \[3\] | -1 ![](https://developer.apple.com/images/com.apple.audiotoolbox/spacer.png) -2 | Second input/output count. ![](https://developer.apple.com/images/com.apple.audiotoolbox/spacer.png) Any number of input and output channels, without requiring that the numbers match. |
| \[4\] ![](https://developer.apple.com/images/com.apple.audiotoolbox/spacer.png) \[5\] | 2 ![](https://developer.apple.com/images/com.apple.audiotoolbox/spacer.png) 6 | Third input/output count. ![](https://developer.apple.com/images/com.apple.audiotoolbox/spacer.png) Exactly two input channels, exactly six output channels. |
| \[6\] ![](https://developer.apple.com/images/com.apple.audiotoolbox/spacer.png) \[7\] | -1 ![](https://developer.apple.com/images/com.apple.audiotoolbox/spacer.png) 2 | Fourth input/output count. ![](https://developer.apple.com/images/com.apple.audiotoolbox/spacer.png) Any number of input channels, exactly two output channels. |
| \[8\] ![](https://developer.apple.com/images/com.apple.audiotoolbox/spacer.png) \[9\] | 0 ![](https://developer.apple.com/images/com.apple.audiotoolbox/spacer.png) 1 | Fifth input/output count. ![](https://developer.apple.com/images/com.apple.audiotoolbox/spacer.png) No input channels, exactly one output channel. |
| \[10\] ![](https://developer.apple.com/images/com.apple.audiotoolbox/spacer.png) \[11\] | -4 ![](https://developer.apple.com/images/com.apple.audiotoolbox/spacer.png) -8 | Sixth input/output count. ![](https://developer.apple.com/images/com.apple.audiotoolbox/spacer.png) Up to four input channels, up to eight output channels. |

This version 3 property is bridged to the version 2 `kAudioUnitProperty_SupportedNumChannels` API.

## See Also

### Configuring the Channel Capabilities

- [channelMap](channelmap.md)
- [profileStateForCable:channel:](profilestate%28forcable_channel_%29.md)
- [enableProfile:cable:onChannel:error:](enable%28__cable_onchannel_%29.md)
- [disableProfile:cable:onChannel:error:](disableprofile%28__cable_onchannel_%29.md)
- [profileChangedBlock](profilechangedblock.md)
