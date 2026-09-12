> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/pushtotalk/ptchannelrestorationdelegate](https://developer.apple.com/documentation/pushtotalk/ptchannelrestorationdelegate)

# PTChannelRestorationDelegate (Swift)

**Framework:** Push to Talk  
**Kind:** Protocol  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+

A type that represents the channel restoration behavior.

## Declaration

```swift
protocol PTChannelRestorationDelegate : NSObjectProtocol
```

## Mentioned In

- [Creating a Push to Talk app](creating-a-push-to-talk-app.md)

## Topics

### Getting the channel descriptor

- [channelDescriptor(restoredChannelUUID:)](ptchannelrestorationdelegate/channeldescriptor%28restoredchanneluuid_%29.md): Tells your observer the system restored the channel.

## Relationships

### Inherits From

- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Channel restoration

- [PTChannelDescriptor](ptchanneldescriptor.md): An object that describes a channel.

# PTChannelRestorationDelegate (Objective-C)

**Framework:** Push to Talk  
**Kind:** Protocol  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+

A type that represents the channel restoration behavior.

## Declaration

```objectivec
@protocol PTChannelRestorationDelegate <NSObject>
```

## Mentioned In

- [Creating a Push to Talk app](creating-a-push-to-talk-app.md)

## Topics

### Getting the channel descriptor

- [channelDescriptorForRestoredChannelUUID:](ptchannelrestorationdelegate/channeldescriptor%28restoredchanneluuid_%29.md): Tells your observer the system restored the channel.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Channel restoration

- [PTChannelDescriptor](ptchanneldescriptor.md): An object that describes a channel.
