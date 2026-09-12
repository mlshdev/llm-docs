> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/skstoreproductviewcontrollerdelegate](https://developer.apple.com/documentation/storekit/skstoreproductviewcontrollerdelegate)

# SKStoreProductViewControllerDelegate (Swift)

**Framework:** StoreKit  
**Kind:** Protocol  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.0+ · macOS 11.0+

A protocol to call when the customer dismisses the store screen.

## Declaration

```swift
protocol SKStoreProductViewControllerDelegate : NSObjectProtocol
```

<a id="overview"></a>

## Overview

Typically, this protocol is implemented by the view controller in your application that originally displayed the store screen.

## Topics

### Responding to a Dismiss Action

- [productViewControllerDidFinish(\_:)](skstoreproductviewcontrollerdelegate/productviewcontrollerdidfinish%28__%29.md): Called when the user dismisses the store screen.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Setting a delegate

- [delegate](skstoreproductviewcontroller/delegate.md): The store view controller’s delegate.

# SKStoreProductViewControllerDelegate (Objective-C)

**Framework:** StoreKit  
**Kind:** Protocol  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.0+ · macOS 11.0+

A protocol to call when the customer dismisses the store screen.

## Declaration

```objectivec
@protocol SKStoreProductViewControllerDelegate <NSObject>
```

<a id="overview"></a>

## Overview

Typically, this protocol is implemented by the view controller in your application that originally displayed the store screen.

## Topics

### Responding to a Dismiss Action

- [productViewControllerDidFinish:](skstoreproductviewcontrollerdelegate/productviewcontrollerdidfinish%28__%29.md): Called when the user dismisses the store screen.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

## See Also

### Setting a delegate

- [delegate](skstoreproductviewcontroller/delegate.md): The store view controller’s delegate.
