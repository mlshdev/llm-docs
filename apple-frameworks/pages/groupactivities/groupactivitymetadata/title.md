> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/groupactivities/groupactivitymetadata/title](https://developer.apple.com/documentation/groupactivities/groupactivitymetadata/title)

# title

**Framework:** Group Activities  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

The localized string to display as the title of your activity.

## Declaration

```swift
var title: String?
```

<a id="discussion"></a>

## Discussion

Use this string as the main description of the activity, and localize it for the current device. The system displays this string prominently when it presents the activity to the participant.

## See Also

### Presenting the activity

- [subtitle](subtitle.md): The localized string that provides additional information about the activity.
- [previewImage](previewimage.md): The image to display for the current activity.
- [fallbackURL](fallbackurl.md): A URL that offers participants a way to identify or join the activity from a web browser.
