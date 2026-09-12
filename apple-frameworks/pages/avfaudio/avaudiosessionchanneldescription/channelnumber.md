> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudiosessionchanneldescription/channelnumber](https://developer.apple.com/documentation/avfaudio/avaudiosessionchanneldescription/channelnumber)

# channelNumber (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The index of this channel in its owning port’s array of channels.

## Declaration

```swift
var channelNumber: Int { get }
```

<a id="Discussion"></a>

## Discussion

You can use the value in this property to identify the channel during audio routing. However, the value of this property isn’t guaranteed to persist across route changes.

## See Also

### Getting the Channel Information

- [channelName](channelname.md): The descriptive name for the channel.
- [owningPortUID](owningportuid.md): The unique identifier (UID) for this channel’s owning port.
- [channelLabel](channellabel.md): A description of the physical location of this channel.

# channelNumber (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The index of this channel in its owning port’s array of channels.

## Declaration

```objectivec
@property (nonatomic, readonly) NSUInteger channelNumber;
```

<a id="Discussion"></a>

## Discussion

You can use the value in this property to identify the channel during audio routing. However, the value of this property isn’t guaranteed to persist across route changes.

## See Also

### Getting the Channel Information

- [channelName](channelname.md): The descriptive name for the channel.
- [owningPortUID](owningportuid.md): The unique identifier (UID) for this channel’s owning port.
- [channelLabel](channellabel.md): A description of the physical location of this channel.
