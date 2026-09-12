> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchkit/wkalertactionhandler](https://developer.apple.com/documentation/watchkit/wkalertactionhandler)

# WKAlertActionHandler (Swift)

**Framework:** WatchKit  
**Kind:** Type Alias  
**Availability:** watchOS

A block to perform in response to an action.

## Declaration

```swift
typealias WKAlertActionHandler = () -> Void
```

<a id="Discussion"></a>

## Discussion

This block takes no parameters and returns no value. You use this type of block to perform a task when one of your actions is selected by the user. Your block does not need to dismiss the alert or action sheet itself. WatchKit automatically dismisses the sheet when the user taps in any of your action buttons.

## See Also

### Constants

- [WKAlertActionStyle](wkalertactionstyle.md): Constants indicating the style of the action button.

# WKAlertActionHandler (Objective-C)

**Framework:** WatchKit  
**Kind:** Type Alias  
**Availability:** watchOS

A block to perform in response to an action.

## Declaration

```objectivec
typedef void (^)(void) WKAlertActionHandler;
```

<a id="Discussion"></a>

## Discussion

This block takes no parameters and returns no value. You use this type of block to perform a task when one of your actions is selected by the user. Your block does not need to dismiss the alert or action sheet itself. WatchKit automatically dismisses the sheet when the user taps in any of your action buttons.

## See Also

### Constants

- [WKAlertActionStyle](wkalertactionstyle.md): Constants indicating the style of the action button.
