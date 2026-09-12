> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/skstoreproductviewcontrollerdelegate/productviewcontrollerdidfinish(_:)](https://developer.apple.com/documentation/storekit/skstoreproductviewcontrollerdelegate/productviewcontrollerdidfinish(_:))

# productViewControllerDidFinish(\_:) (Swift)

**Framework:** StoreKit  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.0+ · macOS 11.0+

Called when the user dismisses the store screen.

## Declaration

```swift
optional func productViewControllerDidFinish(_ viewController: SKStoreProductViewController)
```

## Parameters

- `viewController`: The store view controller whose interface was dismissed by the user.

<a id="Discussion"></a>

## Discussion

Your delegate should call the [dismissModalViewControllerAnimated:](../../uikit/uiviewcontroller/dismissmodalviewcontrolleranimated_.md) method on the view controller that originally presented the store screen. If your app paused any other activities before presenting the store, it can restart those services in this method.

## See Also

### Related Documentation

- [In-App Purchase Programming Guide](https://developer.apple.com/library/archive/documentation/NetworkingInternet/Conceptual/StoreKitGuide/Introduction.html#//apple_ref/doc/uid/TP40008267)

# productViewControllerDidFinish: (Objective-C)

**Framework:** StoreKit  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.0+ · macOS 11.0+

Called when the user dismisses the store screen.

## Declaration

```objectivec
- (void) productViewControllerDidFinish:(SKStoreProductViewController *) viewController;
```

## Parameters

- `viewController`: The store view controller whose interface was dismissed by the user.

<a id="Discussion"></a>

## Discussion

Your delegate should call the [dismissModalViewControllerAnimated:](../../uikit/uiviewcontroller/dismissmodalviewcontrolleranimated_.md) method on the view controller that originally presented the store screen. If your app paused any other activities before presenting the store, it can restart those services in this method.

## See Also

### Related Documentation

- [In-App Purchase Programming Guide](https://developer.apple.com/library/archive/documentation/NetworkingInternet/Conceptual/StoreKitGuide/Introduction.html#//apple_ref/doc/uid/TP40008267)
