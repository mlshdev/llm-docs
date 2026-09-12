> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quartzcore/caremotelayerclient](https://developer.apple.com/documentation/quartzcore/caremotelayerclient)

# CARemoteLayerClient (Swift)

**Framework:** Core Animation  
**Kind:** Class  
**Availability:** Mac Catalyst 13.1+ · macOS 10.7+

A legacy class for cross-process rendering.

## Declaration

```swift
class CARemoteLayerClient
```

<a id="overview"></a>

## Overview

`CARemoteLaterClient` is a legacy class for cross-process rendering. [IOSurfaceCreateMachPort(\_:)](../iosurface/iosurfacecreatemachport%28__%29.md) and [IOSurfaceCreateXPCObject(\_:)](../iosurface/iosurfacecreatexpcobject%28__%29.md), available with [IOSurface](../iosurface/iosurface.md), offer an improved way to perform cross-process rendering.

## Topics

### Creating a Client

- [init(serverPort:)](caremotelayerclient/init%28serverport_%29.md): Creates a layer client from a server port.

### Retrieving Client Properties

- [clientId](caremotelayerclient/clientid.md): The ID of the remote layer client.
- [layer](caremotelayerclient/layer.md): The layer associated with the remote client.

### Invalidating a Client

- [invalidate()](caremotelayerclient/invalidate%28%29.md): Invalidates a remote layer client.

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

- [CARemoteLayerServer](caremotelayerserver.md): A legacy class for cross-process rendering.

# CARemoteLayerClient (Objective-C)

**Framework:** Core Animation  
**Kind:** Class  
**Availability:** Mac Catalyst 13.1+ · macOS 10.7+

A legacy class for cross-process rendering.

## Declaration

```objectivec
@interface CARemoteLayerClient : NSObject
```

<a id="overview"></a>

## Overview

`CARemoteLaterClient` is a legacy class for cross-process rendering. [IOSurfaceCreateMachPort](../iosurface/iosurfacecreatemachport%28__%29.md) and [IOSurfaceCreateXPCObject](../iosurface/iosurfacecreatexpcobject%28__%29.md), available with [IOSurface](../iosurface/iosurface.md), offer an improved way to perform cross-process rendering.

## Topics

### Creating a Client

- [initWithServerPort:](caremotelayerclient/init%28serverport_%29.md): Creates a layer client from a server port.

### Retrieving Client Properties

- [clientId](caremotelayerclient/clientid.md): The ID of the remote layer client.
- [layer](caremotelayerclient/layer.md): The layer associated with the remote client.

### Invalidating a Client

- [invalidate](caremotelayerclient/invalidate%28%29.md): Invalidates a remote layer client.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Remote Display of Layer Content

- [CARemoteLayerServer](caremotelayerserver.md): A legacy class for cross-process rendering.
