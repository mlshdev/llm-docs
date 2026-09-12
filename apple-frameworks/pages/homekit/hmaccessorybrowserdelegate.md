> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/homekit/hmaccessorybrowserdelegate](https://developer.apple.com/documentation/homekit/hmaccessorybrowserdelegate)

# HMAccessoryBrowserDelegate (Swift)

**Framework:** HomeKit  
**Kind:** Protocol  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · visionOS 1.0+

An interface used to notify an accessory browser delegate of new accessories.

## Declaration

```swift
protocol HMAccessoryBrowserDelegate : NSObjectProtocol
```

<a id="overview"></a>

## Overview

> **Important**

>  To enable a consistent user experience across HomeKit enabled apps, use either the [addAndSetupAccessories(completionHandler:)](hmhome/addandsetupaccessories%28completionhandler_%29.md) or the [addAndSetupAccessories(with:completionHandler:)](hmhome/addandsetupaccessories%28with_completionhandler_%29.md) method of the [HMHome](hmhome.md) class instead of an accessory browser. These calls manage all the details of the accessory search process for you.

## Topics

### Tracking new accessories

- [accessoryBrowser(\_:didFindNewAccessory:)](hmaccessorybrowserdelegate/accessorybrowser%28__didfindnewaccessory_%29.md): Tells the delegate that a new accessory has been discovered.
- [accessoryBrowser(\_:didRemoveNewAccessory:)](hmaccessorybrowserdelegate/accessorybrowser%28__didremovenewaccessory_%29.md): Tells the delegate that a new accessory is no longer available in the browser.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Tracking the addition or removal of accessories

- [delegate](hmaccessorybrowser/delegate.md): A delegate that receives updates on the discovered accessories.

# HMAccessoryBrowserDelegate (Objective-C)

**Framework:** HomeKit  
**Kind:** Protocol  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · visionOS 1.0+

An interface used to notify an accessory browser delegate of new accessories.

## Declaration

```objectivec
@protocol HMAccessoryBrowserDelegate <NSObject>
```

<a id="overview"></a>

## Overview

> **Important**

>  To enable a consistent user experience across HomeKit enabled apps, use either the [addAndSetupAccessoriesWithCompletionHandler:](hmhome/addandsetupaccessories%28completionhandler_%29.md) or the [addAndSetupAccessoriesWithPayload:completionHandler:](hmhome/addandsetupaccessories%28with_completionhandler_%29.md) method of the [HMHome](hmhome.md) class instead of an accessory browser. These calls manage all the details of the accessory search process for you.

## Topics

### Tracking new accessories

- [accessoryBrowser:didFindNewAccessory:](hmaccessorybrowserdelegate/accessorybrowser%28__didfindnewaccessory_%29.md): Tells the delegate that a new accessory has been discovered.
- [accessoryBrowser:didRemoveNewAccessory:](hmaccessorybrowserdelegate/accessorybrowser%28__didremovenewaccessory_%29.md): Tells the delegate that a new accessory is no longer available in the browser.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

## See Also

### Tracking the addition or removal of accessories

- [delegate](hmaccessorybrowser/delegate.md): A delegate that receives updates on the discovered accessories.
