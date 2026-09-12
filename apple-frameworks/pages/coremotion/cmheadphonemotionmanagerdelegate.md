> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremotion/cmheadphonemotionmanagerdelegate](https://developer.apple.com/documentation/coremotion/cmheadphonemotionmanagerdelegate)

# CMHeadphoneMotionManagerDelegate (Swift)

**Framework:** Core Motion  
**Kind:** Protocol  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 14.0+ · watchOS 7.0+

A set of methods that defines an interface for connecting and disconnecting headphones.

## Declaration

```swift
protocol CMHeadphoneMotionManagerDelegate : NSObjectProtocol
```

## Topics

### Connecting and Disconnecting Headphones

- [headphoneMotionManagerDidConnect(\_:)](cmheadphonemotionmanagerdelegate/headphonemotionmanagerdidconnect%28__%29.md): Performs a callback to the delegate after you connect headphones.
- [headphoneMotionManagerDidDisconnect(\_:)](cmheadphonemotionmanagerdelegate/headphonemotionmanagerdiddisconnect%28__%29.md): Performs a callback to the delegate after you disconnect headphones.
- [CMHeadphoneMotionManager.DeviceMotionHandler](cmheadphonemotionmanager/devicemotionhandler.md): The type of block callback for handling headphone-motion data.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Getting the Delegate

- [delegate](cmheadphonemotionmanager/delegate.md): The object that receives headphone motion manager events.

# CMHeadphoneMotionManagerDelegate (Objective-C)

**Framework:** Core Motion  
**Kind:** Protocol  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 14.0+ · watchOS 7.0+

A set of methods that defines an interface for connecting and disconnecting headphones.

## Declaration

```objectivec
@protocol CMHeadphoneMotionManagerDelegate <NSObject>
```

## Topics

### Connecting and Disconnecting Headphones

- [headphoneMotionManagerDidConnect:](cmheadphonemotionmanagerdelegate/headphonemotionmanagerdidconnect%28__%29.md): Performs a callback to the delegate after you connect headphones.
- [headphoneMotionManagerDidDisconnect:](cmheadphonemotionmanagerdelegate/headphonemotionmanagerdiddisconnect%28__%29.md): Performs a callback to the delegate after you disconnect headphones.
- [CMHeadphoneDeviceMotionHandler](cmheadphonemotionmanager/devicemotionhandler.md): The type of block callback for handling headphone-motion data.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

## See Also

### Getting the Delegate

- [delegate](cmheadphonemotionmanager/delegate.md): The object that receives headphone motion manager events.
