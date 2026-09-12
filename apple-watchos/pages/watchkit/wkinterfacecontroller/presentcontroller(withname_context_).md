> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchkit/wkinterfacecontroller/presentcontroller(withname:context:)](https://developer.apple.com/documentation/watchkit/wkinterfacecontroller/presentcontroller(withname:context:))

# presentController(withName:context:) (Swift)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS 2.0+

Presents a single interface controller modally.

## Declaration

```swift
func presentController(withName name: String, context: Any?)
```

## Parameters

- `name`: The name of the interface controller you want to display. In your storyboard, the name of an interface controller is stored in the object’s Identifier property, which is located in the attributes inspector. This parameter must not be `nil`.
- `context`: An object to pass to the new interface controller. Use the object in this parameter to communicate important information to the new interface controller, such as the data to display or any relevant state information. You may specify `nil` for this parameter, but doing so is not recommended.

## Mentioned In

- [Navigating Between Scenes](../navigating-between-scenes.md)

<a id="Discussion"></a>

## Discussion

After calling this method, the WatchKit extension loads and initializes the new interface controller and animates it into position on top of the current interface controller. A modal interface slides up from the bottom of the screen and completely covers the previous interface.

The title of the modal interface is set to the string `Cancel` by default. Change the title using the [setTitle(\_:)](settitle%28__%29.md) method. Tapping the title dismisses the interface automatically. To dismiss the interface programmatically, call the [dismiss()](dismiss%28%29.md) method.

Always call this method from your WatchKit extension’s main thread.

## See Also

### Presenting interface controllers modally

- [presentController(withNames:contexts:)](presentcontroller%28withnames_contexts_%29.md): Presents a page-based interface modally.
- [presentController(withNamesAndContexts:)](presentcontroller%28withnamesandcontexts_%29.md): Presents a page-based interface modally.
- [presentAlert(withTitle:message:preferredStyle:actions:)](presentalert%28withtitle_message_preferredstyle_actions_%29.md): Presents an alert or action sheet over the current interface controller.
- [WKAlertControllerStyle](../wkalertcontrollerstyle.md): Constants indicating the styles for standard system alerts.
- [dismiss()](dismiss%28%29.md): Dismisses the current interface controller from the screen.

# presentControllerWithName:context: (Objective-C)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS 2.0+

Presents a single interface controller modally.

## Declaration

```objectivec
- (void) presentControllerWithName:(NSString *) name context:(id) context;
```

## Parameters

- `name`: The name of the interface controller you want to display. In your storyboard, the name of an interface controller is stored in the object’s Identifier property, which is located in the attributes inspector. This parameter must not be `nil`.
- `context`: An object to pass to the new interface controller. Use the object in this parameter to communicate important information to the new interface controller, such as the data to display or any relevant state information. You may specify `nil` for this parameter, but doing so is not recommended.

## Mentioned In

- [Navigating Between Scenes](../navigating-between-scenes.md)

<a id="Discussion"></a>

## Discussion

After calling this method, the WatchKit extension loads and initializes the new interface controller and animates it into position on top of the current interface controller. A modal interface slides up from the bottom of the screen and completely covers the previous interface.

The title of the modal interface is set to the string `Cancel` by default. Change the title using the [setTitle:](settitle%28__%29.md) method. Tapping the title dismisses the interface automatically. To dismiss the interface programmatically, call the [dismissController](dismiss%28%29.md) method.

Always call this method from your WatchKit extension’s main thread.

## See Also

### Presenting interface controllers modally

- [presentControllerWithNames:contexts:](presentcontroller%28withnames_contexts_%29.md): Presents a page-based interface modally.
- [presentAlertControllerWithTitle:message:preferredStyle:actions:](presentalert%28withtitle_message_preferredstyle_actions_%29.md): Presents an alert or action sheet over the current interface controller.
- [WKAlertControllerStyle](../wkalertcontrollerstyle.md): Constants indicating the styles for standard system alerts.
- [dismissController](dismiss%28%29.md): Dismisses the current interface controller from the screen.
