> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkpeerpickercontroller/connectiontypesmask](https://developer.apple.com/documentation/gamekit/gkpeerpickercontroller/connectiontypesmask)

# connectionTypesMask (Swift)

**Framework:** GameKit  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ (deprecated in 7.0) · iPadOS 3.0+ (deprecated in 7.0) · Mac Catalyst 3.0+ (deprecated in 7.0) · visionOS 1.0+ (deprecated in 1.0)

A mask that determines the types of connections a dialog presents to the user.

> Use MCBrowserViewController from the MultipeerConnectivity framework.

## Declaration

```swift
var connectionTypesMask: GKPeerPickerConnectionType { get set }
```

<a id="Discussion"></a>

## Discussion

Your application configures the connection types it allows before showing the peer picker. If your application allows more than one connection type, the peer picker offers the user a choice of which type of connection to use. The default value for the mask is [GKPeerPickerConnectionType.nearby](../gkpeerpickerconnectiontype/nearby.md).

> **Important**

>  In iOS 3.0, [GKPeerPickerConnectionType.nearby](../gkpeerpickerconnectiontype/nearby.md) is required to be one of the allowed connection types. An exception is thrown if your application does not include it.

# connectionTypesMask (Objective-C)

**Framework:** GameKit  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ (deprecated in 7.0) · iPadOS 3.0+ (deprecated in 7.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · visionOS 1.0+ (deprecated in 1.0)

A mask that determines the types of connections a dialog presents to the user.

> Use MCBrowserViewController from the MultipeerConnectivity framework.

## Declaration

```objectivec
@property (nonatomic, assign) GKPeerPickerConnectionType connectionTypesMask;
```

<a id="Discussion"></a>

## Discussion

Your application configures the connection types it allows before showing the peer picker. If your application allows more than one connection type, the peer picker offers the user a choice of which type of connection to use. The default value for the mask is [GKPeerPickerConnectionTypeNearby](../gkpeerpickerconnectiontype/nearby.md).

> **Important**

>  In iOS 3.0, [GKPeerPickerConnectionTypeNearby](../gkpeerpickerconnectiontype/nearby.md) is required to be one of the allowed connection types. An exception is thrown if your application does not include it.
