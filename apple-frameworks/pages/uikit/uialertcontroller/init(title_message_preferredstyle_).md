> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uialertcontroller/init(title:message:preferredstyle:)](https://developer.apple.com/documentation/uikit/uialertcontroller/init(title:message:preferredstyle:))

# init(title:message:preferredStyle:) (Swift)

**Framework:** UIKit  
**Kind:** Initializer  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Creates and returns a view controller for displaying an alert.

## Declaration

```swift
convenience init(title: String?, message: String?, preferredStyle: UIAlertController.Style)
```

## Parameters

- `title`: The title of the alert. Use this string to get people’s attention and communicate the reason for the alert.
- `message`: Descriptive text that provides additional details about the reason for the alert.
- `preferredStyle`: The style to use when presenting the alert controller. Use this parameter to configure the alert controller as an action sheet or as a modal alert.

<a id="return-value"></a>

## Return Value

An initialized alert controller object.

<a id="Discussion"></a>

## Discussion

After creating the alert controller, configure any actions that you want people to be able to perform by calling the [addAction(\_:)](addaction%28__%29.md) method one or more times. When specifying a preferred style of [UIAlertController.Style.alert](style/alert.md), you may also configure one or more text fields to display in addition to the actions.

# alertControllerWithTitle:message:preferredStyle: (Objective-C)

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Creates and returns a view controller for displaying an alert.

## Declaration

```objectivec
+ (instancetype) alertControllerWithTitle:(NSString *) title message:(NSString *) message preferredStyle:(UIAlertControllerStyle) preferredStyle;
```

## Parameters

- `title`: The title of the alert. Use this string to get people’s attention and communicate the reason for the alert.
- `message`: Descriptive text that provides additional details about the reason for the alert.
- `preferredStyle`: The style to use when presenting the alert controller. Use this parameter to configure the alert controller as an action sheet or as a modal alert.

<a id="return-value"></a>

## Return Value

An initialized alert controller object.

<a id="Discussion"></a>

## Discussion

After creating the alert controller, configure any actions that you want people to be able to perform by calling the [addAction:](addaction%28__%29.md) method one or more times. When specifying a preferred style of [UIAlertControllerStyleAlert](style/alert.md), you may also configure one or more text fields to display in addition to the actions.
