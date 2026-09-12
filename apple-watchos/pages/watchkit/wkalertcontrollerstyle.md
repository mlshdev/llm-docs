> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchkit/wkalertcontrollerstyle](https://developer.apple.com/documentation/watchkit/wkalertcontrollerstyle)

# WKAlertControllerStyle (Swift)

**Framework:** WatchKit  
**Kind:** Enumeration  
**Availability:** watchOS 2.0+

Constants indicating the styles for standard system alerts.

## Declaration

```swift
enum WKAlertControllerStyle
```

## Topics

### Constants

- [WKAlertControllerStyle.alert](wkalertcontrollerstyle/alert.md): An alert sheet with stacked buttons. The alert sheet includes a default Cancel button at the bottom of the sheet. You can add other buttons, which are placed above the Cancel button.
- [WKAlertControllerStyle.sideBySideButtonsAlert](wkalertcontrollerstyle/sidebysidebuttonsalert.md): An alert sheet with side-by-side buttons.
- [WKAlertControllerStyle.actionSheet](wkalertcontrollerstyle/actionsheet.md): An action sheet style. Action sheets are modal sheets that can be dismissed using the Cancel button in the top-left corner of the sheet. You can also add one or two custom buttons to perform related tasks.

### Initializers

- [init(rawValue:)](wkalertcontrollerstyle/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Presenting interface controllers modally

- [presentController(withName:context:)](wkinterfacecontroller/presentcontroller%28withname_context_%29.md): Presents a single interface controller modally.
- [presentController(withNames:contexts:)](wkinterfacecontroller/presentcontroller%28withnames_contexts_%29.md): Presents a page-based interface modally.
- [presentController(withNamesAndContexts:)](wkinterfacecontroller/presentcontroller%28withnamesandcontexts_%29.md): Presents a page-based interface modally.
- [presentAlert(withTitle:message:preferredStyle:actions:)](wkinterfacecontroller/presentalert%28withtitle_message_preferredstyle_actions_%29.md): Presents an alert or action sheet over the current interface controller.
- [dismiss()](wkinterfacecontroller/dismiss%28%29.md): Dismisses the current interface controller from the screen.

# WKAlertControllerStyle (Objective-C)

**Framework:** WatchKit  
**Kind:** Enumeration  
**Availability:** watchOS 2.0+

Constants indicating the styles for standard system alerts.

## Declaration

```objectivec
enum WKAlertControllerStyle : NSInteger;
```

## Topics

### Constants

- [WKAlertControllerStyleAlert](wkalertcontrollerstyle/alert.md): An alert sheet with stacked buttons. The alert sheet includes a default Cancel button at the bottom of the sheet. You can add other buttons, which are placed above the Cancel button.
- [WKAlertControllerStyleSideBySideButtonsAlert](wkalertcontrollerstyle/sidebysidebuttonsalert.md): An alert sheet with side-by-side buttons.
- [WKAlertControllerStyleActionSheet](wkalertcontrollerstyle/actionsheet.md): An action sheet style. Action sheets are modal sheets that can be dismissed using the Cancel button in the top-left corner of the sheet. You can also add one or two custom buttons to perform related tasks.

## See Also

### Presenting interface controllers modally

- [presentControllerWithName:context:](wkinterfacecontroller/presentcontroller%28withname_context_%29.md): Presents a single interface controller modally.
- [presentControllerWithNames:contexts:](wkinterfacecontroller/presentcontroller%28withnames_contexts_%29.md): Presents a page-based interface modally.
- [presentAlertControllerWithTitle:message:preferredStyle:actions:](wkinterfacecontroller/presentalert%28withtitle_message_preferredstyle_actions_%29.md): Presents an alert or action sheet over the current interface controller.
- [dismissController](wkinterfacecontroller/dismiss%28%29.md): Dismisses the current interface controller from the screen.
