> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uisearchcontrollerdelegate](https://developer.apple.com/documentation/uikit/uisearchcontrollerdelegate)

# UISearchControllerDelegate (Swift)

**Framework:** UIKit  
**Kind:** Protocol  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

A set of delegate methods for search controller objects.

## Declaration

```swift
@MainActor protocol UISearchControllerDelegate : NSObjectProtocol
```

## Topics

### Presenting and dismissing the search controller

- [didDismissSearchController(\_:)](uisearchcontrollerdelegate/diddismisssearchcontroller%28__%29.md): Notifies the delegate when the system completes automatic dismissal of the search controller.
- [didPresentSearchController(\_:)](uisearchcontrollerdelegate/didpresentsearchcontroller%28__%29.md): Notifies the delegate when the system completes automatic presentation of the search controller.
- [presentSearchController(\_:)](uisearchcontrollerdelegate/presentsearchcontroller%28__%29.md): Presents the designated search controller.
- [willDismissSearchController(\_:)](uisearchcontrollerdelegate/willdismisssearchcontroller%28__%29.md): Notifies the delegate that the system is about to automatically dismiss the search controller.
- [willPresentSearchController(\_:)](uisearchcontrollerdelegate/willpresentsearchcontroller%28__%29.md): Notifies the delegate that the system is about to automatically display the search controller.

### Responding to search bar placement updates

- [searchController(\_:didChangeFrom:)](uisearchcontrollerdelegate/searchcontroller%28__didchangefrom_%29.md): Notifies the delegate after the search bar placement changes.
- [searchController(\_:willChangeTo:)](uisearchcontrollerdelegate/searchcontroller%28__willchangeto_%29.md): Notifies the delegate before the search bar placement changes.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Responding to presentation and dismissal

- [delegate](uisearchcontroller/delegate.md): The search controller’s delegate.

# UISearchControllerDelegate (Objective-C)

**Framework:** UIKit  
**Kind:** Protocol  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

A set of delegate methods for search controller objects.

## Declaration

```objectivec
@protocol UISearchControllerDelegate <NSObject>
```

## Topics

### Presenting and dismissing the search controller

- [didDismissSearchController:](uisearchcontrollerdelegate/diddismisssearchcontroller%28__%29.md): Notifies the delegate when the system completes automatic dismissal of the search controller.
- [didPresentSearchController:](uisearchcontrollerdelegate/didpresentsearchcontroller%28__%29.md): Notifies the delegate when the system completes automatic presentation of the search controller.
- [presentSearchController:](uisearchcontrollerdelegate/presentsearchcontroller%28__%29.md): Presents the designated search controller.
- [willDismissSearchController:](uisearchcontrollerdelegate/willdismisssearchcontroller%28__%29.md): Notifies the delegate that the system is about to automatically dismiss the search controller.
- [willPresentSearchController:](uisearchcontrollerdelegate/willpresentsearchcontroller%28__%29.md): Notifies the delegate that the system is about to automatically display the search controller.

### Responding to search bar placement updates

- [searchController:didChangeFromSearchBarPlacement:](uisearchcontrollerdelegate/searchcontroller%28__didchangefrom_%29.md): Notifies the delegate after the search bar placement changes.
- [searchController:willChangeToSearchBarPlacement:](uisearchcontrollerdelegate/searchcontroller%28__willchangeto_%29.md): Notifies the delegate before the search bar placement changes.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

## See Also

### Responding to presentation and dismissal

- [delegate](uisearchcontroller/delegate.md): The search controller’s delegate.
