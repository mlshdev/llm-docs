> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avrouting/avcustomroutingcontroller](https://developer.apple.com/documentation/avrouting/avcustomroutingcontroller)

# AVCustomRoutingController (Swift)

**Framework:** AVRouting  
**Kind:** Class  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

An object that manages the connection from a device to a destination.

## Declaration

```swift
class AVCustomRoutingController
```

<a id="overview"></a>

## Overview

A routing controller also informs its [delegate](avcustomroutingcontroller/delegate.md) object about which routes the user previously authorized, so it can reconnect, if appropriate.

## Topics

### Managing authorization

- [authorizedRoutes](avcustomroutingcontroller/authorizedroutes.md): A list of authorized routes.
- [authorizedRoutesDidChange](avcustomroutingcontroller/authorizedroutesdidchange.md): A notification the system posts when the list of authorized routes changes.
- [invalidateAuthorization(for:)](avcustomroutingcontroller/invalidateauthorization%28for_%29.md): Revokes an app’s authorization to connect to a route.

### Configuring route addresses

- [knownRouteIPs](avcustomroutingcontroller/knownrouteips.md): An array of route addresses known to be on the local network.
- [AVCustomRoutingPartialIP](avcustomroutingpartialip.md): An object that represents a full or partial IP address.

### Activating a route

- [isRouteActive(\_:)](avcustomroutingcontroller/isrouteactive%28__%29.md): Returns a Boolean value that indicates whether a route is active.
- [setActive(\_:for:)](avcustomroutingcontroller/setactive%28__for_%29.md): Sets the active state of a route.

### Accessing the delegate

- [delegate](avcustomroutingcontroller/delegate.md): A delegate object for a routing controller.

### Customizing the user interface

- [customActionItems](avcustomroutingcontroller/customactionitems.md): An array of custom action items to add to a route picker.

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

### Media routing

- [AVCustomRoutingControllerDelegate](avcustomroutingcontrollerdelegate.md): A protocol for delegates of a custom routing controller.
- [AVCustomRoutingEvent](avcustomroutingevent.md): An object that represents an event that occurs on a route.
- [AVCustomRoutingActionItem](avcustomroutingactionitem.md): An object that represents a custom action item to display in a device route picker.

# AVCustomRoutingController (Objective-C)

**Framework:** AVRouting  
**Kind:** Class  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

An object that manages the connection from a device to a destination.

## Declaration

```objectivec
@interface AVCustomRoutingController : NSObject
```

<a id="overview"></a>

## Overview

A routing controller also informs its [delegate](avcustomroutingcontroller/delegate.md) object about which routes the user previously authorized, so it can reconnect, if appropriate.

## Topics

### Managing authorization

- [authorizedRoutes](avcustomroutingcontroller/authorizedroutes.md): A list of authorized routes.
- [AVCustomRoutingControllerAuthorizedRoutesDidChangeNotification](avcustomroutingcontroller/authorizedroutesdidchange.md): A notification the system posts when the list of authorized routes changes.
- [invalidateAuthorizationForRoute:](avcustomroutingcontroller/invalidateauthorization%28for_%29.md): Revokes an app’s authorization to connect to a route.

### Configuring route addresses

- [knownRouteIPs](avcustomroutingcontroller/knownrouteips.md): An array of route addresses known to be on the local network.
- [AVCustomRoutingPartialIP](avcustomroutingpartialip.md): An object that represents a full or partial IP address.

### Activating a route

- [isRouteActive:](avcustomroutingcontroller/isrouteactive%28__%29.md): Returns a Boolean value that indicates whether a route is active.
- [setActive:forRoute:](avcustomroutingcontroller/setactive%28__for_%29.md): Sets the active state of a route.

### Accessing the delegate

- [delegate](avcustomroutingcontroller/delegate.md): A delegate object for a routing controller.

### Customizing the user interface

- [customActionItems](avcustomroutingcontroller/customactionitems.md): An array of custom action items to add to a route picker.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Media routing

- [AVCustomRoutingControllerDelegate](avcustomroutingcontrollerdelegate.md): A protocol for delegates of a custom routing controller.
- [AVCustomRoutingEvent](avcustomroutingevent.md): An object that represents an event that occurs on a route.
- [AVCustomRoutingActionItem](avcustomroutingactionitem.md): An object that represents a custom action item to display in a device route picker.
