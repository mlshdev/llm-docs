> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/activitykit/activity/contentstate-swift.typealias](https://developer.apple.com/documentation/activitykit/activity/contentstate-swift.typealias)

# Activity.ContentState

**Framework:** ActivityKit  
**Kind:** Type Alias  
**Availability:** iOS 16.1+ · iPadOS 16.1+

The type alias for the structure that describes the dynamic content of a Live Activity.

## Declaration

```swift
typealias ContentState = Attributes.ContentState
```

## Mentioned In

- [Displaying live data with Live Activities](../displaying-live-data-with-live-activities.md)
- [Starting and updating Live Activities with ActivityKit push notifications](../starting-and-updating-live-activities-with-activitykit-push-notifications.md)

## See Also

### Starting a Live Activity

- [request(attributes:content:pushType:)](request%28attributes_content_pushtype_%29.md): Requests and starts a standard Live Activity.
- [request(attributes:content:pushType:style:)](request%28attributes_content_pushtype_style_%29.md): Requests and starts a Live Activity.
- [request(attributes:content:pushType:style:alertConfiguration:start:)](request%28attributes_content_pushtype_style_alertconfiguration_start_%29.md): Requests and schedules a Live Activity for a specific date.
- [request(attributes:content:pushType:style:alertConfiguration:startDate:)](request%28attributes_content_pushtype_style_alertconfiguration_startdate_%29.md): Deprecated.
- [attributes](attributes.md): A set of attributes that describe a Live Activity and its content.
- [ActivityAttributes](../activityattributes.md): The protocol you implement to describe the content of a Live Activity.
- [ActivityStyle](../activitystyle.md)
- [content](content.md): The dynamic content of a Live Activity.
- [ActivityContent](../activitycontent.md): A structure that describes the state and configuration of a Live Activity.
- [PushType](../pushtype.md): The structure that offers constants you use to configure a Live Activity to receive updates through ActivityKit push notifications.
- [ActivityAuthorizationError](../activityauthorizationerror.md): An error that indicates why the request to start a Live Activity failed.
