> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/social/slcomposeserviceviewcontroller/pushconfigurationviewcontroller(_:)](https://developer.apple.com/documentation/social/slcomposeserviceviewcontroller/pushconfigurationviewcontroller(_:))

# pushConfigurationViewController(\_:) (Swift)

**Framework:** Social  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+

Presents a configuration view controller that lets the user configure the post.

## Declaration

```swift
func pushConfigurationViewController(_ viewController: UIViewController!)
```

## Parameters

- `viewController`: The view controller that manages the type of configuration the user selected.

<a id="Discussion"></a>

## Discussion

Typically, this method is called in the tap handler for a configuration item. A user selects a configuration item from the list displayed in the compose view and the associated configuration view controller is displayed. Only one configuration view controller can be visible at a time.

Note that your custom configuration view controller should set its [preferredContentSize](../../uikit/uiviewcontroller/preferredcontentsize.md) property to an appropriate value. `SLComposeServiceViewController` observes changes to the [preferredContentSize](../../uikit/uiviewcontroller/preferredcontentsize.md) property and animates view size changes if necessary.

## See Also

### Presenting the View Controller

- [popConfigurationViewController()](popconfigurationviewcontroller%28%29.md): Dismisses the current configuration view controller.

# pushConfigurationViewController: (Objective-C)

**Framework:** Social  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+

Presents a configuration view controller that lets the user configure the post.

## Declaration

```objectivec
- (void) pushConfigurationViewController:(UIViewController *) viewController;
```

## Parameters

- `viewController`: The view controller that manages the type of configuration the user selected.

<a id="Discussion"></a>

## Discussion

Typically, this method is called in the tap handler for a configuration item. A user selects a configuration item from the list displayed in the compose view and the associated configuration view controller is displayed. Only one configuration view controller can be visible at a time.

Note that your custom configuration view controller should set its [preferredContentSize](../../uikit/uiviewcontroller/preferredcontentsize.md) property to an appropriate value. `SLComposeServiceViewController` observes changes to the [preferredContentSize](../../uikit/uiviewcontroller/preferredcontentsize.md) property and animates view size changes if necessary.

## See Also

### Presenting the View Controller

- [popConfigurationViewController](popconfigurationviewcontroller%28%29.md): Dismisses the current configuration view controller.
