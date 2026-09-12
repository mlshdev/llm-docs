> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/activitykit/activity/update(using:)](https://developer.apple.com/documentation/activitykit/activity/update(using:))

# update(using:)

**Framework:** ActivityKit  
**Kind:** Instance Method  
**Availability:** iOS 16.1+ (deprecated in 16.2) · iPadOS 16.1+ (deprecated in 16.2)

Updates the dynamic content of the Live Activity.

> Use update(\_:) instead

## Declaration

```swift
func update(using contentState: Activity<Attributes>.ContentState) async
```

## Parameters

- `contentState`: The updated dynamic content for the Live Activity. The size of the encoded content can’t exceed 4KB in size.

<a id="discussion"></a>

## Discussion

Use this function to update the Live Activity while your app is in the foreground or while it’s in the background — for example, by using [Background Tasks](https://developer.apple.com/documentation/backgroundtasks).

> **Note**

> The system ignores attempts to update a Live Activity that ended.

## See Also

### Deprecated

- [request(attributes:contentState:pushType:)](request%28attributes_contentstate_pushtype_%29.md): Deprecated. Requests and starts a Live Activity.
- [update(using:alertConfiguration:)](update%28using_alertconfiguration_%29.md): Deprecated. Updates the dynamic content of a Live Activity and alerts a person about the Live Activity update.
- [end(using:dismissalPolicy:)](end%28using_dismissalpolicy_%29.md): Deprecated. Ends an active Live Activity.
- [contentState](contentstate-swift.property.md): Deprecated. The dynamic content of a Live Activity.
- [contentStateUpdates](contentstateupdates-swift.property.md): Deprecated. An asynchronous sequence you use to observe changes to the dynamic content of a Live Activity.
- [Activity.ContentStateUpdates](contentstateupdates-swift.struct.md): Deprecated. Conforms when `Attributes` conforms to `ActivityAttributes`. A structure that offers functionality to observe changes to the dynamic content of a Live Activity.
