> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/activitykit/activity/request(attributes:content:pushtype:style:)](https://developer.apple.com/documentation/activitykit/activity/request(attributes:content:pushtype:style:))

# request(attributes:content:pushType:style:)

**Framework:** ActivityKit  
**Kind:** Type Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+

Requests and starts a Live Activity.

## Declaration

```swift
static func request(attributes: Attributes, content: ActivityContent<Activity<Attributes>.ContentState>, pushType: PushType? = nil, style: ActivityStyle) throws -> Activity<Attributes>
```

## Parameters

- `attributes`: A set of attributes that describe the Live Activity and its static content.
- `content`: A structure that describes the dynamic content of the Live Activity that changes over time.
- `pushType`: A value that indicates whether the Live Activity receives updates to its dynamic content with ActivityKit push notifications. Pass `nil` to start a Live Activity that only receives updates from the app with the [update(\_:)](update%28__%29.md) function. To start a Live Activity that receives updates to its dynamic content with ActivityKit push notifications in addition to the [update(\_:)](update%28__%29.md) function, pass [token](../pushtype/token.md) to this parameter.
- `style`: A flag that indicates whether the Live Activity uses standard or transient behavior. For most apps, passing [ActivityStyle.standard](../activitystyle/standard.md) is the best choice. It starts a standard Live Activity that continues until the app, a push notification, or a person ends it, or until it exceeds the maximum duration for Live Activities. By passing [ActivityStyle.transient](../activitystyle/transient.md), you start a Live Activity that appears in the extended presentation in the Dynamic Island but ends automatically when a person automatically locks the device, collapses the extended presentation, leaves the app, or performs other tasks outside the Dynamic Island.

<a id="return-value"></a>

## Return Value

The object that represents the Live Activity you started.

## Mentioned In

- [Displaying live data with Live Activities](../displaying-live-data-with-live-activities.md)

<a id="discussion"></a>

## Discussion

Use this function to request and start a Live Activity from your app while it’s in the foreground. Note that you can’t do this while your app is in the background, unless you adopt [App Intents](https://developer.apple.com/documentation/appintents) and start the Live Activity using a [LiveActivityIntent](https://developer.apple.com/documentation/appintents/liveactivityintent).

If your Live Activity displays image assets, the system requires them to use a resolution that’s smaller or equal to the size of the Live Activity presentation for a device. If you use an image asset that’s larger than the size of the Live Activity presentation, the system may fail to start the Live Activity. For information about the sizes of Live Activity presentations, see [Human Interface Guidelines \> Live Activities](https://developer.apple.com/design/human-interface-guidelines/components/system-experiences/live-activities).

For additional information on starting a Live Activity, see [Displaying live data with Live Activities](../displaying-live-data-with-live-activities.md).

> **Throws**

> [ActivityAuthorizationError](../activityauthorizationerror.md) if the app can’t start a new Live Activity. For example, [ActivityAuthorizationError.denied](../activityauthorizationerror/denied.md) indicates that the person deactivated Live Activities for the app.

## See Also

### Starting a Live Activity

- [request(attributes:content:pushType:)](request%28attributes_content_pushtype_%29.md): Requests and starts a standard Live Activity.
- [request(attributes:content:pushType:style:alertConfiguration:start:)](request%28attributes_content_pushtype_style_alertconfiguration_start_%29.md): Requests and schedules a Live Activity for a specific date.
- [request(attributes:content:pushType:style:alertConfiguration:startDate:)](request%28attributes_content_pushtype_style_alertconfiguration_startdate_%29.md): Deprecated.
- [attributes](attributes.md): A set of attributes that describe a Live Activity and its content.
- [ActivityAttributes](../activityattributes.md): The protocol you implement to describe the content of a Live Activity.
- [ActivityStyle](../activitystyle.md)
- [content](content.md): The dynamic content of a Live Activity.
- [ActivityContent](../activitycontent.md): A structure that describes the state and configuration of a Live Activity.
- [Activity.ContentState](contentstate-swift.typealias.md): The type alias for the structure that describes the dynamic content of a Live Activity.
- [PushType](../pushtype.md): The structure that offers constants you use to configure a Live Activity to receive updates through ActivityKit push notifications.
- [ActivityAuthorizationError](../activityauthorizationerror.md): An error that indicates why the request to start a Live Activity failed.
