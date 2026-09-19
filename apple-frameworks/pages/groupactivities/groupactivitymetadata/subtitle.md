> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/groupactivities/groupactivitymetadata/subtitle

# subtitle

**Framework:** Group Activities  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

The localized string that provides additional information about the activity.

## Declaration

```swift
var subtitle: String?
```

<a id="discussion"></a>

## Discussion

Use this string to provide additional descriptive information about the activity. For example, specify the season and episode information for a television-watching activity. Localize the string for the current device. The system displays this string along with the title in the system UI.

## See Also

### Presenting the activity

- [title](title.md): The localized string to display as the title of your activity.
- [previewImage](previewimage.md): The image to display for the current activity.
- [fallbackURL](fallbackurl.md): A URL that offers participants a way to identify or join the activity from a web browser.
