> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usernotifications/unnotificationaction/title](https://developer.apple.com/documentation/usernotifications/unnotificationaction/title)

# title (Swift)

**Framework:** User Notifications  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · visionOS 1.0+ · watchOS 3.0+

The localized string to use as the title of the action.

## Declaration

```swift
var title: String { get }
```

<a id="Discussion"></a>

## Discussion

The system displays this string as the title of the button that the user taps or selects in the notification interface.

## See Also

### Getting Information

- [identifier](identifier.md): The unique string that your app uses to identify the action.
- [icon](icon.md): The icon associated with the action.

# title (Objective-C)

**Framework:** User Notifications  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · visionOS 1.0+ · watchOS 3.0+

The localized string to use as the title of the action.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSString * title;
```

```objectivec
@property (atomic, copy, readonly) NSString * title;
```

<a id="Discussion"></a>

## Discussion

The system displays this string as the title of the button that the user taps or selects in the notification interface.

## See Also

### Getting Information

- [identifier](identifier.md): The unique string that your app uses to identify the action.
- [icon](icon.md): The icon associated with the action.
