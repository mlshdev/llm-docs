> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiactivity/activitytitle](https://developer.apple.com/documentation/uikit/uiactivity/activitytitle)

# activityTitle (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A user-readable string that describes the service.

## Declaration

```swift
var activityTitle: String? { get }
```

<a id="return-value"></a>

## Return Value

A string that describes the service.

<a id="Discussion"></a>

## Discussion

The default value is `nil`. Subclasses must override this property to return a user-readable string that describes the service. The string you return should be localized.

## See Also

### Getting the activity information

- [activityCategory](activitycategory.md): The category of the activity, which may be used to group activities in the UI.
- [UIActivity.Category](category.md): An enumeration that defines categories of activities.
- [activityType](activitytype-swift.property.md): The type of service being provided.
- [UIActivity.ActivityType](activitytype-swift.struct.md): A structure that describes the types of activities for which the system has built-in support.
- [activityImage](activityimage.md): An image that identifies the service to the user.

# activityTitle (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A user-readable string that describes the service.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) NSString * activityTitle;
```

<a id="return-value"></a>

## Return Value

A string that describes the service.

<a id="Discussion"></a>

## Discussion

The default value is `nil`. Subclasses must override this property to return a user-readable string that describes the service. The string you return should be localized.

## See Also

### Getting the activity information

- [activityCategory](activitycategory.md): The category of the activity, which may be used to group activities in the UI.
- [UIActivityCategory](category.md): An enumeration that defines categories of activities.
- [activityType](activitytype-swift.property.md): The type of service being provided.
- [UIActivityType](activitytype-swift.struct.md): A structure that describes the types of activities for which the system has built-in support.
- [activityImage](activityimage.md): An image that identifies the service to the user.
