> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/arworldmap](https://developer.apple.com/documentation/arkit/arworldmap)

# ARWorldMap (Swift)

**Framework:** ARKit  
**Kind:** Class  
**Availability:** iOS 12.0+ · iPadOS 12.0+

The state in a world-tracking AR session during which a device maps the user’s position in physical space and proximity to anchor objects.

## Declaration

```swift
class ARWorldMap
```

## Mentioned In

- [Managing Session Life Cycle and Tracking Quality](managing-session-life-cycle-and-tracking-quality.md)

<a id="overview"></a>

## Overview

The session state in a world map includes ARKit’s awareness of the physical space in which the user moves the device. ARKit uses the details of the user’s physical space to determine the device’s position and orientation, as well as any [ARAnchor](aranchor.md) objects added to the session that can represent detected real-world features or virtual content placed by your app.

<a id="Serialize-and-Deserialize-a-World-Map"></a>

### Serialize and Deserialize a World Map

When your app quits, you can save the current world map (acquired using [getCurrentWorldMap(completionHandler:)](arsession/getcurrentworldmap%28completionhandler_%29.md)). Because [ARWorldMap](arworldmap.md) conforms to [NSSecureCoding](../foundation/nssecurecoding.md), you serialize it using [NSKeyedArchiver](../foundation/nskeyedarchiver.md).

```swift
func writeWorldMap(_ worldMap: ARWorldMap, to url: URL) throws {
    let data = try NSKeyedArchiver.archivedData(withRootObject: worldMap, requiringSecureCoding: true)
    try data.write(to: url)
}
```

To restore the world map the next time your app launches, use [NSKeyedUnarchiver](../foundation/nskeyedunarchiver.md).

```swift
func loadWorldMap(from url: URL) throws -> ARWorldMap {
    let mapData = try Data(contentsOf: url)
    guard let worldMap = try NSKeyedUnarchiver.unarchivedObject(ofClass: ARWorldMap.self, from: mapData)
        else { throw ARError(.invalidWorldMap) }
    return worldMap
}
```

You can use anchors from a resumed world map to place the same virtual content at the same positions from the saved session, if the app launches in the same physical environment.

For more information, see [Saving and loading world data](saving-and-loading-world-data.md).

<a id="Share-a-Saved-World-Map"></a>

### Share a Saved World Map

With two devices tracking the same world map, you can build a networked experience in which both users can see and interact with the same virtual content. To send an [ARWorldMap](arworldmap.md) to another device:

1. On one device, use [NSKeyedArchiver](../foundation/nskeyedarchiver.md) to convert the world map to a data object. You don’t need to write the data to a file to send it over the network.
2. Use the networking technology of your choice to send the resulting data to another device. For example, in a [Multipeer Connectivity](../multipeerconnectivity.md) session, call [send(\_:toPeers:with:)](../multipeerconnectivity/mcsession/send%28__topeers_with_%29.md) to send data, and implement [MCSessionDelegate](../multipeerconnectivity/mcsessiondelegate.md) methods on the other device to receive data.
3. On the receiving device, use [NSKeyedUnarchiver](../foundation/nskeyedunarchiver.md) to instantiate an [ARWorldMap](arworldmap.md) from the data.

For more information, see [Creating a multiuser AR experience](creating-a-multiuser-ar-experience.md).

<a id="Run-a-Deserialized-World-Map"></a>

### Run a Deserialized World Map

To begin a new session from an existing [ARWorldMap](arworldmap.md), set a world-tracking configuration’s [initialWorldMap](arworldtrackingconfiguration/initialworldmap.md) property and use [run(\_:options:)](arsession/run%28__options_%29.md). This starts a new session using the same spatial awareness and anchors loaded from the saved world map.

## Topics

### Examining a World Map

- [anchors](arworldmap/anchors.md): The set of anchors recorded in the world map.
- [center](arworldmap/center.md): The center point of the world map’s space-mapping data, relative to the world coordinate origin of the session the map was recorded in.
- [extent](arworldmap/extent.md): The size of the world map’s space-mapping data, relative to the world coordinate origin of the session the map was recorded in.

### Debugging a World Map

- [rawFeaturePoints](arworldmap/rawfeaturepoints.md): A coarse representation of the space-mapping data recorded in the world map.

### Initializers

- [init(coder:)](arworldmap/init%28coder_%29.md)

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
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### World Data

- [Saving and loading world data](saving-and-loading-world-data.md): Serialize a world-tracking session to resume it later on.

# ARWorldMap (Objective-C)

**Framework:** ARKit  
**Kind:** Class  
**Availability:** iOS 12.0+ · iPadOS 12.0+

The state in a world-tracking AR session during which a device maps the user’s position in physical space and proximity to anchor objects.

## Declaration

```objectivec
@interface ARWorldMap : NSObject
```

## Mentioned In

- [Managing Session Life Cycle and Tracking Quality](managing-session-life-cycle-and-tracking-quality.md)

<a id="overview"></a>

## Overview

The session state in a world map includes ARKit’s awareness of the physical space in which the user moves the device. ARKit uses the details of the user’s physical space to determine the device’s position and orientation, as well as any [ARAnchor](aranchor.md) objects added to the session that can represent detected real-world features or virtual content placed by your app.

<a id="Serialize-and-Deserialize-a-World-Map"></a>

### Serialize and Deserialize a World Map

When your app quits, you can save the current world map (acquired using [getCurrentWorldMapWithCompletionHandler:](arsession/getcurrentworldmap%28completionhandler_%29.md)). Because [ARWorldMap](arworldmap.md) conforms to [NSSecureCoding](../foundation/nssecurecoding.md), you serialize it using [NSKeyedArchiver](../foundation/nskeyedarchiver.md).

```swift
func writeWorldMap(_ worldMap: ARWorldMap, to url: URL) throws {
    let data = try NSKeyedArchiver.archivedData(withRootObject: worldMap, requiringSecureCoding: true)
    try data.write(to: url)
}
```

To restore the world map the next time your app launches, use [NSKeyedUnarchiver](../foundation/nskeyedunarchiver.md).

```swift
func loadWorldMap(from url: URL) throws -> ARWorldMap {
    let mapData = try Data(contentsOf: url)
    guard let worldMap = try NSKeyedUnarchiver.unarchivedObject(ofClass: ARWorldMap.self, from: mapData)
        else { throw ARError(.invalidWorldMap) }
    return worldMap
}
```

You can use anchors from a resumed world map to place the same virtual content at the same positions from the saved session, if the app launches in the same physical environment.

For more information, see [Saving and loading world data](saving-and-loading-world-data.md).

<a id="Share-a-Saved-World-Map"></a>

### Share a Saved World Map

With two devices tracking the same world map, you can build a networked experience in which both users can see and interact with the same virtual content. To send an [ARWorldMap](arworldmap.md) to another device:

1. On one device, use [NSKeyedArchiver](../foundation/nskeyedarchiver.md) to convert the world map to a data object. You don’t need to write the data to a file to send it over the network.
2. Use the networking technology of your choice to send the resulting data to another device. For example, in a [Multipeer Connectivity](../multipeerconnectivity.md) session, call [sendData:toPeers:withMode:error:](../multipeerconnectivity/mcsession/send%28__topeers_with_%29.md) to send data, and implement [MCSessionDelegate](../multipeerconnectivity/mcsessiondelegate.md) methods on the other device to receive data.
3. On the receiving device, use [NSKeyedUnarchiver](../foundation/nskeyedunarchiver.md) to instantiate an [ARWorldMap](arworldmap.md) from the data.

For more information, see [Creating a multiuser AR experience](creating-a-multiuser-ar-experience.md).

<a id="Run-a-Deserialized-World-Map"></a>

### Run a Deserialized World Map

To begin a new session from an existing [ARWorldMap](arworldmap.md), set a world-tracking configuration’s [initialWorldMap](arworldtrackingconfiguration/initialworldmap.md) property and use [runWithConfiguration:options:](arsession/run%28__options_%29.md). This starts a new session using the same spatial awareness and anchors loaded from the saved world map.

## Topics

### Examining a World Map

- [anchors](arworldmap/anchors.md): The set of anchors recorded in the world map.
- [center](arworldmap/center.md): The center point of the world map’s space-mapping data, relative to the world coordinate origin of the session the map was recorded in.
- [extent](arworldmap/extent.md): The size of the world map’s space-mapping data, relative to the world coordinate origin of the session the map was recorded in.

### Debugging a World Map

- [rawFeaturePoints](arworldmap/rawfeaturepoints.md): A coarse representation of the space-mapping data recorded in the world map.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### World Data

- [Saving and loading world data](saving-and-loading-world-data.md): Serialize a world-tracking session to resume it later on.
