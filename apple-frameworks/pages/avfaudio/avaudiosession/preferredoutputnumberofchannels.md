> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudiosession/preferredoutputnumberofchannels](https://developer.apple.com/documentation/avfaudio/avaudiosession/preferredoutputnumberofchannels)

# preferredOutputNumberOfChannels (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

The preferred number of output channels for the current route.

## Declaration

```swift
var preferredOutputNumberOfChannels: Int { get }
```

<a id="Discussion"></a>

## Discussion

The value of this property indicates the preferred number of output channels selected using the [setPreferredOutputNumberOfChannels(\_:)](setpreferredoutputnumberofchannels%28__%29.md) method.

To determine the actual number of channels, query the [outputNumberOfChannels](outputnumberofchannels.md) property.

## See Also

### Setting the number of output channels

- [setPreferredOutputNumberOfChannels(\_:)](setpreferredoutputnumberofchannels%28__%29.md): Sets the preferred number of output channels for the current route.
- [outputNumberOfChannels](outputnumberofchannels.md): The number of audio output channels.
- [maximumOutputNumberOfChannels](maximumoutputnumberofchannels.md): The maximum number of output channels available for the current audio route.

# preferredOutputNumberOfChannels (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

The preferred number of output channels for the current route.

## Declaration

```objectivec
@property (readonly) NSInteger preferredOutputNumberOfChannels;
```

<a id="Discussion"></a>

## Discussion

The value of this property indicates the preferred number of output channels selected using the [setPreferredOutputNumberOfChannels:error:](setpreferredoutputnumberofchannels%28__%29.md) method.

To determine the actual number of channels, query the [outputNumberOfChannels](outputnumberofchannels.md) property.

## See Also

### Setting the number of output channels

- [setPreferredOutputNumberOfChannels:error:](setpreferredoutputnumberofchannels%28__%29.md): Sets the preferred number of output channels for the current route.
- [outputNumberOfChannels](outputnumberofchannels.md): The number of audio output channels.
- [maximumOutputNumberOfChannels](maximumoutputnumberofchannels.md): The maximum number of output channels available for the current audio route.
