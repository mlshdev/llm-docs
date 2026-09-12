> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreaudiokit/auaudiounitviewconfiguration](https://developer.apple.com/documentation/coreaudiokit/auaudiounitviewconfiguration)

# AUAudioUnitViewConfiguration (Swift)

**Framework:** CoreAudioKit  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · visionOS 1.0+

A configuration object that describes how to present the audio unit’s user interface.

## Declaration

```swift
class AUAudioUnitViewConfiguration
```

## Topics

### Creating a Configuration

- [init(width:height:hostHasController:)](auaudiounitviewconfiguration/init%28width_height_hosthascontroller_%29.md): Creates a new configuration object.

### Accessing Settings

- [width](auaudiounitviewconfiguration/width.md): The configured width.
- [height](auaudiounitviewconfiguration/height.md): The configured height.
- [hostHasController](auaudiounitviewconfiguration/hosthascontroller.md): A Boolean value that indicates whether the host shows its own control surface in this view configuration.

### Initializers

- [init(coder:)](auaudiounitviewconfiguration/init%28coder_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Audio Units

- [AUViewController](auviewcontroller.md): The base class to extend when creating a custom user interface for an audio unit.
- [AUGenericView](augenericview.md): A view that provides a generic user interface for a Cocoa audio unit.
- [AUPannerView](aupannerview.md): A view that provides a specialized user interface for a Cocoa-based panner audio unit.
- [AUCustomViewPersistentData](aucustomviewpersistentdata.md): A protocol that defines the methods an Audio Unit host calls to manage view data.

# AUAudioUnitViewConfiguration (Objective-C)

**Framework:** CoreAudioKit  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · visionOS 1.0+

A configuration object that describes how to present the audio unit’s user interface.

## Declaration

```objectivec
@interface AUAudioUnitViewConfiguration : NSObject
```

## Topics

### Creating a Configuration

- [initWithWidth:height:hostHasController:](auaudiounitviewconfiguration/init%28width_height_hosthascontroller_%29.md): Creates a new configuration object.

### Accessing Settings

- [width](auaudiounitviewconfiguration/width.md): The configured width.
- [height](auaudiounitviewconfiguration/height.md): The configured height.
- [hostHasController](auaudiounitviewconfiguration/hosthascontroller.md): A Boolean value that indicates whether the host shows its own control surface in this view configuration.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Audio Units

- [AUViewController](auviewcontroller.md): The base class to extend when creating a custom user interface for an audio unit.
- [AUViewControllerBase](auviewcontrollerbase.md): A type definition that indicates the the platform’s Audio Unit view controller base class.
- [AUGenericView](augenericview.md): A view that provides a generic user interface for a Cocoa audio unit.
- [AUPannerView](aupannerview.md): A view that provides a specialized user interface for a Cocoa-based panner audio unit.
- [AUCustomViewPersistentData](aucustomviewpersistentdata.md): A protocol that defines the methods an Audio Unit host calls to manage view data.
