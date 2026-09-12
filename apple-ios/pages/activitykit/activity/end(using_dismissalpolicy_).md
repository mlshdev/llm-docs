> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/activitykit/activity/end(using:dismissalpolicy:)](https://developer.apple.com/documentation/activitykit/activity/end(using:dismissalpolicy:))

# end(using:dismissalPolicy:)

**Framework:** ActivityKit  
**Kind:** Instance Method  
**Availability:** iOS 16.1+ (deprecated in 16.2) · iPadOS 16.1+ (deprecated in 16.2)

Ends an active Live Activity.

> Use end(content:dismissalPolicy:) instead

## Declaration

```swift
func end(using contentState: Activity<Attributes>.ContentState? = nil, dismissalPolicy: ActivityUIDismissalPolicy = .default) async
```

## Parameters

- `contentState`: The latest and final dynamic content for the Live Activity that ended. The size of the encoded content can’t exceed 4KB in size.
- `dismissalPolicy`: Describes how and when the system should dismiss a Live Activity and and remove it from the Lock Screen.

<a id="discussion"></a>

## Discussion

End an active Live Activity while your app is in the foreground or while it’s in the background — for example, by using [Background Tasks](https://developer.apple.com/documentation/backgroundtasks).

Include updated data in the `contentState` parameter to ensure the Live Activity shows the latest and final content update after it ends. This is important because the Live Activity remains visible until the system or the person removes it.

## See Also

### Deprecated

- [request(attributes:contentState:pushType:)](request%28attributes_contentstate_pushtype_%29.md): Deprecated. Requests and starts a Live Activity.
- [update(using:)](update%28using_%29.md): Deprecated. Updates the dynamic content of the Live Activity.
- [update(using:alertConfiguration:)](update%28using_alertconfiguration_%29.md): Deprecated. Updates the dynamic content of a Live Activity and alerts a person about the Live Activity update.
- [contentState](contentstate-swift.property.md): Deprecated. The dynamic content of a Live Activity.
- [contentStateUpdates](contentstateupdates-swift.property.md): Deprecated. An asynchronous sequence you use to observe changes to the dynamic content of a Live Activity.
- [Activity.ContentStateUpdates](contentstateupdates-swift.struct.md): Deprecated. Conforms when `Attributes` conforms to `ActivityAttributes`. A structure that offers functionality to observe changes to the dynamic content of a Live Activity.
