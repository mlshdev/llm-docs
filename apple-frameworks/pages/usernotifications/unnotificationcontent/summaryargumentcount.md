> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usernotifications/unnotificationcontent/summaryargumentcount](https://developer.apple.com/documentation/usernotifications/unnotificationcontent/summaryargumentcount)

# summaryArgumentCount (Swift)

**Framework:** User Notifications  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ (deprecated in 15.0) · iPadOS 12.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · macOS 10.14+ · tvOS 12.0+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 5.0+ (deprecated in 8.0)

The number the system adds to the notification summary when the notification represents multiple items.

> summaryArgumentCount is ignored

## Declaration

```swift
var summaryArgumentCount: Int { get }
```

## See Also

### Retrieving group information

- [threadIdentifier](threadidentifier.md): The identifier that groups related notifications.
- [categoryIdentifier](categoryidentifier.md): The identifier of the notification’s category.
- [summaryArgument](summaryargument.md): Deprecated. The text the system adds to the notification summary to provide additional context.

# summaryArgumentCount (Objective-C)

**Framework:** User Notifications  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ (deprecated in 15.0) · iPadOS 12.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · macOS 10.14+ · tvOS 12.0+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 5.0+ (deprecated in 8.0)

The number the system adds to the notification summary when the notification represents multiple items.

> summaryArgumentCount is ignored

## Declaration

```objectivec
@property (nonatomic, assign, readonly) NSUInteger summaryArgumentCount;
```

```objectivec
@property (atomic, assign, readonly) NSUInteger summaryArgumentCount;
```

## See Also

### Retrieving group information

- [threadIdentifier](threadidentifier.md): The identifier that groups related notifications.
- [categoryIdentifier](categoryidentifier.md): The identifier of the notification’s category.
- [summaryArgument](summaryargument.md): Deprecated. The text the system adds to the notification summary to provide additional context.
