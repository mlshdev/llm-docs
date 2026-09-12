> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usernotifications/unmutablenotificationcontent/subtitle](https://developer.apple.com/documentation/usernotifications/unmutablenotificationcontent/subtitle)

# subtitle (Swift)

**Framework:** User Notifications  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · visionOS 1.0+ · watchOS 3.0+

The localized text that provides the notification’s secondary description.

## Declaration

```swift
var subtitle: String { get set }
```

<a id="Discussion"></a>

## Discussion

Use this property to specify additional context about the purpose of the notification. Subtitles offer additional context in cases where the title alone isn’t clear. Subtitles aren’t displayed in all cases. If your app isn’t authorized to display alert-based notifications, the system ignores this property.

## See Also

### Providing the primary content

- [title](title.md): The localized text that provides the notification’s primary description.
- [body](body.md): The localized text that provides the notification’s main content.

# subtitle (Objective-C)

**Framework:** User Notifications  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · visionOS 1.0+ · watchOS 3.0+

The localized text that provides the notification’s secondary description.

## Declaration

```objectivec
@property (nonatomic, copy, readwrite) NSString * subtitle;
```

```objectivec
@property (atomic, copy, readwrite) NSString * subtitle;
```

<a id="Discussion"></a>

## Discussion

Use this property to specify additional context about the purpose of the notification. Subtitles offer additional context in cases where the title alone isn’t clear. Subtitles aren’t displayed in all cases. If your app isn’t authorized to display alert-based notifications, the system ignores this property.

## See Also

### Providing the primary content

- [title](title.md): The localized text that provides the notification’s primary description.
- [body](body.md): The localized text that provides the notification’s main content.
