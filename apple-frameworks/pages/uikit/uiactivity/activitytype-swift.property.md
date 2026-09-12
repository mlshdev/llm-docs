> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiactivity/activitytype-swift.property](https://developer.apple.com/documentation/uikit/uiactivity/activitytype-swift.property)

# activityType (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The type of service being provided.

## Declaration

```swift
var activityType: UIActivity.ActivityType? { get }
```

<a id="Discussion"></a>

## Discussion

The default value is `nil`. Subclasses may override this property to return a custom activity type that’s reported to the [completionWithItemsHandler](../uiactivityviewcontroller/completionwithitemshandler-swift.property.md) completion handler.

## See Also

### Getting the activity information

- [activityCategory](activitycategory.md): The category of the activity, which may be used to group activities in the UI.
- [UIActivity.Category](category.md): An enumeration that defines categories of activities.
- [UIActivity.ActivityType](activitytype-swift.struct.md): A structure that describes the types of activities for which the system has built-in support.
- [activityTitle](activitytitle.md): A user-readable string that describes the service.
- [activityImage](activityimage.md): An image that identifies the service to the user.

# activityType (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The type of service being provided.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) UIActivityType activityType;
```

<a id="Discussion"></a>

## Discussion

The default value is `nil`. Subclasses may override this property to return a custom activity type that’s reported to the [completionWithItemsHandler](../uiactivityviewcontroller/completionwithitemshandler-swift.property.md) completion handler.

## See Also

### Getting the activity information

- [activityCategory](activitycategory.md): The category of the activity, which may be used to group activities in the UI.
- [UIActivityCategory](category.md): An enumeration that defines categories of activities.
- [UIActivityType](activitytype-swift.struct.md): A structure that describes the types of activities for which the system has built-in support.
- [activityTitle](activitytitle.md): A user-readable string that describes the service.
- [activityImage](activityimage.md): An image that identifies the service to the user.
