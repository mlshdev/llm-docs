> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/skoverlaydelegate/storeoverlaydidfailtoload(_:error:)](https://developer.apple.com/documentation/storekit/skoverlaydelegate/storeoverlaydidfailtoload(_:error:))

# storeOverlayDidFailToLoad(\_:error:) (Swift)

**Framework:** StoreKit  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · visionOS 1.0+

Indicates that an overlay failed to load.

## Declaration

```swift
optional func storeOverlayDidFailToLoad(_ overlay: SKOverlay, error: any Error)
```

## Parameters

- `overlay`: An overlay object that failed to load.
- `error`: An indication of why the overlay failed to load.

<a id="Discussion"></a>

## Discussion

Common cases for a failure when loading an overlay are:

- Using invalid iTunes identifiers.
- Trying to present an overlay for media that’s not an app.
- Trying to present an overlay from an app extension or the simulator.

# storeOverlay:didFailToLoadWithError: (Objective-C)

**Framework:** StoreKit  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · visionOS 1.0+

Indicates that an overlay failed to load.

## Declaration

```objectivec
- (void) storeOverlay:(SKOverlay *) overlay didFailToLoadWithError:(NSError *) error;
```

## Parameters

- `overlay`: An overlay object that failed to load.
- `error`: An indication of why the overlay failed to load.

<a id="Discussion"></a>

## Discussion

Common cases for a failure when loading an overlay are:

- Using invalid iTunes identifiers.
- Trying to present an overlay for media that’s not an app.
- Trying to present an overlay from an app extension or the simulator.
