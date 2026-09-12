> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usernotifications/unnotificationcontent/body](https://developer.apple.com/documentation/usernotifications/unnotificationcontent/body)

# body (Swift)

**Framework:** User Notifications  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · visionOS 1.0+ · watchOS 3.0+

The localized text that provides the notification’s main content.

## Declaration

```swift
var body: String { get }
```

<a id="Discussion"></a>

## Discussion

The body text contains the final text that you want to display. If your app isn’t authorized to display alert-based notifications, the system ignores this property.

If you specified two percent symbols (`%%`) in the message body, the system replaces it with a single percent symbol (`%`). The system strips all other printf style escape characters from your string prior to display.

## See Also

### Accessing the primary content

- [title](title.md): The localized text that provides the notification’s primary description.
- [subtitle](subtitle.md): The localized text that provides the notification’s secondary description.

# body (Objective-C)

**Framework:** User Notifications  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · visionOS 1.0+ · watchOS 3.0+

The localized text that provides the notification’s main content.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSString * body;
```

```objectivec
@property (atomic, copy, readonly) NSString * body;
```

<a id="Discussion"></a>

## Discussion

The body text contains the final text that you want to display. If your app isn’t authorized to display alert-based notifications, the system ignores this property.

If you specified two percent symbols (`%%`) in the message body, the system replaces it with a single percent symbol (`%`). The system strips all other printf style escape characters from your string prior to display.

## See Also

### Accessing the primary content

- [title](title.md): The localized text that provides the notification’s primary description.
- [subtitle](subtitle.md): The localized text that provides the notification’s secondary description.
