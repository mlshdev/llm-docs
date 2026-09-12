> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/homekit/hmaccessorybrowser](https://developer.apple.com/documentation/homekit/hmaccessorybrowser)

# HMAccessoryBrowser (Swift)

**Framework:** HomeKit  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · visionOS 1.0+

A network browser you can use to discover new accessories in a home.

## Declaration

```swift
class HMAccessoryBrowser
```

<a id="overview"></a>

## Overview

Discovering new network accessories is an expensive operation in terms of time and power. Only start searching for new accessories when the user explicitly asks to do so, and stop searching as soon as the user has chosen the new accessories to add to their home.

> **Important**

>  To enable a consistent user experience across HomeKit enabled apps, use either the [addAndSetupAccessories(completionHandler:)](hmhome/addandsetupaccessories%28completionhandler_%29.md) or the [addAndSetupAccessories(with:completionHandler:)](hmhome/addandsetupaccessories%28with_completionhandler_%29.md) method of the [HMHome](hmhome.md) class instead of an accessory browser. These calls manage all the details of the accessory search process for you.

## Topics

### Discovering accessories

- [discoveredAccessories](hmaccessorybrowser/discoveredaccessories.md): An array of accessories discovered during a search.
- [startSearchingForNewAccessories()](hmaccessorybrowser/startsearchingfornewaccessories%28%29.md): Starts searching for accessories not yet associated with a home.
- [stopSearchingForNewAccessories()](hmaccessorybrowser/stopsearchingfornewaccessories%28%29.md): Stops searching for new accessories.

### Tracking the addition or removal of accessories

- [delegate](hmaccessorybrowser/delegate.md): A delegate that receives updates on the discovered accessories.
- [HMAccessoryBrowserDelegate](hmaccessorybrowserdelegate.md): An interface used to notify an accessory browser delegate of new accessories.

### Initializers

- [init()](hmaccessorybrowser/init%28%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

# HMAccessoryBrowser (Objective-C)

**Framework:** HomeKit  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · visionOS 1.0+

A network browser you can use to discover new accessories in a home.

## Declaration

```objectivec
@interface HMAccessoryBrowser : NSObject
```

<a id="overview"></a>

## Overview

Discovering new network accessories is an expensive operation in terms of time and power. Only start searching for new accessories when the user explicitly asks to do so, and stop searching as soon as the user has chosen the new accessories to add to their home.

> **Important**

>  To enable a consistent user experience across HomeKit enabled apps, use either the [addAndSetupAccessoriesWithCompletionHandler:](hmhome/addandsetupaccessories%28completionhandler_%29.md) or the [addAndSetupAccessoriesWithPayload:completionHandler:](hmhome/addandsetupaccessories%28with_completionhandler_%29.md) method of the [HMHome](hmhome.md) class instead of an accessory browser. These calls manage all the details of the accessory search process for you.

## Topics

### Discovering accessories

- [discoveredAccessories](hmaccessorybrowser/discoveredaccessories.md): An array of accessories discovered during a search.
- [startSearchingForNewAccessories](hmaccessorybrowser/startsearchingfornewaccessories%28%29.md): Starts searching for accessories not yet associated with a home.
- [stopSearchingForNewAccessories](hmaccessorybrowser/stopsearchingfornewaccessories%28%29.md): Stops searching for new accessories.

### Tracking the addition or removal of accessories

- [delegate](hmaccessorybrowser/delegate.md): A delegate that receives updates on the discovered accessories.
- [HMAccessoryBrowserDelegate](hmaccessorybrowserdelegate.md): An interface used to notify an accessory browser delegate of new accessories.

### Instance Methods

- [init](hmaccessorybrowser/init%28%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)
