> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usernotifications/unnotificationaction/identifier](https://developer.apple.com/documentation/usernotifications/unnotificationaction/identifier)

# identifier (Swift)

**Framework:** User Notifications  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · visionOS 1.0+ · watchOS 3.0+

The unique string that your app uses to identify the action.

## Declaration

```swift
var identifier: String { get }
```

<a id="Discussion"></a>

## Discussion

When the user selects an action, the system reports the value of this string to your app. Because your app handles all actions by using a single delegate method, the identifier strings for all of your app’s actions must be unique.

## See Also

### Getting Information

- [title](title.md): The localized string to use as the title of the action.
- [icon](icon.md): The icon associated with the action.

# identifier (Objective-C)

**Framework:** User Notifications  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · visionOS 1.0+ · watchOS 3.0+

The unique string that your app uses to identify the action.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSString * identifier;
```

```objectivec
@property (atomic, copy, readonly) NSString * identifier;
```

<a id="Discussion"></a>

## Discussion

When the user selects an action, the system reports the value of this string to your app. Because your app handles all actions by using a single delegate method, the identifier strings for all of your app’s actions must be unique.

## See Also

### Getting Information

- [title](title.md): The localized string to use as the title of the action.
- [icon](icon.md): The icon associated with the action.
