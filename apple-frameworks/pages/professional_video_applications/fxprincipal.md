> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/professional_video_applications/fxprincipal](https://developer.apple.com/documentation/professional_video_applications/fxprincipal)

# FxPrincipal (Swift)

**Framework:** Professional Video Applications  
**Kind:** Class  
**Availability:** FxPlug 3.1+

Singleton object that starts your XPC service running and can return the embedded (in-process) component of your plug-in.

## Declaration

```swift
class FxPrincipal
```

## Mentioned In

- [Editing property lists for FxPlug plug-ins](../professional-video-applications/editing-property-lists-for-fxplug-plug-ins.md)

## Topics

### Type Methods

- [embeddedPrincipal()](fxprincipal/embeddedprincipal%28%29.md): Start your XPC service listening for connections from the host application.
- [startServicePrincipal()](fxprincipal/startserviceprincipal%28%29.md): Start your XPC service listening for connections from the host application.
- [startServicePrincipal(with:)](fxprincipal/startserviceprincipal%28with_%29.md): Start your XPC service listening for connections from the host application.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [FxXPCProtocol](fxxpcprotocol.md)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [PROXPCProtocol](proxpcprotocol.md)

## See Also

### Services

- [FxPrincipalAPI](fxprincipalapi.md): A protocol that provides an interface that the host application implements to retrieve an XPC proxy object for communicating with its XPC.
- [FxPrincipalDelegate](fxprincipaldelegate.md): A protocol that provides information about the host application that launched your XPC service.

# FxPrincipal (Objective-C)

**Framework:** Professional Video Applications  
**Kind:** Class

Singleton object that starts your XPC service running and can return the embedded (in-process) component of your plug-in.

## Declaration

```objectivec
@interface FxPrincipal : NSObject
```

## Mentioned In

- [Editing property lists for FxPlug plug-ins](../professional-video-applications/editing-property-lists-for-fxplug-plug-ins.md)

## Topics

### Type Methods

- [embeddedPrincipal](fxprincipal/embeddedprincipal%28%29.md): Start your XPC service listening for connections from the host application.
- [startServicePrincipal](fxprincipal/startserviceprincipal%28%29.md): Start your XPC service listening for connections from the host application.
- [startServicePrincipalWithDelegate:](fxprincipal/startserviceprincipal%28with_%29.md): Start your XPC service listening for connections from the host application.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [PROXPCProtocol](proxpcprotocol.md)

## See Also

### Services

- [FxPrincipalAPI](fxprincipalapi.md): A protocol that provides an interface that the host application implements to retrieve an XPC proxy object for communicating with its XPC.
- [FxPrincipalDelegate](fxprincipaldelegate.md): A protocol that provides information about the host application that launched your XPC service.
