> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uispringloadedinteractionsupporting](https://developer.apple.com/documentation/uikit/uispringloadedinteractionsupporting)

# UISpringLoadedInteractionSupporting (Swift)

**Framework:** UIKit  
**Kind:** Protocol  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The interface that determines if an object supports a spring-loaded interaction for drag and drop activities.

## Declaration

```swift
@MainActor protocol UISpringLoadedInteractionSupporting : NSObjectProtocol
```

## Topics

### Checking the spring-loaded interaction status

- [isSpringLoaded](uispringloadedinteractionsupporting/isspringloaded.md): A Boolean value that specifies whether the object is participating in spring-loaded interaction for a drag and drop activity.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

### Conforming Types

- [UIAlertController](uialertcontroller.md)
- [UIBarButtonItem](uibarbuttonitem.md)
- [UIButton](uibutton.md)
- [UICollectionView](uicollectionview.md)
- [UISearchTab](uisearchtab.md)
- [UISegmentedControl](uisegmentedcontrol.md)
- [UITab](uitab.md)
- [UITabBar](uitabbar.md)
- [UITabBarItem](uitabbaritem.md)
- [UITabGroup](uitabgroup.md)
- [UITableView](uitableview.md)

## See Also

### Spring-loaded interactions

- [UISpringLoadedInteractionBehavior](uispringloadedinteractionbehavior.md): The interface for specifying the behavior of a spring-loaded interaction.
- [UISpringLoadedInteraction](uispringloadedinteraction.md): An interaction object for configuring and controlling spring-loaded, user-driven navigation during a drag activity.
- [UISpringLoadedInteractionContext](uispringloadedinteractioncontext.md): The interface an object implements to provide information about a spring-loaded interaction.
- [UISpringLoadedInteractionEffect](uispringloadedinteractioneffect.md): The interface for providing visual styling to a spring-loaded interaction based on the interaction state.

# UISpringLoadedInteractionSupporting (Objective-C)

**Framework:** UIKit  
**Kind:** Protocol  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The interface that determines if an object supports a spring-loaded interaction for drag and drop activities.

## Declaration

```objectivec
@protocol UISpringLoadedInteractionSupporting <NSObject>
```

## Topics

### Checking the spring-loaded interaction status

- [springLoaded](uispringloadedinteractionsupporting/isspringloaded.md): A Boolean value that specifies whether the object is participating in spring-loaded interaction for a drag and drop activity.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

### Conforming Types

- [UIAlertController](uialertcontroller.md)
- [UIBarButtonItem](uibarbuttonitem.md)
- [UIButton](uibutton.md)
- [UICollectionView](uicollectionview.md)
- [UISegmentedControl](uisegmentedcontrol.md)
- [UITab](uitab.md)
- [UITabBar](uitabbar.md)
- [UITabBarItem](uitabbaritem.md)
- [UITableView](uitableview.md)

## See Also

### Spring-loaded interactions

- [UISpringLoadedInteractionBehavior](uispringloadedinteractionbehavior.md): The interface for specifying the behavior of a spring-loaded interaction.
- [UISpringLoadedInteraction](uispringloadedinteraction.md): An interaction object for configuring and controlling spring-loaded, user-driven navigation during a drag activity.
- [UISpringLoadedInteractionContext](uispringloadedinteractioncontext.md): The interface an object implements to provide information about a spring-loaded interaction.
- [UISpringLoadedInteractionEffect](uispringloadedinteractioneffect.md): The interface for providing visual styling to a spring-loaded interaction based on the interaction state.
