> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiactivity/activitydidfinish(_:)](https://developer.apple.com/documentation/uikit/uiactivity/activitydidfinish(_:))

# activityDidFinish(\_:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Notifies the system that your activity object has completed its work.

## Declaration

```swift
func activityDidFinish(_ completed: Bool)
```

## Parameters

- `completed`: Specify [true](https://developer.apple.com/documentation/swift/true) if the service executed to completion or [false](https://developer.apple.com/documentation/swift/false) if the service was canceled or didn’t finish because of an error.

<a id="Discussion"></a>

## Discussion

This method dismisses the sharing interface provided by the [UIActivityViewController](../uiactivityviewcontroller.md) object. If you provided a view controller using the [activityViewController](activityviewcontroller.md) method, this method dismisses that view controller too.

You must call this method after completing the work associated with this object’s service. This is true regardless of whether you used the [activityViewController](activityviewcontroller.md) or [perform()](perform%28%29.md) method to initiate the service. When calling the method, use the Boolean value to indicate whether the service completed successfully.

This method must be called on the main thread.

## See Also

### Performing the activity

- [canPerform(withActivityItems:)](canperform%28withactivityitems_%29.md): Queries whether the service can act on the specified data items.
- [prepare(withActivityItems:)](prepare%28withactivityitems_%29.md): Prepares your service to act on the specified data.
- [activityViewController](activityviewcontroller.md): The view controller to present to the user.
- [perform()](perform%28%29.md): Performs the service when no custom view controller is provided.

# activityDidFinish: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Notifies the system that your activity object has completed its work.

## Declaration

```objectivec
- (void) activityDidFinish:(BOOL) completed;
```

## Parameters

- `completed`: Specify [true](https://developer.apple.com/documentation/swift/true) if the service executed to completion or [false](https://developer.apple.com/documentation/swift/false) if the service was canceled or didn’t finish because of an error.

<a id="Discussion"></a>

## Discussion

This method dismisses the sharing interface provided by the [UIActivityViewController](../uiactivityviewcontroller.md) object. If you provided a view controller using the [activityViewController](activityviewcontroller.md) method, this method dismisses that view controller too.

You must call this method after completing the work associated with this object’s service. This is true regardless of whether you used the [activityViewController](activityviewcontroller.md) or [performActivity](perform%28%29.md) method to initiate the service. When calling the method, use the Boolean value to indicate whether the service completed successfully.

This method must be called on the main thread.

## See Also

### Performing the activity

- [canPerformWithActivityItems:](canperform%28withactivityitems_%29.md): Queries whether the service can act on the specified data items.
- [prepareWithActivityItems:](prepare%28withactivityitems_%29.md): Prepares your service to act on the specified data.
- [activityViewController](activityviewcontroller.md): The view controller to present to the user.
- [performActivity](perform%28%29.md): Performs the service when no custom view controller is provided.
