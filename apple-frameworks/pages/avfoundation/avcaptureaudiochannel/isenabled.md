> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcaptureaudiochannel/isenabled](https://developer.apple.com/documentation/avfoundation/avcaptureaudiochannel/isenabled)

# isEnabled (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** macOS 10.7+

A Boolean value that indicates whether the channel is in an enabled state.

## Declaration

```swift
var isEnabled: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

By default, a connection enables all audio channels that it exposes. You can set this value to [false](https://developer.apple.com/documentation/swift/false) to stop the flow of data for a particular channel.

## See Also

### Configuring a channel

- [volume](volume.md): The current volume (gain) of the channel.

# enabled (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** macOS 10.7+

A Boolean value that indicates whether the channel is in an enabled state.

## Declaration

```objectivec
@property (nonatomic, getter=isEnabled) BOOL enabled;
```

<a id="Discussion"></a>

## Discussion

By default, a connection enables all audio channels that it exposes. You can set this value to [false](https://developer.apple.com/documentation/swift/false) to stop the flow of data for a particular channel.

## See Also

### Configuring a channel

- [volume](volume.md): The current volume (gain) of the channel.
