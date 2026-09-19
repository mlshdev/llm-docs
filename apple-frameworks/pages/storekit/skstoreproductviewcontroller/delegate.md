> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/storekit/skstoreproductviewcontroller/delegate

# delegate (Swift)

**Framework:** StoreKit  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.0+ · macOS 11.0+

The store view controller’s delegate.

## Declaration

```swift
weak var delegate: (any SKStoreProductViewControllerDelegate)? { get set }
```

<a id="Discussion"></a>

## Discussion

Your application must set the delegate before presenting the store view controller.

## See Also

### Related Documentation

- [Apple In-App Purchase Programming Guide](https://developer.apple.com/library/archive/documentation/NetworkingInternet/Conceptual/StoreKitGuide/Introduction.html#//apple_ref/doc/uid/TP40008267)

### Setting a delegate

- [SKStoreProductViewControllerDelegate](../skstoreproductviewcontrollerdelegate.md): A protocol to call when the customer dismisses the store screen.

# delegate (Objective-C)

**Framework:** StoreKit  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.0+ · macOS 11.0+

The store view controller’s delegate.

## Declaration

```objectivec
@property (nonatomic, weak, nullable) id<SKStoreProductViewControllerDelegate> delegate;
```

<a id="Discussion"></a>

## Discussion

Your application must set the delegate before presenting the store view controller.

## See Also

### Related Documentation

- [Apple In-App Purchase Programming Guide](https://developer.apple.com/library/archive/documentation/NetworkingInternet/Conceptual/StoreKitGuide/Introduction.html#//apple_ref/doc/uid/TP40008267)

### Setting a delegate

- [SKStoreProductViewControllerDelegate](../skstoreproductviewcontrollerdelegate.md): A protocol to call when the customer dismisses the store screen.
