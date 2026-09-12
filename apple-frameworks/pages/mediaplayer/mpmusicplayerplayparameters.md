> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediaplayer/mpmusicplayerplayparameters](https://developer.apple.com/documentation/mediaplayer/mpmusicplayerplayparameters)

# MPMusicPlayerPlayParameters (Swift)

**Framework:** Media Player  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · tvOS 14.0+ · visionOS 1.0+

The MusicKit parameters that describe items to play.

## Declaration

```swift
class MPMusicPlayerPlayParameters
```

## Topics

### Creating the play parameters

- [init(dictionary:)](mpmusicplayerplayparameters/init%28dictionary_%29.md): Returns a new play parameters object using information from MusicKit.

### Accessing the play parameters

- [dictionary](mpmusicplayerplayparameters/dictionary.md): The information returned from a MusicKit query and stored in a play parameters object.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Creating a new play parameters queue descriptor

- [init(playParametersQueue:)](mpmusicplayerplayparametersqueuedescriptor/init%28playparametersqueue_%29.md): Creates a new queue descriptor using the designated queue of play parameters.

# MPMusicPlayerPlayParameters (Objective-C)

**Framework:** Media Player  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · tvOS 14.0+ · visionOS 1.0+

The MusicKit parameters that describe items to play.

## Declaration

```objectivec
@interface MPMusicPlayerPlayParameters : NSObject
```

## Topics

### Creating the play parameters

- [initWithDictionary:](mpmusicplayerplayparameters/init%28dictionary_%29.md): Returns a new play parameters object using information from MusicKit.

### Accessing the play parameters

- [dictionary](mpmusicplayerplayparameters/dictionary.md): The information returned from a MusicKit query and stored in a play parameters object.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Creating a new play parameters queue descriptor

- [initWithPlayParametersQueue:](mpmusicplayerplayparametersqueuedescriptor/init%28playparametersqueue_%29.md): Creates a new queue descriptor using the designated queue of play parameters.
