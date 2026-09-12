> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usernotifications/unmutablenotificationcontent/summaryargument](https://developer.apple.com/documentation/usernotifications/unmutablenotificationcontent/summaryargument)

# summaryArgument (Swift)

**Framework:** User Notifications  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ (deprecated in 15.0) · iPadOS 12.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · macOS 10.14+ · tvOS 12.0+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 5.0+ (deprecated in 8.0)

The text the system adds to the notification summary to provide additional context.

> summaryArgument is ignored

## Declaration

```swift
var summaryArgument: String { get set }
```

## See Also

### Grouping notifications

- [threadIdentifier](threadidentifier.md): The identifier that groups related notifications.
- [categoryIdentifier](categoryidentifier.md): The identifier of the notification’s category.
- [summaryArgumentCount](summaryargumentcount.md): Deprecated. The number the system adds to the notification summary when the notification represents multiple items.

# summaryArgument (Objective-C)

**Framework:** User Notifications  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ (deprecated in 15.0) · iPadOS 12.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · macOS 10.14+ · tvOS 12.0+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 5.0+ (deprecated in 8.0)

The text the system adds to the notification summary to provide additional context.

> summaryArgument is ignored

## Declaration

```objectivec
@property (nonatomic, copy, readwrite) NSString * summaryArgument;
```

```objectivec
@property (atomic, copy, readwrite) NSString * summaryArgument;
```

## See Also

### Grouping notifications

- [threadIdentifier](threadidentifier.md): The identifier that groups related notifications.
- [categoryIdentifier](categoryidentifier.md): The identifier of the notification’s category.
- [summaryArgumentCount](summaryargumentcount.md): Deprecated. The number the system adds to the notification summary when the notification represents multiple items.
