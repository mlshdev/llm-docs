> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/activitykit/activity/contentstate-swift.property](https://developer.apple.com/documentation/activitykit/activity/contentstate-swift.property)

# contentState

**Framework:** ActivityKit  
**Kind:** Instance Property  
**Availability:** iOS 16.1+ (deprecated in 16.2) · iPadOS 16.1+ (deprecated in 16.2)

The dynamic content of a Live Activity.

> Use \`content\` instead

## Declaration

```swift
var contentState: Activity<Attributes>.ContentState { get }
```

## See Also

### Deprecated

- [request(attributes:contentState:pushType:)](request%28attributes_contentstate_pushtype_%29.md): Deprecated. Requests and starts a Live Activity.
- [update(using:)](update%28using_%29.md): Deprecated. Updates the dynamic content of the Live Activity.
- [update(using:alertConfiguration:)](update%28using_alertconfiguration_%29.md): Deprecated. Updates the dynamic content of a Live Activity and alerts a person about the Live Activity update.
- [end(using:dismissalPolicy:)](end%28using_dismissalpolicy_%29.md): Deprecated. Ends an active Live Activity.
- [contentStateUpdates](contentstateupdates-swift.property.md): Deprecated. An asynchronous sequence you use to observe changes to the dynamic content of a Live Activity.
- [Activity.ContentStateUpdates](contentstateupdates-swift.struct.md): Deprecated. Conforms when `Attributes` conforms to `ActivityAttributes`. A structure that offers functionality to observe changes to the dynamic content of a Live Activity.
