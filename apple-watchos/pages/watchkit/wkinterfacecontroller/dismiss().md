> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchkit/wkinterfacecontroller/dismiss()](https://developer.apple.com/documentation/watchkit/wkinterfacecontroller/dismiss())

# dismiss() (Swift)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS 2.0+

Dismisses the current interface controller from the screen.

## Declaration

```swift
func dismiss()
```

<a id="Discussion"></a>

## Discussion

Call this method when you want to dismiss an interface controller that you presented modally. Always call this method from your WatchKit extension’s main thread.

## See Also

### Presenting interface controllers modally

- [presentController(withName:context:)](presentcontroller%28withname_context_%29.md): Presents a single interface controller modally.
- [presentController(withNames:contexts:)](presentcontroller%28withnames_contexts_%29.md): Presents a page-based interface modally.
- [presentController(withNamesAndContexts:)](presentcontroller%28withnamesandcontexts_%29.md): Presents a page-based interface modally.
- [presentAlert(withTitle:message:preferredStyle:actions:)](presentalert%28withtitle_message_preferredstyle_actions_%29.md): Presents an alert or action sheet over the current interface controller.
- [WKAlertControllerStyle](../wkalertcontrollerstyle.md): Constants indicating the styles for standard system alerts.

# dismissController (Objective-C)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS 2.0+

Dismisses the current interface controller from the screen.

## Declaration

```objectivec
- (void) dismissController;
```

<a id="Discussion"></a>

## Discussion

Call this method when you want to dismiss an interface controller that you presented modally. Always call this method from your WatchKit extension’s main thread.

## See Also

### Presenting interface controllers modally

- [presentControllerWithName:context:](presentcontroller%28withname_context_%29.md): Presents a single interface controller modally.
- [presentControllerWithNames:contexts:](presentcontroller%28withnames_contexts_%29.md): Presents a page-based interface modally.
- [presentAlertControllerWithTitle:message:preferredStyle:actions:](presentalert%28withtitle_message_preferredstyle_actions_%29.md): Presents an alert or action sheet over the current interface controller.
- [WKAlertControllerStyle](../wkalertcontrollerstyle.md): Constants indicating the styles for standard system alerts.
