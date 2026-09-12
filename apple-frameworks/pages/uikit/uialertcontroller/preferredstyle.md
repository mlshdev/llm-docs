> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uialertcontroller/preferredstyle](https://developer.apple.com/documentation/uikit/uialertcontroller/preferredstyle)

# preferredStyle (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The style of the alert controller.

## Declaration

```swift
var preferredStyle: UIAlertController.Style { get }
```

<a id="Discussion"></a>

## Discussion

The value of this property is set to the value you specified in the [init(title:message:preferredStyle:)](init%28title_message_preferredstyle_%29.md) method. This value determines how the alert is displayed onscreen.

## See Also

### Configuring the alert

- [title](title.md): The title of the alert.
- [message](message.md): Descriptive text that provides more details about the reason for the alert.
- [UIAlertController.Style](style.md): Constants indicating the type of alert to display.

# preferredStyle (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The style of the alert controller.

## Declaration

```objectivec
@property (nonatomic, readonly) UIAlertControllerStyle preferredStyle;
```

<a id="Discussion"></a>

## Discussion

The value of this property is set to the value you specified in the [alertControllerWithTitle:message:preferredStyle:](init%28title_message_preferredstyle_%29.md) method. This value determines how the alert is displayed onscreen.

## See Also

### Configuring the alert

- [title](title.md): The title of the alert.
- [message](message.md): Descriptive text that provides more details about the reason for the alert.
- [UIAlertControllerStyle](style.md): Constants indicating the type of alert to display.
