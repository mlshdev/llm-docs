> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/skoverlay/configuration-swift.class](https://developer.apple.com/documentation/storekit/skoverlay/configuration-swift.class)

# SKOverlay.Configuration (Swift)

**Framework:** StoreKit  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · visionOS 1.0+

The abstract superclass for all classes that represent an overlay’s attributes.

## Declaration

```swift
class Configuration
```

## Relationships

### Inherits From

- [NSObject](../../objectivec/nsobject-swift.class.md)

### Inherited By

- [SKOverlay.AppClipConfiguration](appclipconfiguration.md)
- [SKOverlay.AppConfiguration](appconfiguration.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../../objectivec/nsobjectprotocol.md)

## See Also

### Creating an overlay

- [init(configuration:)](init%28configuration_%29.md): Creates an overlay you use to recommend another app on the App Store.
- [configuration](configuration-swift.property.md): An overlay’s attributes; for example, its position on the screen.
- [SKOverlay.AppConfiguration](appconfiguration.md): An object that represents the attributes of an overlay you use to recommend another app on the App Store.
- [SKOverlay.AppClipConfiguration](appclipconfiguration.md): An object that represents the attributes of an overlay you use to recommend an App Clip’s corresponding full app.

# SKOverlayConfiguration (Objective-C)

**Framework:** StoreKit  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · visionOS 1.0+

The abstract superclass for all classes that represent an overlay’s attributes.

## Declaration

```objectivec
@interface SKOverlayConfiguration : NSObject
```

## Relationships

### Inherits From

- [NSObject](../../objectivec/nsobject-swift.class.md)

### Inherited By

- [SKOverlayAppClipConfiguration](appclipconfiguration.md)
- [SKOverlayAppConfiguration](appconfiguration.md)

## See Also

### Creating an overlay

- [initWithConfiguration:](init%28configuration_%29.md): Creates an overlay you use to recommend another app on the App Store.
- [configuration](configuration-swift.property.md): An overlay’s attributes; for example, its position on the screen.
- [SKOverlayAppConfiguration](appconfiguration.md): An object that represents the attributes of an overlay you use to recommend another app on the App Store.
- [SKOverlayAppClipConfiguration](appclipconfiguration.md): An object that represents the attributes of an overlay you use to recommend an App Clip’s corresponding full app.
