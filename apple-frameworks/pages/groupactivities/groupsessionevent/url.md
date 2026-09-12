> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/groupactivities/groupsessionevent/url](https://developer.apple.com/documentation/groupactivities/groupsessionevent/url)

# url

**Framework:** Group Activities  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

The URL to open when the participant taps the event link in the system UI.

## Declaration

```swift
let url: URL?
```

<a id="discussion"></a>

## Discussion

When the user taps your custom event in the system UI, the system opens the provided URL. Specify a universal link to open your app to the place where the action occurred. If the value of this link is `nil`, the system brings your app to the foreground.

For information about how to support universal links in your app, see [Supporting universal links in your app](https://developer.apple.com/documentation/xcode/supporting-universal-links-in-your-app)

## See Also

### Getting the event details

- [originator](originator.md): The participant that initiated the event.
- [action](action-swift.property.md): The reason for the event.
- [GroupSessionEvent.Action](action-swift.struct.md): A playback-related change that occurs during the session.
