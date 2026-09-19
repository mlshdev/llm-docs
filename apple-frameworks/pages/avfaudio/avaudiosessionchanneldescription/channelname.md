> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/avfaudio/avaudiosessionchanneldescription/channelname

# channelName (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The descriptive name for the channel.

## Declaration

```swift
var channelName: String { get }
```

## See Also

### Getting the Channel Information

- [channelNumber](channelnumber.md): The index of this channel in its owning port’s array of channels.
- [owningPortUID](owningportuid.md): The unique identifier (UID) for this channel’s owning port.
- [channelLabel](channellabel.md): A description of the physical location of this channel.

# channelName (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The descriptive name for the channel.

## Declaration

```objectivec
@property (nonatomic, readonly) NSString * channelName;
```

## See Also

### Getting the Channel Information

- [channelNumber](channelnumber.md): The index of this channel in its owning port’s array of channels.
- [owningPortUID](owningportuid.md): The unique identifier (UID) for this channel’s owning port.
- [channelLabel](channellabel.md): A description of the physical location of this channel.
