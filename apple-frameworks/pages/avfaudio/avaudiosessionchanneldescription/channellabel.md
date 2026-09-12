> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudiosessionchanneldescription/channellabel](https://developer.apple.com/documentation/avfaudio/avaudiosessionchanneldescription/channellabel)

# channelLabel (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A description of the physical location of this channel.

## Declaration

```swift
var channelLabel: AudioChannelLabel { get }
```

## See Also

### Getting the Channel Information

- [channelName](channelname.md): The descriptive name for the channel.
- [channelNumber](channelnumber.md): The index of this channel in its owning port’s array of channels.
- [owningPortUID](owningportuid.md): The unique identifier (UID) for this channel’s owning port.

# channelLabel (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A description of the physical location of this channel.

## Declaration

```objectivec
@property (nonatomic, readonly) AudioChannelLabel channelLabel;
```

## See Also

### Getting the Channel Information

- [channelName](channelname.md): The descriptive name for the channel.
- [channelNumber](channelnumber.md): The index of this channel in its owning port’s array of channels.
- [owningPortUID](owningportuid.md): The unique identifier (UID) for this channel’s owning port.
