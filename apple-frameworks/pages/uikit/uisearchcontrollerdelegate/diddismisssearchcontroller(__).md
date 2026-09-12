> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uisearchcontrollerdelegate/diddismisssearchcontroller(_:)](https://developer.apple.com/documentation/uikit/uisearchcontrollerdelegate/diddismisssearchcontroller(_:))

# didDismissSearchController(\_:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Notifies the delegate when the system completes automatic dismissal of the search controller.

## Declaration

```swift
optional func didDismissSearchController(_ searchController: UISearchController)
```

## Parameters

- `searchController`: The [UISearchController](../uisearchcontroller.md) object to dismiss.

<a id="Discussion"></a>

## Discussion

The system only calls this method when it automatically dismisses the search controller. The system doesn’t call this method if you explicitly dismiss the search controller.

## See Also

### Presenting and dismissing the search controller

- [didPresentSearchController(\_:)](didpresentsearchcontroller%28__%29.md): Notifies the delegate when the system completes automatic presentation of the search controller.
- [presentSearchController(\_:)](presentsearchcontroller%28__%29.md): Presents the designated search controller.
- [willDismissSearchController(\_:)](willdismisssearchcontroller%28__%29.md): Notifies the delegate that the system is about to automatically dismiss the search controller.
- [willPresentSearchController(\_:)](willpresentsearchcontroller%28__%29.md): Notifies the delegate that the system is about to automatically display the search controller.

# didDismissSearchController: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

Notifies the delegate when the system completes automatic dismissal of the search controller.

## Declaration

```objectivec
- (void) didDismissSearchController:(UISearchController *) searchController;
```

## Parameters

- `searchController`: The [UISearchController](../uisearchcontroller.md) object to dismiss.

<a id="Discussion"></a>

## Discussion

The system only calls this method when it automatically dismisses the search controller. The system doesn’t call this method if you explicitly dismiss the search controller.

## See Also

### Presenting and dismissing the search controller

- [didPresentSearchController:](didpresentsearchcontroller%28__%29.md): Notifies the delegate when the system completes automatic presentation of the search controller.
- [presentSearchController:](presentsearchcontroller%28__%29.md): Presents the designated search controller.
- [willDismissSearchController:](willdismisssearchcontroller%28__%29.md): Notifies the delegate that the system is about to automatically dismiss the search controller.
- [willPresentSearchController:](willpresentsearchcontroller%28__%29.md): Notifies the delegate that the system is about to automatically display the search controller.
