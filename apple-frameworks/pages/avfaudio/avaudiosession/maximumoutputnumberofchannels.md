> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/avfaudio/avaudiosession/maximumoutputnumberofchannels

# maximumOutputNumberOfChannels (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The maximum number of output channels available for the current audio route.

## Declaration

```swift
var maximumOutputNumberOfChannels: Int { get }
```

## See Also

### Setting the number of output channels

- [preferredOutputNumberOfChannels](preferredoutputnumberofchannels.md): The preferred number of output channels for the current route.
- [setPreferredOutputNumberOfChannels(\_:)](setpreferredoutputnumberofchannels%28__%29.md): Sets the preferred number of output channels for the current route.
- [outputNumberOfChannels](outputnumberofchannels.md): The number of audio output channels.

# maximumOutputNumberOfChannels (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The maximum number of output channels available for the current audio route.

## Declaration

```objectivec
@property (readonly) NSInteger maximumOutputNumberOfChannels;
```

## See Also

### Setting the number of output channels

- [preferredOutputNumberOfChannels](preferredoutputnumberofchannels.md): The preferred number of output channels for the current route.
- [setPreferredOutputNumberOfChannels:error:](setpreferredoutputnumberofchannels%28__%29.md): Sets the preferred number of output channels for the current route.
- [outputNumberOfChannels](outputnumberofchannels.md): The number of audio output channels.
