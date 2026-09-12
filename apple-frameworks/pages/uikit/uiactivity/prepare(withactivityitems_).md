> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiactivity/prepare(withactivityitems:)](https://developer.apple.com/documentation/uikit/uiactivity/prepare(withactivityitems:))

# prepare(withActivityItems:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Prepares your service to act on the specified data.

## Declaration

```swift
func prepare(withActivityItems activityItems: [Any])
```

## Parameters

- `activityItems`: An array of objects of varying types. These are the data objects on which to act.

<a id="Discussion"></a>

## Discussion

The default implementation of this method does nothing. This method is called after the user has selected your service but before your service is asked to perform its action. Subclasses should override this method and use it to store a reference to the data items in the `activityItems` parameter. In addition, if the implementation of your service requires displaying additional UI to the user, you can use this method to prepare your view controller object and make it available from the [activityViewController](activityviewcontroller.md) method.

## See Also

### Performing the activity

- [canPerform(withActivityItems:)](canperform%28withactivityitems_%29.md): Queries whether the service can act on the specified data items.
- [activityViewController](activityviewcontroller.md): The view controller to present to the user.
- [perform()](perform%28%29.md): Performs the service when no custom view controller is provided.
- [activityDidFinish(\_:)](activitydidfinish%28__%29.md): Notifies the system that your activity object has completed its work.

# prepareWithActivityItems: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Prepares your service to act on the specified data.

## Declaration

```objectivec
- (void) prepareWithActivityItems:(NSArray *) activityItems;
```

## Parameters

- `activityItems`: An array of objects of varying types. These are the data objects on which to act.

<a id="Discussion"></a>

## Discussion

The default implementation of this method does nothing. This method is called after the user has selected your service but before your service is asked to perform its action. Subclasses should override this method and use it to store a reference to the data items in the `activityItems` parameter. In addition, if the implementation of your service requires displaying additional UI to the user, you can use this method to prepare your view controller object and make it available from the [activityViewController](activityviewcontroller.md) method.

## See Also

### Performing the activity

- [canPerformWithActivityItems:](canperform%28withactivityitems_%29.md): Queries whether the service can act on the specified data items.
- [activityViewController](activityviewcontroller.md): The view controller to present to the user.
- [performActivity](perform%28%29.md): Performs the service when no custom view controller is provided.
- [activityDidFinish:](activitydidfinish%28__%29.md): Notifies the system that your activity object has completed its work.
