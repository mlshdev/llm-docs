> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/activitykit/activitycontent](https://developer.apple.com/documentation/activitykit/activitycontent)

# ActivityContent

**Framework:** ActivityKit  
**Kind:** Structure  
**Availability:** iOS 16.2+ · iPadOS 16.2+

A structure that describes the state and configuration of a Live Activity.

## Declaration

```swift
struct ActivityContent<State> where State : Decodable, State : Encodable, State : Hashable
```

## Mentioned In

- [Displaying live data with Live Activities](displaying-live-data-with-live-activities.md)

## Topics

### Describing a Live Activity

- [init(state:staleDate:relevanceScore:)](activitycontent/init%28state_staledate_relevancescore_%29.md): Creates the object that describes the state and configuration of a Live Activity.
- [state](activitycontent/state.md): The current state of a Live Activity in its life cycle.
- [staleDate](activitycontent/staledate.md): The date when the system considers the Live Activity to be out of date.
- [relevanceScore](activitycontent/relevancescore.md): A score you assign that determines the order in which your Live Activities appear when you start several Live Activities for your app.

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Starting a Live Activity

- [request(attributes:content:pushType:)](activity/request%28attributes_content_pushtype_%29.md): Requests and starts a standard Live Activity.
- [request(attributes:content:pushType:style:)](activity/request%28attributes_content_pushtype_style_%29.md): Requests and starts a Live Activity.
- [request(attributes:content:pushType:style:alertConfiguration:start:)](activity/request%28attributes_content_pushtype_style_alertconfiguration_start_%29.md): Requests and schedules a Live Activity for a specific date.
- [request(attributes:content:pushType:style:alertConfiguration:startDate:)](activity/request%28attributes_content_pushtype_style_alertconfiguration_startdate_%29.md): Deprecated.
- [attributes](activity/attributes.md): A set of attributes that describe a Live Activity and its content.
- [ActivityAttributes](activityattributes.md): The protocol you implement to describe the content of a Live Activity.
- [ActivityStyle](activitystyle.md)
- [content](activity/content.md): The dynamic content of a Live Activity.
- [Activity.ContentState](activity/contentstate-swift.typealias.md): The type alias for the structure that describes the dynamic content of a Live Activity.
- [PushType](pushtype.md): The structure that offers constants you use to configure a Live Activity to receive updates through ActivityKit push notifications.
- [ActivityAuthorizationError](activityauthorizationerror.md): An error that indicates why the request to start a Live Activity failed.
