> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uisearchcontrollerdelegate/presentsearchcontroller(_:)](https://developer.apple.com/documentation/uikit/uisearchcontrollerdelegate/presentsearchcontroller(_:))

# presentSearchController(\_:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Presents the designated search controller.

## Declaration

```swift
optional func presentSearchController(_ searchController: UISearchController)
```

## Parameters

- `searchController`: The [UISearchController](../uisearchcontroller.md) object to present.

<a id="Discussion"></a>

## Discussion

The system calls this method when the user begins editing in the search controller, or you set the [isActive](../uisearchcontroller/isactive.md) property to [true](https://developer.apple.com/documentation/swift/true). The system performs a default presentation if you don’t implement this method or you present the controller yourself.

## See Also

### Presenting and dismissing the search controller

- [didDismissSearchController(\_:)](diddismisssearchcontroller%28__%29.md): Notifies the delegate when the system completes automatic dismissal of the search controller.
- [didPresentSearchController(\_:)](didpresentsearchcontroller%28__%29.md): Notifies the delegate when the system completes automatic presentation of the search controller.
- [willDismissSearchController(\_:)](willdismisssearchcontroller%28__%29.md): Notifies the delegate that the system is about to automatically dismiss the search controller.
- [willPresentSearchController(\_:)](willpresentsearchcontroller%28__%29.md): Notifies the delegate that the system is about to automatically display the search controller.

# presentSearchController: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

Presents the designated search controller.

## Declaration

```objectivec
- (void) presentSearchController:(UISearchController *) searchController;
```

## Parameters

- `searchController`: The [UISearchController](../uisearchcontroller.md) object to present.

<a id="Discussion"></a>

## Discussion

The system calls this method when the user begins editing in the search controller, or you set the [active](../uisearchcontroller/isactive.md) property to [true](https://developer.apple.com/documentation/swift/true). The system performs a default presentation if you don’t implement this method or you present the controller yourself.

## See Also

### Presenting and dismissing the search controller

- [didDismissSearchController:](diddismisssearchcontroller%28__%29.md): Notifies the delegate when the system completes automatic dismissal of the search controller.
- [didPresentSearchController:](didpresentsearchcontroller%28__%29.md): Notifies the delegate when the system completes automatic presentation of the search controller.
- [willDismissSearchController:](willdismisssearchcontroller%28__%29.md): Notifies the delegate that the system is about to automatically dismiss the search controller.
- [willPresentSearchController:](willpresentsearchcontroller%28__%29.md): Notifies the delegate that the system is about to automatically display the search controller.
