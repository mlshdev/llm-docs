> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/browserenginekit/layerhierarchyhostingtransactioncoordinator](https://developer.apple.com/documentation/browserenginekit/layerhierarchyhostingtransactioncoordinator)

# LayerHierarchyHostingTransactionCoordinator (Swift)

**Framework:** BrowserEngineKit  
**Kind:** Class  
**Availability:** iOS 17.4+ · iPadOS 17.4+

A class that synchronizes updates to views and layers in different processes.

## Declaration

```swift
class LayerHierarchyHostingTransactionCoordinator
```

## Mentioned In

- [Hosting browser view layers in the rendering extension](hosting-browser-view-layers-in-the-rendering-extension.md)

<a id="overview"></a>

## Overview

Updates to your app’s UI occur through Core Animation’s underlying transaction mechanism. This class works with Core Animation to synchronize transactions that occur across processes in your browser app. To do that:

- Add views and layer hierarchies to an instance of this class.
- Share the instance between processes using [createXPCRepresentation()](layerhierarchyhostingtransactioncoordinator/createxpcrepresentation%28%29.md) and [init(xpcRepresentation:)](layerhierarchyhostingtransactioncoordinator/init%28xpcrepresentation_%29.md), or [encode(\_:)](layerhierarchyhostingtransactioncoordinator/encode%28__%29.md) and [init(port:data:)](layerhierarchyhostingtransactioncoordinator/init%28port_data_%29.md).
- Perform the necessary Core Animation transactions.
- Call [commit()](layerhierarchyhostingtransactioncoordinator/commit%28%29.md) on the instance, and discard it.

For more information, see [Hosting browser view layers in the rendering extension](hosting-browser-view-layers-in-the-rendering-extension.md).

## Topics

### Creating a transaction coordinator

- [init()](layerhierarchyhostingtransactioncoordinator/init%28%29.md): Creates a transaction coordinator.
- [init(coder:)](layerhierarchyhostingtransactioncoordinator/init%28coder_%29.md): Creates a transaction coordinator from an encoded representation.

### Sharing a transaction coordinator using XPC

- [createXPCRepresentation()](layerhierarchyhostingtransactioncoordinator/createxpcrepresentation%28%29.md): Creates a representation of the transaction coordinator that you send to another process.
- [init(xpcRepresentation:)](layerhierarchyhostingtransactioncoordinator/init%28xpcrepresentation_%29.md): Creates a transaction coordinator from an XPC object.

### Sharing a transaction coordinator using Mach

- [encode(\_:)](layerhierarchyhostingtransactioncoordinator/encode%28__%29.md): Serializes the transaction coordinator into a Mach port reference and accompanying data.
- [init(port:data:)](layerhierarchyhostingtransactioncoordinator/init%28port_data_%29.md): Creates a transaction coordinator using a Mach port reference and serialized data.

### Synchronizing transactions

- [add(\_:)](layerhierarchyhostingtransactioncoordinator/add%28__%29-7day0.md): Notifies the transaction coordinator to start coordinating transactions for the given view.
- [add(\_:)](layerhierarchyhostingtransactioncoordinator/add%28__%29-i66q.md): Notifies the transaction coordinator to start coordinating transactions for the given layer hierarchy.
- [commit()](layerhierarchyhostingtransactioncoordinator/commit%28%29.md): Notifies the render server to coordinate transactions for the added views and layer hierarchies.

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
- [LayerHierarchyHandle](layerhierarchyhandle.md): A reference to a layer hierarchy that your app shares between processes.

# BELayerHierarchyHostingTransactionCoordinator (Objective-C)

**Framework:** BrowserEngineKit  
**Kind:** Class  
**Availability:** iOS 17.4+ · iPadOS 17.4+

A class that synchronizes updates to views and layers in different processes.

## Declaration

```objectivec
@interface BELayerHierarchyHostingTransactionCoordinator : NSObject
```

## Mentioned In

- [Hosting browser view layers in the rendering extension](hosting-browser-view-layers-in-the-rendering-extension.md)

<a id="overview"></a>

## Overview

Updates to your app’s UI occur through Core Animation’s underlying transaction mechanism. This class works with Core Animation to synchronize transactions that occur across processes in your browser app. To do that:

- Add views and layer hierarchies to an instance of this class.
- Share the instance between processes using [createXPCRepresentation](layerhierarchyhostingtransactioncoordinator/createxpcrepresentation%28%29.md) and [coordinatorWithXPCRepresentation:error:](layerhierarchyhostingtransactioncoordinator/init%28xpcrepresentation_%29.md), or [encodeWithBlock:](layerhierarchyhostingtransactioncoordinator/encode%28__%29.md) and [coordinatorWithPort:data:error:](layerhierarchyhostingtransactioncoordinator/init%28port_data_%29.md).
- Perform the necessary Core Animation transactions.
- Call [commit](layerhierarchyhostingtransactioncoordinator/commit%28%29.md) on the instance, and discard it.

For more information, see [Hosting browser view layers in the rendering extension](hosting-browser-view-layers-in-the-rendering-extension.md).

## Topics

### Creating a transaction coordinator

- [coordinatorWithError:](layerhierarchyhostingtransactioncoordinator/init%28%29.md): Creates a transaction coordinator.

### Sharing a transaction coordinator using XPC

- [createXPCRepresentation](layerhierarchyhostingtransactioncoordinator/createxpcrepresentation%28%29.md): Creates a representation of the transaction coordinator that you send to another process.
- [coordinatorWithXPCRepresentation:error:](layerhierarchyhostingtransactioncoordinator/init%28xpcrepresentation_%29.md): Creates a transaction coordinator from an XPC object.

### Sharing a transaction coordinator using Mach

- [encodeWithBlock:](layerhierarchyhostingtransactioncoordinator/encode%28__%29.md): Serializes the transaction coordinator into a Mach port reference and accompanying data.
- [coordinatorWithPort:data:error:](layerhierarchyhostingtransactioncoordinator/init%28port_data_%29.md): Creates a transaction coordinator using a Mach port reference and serialized data.

### Synchronizing transactions

- [addLayerHierarchyHostingView:](layerhierarchyhostingtransactioncoordinator/add%28__%29-7day0.md): Notifies the transaction coordinator to start coordinating transactions for the given view.
- [addLayerHierarchy:](layerhierarchyhostingtransactioncoordinator/add%28__%29-i66q.md): Notifies the transaction coordinator to start coordinating transactions for the given layer hierarchy.
- [commit](layerhierarchyhostingtransactioncoordinator/commit%28%29.md): Notifies the render server to coordinate transactions for the added views and layer hierarchies.

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
- [BELayerHierarchyHandle](layerhierarchyhandle.md): A reference to a layer hierarchy that your app shares between processes.
