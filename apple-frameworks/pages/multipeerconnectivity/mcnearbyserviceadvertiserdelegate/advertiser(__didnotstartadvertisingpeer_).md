> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/multipeerconnectivity/mcnearbyserviceadvertiserdelegate/advertiser(_:didnotstartadvertisingpeer:)](https://developer.apple.com/documentation/multipeerconnectivity/mcnearbyserviceadvertiserdelegate/advertiser(_:didnotstartadvertisingpeer:))

# advertiser(\_:didNotStartAdvertisingPeer:) (Swift)

**Framework:** Multipeer Connectivity  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ (deprecated in 27.0) · iPadOS 7.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.10+ (deprecated in 27.0) · tvOS 10.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

Called when advertisement fails.

> Use Network Framework instead

## Declaration

```swift
optional func advertiser(_ advertiser: MCNearbyServiceAdvertiser, didNotStartAdvertisingPeer error: any Error)
```

## Parameters

- `advertiser`: The advertiser object that failed to begin advertising.
- `error`: An error object that indicates what went wrong.

# advertiser:didNotStartAdvertisingPeer: (Objective-C)

**Framework:** Multipeer Connectivity  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ (deprecated in 27.0) · iPadOS 7.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.10+ (deprecated in 27.0) · tvOS 10.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

Called when advertisement fails.

> Use Network Framework instead

## Declaration

```objectivec
- (void) advertiser:(MCNearbyServiceAdvertiser *) advertiser didNotStartAdvertisingPeer:(NSError *) error;
```

## Parameters

- `advertiser`: The advertiser object that failed to begin advertising.
- `error`: An error object that indicates what went wrong.
