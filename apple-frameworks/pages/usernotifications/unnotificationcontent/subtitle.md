> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usernotifications/unnotificationcontent/subtitle](https://developer.apple.com/documentation/usernotifications/unnotificationcontent/subtitle)

# subtitle (Swift)

**Framework:** User Notifications  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · visionOS 1.0+ · watchOS 3.0+

The localized text that provides the notification’s secondary description.

## Declaration

```swift
var subtitle: String { get }
```

<a id="Discussion"></a>

## Discussion

Subtitles offer additional context in cases where the title alone isn’t clear. Subtitles aren’t displayed in all cases. If your app isn’t authorized to display alert-based notifications, the system ignores this property.

## See Also

### Accessing the primary content

- [title](title.md): The localized text that provides the notification’s primary description.
- [body](body.md): The localized text that provides the notification’s main content.

# subtitle (Objective-C)

**Framework:** User Notifications  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · visionOS 1.0+ · watchOS 3.0+

The localized text that provides the notification’s secondary description.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSString * subtitle;
```

```objectivec
@property (atomic, copy, readonly) NSString * subtitle;
```

<a id="Discussion"></a>

## Discussion

Subtitles offer additional context in cases where the title alone isn’t clear. Subtitles aren’t displayed in all cases. If your app isn’t authorized to display alert-based notifications, the system ignores this property.

## See Also

### Accessing the primary content

- [title](title.md): The localized text that provides the notification’s primary description.
- [body](body.md): The localized text that provides the notification’s main content.
