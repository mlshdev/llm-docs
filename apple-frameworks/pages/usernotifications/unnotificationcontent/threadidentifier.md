> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usernotifications/unnotificationcontent/threadidentifier](https://developer.apple.com/documentation/usernotifications/unnotificationcontent/threadidentifier)

# threadIdentifier (Swift)

**Framework:** User Notifications  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · visionOS 1.0+ · watchOS 3.0+

The identifier that groups related notifications.

## Declaration

```swift
var threadIdentifier: String { get }
```

<a id="Discussion"></a>

## Discussion

For remote notifications, the system sets this property to the value of the `thread-id` key in the `aps` dictionary.

## See Also

### Retrieving group information

- [categoryIdentifier](categoryidentifier.md): The identifier of the notification’s category.
- [summaryArgument](summaryargument.md): Deprecated. The text the system adds to the notification summary to provide additional context.
- [summaryArgumentCount](summaryargumentcount.md): Deprecated. The number the system adds to the notification summary when the notification represents multiple items.

# threadIdentifier (Objective-C)

**Framework:** User Notifications  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · visionOS 1.0+ · watchOS 3.0+

The identifier that groups related notifications.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSString * threadIdentifier;
```

```objectivec
@property (atomic, copy, readonly) NSString * threadIdentifier;
```

<a id="Discussion"></a>

## Discussion

For remote notifications, the system sets this property to the value of the `thread-id` key in the `aps` dictionary.

## See Also

### Retrieving group information

- [categoryIdentifier](categoryidentifier.md): The identifier of the notification’s category.
- [summaryArgument](summaryargument.md): Deprecated. The text the system adds to the notification summary to provide additional context.
- [summaryArgumentCount](summaryargumentcount.md): Deprecated. The number the system adds to the notification summary when the notification represents multiple items.
