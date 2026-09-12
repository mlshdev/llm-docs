> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avplayer/networkresourcepriority-swift.enum](https://developer.apple.com/documentation/avfoundation/avplayer/networkresourcepriority-swift.enum)

# AVPlayer.NetworkResourcePriority (Swift)

**Framework:** AVFoundation  
**Kind:** Enumeration  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

This defines the network resource priority for a player.

## Declaration

```swift
enum NetworkResourcePriority
```

## Topics

### Priorities

- [AVPlayer.NetworkResourcePriority.default](networkresourcepriority-swift.enum/default.md): The default priority level given to a player for loading network resources. Use this when the player requires an optimal level of network resources and streaming in high-quality resolution is ideal. Players with AVPlayerNetworkResourcePriorityHigh will take precedence over this player. This player will take precedence over players with AVPlayerNetworkResourcePriorityLow.
- [AVPlayer.NetworkResourcePriority.high](networkresourcepriority-swift.enum/high.md): Indicates a high priority level for loading network resources. Use this when the player requires a high level of network resources and streaming in high-quality resolution is crucial. This player will take precedence over other lower priority players.
- [AVPlayer.NetworkResourcePriority.low](networkresourcepriority-swift.enum/low.md): Indicates a low priority level for loading network resources. Use this when the player requires minimal network bandwidth and streaming in high-quality resolution is not crucial. Other players with higher priority will take precedence over this player.

### Initializers

- [init(rawValue:)](networkresourcepriority-swift.enum/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Configuring the network resource priority

- [networkResourcePriority](networkresourcepriority-swift.property.md): Indicates the priority of this player for network bandwidth resource distribution.

# AVPlayerNetworkResourcePriority (Objective-C)

**Framework:** AVFoundation  
**Kind:** Enumeration  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

This defines the network resource priority for a player.

## Declaration

```objectivec
enum AVPlayerNetworkResourcePriority : NSInteger;
```

## Topics

### Priorities

- [AVPlayerNetworkResourcePriorityDefault](networkresourcepriority-swift.enum/default.md): The default priority level given to a player for loading network resources. Use this when the player requires an optimal level of network resources and streaming in high-quality resolution is ideal. Players with AVPlayerNetworkResourcePriorityHigh will take precedence over this player. This player will take precedence over players with AVPlayerNetworkResourcePriorityLow.
- [AVPlayerNetworkResourcePriorityHigh](networkresourcepriority-swift.enum/high.md): Indicates a high priority level for loading network resources. Use this when the player requires a high level of network resources and streaming in high-quality resolution is crucial. This player will take precedence over other lower priority players.
- [AVPlayerNetworkResourcePriorityLow](networkresourcepriority-swift.enum/low.md): Indicates a low priority level for loading network resources. Use this when the player requires minimal network bandwidth and streaming in high-quality resolution is not crucial. Other players with higher priority will take precedence over this player.

## See Also

### Configuring the network resource priority

- [networkResourcePriority](networkresourcepriority-swift.property.md): Indicates the priority of this player for network bandwidth resource distribution.
