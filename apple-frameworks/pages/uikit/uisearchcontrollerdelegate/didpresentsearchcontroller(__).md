> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uisearchcontrollerdelegate/didpresentsearchcontroller(_:)](https://developer.apple.com/documentation/uikit/uisearchcontrollerdelegate/didpresentsearchcontroller(_:))

# didPresentSearchController(\_:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Notifies the delegate when the system completes automatic presentation of the search controller.

## Declaration

```swift
optional func didPresentSearchController(_ searchController: UISearchController)
```

## Parameters

- `searchController`: The [UISearchController](../uisearchcontroller.md) object to present.

<a id="Discussion"></a>

## Discussion

The system only calls this method when it automatically presents the search controller. The system doesn’t call this method if you explicitly present the search controller.

## See Also

### Presenting and dismissing the search controller

- [didDismissSearchController(\_:)](diddismisssearchcontroller%28__%29.md): Notifies the delegate when the system completes automatic dismissal of the search controller.
- [presentSearchController(\_:)](presentsearchcontroller%28__%29.md): Presents the designated search controller.
- [willDismissSearchController(\_:)](willdismisssearchcontroller%28__%29.md): Notifies the delegate that the system is about to automatically dismiss the search controller.
- [willPresentSearchController(\_:)](willpresentsearchcontroller%28__%29.md): Notifies the delegate that the system is about to automatically display the search controller.

# didPresentSearchController: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

Notifies the delegate when the system completes automatic presentation of the search controller.

## Declaration

```objectivec
- (void) didPresentSearchController:(UISearchController *) searchController;
```

## Parameters

- `searchController`: The [UISearchController](../uisearchcontroller.md) object to present.

<a id="Discussion"></a>

## Discussion

The system only calls this method when it automatically presents the search controller. The system doesn’t call this method if you explicitly present the search controller.

## See Also

### Presenting and dismissing the search controller

- [didDismissSearchController:](diddismisssearchcontroller%28__%29.md): Notifies the delegate when the system completes automatic dismissal of the search controller.
- [presentSearchController:](presentsearchcontroller%28__%29.md): Presents the designated search controller.
- [willDismissSearchController:](willdismisssearchcontroller%28__%29.md): Notifies the delegate that the system is about to automatically dismiss the search controller.
- [willPresentSearchController:](willpresentsearchcontroller%28__%29.md): Notifies the delegate that the system is about to automatically display the search controller.
