> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/groupactivities/groupactivitymetadata/fallbackurl](https://developer.apple.com/documentation/groupactivities/groupactivitymetadata/fallbackurl)

# fallbackURL

**Framework:** Group Activities  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

A URL that offers participants a way to identify or join the activity from a web browser.

## Declaration

```swift
var fallbackURL: URL?
```

<a id="discussion"></a>

## Discussion

Use this property to provide fallback behavior for users who don’t have your app installed on their device. For example, if your app runs only on iOS, use this property to supply activity-related information for users on a Mac. When your app isn’t available, the system opens the specified URL in Safari.

> **Important**

> Make sure that the URL in this property eventually leads to a webpage with the same content as the activity. Safari automatically synchronizes media playback for listen-together and watch-together experiences.

## See Also

### Presenting the activity

- [title](title.md): The localized string to display as the title of your activity.
- [subtitle](subtitle.md): The localized string that provides additional information about the activity.
- [previewImage](previewimage.md): The image to display for the current activity.
