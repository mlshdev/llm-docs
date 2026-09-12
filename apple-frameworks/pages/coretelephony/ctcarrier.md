> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coretelephony/ctcarrier](https://developer.apple.com/documentation/coretelephony/ctcarrier)

# CTCarrier (Swift)

**Framework:** Core Telephony  
**Kind:** Class  
**Availability:** iOS 4.0+ (deprecated in 16.0) · iPadOS 4.0+ (deprecated in 16.0) · Mac Catalyst 13.1+ (deprecated in 16.0)

Information about the user’s cellular service provider, such as its unique identifier and whether it allows VoIP calls on its network.

> Deprecated with no replacement

## Declaration

```swift
class CTCarrier
```

## Topics

### Getting Information About the Cellular Service Provider

- [allowsVOIP](ctcarrier/allowsvoip.md): Deprecated. Indicates if the carrier allows making VoIP calls on its network.
- [carrierName](ctcarrier/carriername.md): Deprecated. The name of the user’s home cellular service provider.
- [isoCountryCode](ctcarrier/isocountrycode.md): Deprecated. The ISO country code for the user’s cellular service provider.
- [mobileCountryCode](ctcarrier/mobilecountrycode.md): Deprecated. The mobile country code (MCC) for the user’s cellular service provider.
- [mobileNetworkCode](ctcarrier/mobilenetworkcode.md): Deprecated. The mobile network code for the user’s cellular service provider.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Deprecated

- [CTCall](ctcall.md): Deprecated. An object used to identify a cellular call and determine its state.
- [CTCallCenter](ctcallcenter.md): Deprecated. An object that provides a list of current cellular calls, and provides the ability to respond to state changes for calls.

# CTCarrier (Objective-C)

**Framework:** Core Telephony  
**Kind:** Class  
**Availability:** iOS 4.0+ (deprecated in 16.0) · iPadOS 4.0+ (deprecated in 16.0) · Mac Catalyst 13.1+ (deprecated in 16.0)

Information about the user’s cellular service provider, such as its unique identifier and whether it allows VoIP calls on its network.

> Deprecated with no replacement

## Declaration

```objectivec
@interface CTCarrier : NSObject
```

## Topics

### Getting Information About the Cellular Service Provider

- [allowsVOIP](ctcarrier/allowsvoip.md): Deprecated. Indicates if the carrier allows making VoIP calls on its network.
- [carrierName](ctcarrier/carriername.md): Deprecated. The name of the user’s home cellular service provider.
- [isoCountryCode](ctcarrier/isocountrycode.md): Deprecated. The ISO country code for the user’s cellular service provider.
- [mobileCountryCode](ctcarrier/mobilecountrycode.md): Deprecated. The mobile country code (MCC) for the user’s cellular service provider.
- [mobileNetworkCode](ctcarrier/mobilenetworkcode.md): Deprecated. The mobile network code for the user’s cellular service provider.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Deprecated

- [CTCall](ctcall.md): Deprecated. An object used to identify a cellular call and determine its state.
- [CTCallCenter](ctcallcenter.md): Deprecated. An object that provides a list of current cellular calls, and provides the ability to respond to state changes for calls.
