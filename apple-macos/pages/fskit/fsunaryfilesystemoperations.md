> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/fskit/fsunaryfilesystemoperations](https://developer.apple.com/documentation/fskit/fsunaryfilesystemoperations)

# FSUnaryFileSystemOperations (Swift)

**Framework:** FSKit  
**Kind:** Protocol  
**Availability:** macOS 15.4+

Operations performed by a unary file system.

## Declaration

```swift
protocol FSUnaryFileSystemOperations : NSObjectProtocol
```

<a id="overview"></a>

## Overview

Make sure your subclass of [FSUnaryFileSystem](fsunaryfilesystem.md) conforms to this protocol.

## Topics

### Loading and unloading resources

- [loadResource(resource:options:replyHandler:)](fsunaryfilesystemoperations/loadresource%28resource_options_replyhandler_%29.md): Requests that the file system load a resource and present it as a volume.
- [unloadResource(resource:options:replyHandler:)](fsunaryfilesystemoperations/unloadresource%28resource_options_replyhandler_%29.md): Requests that the file system unload the specified resource.
- [didFinishLoading()](fsunaryfilesystemoperations/didfinishloading%28%29.md): Notifies you that the system finished loading your file system extension.

### Probing resources

- [probeResource(resource:replyHandler:)](fsunaryfilesystemoperations/proberesource%28resource_replyhandler_%29.md): Requests that the file system probe the specified resource.
- [FSProbeResult](fsproberesult.md): An object that represents the results of a specific probe.

## Relationships

### Inherits From

- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

# FSUnaryFileSystemOperations (Objective-C)

**Framework:** FSKit  
**Kind:** Protocol  
**Availability:** macOS 15.4+

Operations performed by a unary file system.

## Declaration

```objectivec
@protocol FSUnaryFileSystemOperations <NSObject>
```

<a id="overview"></a>

## Overview

Make sure your subclass of [FSUnaryFileSystem](fsunaryfilesystem.md) conforms to this protocol.

## Topics

### Loading and unloading resources

- [loadResource:options:replyHandler:](fsunaryfilesystemoperations/loadresource%28resource_options_replyhandler_%29.md): Requests that the file system load a resource and present it as a volume.
- [unloadResource:options:replyHandler:](fsunaryfilesystemoperations/unloadresource%28resource_options_replyhandler_%29.md): Requests that the file system unload the specified resource.
- [didFinishLoading](fsunaryfilesystemoperations/didfinishloading%28%29.md): Notifies you that the system finished loading your file system extension.

### Probing resources

- [probeResource:replyHandler:](fsunaryfilesystemoperations/proberesource%28resource_replyhandler_%29.md): Requests that the file system probe the specified resource.
- [FSProbeResult](fsproberesult.md): An object that represents the results of a specific probe.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
