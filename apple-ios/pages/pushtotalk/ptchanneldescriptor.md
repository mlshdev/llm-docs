> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/pushtotalk/ptchanneldescriptor](https://developer.apple.com/documentation/pushtotalk/ptchanneldescriptor)

# PTChannelDescriptor (Swift)

**Framework:** Push to Talk  
**Kind:** Class  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+

An object that describes a channel.

## Declaration

```swift
class PTChannelDescriptor
```

## Mentioned In

- [Creating a Push to Talk app](creating-a-push-to-talk-app.md)

## Topics

### Creating a channel descriptor

- [init(name:image:)](ptchanneldescriptor/init%28name_image_%29.md): Creates a channel descriptor with the name and image you specify.

### Inspecting a channel descriptor

- [name](ptchanneldescriptor/name.md): The channel name that the system presents in the system user interface.
- [image](ptchanneldescriptor/image.md): The channel photo that the system presents in the user interface to represent the channel.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Channel restoration

- [PTChannelRestorationDelegate](ptchannelrestorationdelegate.md): A type that represents the channel restoration behavior.

# PTChannelDescriptor (Objective-C)

**Framework:** Push to Talk  
**Kind:** Class  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+

An object that describes a channel.

## Declaration

```objectivec
@interface PTChannelDescriptor : NSObject
```

## Mentioned In

- [Creating a Push to Talk app](creating-a-push-to-talk-app.md)

## Topics

### Creating a channel descriptor

- [initWithName:image:](ptchanneldescriptor/init%28name_image_%29.md): Creates a channel descriptor with the name and image you specify.

### Inspecting a channel descriptor

- [name](ptchanneldescriptor/name.md): The channel name that the system presents in the system user interface.
- [image](ptchanneldescriptor/image.md): The channel photo that the system presents in the user interface to represent the channel.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

## See Also

### Channel restoration

- [PTChannelRestorationDelegate](ptchannelrestorationdelegate.md): A type that represents the channel restoration behavior.
