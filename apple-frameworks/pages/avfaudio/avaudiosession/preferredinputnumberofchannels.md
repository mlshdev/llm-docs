> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudiosession/preferredinputnumberofchannels](https://developer.apple.com/documentation/avfaudio/avaudiosession/preferredinputnumberofchannels)

# preferredInputNumberOfChannels (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

The preferred number of input channels for the current route.

## Declaration

```swift
var preferredInputNumberOfChannels: Int { get }
```

<a id="Discussion"></a>

## Discussion

The value of this property indicates the number of channels selected using the [setPreferredInputNumberOfChannels(\_:)](setpreferredinputnumberofchannels%28__%29.md) method.

To determine the actual number of input channels, query the [inputNumberOfChannels](inputnumberofchannels.md) property.

## See Also

### Setting the number of input channels

- [setPreferredInputNumberOfChannels(\_:)](setpreferredinputnumberofchannels%28__%29.md): Sets the preferred number of input channels for the current route.
- [inputNumberOfChannels](inputnumberofchannels.md): The number of audio input channels for the current route.
- [maximumInputNumberOfChannels](maximuminputnumberofchannels.md): The maximum number of input channels available for the current audio route.

# preferredInputNumberOfChannels (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

The preferred number of input channels for the current route.

## Declaration

```objectivec
@property (readonly) NSInteger preferredInputNumberOfChannels;
```

<a id="Discussion"></a>

## Discussion

The value of this property indicates the number of channels selected using the [setPreferredInputNumberOfChannels:error:](setpreferredinputnumberofchannels%28__%29.md) method.

To determine the actual number of input channels, query the [inputNumberOfChannels](inputnumberofchannels.md) property.

## See Also

### Setting the number of input channels

- [setPreferredInputNumberOfChannels:error:](setpreferredinputnumberofchannels%28__%29.md): Sets the preferred number of input channels for the current route.
- [inputNumberOfChannels](inputnumberofchannels.md): The number of audio input channels for the current route.
- [maximumInputNumberOfChannels](maximuminputnumberofchannels.md): The maximum number of input channels available for the current audio route.
