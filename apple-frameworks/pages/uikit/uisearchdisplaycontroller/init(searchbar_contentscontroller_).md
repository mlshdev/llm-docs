> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uisearchdisplaycontroller/init(searchbar:contentscontroller:)](https://developer.apple.com/documentation/uikit/uisearchdisplaycontroller/init(searchbar:contentscontroller:))

# init(searchBar:contentsController:) (Swift)

**Framework:** UIKit  
**Kind:** Initializer  
**Availability:** iOS 3.0+ (deprecated in 8.0) · iPadOS 3.0+ (deprecated in 8.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

Returns a display controller initialized with the given search bar and contents controller.

> For more information, see [UISearchDisplayController](../uisearchdisplaycontroller.md).

## Declaration

```swift
init(searchBar: UISearchBar, contentsController viewController: UIViewController)
```

## Parameters

- `searchBar`: A search bar.

  The search bar must not currently be associated with another search display controller.
- `viewController`: The view controller that manages display of the original contents that are to be searched.

  The view controller must not currently be associated with another search display controller.

<a id="return-value"></a>

## Return Value

A search display controller initialized with the given search bar and contents controller.

# initWithSearchBar:contentsController: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ (deprecated in 8.0) · iPadOS 3.0+ (deprecated in 8.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

Returns a display controller initialized with the given search bar and contents controller.

> For more information, see [UISearchDisplayController](../uisearchdisplaycontroller.md).

## Declaration

```objectivec
- (instancetype) initWithSearchBar:(UISearchBar *) searchBar contentsController:(UIViewController *) viewController;
```

## Parameters

- `searchBar`: A search bar.

  The search bar must not currently be associated with another search display controller.
- `viewController`: The view controller that manages display of the original contents that are to be searched.

  The view controller must not currently be associated with another search display controller.

<a id="return-value"></a>

## Return Value

A search display controller initialized with the given search bar and contents controller.
