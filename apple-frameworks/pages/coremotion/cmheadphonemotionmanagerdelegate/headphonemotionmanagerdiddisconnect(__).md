> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremotion/cmheadphonemotionmanagerdelegate/headphonemotionmanagerdiddisconnect(_:)](https://developer.apple.com/documentation/coremotion/cmheadphonemotionmanagerdelegate/headphonemotionmanagerdiddisconnect(_:))

# headphoneMotionManagerDidDisconnect(\_:) (Swift)

**Framework:** Core Motion  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 14.0+ · watchOS 7.0+

Performs a callback to the delegate after you disconnect headphones.

## Declaration

```swift
optional func headphoneMotionManagerDidDisconnect(_ manager: CMHeadphoneMotionManager)
```

## Parameters

- `manager`: The manager for the disconnected headphones.

## See Also

### Connecting and Disconnecting Headphones

- [headphoneMotionManagerDidConnect(\_:)](headphonemotionmanagerdidconnect%28__%29.md): Performs a callback to the delegate after you connect headphones.
- [CMHeadphoneMotionManager.DeviceMotionHandler](../cmheadphonemotionmanager/devicemotionhandler.md): The type of block callback for handling headphone-motion data.

# headphoneMotionManagerDidDisconnect: (Objective-C)

**Framework:** Core Motion  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 14.0+ · watchOS 7.0+

Performs a callback to the delegate after you disconnect headphones.

## Declaration

```objectivec
- (void) headphoneMotionManagerDidDisconnect:(CMHeadphoneMotionManager *) manager;
```

## Parameters

- `manager`: The manager for the disconnected headphones.

## See Also

### Connecting and Disconnecting Headphones

- [headphoneMotionManagerDidConnect:](headphonemotionmanagerdidconnect%28__%29.md): Performs a callback to the delegate after you connect headphones.
- [CMHeadphoneDeviceMotionHandler](../cmheadphonemotionmanager/devicemotionhandler.md): The type of block callback for handling headphone-motion data.
