> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiactivity/canperform(withactivityitems:)](https://developer.apple.com/documentation/uikit/uiactivity/canperform(withactivityitems:))

# canPerform(withActivityItems:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Queries whether the service can act on the specified data items.

## Declaration

```swift
func canPerform(withActivityItems activityItems: [Any]) -> Bool
```

## Parameters

- `activityItems`: An array of objects of varying types. These are the data objects on which the service would act.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if your service can act on the specified data items or [false](https://developer.apple.com/documentation/swift/false) if it cannot.

<a id="Discussion"></a>

## Discussion

The default implementation of this method returns [false](https://developer.apple.com/documentation/swift/false). Subclasses must override it and return [true](https://developer.apple.com/documentation/swift/true) if the data in the `activityItems` parameter can be operated on by your service. Your implementation should check the types of the objects in the array and use that information to determine if your service can act on the corresponding data.

The [UIActivityViewController](../uiactivityviewcontroller.md) object calls this method when determining which services to show to the user.

## See Also

### Performing the activity

- [prepare(withActivityItems:)](prepare%28withactivityitems_%29.md): Prepares your service to act on the specified data.
- [activityViewController](activityviewcontroller.md): The view controller to present to the user.
- [perform()](perform%28%29.md): Performs the service when no custom view controller is provided.
- [activityDidFinish(\_:)](activitydidfinish%28__%29.md): Notifies the system that your activity object has completed its work.

# canPerformWithActivityItems: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Queries whether the service can act on the specified data items.

## Declaration

```objectivec
- (BOOL) canPerformWithActivityItems:(NSArray *) activityItems;
```

## Parameters

- `activityItems`: An array of objects of varying types. These are the data objects on which the service would act.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if your service can act on the specified data items or [false](https://developer.apple.com/documentation/swift/false) if it cannot.

<a id="Discussion"></a>

## Discussion

The default implementation of this method returns [false](https://developer.apple.com/documentation/swift/false). Subclasses must override it and return [true](https://developer.apple.com/documentation/swift/true) if the data in the `activityItems` parameter can be operated on by your service. Your implementation should check the types of the objects in the array and use that information to determine if your service can act on the corresponding data.

The [UIActivityViewController](../uiactivityviewcontroller.md) object calls this method when determining which services to show to the user.

## See Also

### Performing the activity

- [prepareWithActivityItems:](prepare%28withactivityitems_%29.md): Prepares your service to act on the specified data.
- [activityViewController](activityviewcontroller.md): The view controller to present to the user.
- [performActivity](perform%28%29.md): Performs the service when no custom view controller is provided.
- [activityDidFinish:](activitydidfinish%28__%29.md): Notifies the system that your activity object has completed its work.
