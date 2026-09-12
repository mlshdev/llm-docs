> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/auaudiounit/messagechannel(for:)](https://developer.apple.com/documentation/audiotoolbox/auaudiounit/messagechannel(for:))

# messageChannel(for:) (Swift)

**Framework:** Audio Toolbox  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

Returns an object for bidirectional communication between an audio unit and its host.

## Declaration

```swift
func messageChannel(for channelName: String) -> any AUMessageChannel
```

## Parameters

- `channelName`: The name of the message channel the audio unit returns.

<a id="return-value"></a>

## Return Value

An object that conforms to [AUMessageChannel](../aumessagechannel.md).

<a id="Discussion"></a>

## Discussion

Message channels provide a way for custom data exchanges between an audio unit and its host. An audio unit may support multiple message channels.

The host manages the message channel object’s lifetime. Design message channel objects so they can outlive the audio unit that vended them.

## See Also

### Messaging Channels

- [AUMessageChannel](../aumessagechannel.md): A specification for a bidirectional communication message channel.

# messageChannelFor: (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

Returns an object for bidirectional communication between an audio unit and its host.

## Declaration

```objectivec
- (id<AUMessageChannel>) messageChannelFor:(NSString *) channelName;
```

## Parameters

- `channelName`: The name of the message channel the audio unit returns.

<a id="return-value"></a>

## Return Value

An object that conforms to [AUMessageChannel](../aumessagechannel.md).

<a id="Discussion"></a>

## Discussion

Message channels provide a way for custom data exchanges between an audio unit and its host. An audio unit may support multiple message channels.

The host manages the message channel object’s lifetime. Design message channel objects so they can outlive the audio unit that vended them.

## See Also

### Messaging Channels

- [AUMessageChannel](../aumessagechannel.md): A specification for a bidirectional communication message channel.
