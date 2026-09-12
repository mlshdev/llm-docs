> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usernotifications/unmutablenotificationcontent/threadidentifier](https://developer.apple.com/documentation/usernotifications/unmutablenotificationcontent/threadidentifier)

# threadIdentifier (Swift)

**Framework:** User Notifications  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · visionOS 1.0+ · watchOS 3.0+

The identifier that groups related notifications.

## Declaration

```swift
var threadIdentifier: String { get set }
```

## Mentioned In

- [Generating a remote notification](../generating-a-remote-notification.md)

<a id="Discussion"></a>

## Discussion

You may specify any value for the string, but assign the same thread identifier string to all notifications that you want to group together visually.

## See Also

### Grouping notifications

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
@property (nonatomic, copy, readwrite) NSString * threadIdentifier;
```

```objectivec
@property (atomic, copy, readwrite) NSString * threadIdentifier;
```

## Mentioned In

- [Generating a remote notification](../generating-a-remote-notification.md)

<a id="Discussion"></a>

## Discussion

You may specify any value for the string, but assign the same thread identifier string to all notifications that you want to group together visually.

## See Also

### Grouping notifications

- [categoryIdentifier](categoryidentifier.md): The identifier of the notification’s category.
- [summaryArgument](summaryargument.md): Deprecated. The text the system adds to the notification summary to provide additional context.
- [summaryArgumentCount](summaryargumentcount.md): Deprecated. The number the system adds to the notification summary when the notification represents multiple items.
