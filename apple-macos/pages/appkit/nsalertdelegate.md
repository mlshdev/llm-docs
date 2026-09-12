> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsalertdelegate](https://developer.apple.com/documentation/appkit/nsalertdelegate)

# NSAlertDelegate (Swift)

**Framework:** AppKit  
**Kind:** Protocol  
**Availability:** macOS

A set of optional methods implemented by the delegate of an [NSAlert](nsalert.md) object to respond to a user’s request for help.

## Declaration

```swift
protocol NSAlertDelegate : NSObjectProtocol
```

## Topics

### Displaying Help

- [alertShowHelp(\_:)](nsalertdelegate/alertshowhelp%28__%29.md): Sent to the delegate when the user clicks the alert’s help button. The delegate causes help to be displayed for an alert, directly or indirectly.

## Relationships

### Inherits From

- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Alerts

- [NSAlert](nsalert.md): A modal dialog or sheet attached to a document window.

# NSAlertDelegate (Objective-C)

**Framework:** AppKit  
**Kind:** Protocol  
**Availability:** macOS

A set of optional methods implemented by the delegate of an [NSAlert](nsalert.md) object to respond to a user’s request for help.

## Declaration

```objectivec
@protocol NSAlertDelegate <NSObject>
```

## Topics

### Displaying Help

- [alertShowHelp:](nsalertdelegate/alertshowhelp%28__%29.md): Sent to the delegate when the user clicks the alert’s help button. The delegate causes help to be displayed for an alert, directly or indirectly.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Alerts

- [NSAlert](nsalert.md): A modal dialog or sheet attached to a document window.
