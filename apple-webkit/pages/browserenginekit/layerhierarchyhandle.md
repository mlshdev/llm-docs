> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/browserenginekit/layerhierarchyhandle](https://developer.apple.com/documentation/browserenginekit/layerhierarchyhandle)

# LayerHierarchyHandle (Swift)

**Framework:** BrowserEngineKit  
**Kind:** Class  
**Availability:** iOS 17.4+ · iPadOS 17.4+

A reference to a layer hierarchy that your app shares between processes.

## Declaration

```swift
class LayerHierarchyHandle
```

## Mentioned In

- [Hosting browser view layers in the rendering extension](hosting-browser-view-layers-in-the-rendering-extension.md)

<a id="overview"></a>

## Overview

By sharing a reference, or *handle*, to your app’s layer hierarchy between processes, you can coordinate layer updates across multiple processes. Get a handle from a [LayerHierarchy](layerhierarchy.md) object, then share it with another process using one of the serialization methods.

Use [createXPCRepresentation()](layerhierarchyhandle/createxpcrepresentation%28%29.md) and [init(xpcRepresentation:)](layerhierarchyhandle/init%28xpcrepresentation_%29.md) to share layer handles across your app’s processes. Apps with existing Mach-based interprocess communication implementations can use [encode(\_:)](layerhierarchyhandle/encode%28__%29.md) and [init(port:data:)](layerhierarchyhandle/init%28port_data_%29.md) methods to share layer handles.

For more information, see [Hosting browser view layers in the rendering extension](hosting-browser-view-layers-in-the-rendering-extension.md).

## Topics

### Sharing a layer hierarchy handle using XPC

- [createXPCRepresentation()](layerhierarchyhandle/createxpcrepresentation%28%29.md): Creates an object representing this handle that you send to another process in an XPC message.
- [init(xpcRepresentation:)](layerhierarchyhandle/init%28xpcrepresentation_%29.md): Creates a handle from a representation received in an XPC message.

### Sharing a layer hierarchy handle using Mach

- [encode(\_:)](layerhierarchyhandle/encode%28__%29.md): Serializes the hierarchy handle into a Mach port reference and accompanying data.
- [init(port:data:)](layerhierarchyhandle/init%28port_data_%29.md): Creates a layer hierarchy handle using a Mach port reference and serialized data.

### Creating a layer hierarchy handle

- [init(coder:)](layerhierarchyhandle/init%28coder_%29.md): Creates a handle from an encoded representation.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](https://developer.apple.com/documentation/foundation/nscoding)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [NSSecureCoding](https://developer.apple.com/documentation/foundation/nssecurecoding)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Layer hosting

- [Hosting browser view layers in the rendering extension](hosting-browser-view-layers-in-the-rendering-extension.md): Coordinate view-hierarchy and layer-hierarchy changes between processes.
- [LayerHierarchy](layerhierarchy.md): An object that holds a reference to layers rendered in another process’s view.
- [LayerHierarchyHostingView](layerhierarchyhostingview.md): A view that hosts a layer hierarchy you manage in another process.
- [LayerHierarchyHostingTransactionCoordinator](layerhierarchyhostingtransactioncoordinator.md): A class that synchronizes updates to views and layers in different processes.

# BELayerHierarchyHandle (Objective-C)

**Framework:** BrowserEngineKit  
**Kind:** Class  
**Availability:** iOS 17.4+ · iPadOS 17.4+

A reference to a layer hierarchy that your app shares between processes.

## Declaration

```objectivec
@interface BELayerHierarchyHandle : NSObject
```

## Mentioned In

- [Hosting browser view layers in the rendering extension](hosting-browser-view-layers-in-the-rendering-extension.md)

<a id="overview"></a>

## Overview

By sharing a reference, or *handle*, to your app’s layer hierarchy between processes, you can coordinate layer updates across multiple processes. Get a handle from a [BELayerHierarchy](layerhierarchy.md) object, then share it with another process using one of the serialization methods.

Use [createXPCRepresentation](layerhierarchyhandle/createxpcrepresentation%28%29.md) and [handleWithXPCRepresentation:error:](layerhierarchyhandle/init%28xpcrepresentation_%29.md) to share layer handles across your app’s processes. Apps with existing Mach-based interprocess communication implementations can use [encodeWithBlock:](layerhierarchyhandle/encode%28__%29.md) and [handleWithPort:data:error:](layerhierarchyhandle/init%28port_data_%29.md) methods to share layer handles.

For more information, see [Hosting browser view layers in the rendering extension](hosting-browser-view-layers-in-the-rendering-extension.md).

## Topics

### Sharing a layer hierarchy handle using XPC

- [createXPCRepresentation](layerhierarchyhandle/createxpcrepresentation%28%29.md): Creates an object representing this handle that you send to another process in an XPC message.
- [handleWithXPCRepresentation:error:](layerhierarchyhandle/init%28xpcrepresentation_%29.md): Creates a handle from a representation received in an XPC message.

### Sharing a layer hierarchy handle using Mach

- [encodeWithBlock:](layerhierarchyhandle/encode%28__%29.md): Serializes the hierarchy handle into a Mach port reference and accompanying data.
- [handleWithPort:data:error:](layerhierarchyhandle/init%28port_data_%29.md): Creates a layer hierarchy handle using a Mach port reference and serialized data.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [NSSecureCoding](https://developer.apple.com/documentation/foundation/nssecurecoding)

## See Also

### Layer hosting

- [Hosting browser view layers in the rendering extension](hosting-browser-view-layers-in-the-rendering-extension.md): Coordinate view-hierarchy and layer-hierarchy changes between processes.
- [BELayerHierarchy](layerhierarchy.md): An object that holds a reference to layers rendered in another process’s view.
- [BELayerHierarchyHostingView](layerhierarchyhostingview.md): A view that hosts a layer hierarchy you manage in another process.
- [BELayerHierarchyHostingTransactionCoordinator](layerhierarchyhostingtransactioncoordinator.md): A class that synchronizes updates to views and layers in different processes.
