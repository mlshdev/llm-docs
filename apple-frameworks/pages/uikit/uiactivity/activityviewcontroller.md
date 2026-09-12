> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiactivity/activityviewcontroller](https://developer.apple.com/documentation/uikit/uiactivity/activityviewcontroller)

# activityViewController (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The view controller to present to the user.

## Declaration

```swift
var activityViewController: UIViewController? { get }
```

<a id="Discussion"></a>

## Discussion

Subclasses that provide additional UI using a view controller can override this method to return that view controller. If this method returns a valid object, the system presents the returned view controller modally instead of calling the [perform()](perform%28%29.md) method.

Your custom view controller should provide a view with your custom UI and should handle any user interactions inside those views. Upon completing the activity, don’t dismiss the view controller yourself. Instead, call the [activityDidFinish(\_:)](activitydidfinish%28__%29.md) method and let the system dismiss it for you.

## See Also

### Performing the activity

- [canPerform(withActivityItems:)](canperform%28withactivityitems_%29.md): Queries whether the service can act on the specified data items.
- [prepare(withActivityItems:)](prepare%28withactivityitems_%29.md): Prepares your service to act on the specified data.
- [perform()](perform%28%29.md): Performs the service when no custom view controller is provided.
- [activityDidFinish(\_:)](activitydidfinish%28__%29.md): Notifies the system that your activity object has completed its work.

# activityViewController (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The view controller to present to the user.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) UIViewController * activityViewController;
```

<a id="Discussion"></a>

## Discussion

Subclasses that provide additional UI using a view controller can override this method to return that view controller. If this method returns a valid object, the system presents the returned view controller modally instead of calling the [performActivity](perform%28%29.md) method.

Your custom view controller should provide a view with your custom UI and should handle any user interactions inside those views. Upon completing the activity, don’t dismiss the view controller yourself. Instead, call the [activityDidFinish:](activitydidfinish%28__%29.md) method and let the system dismiss it for you.

## See Also

### Performing the activity

- [canPerformWithActivityItems:](canperform%28withactivityitems_%29.md): Queries whether the service can act on the specified data items.
- [prepareWithActivityItems:](prepare%28withactivityitems_%29.md): Prepares your service to act on the specified data.
- [performActivity](perform%28%29.md): Performs the service when no custom view controller is provided.
- [activityDidFinish:](activitydidfinish%28__%29.md): Notifies the system that your activity object has completed its work.
