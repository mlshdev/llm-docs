> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/groupactivities/groupactivitymetadata/previewimage](https://developer.apple.com/documentation/groupactivities/groupactivitymetadata/previewimage)

# previewImage

**Framework:** Group Activities  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

The image to display for the current activity.

## Declaration

```swift
var previewImage: CGImage?
```

<a id="discussion"></a>

## Discussion

Use this property to specify an image for the activity. For example, you might display a movie poster for a movie-watching activity. The system scales the image as needed and displays it with the rest of the activity information.

## See Also

### Presenting the activity

- [title](title.md): The localized string to display as the title of your activity.
- [subtitle](subtitle.md): The localized string that provides additional information about the activity.
- [fallbackURL](fallbackurl.md): A URL that offers participants a way to identify or join the activity from a web browser.
