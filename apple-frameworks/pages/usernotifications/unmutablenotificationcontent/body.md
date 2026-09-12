> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usernotifications/unmutablenotificationcontent/body](https://developer.apple.com/documentation/usernotifications/unmutablenotificationcontent/body)

# body (Swift)

**Framework:** User Notifications  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · visionOS 1.0+ · watchOS 3.0+

The localized text that provides the notification’s main content.

## Declaration

```swift
var body: String { get set }
```

<a id="Discussion"></a>

## Discussion

Use this property to specify the body of the notification alert. If your app isn’t authorized to display alert-based notifications, the system ignores this property.

The body text should contain the final text that you want to display, and shouldn’t contain any placeholder characters. To include a percent symbol (`%`) in the message body, use two percent symbols (`%%`). The system strips all other printf style escape characters from your string prior to display.

## See Also

### Providing the primary content

- [title](title.md): The localized text that provides the notification’s primary description.
- [subtitle](subtitle.md): The localized text that provides the notification’s secondary description.

# body (Objective-C)

**Framework:** User Notifications  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · visionOS 1.0+ · watchOS 3.0+

The localized text that provides the notification’s main content.

## Declaration

```objectivec
@property (nonatomic, copy, readwrite) NSString * body;
```

```objectivec
@property (atomic, copy, readwrite) NSString * body;
```

<a id="Discussion"></a>

## Discussion

Use this property to specify the body of the notification alert. If your app isn’t authorized to display alert-based notifications, the system ignores this property.

The body text should contain the final text that you want to display, and shouldn’t contain any placeholder characters. To include a percent symbol (`%`) in the message body, use two percent symbols (`%%`). The system strips all other printf style escape characters from your string prior to display.

## See Also

### Providing the primary content

- [title](title.md): The localized text that provides the notification’s primary description.
- [subtitle](subtitle.md): The localized text that provides the notification’s secondary description.
