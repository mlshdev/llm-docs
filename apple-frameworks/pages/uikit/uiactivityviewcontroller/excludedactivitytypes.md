> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiactivityviewcontroller/excludedactivitytypes](https://developer.apple.com/documentation/uikit/uiactivityviewcontroller/excludedactivitytypes)

# excludedActivityTypes (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The list of services that should not be displayed.

## Declaration

```swift
var excludedActivityTypes: [UIActivity.ActivityType]? { get set }
```

<a id="Discussion"></a>

## Discussion

This property contains an array of strings, each of which corresponds to the value you would find in the [activityType](../uiactivity/activitytype-swift.property.md) parameter of a [UIActivity](../uiactivity.md) object. Each string you specify indicates a service that you do not want displayed to the user. You might exclude services that you feel are not suitable for the content you are providing. For example, you might not want to allow the user to print a specific image. If the value of this property is `nil`, no services are excluded.

This value of this property is `nil` by default.

# excludedActivityTypes (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The list of services that should not be displayed.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) NSArray<NSString *> * excludedActivityTypes;
```

<a id="Discussion"></a>

## Discussion

This property contains an array of strings, each of which corresponds to the value you would find in the [activityType](../uiactivity/activitytype-swift.property.md) parameter of a [UIActivity](../uiactivity.md) object. Each string you specify indicates a service that you do not want displayed to the user. You might exclude services that you feel are not suitable for the content you are providing. For example, you might not want to allow the user to print a specific image. If the value of this property is `nil`, no services are excluded.

This value of this property is `nil` by default.
