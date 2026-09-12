> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/activitykit/activity/update(using:alertconfiguration:)](https://developer.apple.com/documentation/activitykit/activity/update(using:alertconfiguration:))

# update(using:alertConfiguration:)

**Framework:** ActivityKit  
**Kind:** Instance Method  
**Availability:** iOS 16.1+ (deprecated in 16.2) · iPadOS 16.1+ (deprecated in 16.2)

Updates the dynamic content of a Live Activity and alerts a person about the Live Activity update.

> Use update(\_:alertConfiguration:) instead

## Declaration

```swift
func update(using contentState: Activity<Attributes>.ContentState, alertConfiguration: AlertConfiguration? = nil) async
```

## Parameters

- `contentState`: The updated dynamic content for the Live Activity. The size of the encoded content can’t exceed 4KB in size.
- `alertConfiguration`: The alert configuration you use to configure how the system notifies a person about the updated content of the Live Activity.

<a id="discussion"></a>

## Discussion

The system ignores updates to a Live Activity that’s in the [ActivityState.ended](../activitystate/ended.md) state.

## See Also

### Deprecated

- [request(attributes:contentState:pushType:)](request%28attributes_contentstate_pushtype_%29.md): Deprecated. Requests and starts a Live Activity.
- [update(using:)](update%28using_%29.md): Deprecated. Updates the dynamic content of the Live Activity.
- [end(using:dismissalPolicy:)](end%28using_dismissalpolicy_%29.md): Deprecated. Ends an active Live Activity.
- [contentState](contentstate-swift.property.md): Deprecated. The dynamic content of a Live Activity.
- [contentStateUpdates](contentstateupdates-swift.property.md): Deprecated. An asynchronous sequence you use to observe changes to the dynamic content of a Live Activity.
- [Activity.ContentStateUpdates](contentstateupdates-swift.struct.md): Deprecated. Conforms when `Attributes` conforms to `ActivityAttributes`. A structure that offers functionality to observe changes to the dynamic content of a Live Activity.
