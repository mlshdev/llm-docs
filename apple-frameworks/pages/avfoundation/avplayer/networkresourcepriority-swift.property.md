> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avplayer/networkresourcepriority-swift.property](https://developer.apple.com/documentation/avfoundation/avplayer/networkresourcepriority-swift.property)

# networkResourcePriority (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Indicates the priority of this player for network bandwidth resource distribution.

## Declaration

```swift
var networkResourcePriority: AVPlayer.NetworkResourcePriority { get set }
```

<a id="discussion"></a>

## Discussion

This value determines the priority of the player during network resource allocation among all other players within the same application process. The default value for this is AVPlayerNetworkResourcePriorityDefault.

## See Also

### Configuring the network resource priority

- [AVPlayer.NetworkResourcePriority](networkresourcepriority-swift.enum.md): This defines the network resource priority for a player.

# networkResourcePriority (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Indicates the priority of this player for network bandwidth resource distribution.

## Declaration

```objectivec
@property (nonatomic) AVPlayerNetworkResourcePriority networkResourcePriority;
```

<a id="discussion"></a>

## Discussion

This value determines the priority of the player during network resource allocation among all other players within the same application process. The default value for this is AVPlayerNetworkResourcePriorityDefault.

## See Also

### Configuring the network resource priority

- [AVPlayerNetworkResourcePriority](networkresourcepriority-swift.enum.md): This defines the network resource priority for a player.
