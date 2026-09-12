> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/neapppushmanager/matchethernet](https://developer.apple.com/documentation/networkextension/neapppushmanager/matchethernet)

# matchEthernet (Swift)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

A property that indicates Ethernet support for Local Push Connectivity.

## Declaration

```swift
var matchEthernet: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

If this value is `true` (Swift) or `YES` (Objective-C), the system starts the [NEAppPushProvider](../neapppushprovider.md) when the following criteria are true:

- The iOS device is connected to an Ethernet network.
- The Ethernet network is the primary route on the device.

Have your [NEAppPushProvider](../neapppushprovider.md) determine that its functionality is viable on the network. If the network doesn’t support the provider running over Ethernet, your provider needs to call [unmatchEthernet()](../neapppushprovider/unmatchethernet%28%29.md) to stop itself.

# matchEthernet (Objective-C)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

A property that indicates Ethernet support for Local Push Connectivity.

## Declaration

```objectivec
@property BOOL matchEthernet;
```

<a id="Discussion"></a>

## Discussion

If this value is `true` (Swift) or `YES` (Objective-C), the system starts the [NEAppPushProvider](../neapppushprovider.md) when the following criteria are true:

- The iOS device is connected to an Ethernet network.
- The Ethernet network is the primary route on the device.

Have your [NEAppPushProvider](../neapppushprovider.md) determine that its functionality is viable on the network. If the network doesn’t support the provider running over Ethernet, your provider needs to call [unmatchEthernet](../neapppushprovider/unmatchethernet%28%29.md) to stop itself.
