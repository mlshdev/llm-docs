> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudiosession/inputnumberofchannels](https://developer.apple.com/documentation/avfaudio/avaudiosession/inputnumberofchannels)

# inputNumberOfChannels (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The number of audio input channels for the current route.

## Declaration

```swift
var inputNumberOfChannels: Int { get }
```

<a id="Discussion"></a>

## Discussion

You can observe changes to the value of this property by using key-value observing. For more information, see [Using Key-Value Observing in Swift](https://developer.apple.com/documentation/swift/using-key-value-observing-in-swift).

## See Also

### Setting the number of input channels

- [preferredInputNumberOfChannels](preferredinputnumberofchannels.md): The preferred number of input channels for the current route.
- [setPreferredInputNumberOfChannels(\_:)](setpreferredinputnumberofchannels%28__%29.md): Sets the preferred number of input channels for the current route.
- [maximumInputNumberOfChannels](maximuminputnumberofchannels.md): The maximum number of input channels available for the current audio route.

# inputNumberOfChannels (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The number of audio input channels for the current route.

## Declaration

```objectivec
@property (readonly) NSInteger inputNumberOfChannels;
```

<a id="Discussion"></a>

## Discussion

You can observe changes to the value of this property by using key-value observing. For more information, see [Using Key-Value Observing in Swift](https://developer.apple.com/documentation/swift/using-key-value-observing-in-swift).

## See Also

### Setting the number of input channels

- [preferredInputNumberOfChannels](preferredinputnumberofchannels.md): The preferred number of input channels for the current route.
- [setPreferredInputNumberOfChannels:error:](setpreferredinputnumberofchannels%28__%29.md): Sets the preferred number of input channels for the current route.
- [maximumInputNumberOfChannels](maximuminputnumberofchannels.md): The maximum number of input channels available for the current audio route.
