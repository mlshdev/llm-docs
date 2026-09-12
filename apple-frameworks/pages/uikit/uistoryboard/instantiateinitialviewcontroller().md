> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uistoryboard/instantiateinitialviewcontroller()](https://developer.apple.com/documentation/uikit/uistoryboard/instantiateinitialviewcontroller())

# instantiateInitialViewController() (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+ (deprecated in 1.0)

Creates the initial view controller and initializes it with the data from the storyboard.

## Declaration

```swift
func instantiateInitialViewController() -> UIViewController?
```

<a id="return-value"></a>

## Return Value

The initial view controller in the storyboard.

<a id="Discussion"></a>

## Discussion

Every storyboard file has an initial view controller that represents the default view controller to create. Typically, you use the initial view controller as the root view controller for a window. However, you can also instantiate the initial view controller when transitioning to content in a new storyboard file. This method creates a new instance of the initial view controller using its [init(coder:)](../uiviewcontroller/init%28coder_%29.md) method.

When you specify a storyboard in the [UISceneStoryboardFile](../../bundleresources/information-property-list/uiapplicationscenemanifest/uisceneconfigurations/uiwindowscenesessionroleapplication/uiscenestoryboardfile.md) or [UIMainStoryboardFile](../../bundleresources/information-property-list/uimainstoryboardfile.md) key of your app’s `Info.plist` file, UIKit loads the initial view controller from that storyboard.

## See Also

### Loading the Initial View Controller

- [instantiateInitialViewController(creator:)](instantiateinitialviewcontroller%28creator_%29.md): Creates the initial view controller from the storyboard and initializes it using your custom initialization code.

# instantiateInitialViewController (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+ (deprecated in 1.0)

Creates the initial view controller and initializes it with the data from the storyboard.

## Declaration

```objectivec
- (UIViewController *) instantiateInitialViewController;
```

<a id="return-value"></a>

## Return Value

The initial view controller in the storyboard.

<a id="Discussion"></a>

## Discussion

Every storyboard file has an initial view controller that represents the default view controller to create. Typically, you use the initial view controller as the root view controller for a window. However, you can also instantiate the initial view controller when transitioning to content in a new storyboard file. This method creates a new instance of the initial view controller using its [initWithCoder:](../uiviewcontroller/init%28coder_%29.md) method.

When you specify a storyboard in the [UISceneStoryboardFile](../../bundleresources/information-property-list/uiapplicationscenemanifest/uisceneconfigurations/uiwindowscenesessionroleapplication/uiscenestoryboardfile.md) or [UIMainStoryboardFile](../../bundleresources/information-property-list/uimainstoryboardfile.md) key of your app’s `Info.plist` file, UIKit loads the initial view controller from that storyboard.

## See Also

### Loading the Initial View Controller

- [instantiateInitialViewControllerWithCreator:](instantiateinitialviewcontrollerwithcreator_.md): Deprecated. Creates the initial view controller from the storyboard and initializes it using your custom initialization code.
