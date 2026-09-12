> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usernotifications/unnotificationcontent/categoryidentifier](https://developer.apple.com/documentation/usernotifications/unnotificationcontent/categoryidentifier)

# categoryIdentifier (Swift)

**Framework:** User Notifications  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · visionOS 1.0+ · watchOS 3.0+

The identifier of the notification’s category.

## Declaration

```swift
var categoryIdentifier: String { get }
```

<a id="Discussion"></a>

## Discussion

Use notification types to distinguish between the different types of notifications your app supports. You use this support primarily to create actionable notifications with custom action buttons, and to redirect your notifications through either your notification service app extension or your notification content app extension.

For remote notifications, the system sets this property to the value of the `category` key in the `aps` dictionary.

## See Also

### Retrieving group information

- [threadIdentifier](threadidentifier.md): The identifier that groups related notifications.
- [summaryArgument](summaryargument.md): Deprecated. The text the system adds to the notification summary to provide additional context.
- [summaryArgumentCount](summaryargumentcount.md): Deprecated. The number the system adds to the notification summary when the notification represents multiple items.

# categoryIdentifier (Objective-C)

**Framework:** User Notifications  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · visionOS 1.0+ · watchOS 3.0+

The identifier of the notification’s category.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSString * categoryIdentifier;
```

```objectivec
@property (atomic, copy, readonly) NSString * categoryIdentifier;
```

<a id="Discussion"></a>

## Discussion

Use notification types to distinguish between the different types of notifications your app supports. You use this support primarily to create actionable notifications with custom action buttons, and to redirect your notifications through either your notification service app extension or your notification content app extension.

For remote notifications, the system sets this property to the value of the `category` key in the `aps` dictionary.

## See Also

### Retrieving group information

- [threadIdentifier](threadidentifier.md): The identifier that groups related notifications.
- [summaryArgument](summaryargument.md): Deprecated. The text the system adds to the notification summary to provide additional context.
- [summaryArgumentCount](summaryargumentcount.md): Deprecated. The number the system adds to the notification summary when the notification represents multiple items.
