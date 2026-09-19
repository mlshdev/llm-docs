> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/avfaudio/avaudiosession/maximuminputnumberofchannels

# maximumInputNumberOfChannels (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The maximum number of input channels available for the current audio route.

## Declaration

```swift
var maximumInputNumberOfChannels: Int { get }
```

## See Also

### Setting the number of input channels

- [preferredInputNumberOfChannels](preferredinputnumberofchannels.md): The preferred number of input channels for the current route.
- [setPreferredInputNumberOfChannels(\_:)](setpreferredinputnumberofchannels%28__%29.md): Sets the preferred number of input channels for the current route.
- [inputNumberOfChannels](inputnumberofchannels.md): The number of audio input channels for the current route.

# maximumInputNumberOfChannels (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The maximum number of input channels available for the current audio route.

## Declaration

```objectivec
@property (readonly) NSInteger maximumInputNumberOfChannels;
```

## See Also

### Setting the number of input channels

- [preferredInputNumberOfChannels](preferredinputnumberofchannels.md): The preferred number of input channels for the current route.
- [setPreferredInputNumberOfChannels:error:](setpreferredinputnumberofchannels%28__%29.md): Sets the preferred number of input channels for the current route.
- [inputNumberOfChannels](inputnumberofchannels.md): The number of audio input channels for the current route.
