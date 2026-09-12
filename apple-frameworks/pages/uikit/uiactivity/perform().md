> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiactivity/perform()](https://developer.apple.com/documentation/uikit/uiactivity/perform())

# perform() (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Performs the service when no custom view controller is provided.

## Declaration

```swift
func perform()
```

<a id="Discussion"></a>

## Discussion

The default implementation of this method does nothing. If your service doesn’t provide any custom UI using the [activityViewController](activityviewcontroller.md) method, override this method and use it to perform the activity. Your activity must operate on the data items received in the [prepare(withActivityItems:)](prepare%28withactivityitems_%29.md) method.

This method is called on your app’s main thread. If your app can complete the activity quickly on the main thread, do so and call the [activityDidFinish(\_:)](activitydidfinish%28__%29.md) method when it’s done. If performing the activity might take some time, use this method to start the work in the background and then exit without calling [activityDidFinish(\_:)](activitydidfinish%28__%29.md) from this method. When your background work has completed, call [activityDidFinish(\_:)](activitydidfinish%28__%29.md). You must call [activityDidFinish(\_:)](activitydidfinish%28__%29.md) on the main thread.

## See Also

### Performing the activity

- [canPerform(withActivityItems:)](canperform%28withactivityitems_%29.md): Queries whether the service can act on the specified data items.
- [prepare(withActivityItems:)](prepare%28withactivityitems_%29.md): Prepares your service to act on the specified data.
- [activityViewController](activityviewcontroller.md): The view controller to present to the user.
- [activityDidFinish(\_:)](activitydidfinish%28__%29.md): Notifies the system that your activity object has completed its work.

# performActivity (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Performs the service when no custom view controller is provided.

## Declaration

```objectivec
- (void) performActivity;
```

<a id="Discussion"></a>

## Discussion

The default implementation of this method does nothing. If your service doesn’t provide any custom UI using the [activityViewController](activityviewcontroller.md) method, override this method and use it to perform the activity. Your activity must operate on the data items received in the [prepareWithActivityItems:](prepare%28withactivityitems_%29.md) method.

This method is called on your app’s main thread. If your app can complete the activity quickly on the main thread, do so and call the [activityDidFinish:](activitydidfinish%28__%29.md) method when it’s done. If performing the activity might take some time, use this method to start the work in the background and then exit without calling [activityDidFinish:](activitydidfinish%28__%29.md) from this method. When your background work has completed, call [activityDidFinish:](activitydidfinish%28__%29.md). You must call [activityDidFinish:](activitydidfinish%28__%29.md) on the main thread.

## See Also

### Performing the activity

- [canPerformWithActivityItems:](canperform%28withactivityitems_%29.md): Queries whether the service can act on the specified data items.
- [prepareWithActivityItems:](prepare%28withactivityitems_%29.md): Prepares your service to act on the specified data.
- [activityViewController](activityviewcontroller.md): The view controller to present to the user.
- [activityDidFinish:](activitydidfinish%28__%29.md): Notifies the system that your activity object has completed its work.
