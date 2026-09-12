> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uialertcontroller/title](https://developer.apple.com/documentation/uikit/uialertcontroller/title)

# title (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The title of the alert.

## Declaration

```swift
var title: String? { get set }
```

<a id="Discussion"></a>

## Discussion

The title string is displayed prominently in the alert or action sheet. You should use this string to get the user’s attention and communicate the reason for displaying the alert.

## See Also

### Configuring the alert

- [message](message.md): Descriptive text that provides more details about the reason for the alert.
- [preferredStyle](preferredstyle.md): The style of the alert controller.
- [UIAlertController.Style](style.md): Constants indicating the type of alert to display.

# title (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The title of the alert.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) NSString * title;
```

<a id="Discussion"></a>

## Discussion

The title string is displayed prominently in the alert or action sheet. You should use this string to get the user’s attention and communicate the reason for displaying the alert.

## See Also

### Configuring the alert

- [message](message.md): Descriptive text that provides more details about the reason for the alert.
- [preferredStyle](preferredstyle.md): The style of the alert controller.
- [UIAlertControllerStyle](style.md): Constants indicating the type of alert to display.
