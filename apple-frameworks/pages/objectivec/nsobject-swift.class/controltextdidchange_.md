> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/objectivec/nsobject-swift.class/controltextdidchange:](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/controltextdidchange:)

# controlTextDidChange:

**Interface language:** Objective-C

**Framework:** Objective-C Runtime  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 11.0)

Sent when the text in the receiving control changes.

## Declaration

```objectivec
- (void) controlTextDidChange:(NSNotification *) obj;
```

## Parameters

- `obj`: The notification object. The name of the notification is always [NSControlTextDidChangeNotification](https://developer.apple.com/documentation/appkit/nscontrol/textdidchangenotification).

<a id="Discussion"></a>

## Discussion

This method is invoked when text in a control such as a text field or form changes. The control posts a [NSControlTextDidChangeNotification](https://developer.apple.com/documentation/appkit/nscontrol/textdidchangenotification) notification, and if the control’s delegate implements this method, it is automatically registered to receive the notification. Use the key `@"NSFieldEditor"` to obtain the field editor from the `userInfo` dictionary of the notification object.
