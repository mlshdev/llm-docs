> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiactivity/activitycategory](https://developer.apple.com/documentation/uikit/uiactivity/activitycategory)

# activityCategory (Swift)

**Framework:** UIKit  
**Kind:** Type Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The category of the activity, which may be used to group activities in the UI.

## Declaration

```swift
class var activityCategory: UIActivity.Category { get }
```

<a id="return-value"></a>

## Return Value

The assigned category of the activity. The default implementation returns [UIActivity.Category.action](category/action.md).

<a id="Discussion"></a>

## Discussion

Override this property to define a different activity category for your custom activity.

## See Also

### Getting the activity information

- [UIActivity.Category](category.md): An enumeration that defines categories of activities.
- [activityType](activitytype-swift.property.md): The type of service being provided.
- [UIActivity.ActivityType](activitytype-swift.struct.md): A structure that describes the types of activities for which the system has built-in support.
- [activityTitle](activitytitle.md): A user-readable string that describes the service.
- [activityImage](activityimage.md): An image that identifies the service to the user.

# activityCategory (Objective-C)

**Framework:** UIKit  
**Kind:** Type Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The category of the activity, which may be used to group activities in the UI.

## Declaration

```objectivec
@property (class, nonatomic, readonly) UIActivityCategory activityCategory;
```

<a id="return-value"></a>

## Return Value

The assigned category of the activity. The default implementation returns [UIActivityCategoryAction](category/action.md).

<a id="Discussion"></a>

## Discussion

Override this property to define a different activity category for your custom activity.

## See Also

### Getting the activity information

- [UIActivityCategory](category.md): An enumeration that defines categories of activities.
- [activityType](activitytype-swift.property.md): The type of service being provided.
- [UIActivityType](activitytype-swift.struct.md): A structure that describes the types of activities for which the system has built-in support.
- [activityTitle](activitytitle.md): A user-readable string that describes the service.
- [activityImage](activityimage.md): An image that identifies the service to the user.
