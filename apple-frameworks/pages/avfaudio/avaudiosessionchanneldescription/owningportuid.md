> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudiosessionchanneldescription/owningportuid](https://developer.apple.com/documentation/avfaudio/avaudiosessionchanneldescription/owningportuid)

# owningPortUID (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The unique identifier (UID) for this channel’s owning port.

## Declaration

```swift
var owningPortUID: String { get }
```

<a id="Discussion"></a>

## Discussion

You can use the value of this property along with the value of the [channelNumber](channelnumber.md) property to communicate with specific hardware channels.

## See Also

### Getting the Channel Information

- [channelName](channelname.md): The descriptive name for the channel.
- [channelNumber](channelnumber.md): The index of this channel in its owning port’s array of channels.
- [channelLabel](channellabel.md): A description of the physical location of this channel.

# owningPortUID (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The unique identifier (UID) for this channel’s owning port.

## Declaration

```objectivec
@property (nonatomic, readonly) NSString * owningPortUID;
```

<a id="Discussion"></a>

## Discussion

You can use the value of this property along with the value of the [channelNumber](channelnumber.md) property to communicate with specific hardware channels.

## See Also

### Getting the Channel Information

- [channelName](channelname.md): The descriptive name for the channel.
- [channelNumber](channelnumber.md): The index of this channel in its owning port’s array of channels.
- [channelLabel](channellabel.md): A description of the physical location of this channel.
