> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudiosession/outputnumberofchannels](https://developer.apple.com/documentation/avfaudio/avaudiosession/outputnumberofchannels)

# outputNumberOfChannels (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The number of audio output channels.

## Declaration

```swift
var outputNumberOfChannels: Int { get }
```

<a id="Discussion"></a>

## Discussion

You can observe changes to the value of this property using key-value observice. For more information, see [Using Key-Value Observing in Swift](https://developer.apple.com/documentation/swift/using-key-value-observing-in-swift).

## See Also

### Setting the number of output channels

- [preferredOutputNumberOfChannels](preferredoutputnumberofchannels.md): The preferred number of output channels for the current route.
- [setPreferredOutputNumberOfChannels(\_:)](setpreferredoutputnumberofchannels%28__%29.md): Sets the preferred number of output channels for the current route.
- [maximumOutputNumberOfChannels](maximumoutputnumberofchannels.md): The maximum number of output channels available for the current audio route.

# outputNumberOfChannels (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The number of audio output channels.

## Declaration

```objectivec
@property (readonly) NSInteger outputNumberOfChannels;
```

<a id="Discussion"></a>

## Discussion

You can observe changes to the value of this property using key-value observice. For more information, see [Using Key-Value Observing in Swift](https://developer.apple.com/documentation/swift/using-key-value-observing-in-swift).

## See Also

### Setting the number of output channels

- [preferredOutputNumberOfChannels](preferredoutputnumberofchannels.md): The preferred number of output channels for the current route.
- [setPreferredOutputNumberOfChannels:error:](setpreferredoutputnumberofchannels%28__%29.md): Sets the preferred number of output channels for the current route.
- [maximumOutputNumberOfChannels](maximumoutputnumberofchannels.md): The maximum number of output channels available for the current audio route.
