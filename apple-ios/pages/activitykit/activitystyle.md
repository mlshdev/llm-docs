> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/activitykit/activitystyle](https://developer.apple.com/documentation/activitykit/activitystyle)

# ActivityStyle

**Framework:** ActivityKit  
**Kind:** Enumeration  
**Availability:** iOS 16.1+ · iPadOS 16.1+

## Declaration

```swift
enum ActivityStyle
```

## Topics

### Style

- [ActivityStyle.standard](activitystyle/standard.md)
- [ActivityStyle.transient](activitystyle/transient.md)

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)

## See Also

### Starting a Live Activity

- [request(attributes:content:pushType:)](activity/request%28attributes_content_pushtype_%29.md): Requests and starts a standard Live Activity.
- [request(attributes:content:pushType:style:)](activity/request%28attributes_content_pushtype_style_%29.md): Requests and starts a Live Activity.
- [request(attributes:content:pushType:style:alertConfiguration:start:)](activity/request%28attributes_content_pushtype_style_alertconfiguration_start_%29.md): Requests and schedules a Live Activity for a specific date.
- [request(attributes:content:pushType:style:alertConfiguration:startDate:)](activity/request%28attributes_content_pushtype_style_alertconfiguration_startdate_%29.md): Deprecated.
- [attributes](activity/attributes.md): A set of attributes that describe a Live Activity and its content.
- [ActivityAttributes](activityattributes.md): The protocol you implement to describe the content of a Live Activity.
- [content](activity/content.md): The dynamic content of a Live Activity.
- [ActivityContent](activitycontent.md): A structure that describes the state and configuration of a Live Activity.
- [Activity.ContentState](activity/contentstate-swift.typealias.md): The type alias for the structure that describes the dynamic content of a Live Activity.
- [PushType](pushtype.md): The structure that offers constants you use to configure a Live Activity to receive updates through ActivityKit push notifications.
- [ActivityAuthorizationError](activityauthorizationerror.md): An error that indicates why the request to start a Live Activity failed.
