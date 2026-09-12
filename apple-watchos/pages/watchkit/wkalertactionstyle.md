> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchkit/wkalertactionstyle](https://developer.apple.com/documentation/watchkit/wkalertactionstyle)

# WKAlertActionStyle (Swift)

**Framework:** WatchKit  
**Kind:** Enumeration  
**Availability:** watchOS 2.0+

Constants indicating the style of the action button.

## Declaration

```swift
enum WKAlertActionStyle
```

## Topics

### Constants

- [WKAlertActionStyle.default](wkalertactionstyle/default.md): The default style. Use this for most of your buttons.
- [WKAlertActionStyle.cancel](wkalertactionstyle/cancel.md): A cancel action. Use this style for an action that cancels the operation without making changes.
- [WKAlertActionStyle.destructive](wkalertactionstyle/destructive.md): An action that causes destructive behavior to the user’s data or the app. Destructive actions are styled in a way that warns the user of the destructive nature of the action.

### Initializers

- [init(rawValue:)](wkalertactionstyle/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Constants

- [WKAlertActionHandler](wkalertactionhandler.md): A block to perform in response to an action.

# WKAlertActionStyle (Objective-C)

**Framework:** WatchKit  
**Kind:** Enumeration  
**Availability:** watchOS 2.0+

Constants indicating the style of the action button.

## Declaration

```objectivec
enum WKAlertActionStyle : NSInteger;
```

## Topics

### Constants

- [WKAlertActionStyleDefault](wkalertactionstyle/default.md): The default style. Use this for most of your buttons.
- [WKAlertActionStyleCancel](wkalertactionstyle/cancel.md): A cancel action. Use this style for an action that cancels the operation without making changes.
- [WKAlertActionStyleDestructive](wkalertactionstyle/destructive.md): An action that causes destructive behavior to the user’s data or the app. Destructive actions are styled in a way that warns the user of the destructive nature of the action.

## See Also

### Constants

- [WKAlertActionHandler](wkalertactionhandler.md): A block to perform in response to an action.
