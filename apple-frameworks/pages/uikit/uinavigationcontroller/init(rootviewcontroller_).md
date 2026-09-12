> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uinavigationcontroller/init(rootviewcontroller:)](https://developer.apple.com/documentation/uikit/uinavigationcontroller/init(rootviewcontroller:))

# init(rootViewController:) (Swift)

**Framework:** UIKit  
**Kind:** Initializer  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Initializes and returns a newly created navigation controller.

## Declaration

```swift
init(rootViewController: UIViewController)
```

## Parameters

- `rootViewController`: The view controller that resides at the bottom of the navigation stack. This object cannot be an instance of the [UITabBarController](../uitabbarcontroller.md) class.

<a id="return-value"></a>

## Return Value

The initialized navigation controller object or `nil` if there was a problem initializing the object.

<a id="Discussion"></a>

## Discussion

This is a convenience method for initializing the receiver and pushing a root view controller onto the navigation stack. Every navigation stack must have at least one view controller to act as the root.

## See Also

### Creating a navigation controller

- [init(navigationBarClass:toolbarClass:)](init%28navigationbarclass_toolbarclass_%29.md): Initializes and returns a newly created navigation controller that uses your custom bar subclasses.
- [init(nibName:bundle:)](init%28nibname_bundle_%29.md): Creates a navigation controller with the nib file in the specified bundle.
- [init(coder:)](init%28coder_%29.md): Creates a navigation controller from data in an unarchiver.

# initWithRootViewController: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Initializes and returns a newly created navigation controller.

## Declaration

```objectivec
- (instancetype) initWithRootViewController:(UIViewController *) rootViewController;
```

## Parameters

- `rootViewController`: The view controller that resides at the bottom of the navigation stack. This object cannot be an instance of the [UITabBarController](../uitabbarcontroller.md) class.

<a id="return-value"></a>

## Return Value

The initialized navigation controller object or `nil` if there was a problem initializing the object.

<a id="Discussion"></a>

## Discussion

This is a convenience method for initializing the receiver and pushing a root view controller onto the navigation stack. Every navigation stack must have at least one view controller to act as the root.

## See Also

### Creating a navigation controller

- [initWithNavigationBarClass:toolbarClass:](init%28navigationbarclass_toolbarclass_%29.md): Initializes and returns a newly created navigation controller that uses your custom bar subclasses.
- [initWithNibName:bundle:](init%28nibname_bundle_%29.md): Creates a navigation controller with the nib file in the specified bundle.
- [initWithCoder:](init%28coder_%29.md): Creates a navigation controller from data in an unarchiver.
