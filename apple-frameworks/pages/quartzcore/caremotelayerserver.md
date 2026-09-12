> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quartzcore/caremotelayerserver](https://developer.apple.com/documentation/quartzcore/caremotelayerserver)

# CARemoteLayerServer (Swift)

**Framework:** Core Animation  
**Kind:** Class  
**Availability:** Mac Catalyst 13.1+ · macOS 10.7+

A legacy class for cross-process rendering.

## Declaration

```swift
class CARemoteLayerServer
```

<a id="overview"></a>

## Overview

`CARemoteLaterServer` is a legacy class for cross-process rendering. [IOSurfaceCreateMachPort(\_:)](../iosurface/iosurfacecreatemachport%28__%29.md) and [IOSurfaceCreateXPCObject(\_:)](../iosurface/iosurfacecreatexpcobject%28__%29.md), available with [IOSurface](../iosurface/iosurface.md), offer an improved way to perform cross-process rendering.

## Topics

### Creating a Server

- [serverPort](caremotelayerserver/serverport.md): The port number of the server.

### Getting a Server Instance

- [shared()](caremotelayerserver/shared%28%29.md): Returns the (singleton) instance of the shared remote layer server.

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

### Remote Display of Layer Content

- [CARemoteLayerClient](caremotelayerclient.md): A legacy class for cross-process rendering.

# CARemoteLayerServer (Objective-C)

**Framework:** Core Animation  
**Kind:** Class  
**Availability:** Mac Catalyst 13.1+ · macOS 10.7+

A legacy class for cross-process rendering.

## Declaration

```objectivec
@interface CARemoteLayerServer : NSObject
```

<a id="overview"></a>

## Overview

`CARemoteLaterServer` is a legacy class for cross-process rendering. [IOSurfaceCreateMachPort](../iosurface/iosurfacecreatemachport%28__%29.md) and [IOSurfaceCreateXPCObject](../iosurface/iosurfacecreatexpcobject%28__%29.md), available with [IOSurface](../iosurface/iosurface.md), offer an improved way to perform cross-process rendering.

## Topics

### Creating a Server

- [serverPort](caremotelayerserver/serverport.md): The port number of the server.

### Getting a Server Instance

- [sharedServer](caremotelayerserver/shared%28%29.md): Returns the (singleton) instance of the shared remote layer server.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Remote Display of Layer Content

- [CARemoteLayerClient](caremotelayerclient.md): A legacy class for cross-process rendering.
