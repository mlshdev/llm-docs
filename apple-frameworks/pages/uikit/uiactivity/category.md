> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiactivity/category](https://developer.apple.com/documentation/uikit/uiactivity/category)

# UIActivity.Category (Swift)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

An enumeration that defines categories of activities.

## Declaration

```swift
enum Category
```

<a id="overview"></a>

## Overview

Activities have a defined category, and the activity UI may show activities grouped by category.

## Topics

### Constants

- [UIActivity.Category.action](category/action.md): Activities whose primary purpose is to take an action on the selected item, like copying an image or saving it to the camera roll.
- [UIActivity.Category.share](category/share.md): Activities whose primary purpose is to share the selected item, like sending an image by email.

### Initializers

- [init(rawValue:)](category/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Getting the activity information

- [activityCategory](activitycategory.md): The category of the activity, which may be used to group activities in the UI.
- [activityType](activitytype-swift.property.md): The type of service being provided.
- [UIActivity.ActivityType](activitytype-swift.struct.md): A structure that describes the types of activities for which the system has built-in support.
- [activityTitle](activitytitle.md): A user-readable string that describes the service.
- [activityImage](activityimage.md): An image that identifies the service to the user.

# UIActivityCategory (Objective-C)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

An enumeration that defines categories of activities.

## Declaration

```objectivec
enum UIActivityCategory : NSInteger;
```

<a id="overview"></a>

## Overview

Activities have a defined category, and the activity UI may show activities grouped by category.

## Topics

### Constants

- [UIActivityCategoryAction](category/action.md): Activities whose primary purpose is to take an action on the selected item, like copying an image or saving it to the camera roll.
- [UIActivityCategoryShare](category/share.md): Activities whose primary purpose is to share the selected item, like sending an image by email.

## See Also

### Getting the activity information

- [activityCategory](activitycategory.md): The category of the activity, which may be used to group activities in the UI.
- [activityType](activitytype-swift.property.md): The type of service being provided.
- [UIActivityType](activitytype-swift.struct.md): A structure that describes the types of activities for which the system has built-in support.
- [activityTitle](activitytitle.md): A user-readable string that describes the service.
- [activityImage](activityimage.md): An image that identifies the service to the user.
