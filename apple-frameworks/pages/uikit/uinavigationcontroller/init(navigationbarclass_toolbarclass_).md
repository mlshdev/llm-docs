> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uinavigationcontroller/init(navigationbarclass:toolbarclass:)](https://developer.apple.com/documentation/uikit/uinavigationcontroller/init(navigationbarclass:toolbarclass:))

# init(navigationBarClass:toolbarClass:) (Swift)

**Framework:** UIKit  
**Kind:** Initializer  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Initializes and returns a newly created navigation controller that uses your custom bar subclasses.

## Declaration

```swift
init(navigationBarClass: AnyClass?, toolbarClass: AnyClass?)
```

## Parameters

- `navigationBarClass`: Specify the custom [UINavigationBar](../uinavigationbar.md) subclass you want to use, or specify `nil` to use the standard [UINavigationBar](../uinavigationbar.md) class.
- `toolbarClass`: Specify the custom [UIToolbar](../uitoolbar.md) subclass you want to use, or specify `nil` to use the standard [UIToolbar](../uitoolbar.md) class.

<a id="return-value"></a>

## Return Value

The initialized navigation controller object or `nil` if there was a problem initializing the object.

<a id="Discussion"></a>

## Discussion

To customize the overall appearance of a navigation bar, use [UIAppearance](../uiappearance.md) APIs instead of this method. If you use this initialization method to create a navigation bar that uses custom bar subclasses, you are responsible for pushing and setting view controllers before presenting the navigation controller onscreen.

## See Also

### Creating a navigation controller

- [init(rootViewController:)](init%28rootviewcontroller_%29.md): Initializes and returns a newly created navigation controller.
- [init(nibName:bundle:)](init%28nibname_bundle_%29.md): Creates a navigation controller with the nib file in the specified bundle.
- [init(coder:)](init%28coder_%29.md): Creates a navigation controller from data in an unarchiver.

# initWithNavigationBarClass:toolbarClass: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Initializes and returns a newly created navigation controller that uses your custom bar subclasses.

## Declaration

```objectivec
- (instancetype) initWithNavigationBarClass:(Class) navigationBarClass toolbarClass:(Class) toolbarClass;
```

## Parameters

- `navigationBarClass`: Specify the custom [UINavigationBar](../uinavigationbar.md) subclass you want to use, or specify `nil` to use the standard [UINavigationBar](../uinavigationbar.md) class.
- `toolbarClass`: Specify the custom [UIToolbar](../uitoolbar.md) subclass you want to use, or specify `nil` to use the standard [UIToolbar](../uitoolbar.md) class.

<a id="return-value"></a>

## Return Value

The initialized navigation controller object or `nil` if there was a problem initializing the object.

<a id="Discussion"></a>

## Discussion

To customize the overall appearance of a navigation bar, use [UIAppearance](../uiappearance.md) APIs instead of this method. If you use this initialization method to create a navigation bar that uses custom bar subclasses, you are responsible for pushing and setting view controllers before presenting the navigation controller onscreen.

## See Also

### Creating a navigation controller

- [initWithRootViewController:](init%28rootviewcontroller_%29.md): Initializes and returns a newly created navigation controller.
- [initWithNibName:bundle:](init%28nibname_bundle_%29.md): Creates a navigation controller with the nib file in the specified bundle.
- [initWithCoder:](init%28coder_%29.md): Creates a navigation controller from data in an unarchiver.
