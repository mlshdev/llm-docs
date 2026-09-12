> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/multipeerconnectivity/mcnearbyservicebrowserdelegate/browser(_:didnotstartbrowsingforpeers:)](https://developer.apple.com/documentation/multipeerconnectivity/mcnearbyservicebrowserdelegate/browser(_:didnotstartbrowsingforpeers:))

# browser(\_:didNotStartBrowsingForPeers:) (Swift)

**Framework:** Multipeer Connectivity  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ (deprecated in 27.0) · iPadOS 7.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.10+ (deprecated in 27.0) · tvOS 10.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

Called when a browser failed to start browsing for peers.

> Use Network Framework instead

## Declaration

```swift
optional func browser(_ browser: MCNearbyServiceBrowser, didNotStartBrowsingForPeers error: any Error)
```

## Parameters

- `browser`: The browser object that failed to start browsing.
- `error`: An error object indicating what went wrong.

# browser:didNotStartBrowsingForPeers: (Objective-C)

**Framework:** Multipeer Connectivity  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ (deprecated in 27.0) · iPadOS 7.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.10+ (deprecated in 27.0) · tvOS 10.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

Called when a browser failed to start browsing for peers.

> Use Network Framework instead

## Declaration

```objectivec
- (void) browser:(MCNearbyServiceBrowser *) browser didNotStartBrowsingForPeers:(NSError *) error;
```

## Parameters

- `browser`: The browser object that failed to start browsing.
- `error`: An error object indicating what went wrong.
