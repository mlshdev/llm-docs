> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/multipeerconnectivity/mcbrowserviewcontrollerdelegate/browserviewcontroller(_:shouldpresentnearbypeer:withdiscoveryinfo:)](https://developer.apple.com/documentation/multipeerconnectivity/mcbrowserviewcontrollerdelegate/browserviewcontroller(_:shouldpresentnearbypeer:withdiscoveryinfo:))

# browserViewController(\_:shouldPresentNearbyPeer:withDiscoveryInfo:) (Swift)

**Framework:** Multipeer Connectivity  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ (deprecated in 27.0) · iPadOS 7.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.10+ (deprecated in 27.0) · tvOS 10.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

Called when a new peer is discovered to decide whether to show it in the user interface.

> Use Network Framework instead

## Declaration

```swift
optional func browserViewController(_ browserViewController: MCBrowserViewController, shouldPresentNearbyPeer peerID: MCPeerID, withDiscoveryInfo info: [String : String]?) -> Bool
```

## Parameters

- `browserViewController`: The browser view controller object that discovered the new peer.
- `peerID`: The unique ID of the nearby peer.
- `info`: The info dictionary advertised by the discovered peer. For more information on the contents of this dictionary, see the documentation for [init(peer:discoveryInfo:serviceType:)](../mcnearbyserviceadvertiser/init%28peer_discoveryinfo_servicetype_%29.md) in [MCNearbyServiceAdvertiser](../mcnearbyserviceadvertiser.md).

<a id="return-value"></a>

## Return Value

This delegate method should return [true](https://developer.apple.com/documentation/swift/true) if the newly discovered peer should be shown in the user interface, or [false](https://developer.apple.com/documentation/swift/false) otherwise.

<a id="Discussion"></a>

## Discussion

If this method is not provided, all peers are shown.

# browserViewController:shouldPresentNearbyPeer:withDiscoveryInfo: (Objective-C)

**Framework:** Multipeer Connectivity  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ (deprecated in 27.0) · iPadOS 7.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.10+ (deprecated in 27.0) · tvOS 10.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

Called when a new peer is discovered to decide whether to show it in the user interface.

> Use Network Framework instead

## Declaration

```objectivec
- (BOOL) browserViewController:(MCBrowserViewController *) browserViewController shouldPresentNearbyPeer:(MCPeerID *) peerID withDiscoveryInfo:(NSDictionary<NSString *,NSString *> *) info;
```

## Parameters

- `browserViewController`: The browser view controller object that discovered the new peer.
- `peerID`: The unique ID of the nearby peer.
- `info`: The info dictionary advertised by the discovered peer. For more information on the contents of this dictionary, see the documentation for [initWithPeer:discoveryInfo:serviceType:](../mcnearbyserviceadvertiser/init%28peer_discoveryinfo_servicetype_%29.md) in [MCNearbyServiceAdvertiser](../mcnearbyserviceadvertiser.md).

<a id="return-value"></a>

## Return Value

This delegate method should return [true](https://developer.apple.com/documentation/swift/true) if the newly discovered peer should be shown in the user interface, or [false](https://developer.apple.com/documentation/swift/false) otherwise.

<a id="Discussion"></a>

## Discussion

If this method is not provided, all peers are shown.
