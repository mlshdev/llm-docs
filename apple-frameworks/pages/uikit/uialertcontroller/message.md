> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uialertcontroller/message](https://developer.apple.com/documentation/uikit/uialertcontroller/message)

# message (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Descriptive text that provides more details about the reason for the alert.

## Declaration

```swift
var message: String? { get set }
```

<a id="Discussion"></a>

## Discussion

The message string is displayed below the title string and is less prominent. Use this string to provide additional context about the reason for the alert or about the actions that the user might take.

## See Also

### Configuring the alert

- [title](title.md): The title of the alert.
- [preferredStyle](preferredstyle.md): The style of the alert controller.
- [UIAlertController.Style](style.md): Constants indicating the type of alert to display.

# message (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Descriptive text that provides more details about the reason for the alert.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) NSString * message;
```

<a id="Discussion"></a>

## Discussion

The message string is displayed below the title string and is less prominent. Use this string to provide additional context about the reason for the alert or about the actions that the user might take.

## See Also

### Configuring the alert

- [title](title.md): The title of the alert.
- [preferredStyle](preferredstyle.md): The style of the alert controller.
- [UIAlertControllerStyle](style.md): Constants indicating the type of alert to display.
