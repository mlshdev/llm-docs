> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usernotifications/unmutablenotificationcontent/title](https://developer.apple.com/documentation/usernotifications/unmutablenotificationcontent/title)

# title (Swift)

**Framework:** User Notifications  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · visionOS 1.0+ · watchOS 3.0+

The localized text that provides the notification’s primary description.

## Declaration

```swift
var title: String { get set }
```

<a id="Discussion"></a>

## Discussion

Use this property to specify the title of your notification alert. If your app isn’t authorized to display alert-based notifications, the system ignores this property.

Title strings should be short, usually only a couple of words describing the reason for the notification. In watchOS, the system displays the title string as part of the short look notification interface, which has limited space.

## See Also

### Providing the primary content

- [subtitle](subtitle.md): The localized text that provides the notification’s secondary description.
- [body](body.md): The localized text that provides the notification’s main content.

# title (Objective-C)

**Framework:** User Notifications  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · visionOS 1.0+ · watchOS 3.0+

The localized text that provides the notification’s primary description.

## Declaration

```objectivec
@property (nonatomic, copy, readwrite) NSString * title;
```

```objectivec
@property (atomic, copy, readwrite) NSString * title;
```

<a id="Discussion"></a>

## Discussion

Use this property to specify the title of your notification alert. If your app isn’t authorized to display alert-based notifications, the system ignores this property.

Title strings should be short, usually only a couple of words describing the reason for the notification. In watchOS, the system displays the title string as part of the short look notification interface, which has limited space.

## See Also

### Providing the primary content

- [subtitle](subtitle.md): The localized text that provides the notification’s secondary description.
- [body](body.md): The localized text that provides the notification’s main content.
