> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiactivityitemprovider/activitytype](https://developer.apple.com/documentation/uikit/uiactivityitemprovider/activitytype)

# activityType (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The type of the activity object that is expecting the data.

## Declaration

```swift
var activityType: UIActivity.ActivityType? { get }
```

<a id="Discussion"></a>

## Discussion

The value of this property is `nil` until the user selects an activity. At that time, the value is set and the provider object is submitted to a queue for execution. Thus, you should access this value only after your object’s [item](item.md) method is called.

## See Also

### Accessing the provider attributes

- [item](item.md): Generates and returns the actual data-bearing object.
- [placeholderItem](placeholderitem.md): The placeholder object you specified at initialization time.

# activityType (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The type of the activity object that is expecting the data.

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) UIActivityType activityType;
```

<a id="Discussion"></a>

## Discussion

The value of this property is `nil` until the user selects an activity. At that time, the value is set and the provider object is submitted to a queue for execution. Thus, you should access this value only after your object’s [item](item.md) method is called.

## See Also

### Accessing the provider attributes

- [item](item.md): Generates and returns the actual data-bearing object.
- [placeholderItem](placeholderitem.md): The placeholder object you specified at initialization time.
