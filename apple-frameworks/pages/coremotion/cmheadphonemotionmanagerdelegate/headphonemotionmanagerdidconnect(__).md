> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coremotion/cmheadphonemotionmanagerdelegate/headphonemotionmanagerdidconnect(_:)

# headphoneMotionManagerDidConnect(\_:) (Swift)

**Framework:** Core Motion  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 14.0+ · watchOS 7.0+

Performs a callback to the delegate after you connect headphones.

## Declaration

```swift
optional func headphoneMotionManagerDidConnect(_ manager: CMHeadphoneMotionManager)
```

## Parameters

- `manager`: The manager for the connected headphones.

## See Also

### Connecting and Disconnecting Headphones

- [headphoneMotionManagerDidDisconnect(\_:)](headphonemotionmanagerdiddisconnect%28__%29.md): Performs a callback to the delegate after you disconnect headphones.
- [CMHeadphoneMotionManager.DeviceMotionHandler](../cmheadphonemotionmanager/devicemotionhandler.md): The type of block callback for handling headphone-motion data.

# headphoneMotionManagerDidConnect: (Objective-C)

**Framework:** Core Motion  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 14.0+ · watchOS 7.0+

Performs a callback to the delegate after you connect headphones.

## Declaration

```objectivec
- (void) headphoneMotionManagerDidConnect:(CMHeadphoneMotionManager *) manager;
```

## Parameters

- `manager`: The manager for the connected headphones.

## See Also

### Connecting and Disconnecting Headphones

- [headphoneMotionManagerDidDisconnect:](headphonemotionmanagerdiddisconnect%28__%29.md): Performs a callback to the delegate after you disconnect headphones.
- [CMHeadphoneDeviceMotionHandler](../cmheadphonemotionmanager/devicemotionhandler.md): The type of block callback for handling headphone-motion data.
