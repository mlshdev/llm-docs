> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/activitykit/activity/request(attributes:contentstate:pushtype:)](https://developer.apple.com/documentation/activitykit/activity/request(attributes:contentstate:pushtype:))

# request(attributes:contentState:pushType:)

**Framework:** ActivityKit  
**Kind:** Type Method  
**Availability:** iOS 16.1+ (deprecated in 16.2) · iPadOS 16.1+ (deprecated in 16.2)

Requests and starts a Live Activity.

> Use request(attributes:content:pushType:) instead

## Declaration

```swift
static func request(attributes: Attributes, contentState: Activity<Attributes>.ContentState, pushType: PushType? = nil) throws -> Activity<Attributes>
```

## Parameters

- `attributes`: A set of attributes that describe the Live Activity and its static content.
- `contentState`: A structure that describes the dynamic content of the Live Activity that changes over time.
- `pushType`: A value that indicates whether the Live Activity receives updates to its dynamic content with ActivityKit push notifications. Pass `nil` to start a Live Activity that only receives updates from the app with the [update(\_:)](update%28__%29.md) function. To start a Live Activity that receives updates to its dynamic content with ActivityKit push notifications in addition to the [update(\_:)](update%28__%29.md) function, pass [token](../pushtype/token.md) to this parameter.

<a id="return-value"></a>

## Return Value

The object that represents the started Live Activity.

<a id="discussion"></a>

## Discussion

Use this function to request and start a Live Activity from your app while it’s in the foreground. Note that you can’t do this while your app is in the background, unless you adopt [App Intents](https://developer.apple.com/documentation/appintents) and start the Live Activity using a [LiveActivityIntent](https://developer.apple.com/documentation/appintents/liveactivityintent).

If your Live Activity displays image assets, the system requires them to use a resolution that’s smaller or equal to the size of the Live Activity presentation for a device. If you use an image asset that’s larger than the size of the Live Activity presentation, the system may fail to start the Live Activity. For information about the sizes of Live Activity presentations, see [Human Interface Guidelines \> Live Activities](https://developer.apple.com/design/human-interface-guidelines/components/system-experiences/live-activities).

For additional information on starting a Live Activity, see [Displaying live data with Live Activities](../displaying-live-data-with-live-activities.md).

> **Throws**

> [ActivityAuthorizationError](../activityauthorizationerror.md) if the app can’t start a new Live Activity. For example, [ActivityAuthorizationError.denied](../activityauthorizationerror/denied.md) indicates that a person deactivated Live Activities for the app.

## See Also

### Deprecated

- [update(using:)](update%28using_%29.md): Deprecated. Updates the dynamic content of the Live Activity.
- [update(using:alertConfiguration:)](update%28using_alertconfiguration_%29.md): Deprecated. Updates the dynamic content of a Live Activity and alerts a person about the Live Activity update.
- [end(using:dismissalPolicy:)](end%28using_dismissalpolicy_%29.md): Deprecated. Ends an active Live Activity.
- [contentState](contentstate-swift.property.md): Deprecated. The dynamic content of a Live Activity.
- [contentStateUpdates](contentstateupdates-swift.property.md): Deprecated. An asynchronous sequence you use to observe changes to the dynamic content of a Live Activity.
- [Activity.ContentStateUpdates](contentstateupdates-swift.struct.md): Deprecated. Conforms when `Attributes` conforms to `ActivityAttributes`. A structure that offers functionality to observe changes to the dynamic content of a Live Activity.
