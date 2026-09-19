> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/usernotifications/unmutablenotificationcontent/filtercriteria

# filterCriteria (Swift)

**Framework:** User Notifications  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

The criteria the system evaluates to determine if it displays the notification in the current Focus.

## Declaration

```swift
var filterCriteria: String? { get set }
```

<a id="Discussion"></a>

## Discussion

For more information, see [SetFocusFilterIntent](../../appintents/setfocusfilterintent.md).

## See Also

### Integrating with the system

- [sound](sound.md): The sound that plays when the system delivers the notification.
- [interruptionLevel](interruptionlevel.md): The notification’s importance and required delivery timing.
- [UNNotificationInterruptionLevel](../unnotificationinterruptionlevel.md): Constants that indicate the importance and delivery timing of a notification.
- [relevanceScore](relevancescore.md): The score the system uses to determine if the notification is the summary’s featured notification.

# filterCriteria (Objective-C)

**Framework:** User Notifications  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

The criteria the system evaluates to determine if it displays the notification in the current Focus.

## Declaration

```objectivec
@property (nonatomic, copy, readwrite, nullable) NSString * filterCriteria;
```

```objectivec
@property (atomic, copy, readwrite, nullable) NSString * filterCriteria;
```

<a id="Discussion"></a>

## Discussion

For more information, see [SetFocusFilterIntent](../../appintents/setfocusfilterintent.md).

## See Also

### Integrating with the system

- [sound](sound.md): The sound that plays when the system delivers the notification.
- [interruptionLevel](interruptionlevel.md): The notification’s importance and required delivery timing.
- [UNNotificationInterruptionLevel](../unnotificationinterruptionlevel.md): Constants that indicate the importance and delivery timing of a notification.
- [relevanceScore](relevancescore.md): The score the system uses to determine if the notification is the summary’s featured notification.
