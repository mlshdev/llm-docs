> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/multipeerconnectivity/mcnearbyservicebrowser/startbrowsingforpeers()

# startBrowsingForPeers() (Swift)

**Framework:** Multipeer Connectivity  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ (deprecated in 27.0) · iPadOS 7.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.10+ (deprecated in 27.0) · tvOS 10.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

Starts browsing for peers.

> Use Network Framework instead

## Declaration

```swift
func startBrowsingForPeers()
```

<a id="Discussion"></a>

## Discussion

After this method is called (until you call [stopBrowsingForPeers()](stopbrowsingforpeers%28%29.md)), the framework calls your delegate’s [browser(\_:foundPeer:withDiscoveryInfo:)](../mcnearbyservicebrowserdelegate/browser%28__foundpeer_withdiscoveryinfo_%29.md) and [browser(\_:lostPeer:)](../mcnearbyservicebrowserdelegate/browser%28__lostpeer_%29.md) methods as new peers are found and lost.

## See Also

### Browsing for Peers

- [stopBrowsingForPeers()](stopbrowsingforpeers%28%29.md): Deprecated. Stops browsing for peers.

# startBrowsingForPeers (Objective-C)

**Framework:** Multipeer Connectivity  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ (deprecated in 27.0) · iPadOS 7.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.10+ (deprecated in 27.0) · tvOS 10.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

Starts browsing for peers.

> Use Network Framework instead

## Declaration

```objectivec
- (void) startBrowsingForPeers;
```

<a id="Discussion"></a>

## Discussion

After this method is called (until you call [stopBrowsingForPeers](stopbrowsingforpeers%28%29.md)), the framework calls your delegate’s [browser:foundPeer:withDiscoveryInfo:](../mcnearbyservicebrowserdelegate/browser%28__foundpeer_withdiscoveryinfo_%29.md) and [browser:lostPeer:](../mcnearbyservicebrowserdelegate/browser%28__lostpeer_%29.md) methods as new peers are found and lost.

## See Also

### Browsing for Peers

- [stopBrowsingForPeers](stopbrowsingforpeers%28%29.md): Deprecated. Stops browsing for peers.
